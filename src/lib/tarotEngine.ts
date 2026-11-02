import { TAROT_CARDS } from '@/data/tarotCards';
import { getSpreadById } from '@/data/spreads';
import {
  CardQuestionAnalysis,
  DirectQuestionVerdict,
  DrawnCard,
  ReadingResult,
  SpreadType,
  TarotCard
} from '@/types/tarot';

/**
 * Fisher-Yates high entropy shuffle
 */
export function shuffleDeck(cards: TarotCard[]): TarotCard[] {
  const deck = [...cards];
  for (let i = deck.length - 1; i > 0; i--) {
    let j: number;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const arr = new Uint32Array(1);
      window.crypto.getRandomValues(arr);
      j = arr[0] % (i + 1);
    } else {
      j = Math.floor(Math.random() * (i + 1));
    }
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

/**
 * Draw cards for a chosen spread
 */
export function drawCardsForSpread(
  spreadType: SpreadType,
  allowReversed: boolean = true,
  chosenCardIds?: string[]
): DrawnCard[] {
  const config = getSpreadById(spreadType);
  const count = config.cardCount;
  
  let selectedCards: TarotCard[] = [];
  
  if (chosenCardIds && chosenCardIds.length >= count) {
    selectedCards = chosenCardIds
      .slice(0, count)
      .map((id) => TAROT_CARDS.find((c) => c.id === id)!)
      .filter(Boolean);
  } else {
    const shuffled = shuffleDeck(TAROT_CARDS);
    selectedCards = shuffled.slice(0, count);
  }

  return selectedCards.map((card, idx) => {
    const isReversed = allowReversed ? Math.random() < 0.35 : false;
    return {
      card,
      isReversed,
      position: config.positions[idx] || {
        index: idx,
        name: `Card ${idx + 1}`,
        nameVi: `Lá ${idx + 1}`,
        descriptionVi: 'Vị trí trong trải bài'
      }
    };
  });
}

/**
 * Intelligent Question Analysis & Verdict Generator
 * Directly analyzes the user's written question and produces an unambiguous,
 * deeply tailored answer based on the drawn cards.
 */
function generateDirectQuestionVerdict(
  question: string,
  topic: string,
  drawnCards: DrawnCard[]
): DirectQuestionVerdict {
  const qClean = (question || '').trim();
  const qLower = qClean.toLowerCase();
  const tLower = (topic || '').toLowerCase();

  // 1. Calculate spread positive/challenging weight
  let positiveScore = 0;
  let challengeScore = 0;

  const challengingCards = [
    'the-tower', 'death', 'the-devil', 'three-of-swords', 'ten-of-swords',
    'five-of-swords', 'nine-of-swords', 'five-of-pentacles', 'eight-of-cups'
  ];
  const highlyPositiveCards = [
    'the-sun', 'the-star', 'the-world', 'the-empress', 'the-magician',
    'ace-of-cups', 'ten-of-cups', 'three-of-cups', 'ace-of-pentacles',
    'ten-of-pentacles', 'four-of-wands', 'six-of-wands'
  ];

  drawnCards.forEach((dc) => {
    if (dc.isReversed) {
      challengeScore += 1.5;
    } else {
      positiveScore += 1.2;
    }

    if (highlyPositiveCards.includes(dc.card.id)) {
      if (!dc.isReversed) positiveScore += 2.5;
      else positiveScore += 0.5;
    }
    if (challengingCards.includes(dc.card.id)) {
      if (!dc.isReversed) challengeScore += 2.5;
      else challengeScore += 1.5;
    }
    if (dc.card.arcana === 'major') {
      positiveScore += 0.5;
    }
  });

  const totalScore = positiveScore + challengeScore;
  const favorablePercent = Math.min(95, Math.max(15, Math.round((positiveScore / (totalScore || 1)) * 100)));

  // 2. Identify question nature
  const isDecision = qLower.includes('có nên') || qLower.includes('nên hay') || qLower.includes('chọn') || qLower.includes('được không') || qLower.includes('liệu có') || qLower.includes('thành công không');
  const isLove = qLower.includes('người yêu') || qLower.includes('tình cảm') || qLower.includes('quay lại') || qLower.includes('chia tay') || qLower.includes('crush') || qLower.includes('kết hôn') || tLower.includes('tình');
  const isCareer = qLower.includes('công việc') || qLower.includes('chuyển việc') || qLower.includes('xin việc') || qLower.includes('thăng tiến') || qLower.includes('sếp') || qLower.includes('công ty') || tLower.includes('công') || tLower.includes('sự nghiệp');
  const isFinance = qLower.includes('tiền') || qLower.includes('tài chính') || qLower.includes('đầu tư') || qLower.includes('bất động sản') || qLower.includes('chứng khoán') || qLower.includes('nợ') || tLower.includes('tài');

  const outcomeCard = drawnCards[drawnCards.length - 1];
  const leadCard = drawnCards[0];
  const leadCardName = `${leadCard.card.nameVi} (${leadCard.isReversed ? 'chiều Ngược' : 'chiều Xuôi'})`;
  const outcomeCardName = `${outcomeCard.card.nameVi} (${outcomeCard.isReversed ? 'chiều Ngược' : 'chiều Xuôi'})`;

  let verdict = '';
  let confidenceLevel = '';
  let signalColor: 'green' | 'yellow' | 'red' = 'green';
  let signalLabel = '';
  let coreReason = '';
  let keyDecision = '';
  let whatToAvoid = '';
  let timingAdvice = '';

  if (favorablePercent >= 65) {
    confidenceLevel = 'Rất Thuận Lợi';
    signalColor = 'green';
    signalLabel = 'Tín Hiệu Đèn Xanh: Thuận Lợi Tối Đa';

    if (isDecision) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: NÊN TIẾN HÀNH (Xác suất thuận lợi ~${favorablePercent}%)`;
      coreReason = `Năng lượng bảo hộ từ lá ${outcomeCardName} chỉ ra rằng hành động dứt khoát lúc này sẽ mang lại kết quả vượt kỳ vọng. Hoàn cảnh xung quanh đang ủng hộ bước đi của bạn.`;
      keyDecision = `Hãy dũng cảm hiện thực hóa kế hoạch đã ấp ủ, đừng để sự chần chừ làm trôi qua thời cơ tốt.`;
    } else if (isLove) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: TÍN HIỆU RẤT TÍCH CỰC & GẮN KẾT (~${favorablePercent}%)`;
      coreReason = `Năng lượng cảm xúc chân thành đang hội tụ mạnh mẽ. Người ấy có thiện chí và sự quan tâm sâu sắc dành cho bạn.`;
      keyDecision = `Hãy cởi mở bày tỏ cảm xúc chân thật, chủ động kết nối để phá vỡ khoảng cách.`;
    } else if (isCareer) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CƠ HỘI ĐỘT PHÁ & THĂNG TIẾN RÕ RỆT (~${favorablePercent}%)`;
      coreReason = `Nỗ lực và tài năng của bạn đang chuẩn bị gặt hái trái ngọt. Môi trường mới hoặc dự án mới sẽ mở ra chân trời phát triển vượt bậc.`;
      keyDecision = `Tập trung hoàn thiện kỹ năng chuyên môn và nắm bắt cơ hội dẫn đầu khi nó xuất hiện.`;
    } else if (isFinance) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CƠ HỘI SINH LỜI KHẢ QUAN (~${favorablePercent}%)`;
      coreReason = `Dòng tiền và tiềm năng tài chính đang mở rộng theo chiều hướng đi lên vững chắc.`;
      keyDecision = `Có thể cân nhắc giải ngân hoặc mở rộng kinh doanh dựa trên kế hoạch chi tiết.`;
    } else {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: THUẬN LỢI & HANH THÔNG (~${favorablePercent}%)`;
      coreReason = `Vũ trụ gửi tín hiệu hanh thông, mọi nút thắt đang dần được tháo gỡ tự nhiên.`;
      keyDecision = `Giữ vững niềm tin, tiếp tục hành động kiên trì theo định hướng đã chọn.`;
    }

    whatToAvoid = `Tránh chần chừ, do dự quá lâu hoặc lắng nghe quá nhiều ý kiến tiêu cực từ những người ngoài cuộc không hiểu rõ bản chất vấn đề.`;
    timingAdvice = `Thời điểm vàng hành động là trong vòng 2 đến 5 tuần tới. Khi trực giác mách bảo, hãy quyết đoán bước tới.`;
  } else if (favorablePercent <= 40) {
    confidenceLevel = 'Cần Thận Trọng & Tạm Hoãn';
    signalColor = 'red';
    signalLabel = 'Tín Hiệu Đèn Đỏ: Cảnh Báo Rủi Ro Cao';

    if (isDecision) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CHƯA NÊN TIẾN HÀNH LÚC NÀY (Rủi ro tiềm ẩn ~${100 - favorablePercent}%)`;
      coreReason = `Sự xuất hiện của các lá bài cảnh báo như ${outcomeCardName} cho thấy vẫn còn những yếu tố rủi ro, góc khuất hoặc thông tin sai lệch mà bạn chưa nhìn thấy hết.`;
      keyDecision = `Hãy tạm hoãn việc đưa ra quyết định cuối cùng, dành thời gian rà soát lại toàn bộ kế hoạch và bảo vệ vị thế an toàn.`;
    } else if (isLove) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CẦN KHOẢNG LẶNG ĐỂ TỰ CHỮA LÀNH & TỰ SOI CHIẾU`;
      coreReason = `Giữa hai người đang có sự tắc nghẽn cảm xúc hoặc bất đồng quan điểm chưa được giải tỏa. Sự nóng vội thúc ép lúc này chỉ khiến mâu thuẫn thêm trầm trọng.`;
      keyDecision = `Lùi lại một bước, tôn trọng không gian riêng của đối phương và học cách chữa lành nội tâm của chính bạn trước.`;
    } else if (isCareer) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: NÊN CỦNG CỐ NỘI LỰC, TRÁNH MẠO HIỂM NHẢY VIỆC`;
      coreReason = `Môi trường mới hoặc định hướng mới tiềm ẩn nhiều áp lực và bất ổn ngoài dự tính ban đầu. Vị thế hiện tại vẫn là nơi an toàn hơn để bạn tích lũy kinh nghiệm.`;
      keyDecision = `Tập trung làm tốt công việc hiện tại, củng cố mối quan hệ đồng nghiệp và trau dồi thêm kỹ năng trước khi tìm bến đỗ mới.`;
    } else if (isFinance) {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: NGUY CƠ HAO TỔN TÀI CHÍNH – CẦN GIỮ VỐN AN TOÀN`;
      coreReason = `Thời điểm này thị trường hoặc dự án có nhiều biến động khó lường, dễ rơi vào cảnh thất thoát hoặc vướng mắc giấy tờ pháp lý.`;
      keyDecision = `Siết chặt chi tiêu, bảo toàn tiền mặt và tuyệt đối không vay mượn để đầu tư mạo hiểm.`;
    } else {
      verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CẦN THẬN TRỌNG & TẠM HOÃN HÀNH ĐỘNG`;
      coreReason = `Năng lượng xung quanh đang có sự xung đột hoặc dồn nén. Cần bình tâm quan sát thay vì phản ứng cảm tính.`;
      keyDecision = `Tĩnh tâm định hướng lại mục tiêu, tìm kiếm lời khuyên từ người có chuyên môn sâu.`;
    }

    whatToAvoid = `Tuyệt đối tránh đưa ra quyết định hệ trọng trong lúc tức giận, thất vọng hoặc khi bị thúc ép bởi người khác. Không hành động theo cảm tính.`;
    timingAdvice = `Nên đợi ít nhất 1 chu kỳ trăng (khoảng 3 đến 4 tuần) để các dữ kiện thật sự phơi bày trước khi hành động.`;
  } else {
    confidenceLevel = 'Chuyển Biến Tùy Thuộc Vào Quyết Định Của Bạn';
    signalColor = 'yellow';
    signalLabel = 'Tín Hiệu Đèn Vàng: Cần Cân Nhắc Chiến Lược';

    verdict = `CÂU TRẢ LỜI TRỌNG TÂM: CƠ HỘI & THỬ THÁCH SONG HÀNH (Khả năng thuận lợi ~${favorablePercent}%)`;
    coreReason = `Tình thế đang ở thế cân bằng động. Kết quả cuối cùng không phụ thuộc vào may rủi mà hoàn toàn phụ thuộc vào sự tỉnh táo và khả năng thích ứng của chính bạn.`;
    keyDecision = `Nếu bạn sẵn sàng dẹp bỏ thói quen cũ, lập kế hoạch chi tiết và giữ vững sự kiên định thì tình hình sẽ xoay chuyển rất tích cực.`;
    whatToAvoid = `Tránh tâm lý 'được ăn cả ngã về không'. Cần có phương án dự phòng cho mọi tình huống xấu nhất.`;
    timingAdvice = `Khoảng 4 đến 6 tuần tới sẽ là thời điểm then chốt để thử nghiệm bước đi đầu tiên.`;
  }

  // Compose direct targeted analysis
  const directAnswerSummary = `Trả lời trực diện cho câu hỏi của bạn: "${qClean}"

1. PHÁN QUYẾT RÕ RÀNG VỀ BĂN KHOĂN CỦA BẠN:
Vũ trụ thông qua các lá bài đưa ra thông điệp thẳng thắn: ${coreReason} 
Điều bạn đang trăn trở bắt nguồn từ hiện trạng được phản ánh qua lá ${leadCardName}. Bạn không nên nhìn nhận vấn đề này qua lăng kính lo âu mù quáng, mà cần tập trung vào thực tế khách quan.

2. CÁC YẾU TỐ TÁC ĐỘNG TRỰC TIẾP ĐẾN KẾT QUẢ:
Lá bài kết quả ${outcomeCardName} khẳng định: ${
    outcomeCard.isReversed
      ? `Nếu bạn tiếp tục giữ lối mòn cũ hoặc né tránh đối thoại, trở ngại sẽ kéo dài. Chỉ thị hành động: ${outcomeCard.card.reversed.advice}`
      : `Nếu bạn chủ động nắm bắt cơ hội với tâm thế tích cực, thành quả sẽ tới rất tự nhiên. Chỉ thị hành động: ${outcomeCard.card.upright.advice}`
  }

3. LỜI KHUYÊN DỨT KHOÁT:
${keyDecision}`;

  return {
    verdict,
    confidenceLevel,
    signalColor,
    signalLabel,
    coreReason,
    directAnswerSummary,
    keyDecision,
    whatToAvoid,
    timingAdvice
  };
}

/**
 * Intelligent Algorithmic Tarot Synthesis Engine
 * Synthesizes cohesive, deeply personal, and multi-layered readings.
 */
export function synthesizeReading(
  question: string,
  topic: string,
  spreadType: SpreadType,
  drawnCards: DrawnCard[]
): ReadingResult['synthesis'] {
  const cleanQ = question ? question.trim() : 'Thông điệp dành cho tôi lúc này';

  // 1. Analyze Elements & Arcana balance
  const elementCounts: Record<string, number> = { Lửa: 0, Nước: 0, Khí: 0, Đất: 0 };
  let majorCount = 0;
  let reversedCount = 0;

  drawnCards.forEach((dc) => {
    if (dc.card.arcana === 'major') majorCount++;
    if (dc.isReversed) reversedCount++;
    if (dc.card.element) {
      elementCounts[dc.card.element] = (elementCounts[dc.card.element] || 0) + 1;
    }
  });

  const totalCards = drawnCards.length;
  const majorRatio = Math.round((majorCount / totalCards) * 100);

  // Dominant element
  const dominantElement = Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0];

  let elementalSummary = '';
  if (dominantElement && dominantElement[1] > 0) {
    const elName = dominantElement[0];
    switch (elName) {
      case 'Lửa':
        elementalSummary = `Năng lượng Lửa chiếm ưu thế (${dominantElement[1]}/${totalCards} lá), biểu thị tinh thần hành động mãnh liệt, ý chí bừng cháy và sự thôi thúc thay đổi quyết liệt trong hoàn cảnh này.`;
        break;
      case 'Nước':
        elementalSummary = `Dòng chảy Nước chiếm ưu thế (${dominantElement[1]}/${totalCards} lá), báo hiệu cảm xúc, trực giác và các mối quan hệ tình cảm đang là trọng tâm cốt lõi cần được thấu hiểu và chữa lành.`;
        break;
      case 'Khí':
        elementalSummary = `Nguyên tố Khí nổi bật (${dominantElement[1]}/${totalCards} lá), cho thấy bạn đang đứng trước những thử thách trí tuệ, đòi hỏi sự thật minh bạch, giao tiếp thẳng thắn và tư duy lý trí sắc bén.`;
        break;
      case 'Đất':
        elementalSummary = `Năng lượng Đất giữ vai trò chủ đạo (${dominantElement[1]}/${totalCards} lá), nhấn mạnh vào tính thực tế, an toàn tài chính, sức khỏe thể chất và việc kiến tạo nền tảng vững chắc lâu dài.`;
        break;
    }
  }

  const arcanaNote = majorCount >= 2 
    ? ` Sự xuất hiện của ${majorCount} lá Ẩn Chính (${majorRatio}% trải bài) cho thấy đây là một bước ngoặt nghiệp quả quan trọng mang tính định hình vận mệnh lâu dài của bạn.`
    : ` Tỷ lệ bài Ẩn Phụ cao cho thấy đây là vấn đề thực tế đời thường nằm trọn trong tầm kiểm soát và sự lựa chọn hàng ngày của bạn.`;

  const fullElementalBalance = `${elementalSummary}${arcanaNote}`;

  // 2. Direct Question Verdict & Specific Alignment
  const directVerdict = generateDirectQuestionVerdict(cleanQ, topic, drawnCards);

  // 3. Card-by-Card Question Relevance Analysis
  const cardQuestionAnalyses: CardQuestionAnalysis[] = drawnCards.map((dc) => {
    const card = dc.card;
    const isRev = dc.isReversed;
    const content = isRev ? card.reversed : card.upright;
    const posName = dc.position.nameVi;

    let aspectMeaning = content.general;
    const qLower = cleanQ.toLowerCase();
    if (qLower.includes('tình') || qLower.includes('yêu') || topic.includes('Tình')) {
      aspectMeaning = content.love;
    } else if (qLower.includes('công') || qLower.includes('việc') || topic.includes('Sự nghiệp') || topic.includes('Công')) {
      aspectMeaning = content.career;
    } else if (qLower.includes('tiền') || qLower.includes('tài') || topic.includes('Tài')) {
      aspectMeaning = content.finance;
    } else if (topic.includes('Bản thân')) {
      aspectMeaning = content.personalGrowth;
    }

    const qReference = cleanQ ? `câu hỏi "${cleanQ}"` : 'vấn đề bạn đang hỏi';
    
    let directExplanation = '';
    if (isRev) {
      directExplanation = `Ứng thẳng vào ${qReference}, tại vị trí [${posName}], lá ${card.nameVi} (Ngược) cảnh báo: ${card.reversed.keyMessage}. Trở ngại chính nằm ở: ${card.reversed.blockedEnergy}. Khía cạnh liên hệ: ${aspectMeaning}`;
    } else {
      directExplanation = `Ứng thẳng vào ${qReference}, tại vị trí [${posName}], lá ${card.nameVi} (Xuôi) mang lời giải đáp: ${card.upright.keyMessage}. Điểm tựa quan trọng cho bạn: ${aspectMeaning}`;
    }

    return {
      cardId: card.id,
      cardNameVi: card.nameVi,
      isReversed: isRev,
      positionNameVi: posName,
      directAnswerToQuestion: directExplanation,
      actionStep: content.advice
    };
  });

  // 4. Formulate Overall Summary based on specific cards & positions
  let overallSummary = '';
  const firstCard = drawnCards[0];
  const lastCard = drawnCards[drawnCards.length - 1];

  const questionContext = cleanQ && cleanQ.length > 3
    ? `cho câu hỏi "${cleanQ}" (Chủ đề: ${topic})`
    : `về phương diện ${topic}`;

  if (spreadType === 'one-card') {
    const status = firstCard.isReversed ? 'ở trạng thái Ngược' : 'ở trạng thái Xuôi';
    overallSummary = `Đối diện ${questionContext}, thông điệp cốt lõi vũ trụ trao gửi đến bạn qua lá ${firstCard.card.nameVi} (${status}). Lá bài khẳng định: ${firstCard.isReversed ? firstCard.card.reversed.keyMessage : firstCard.card.upright.keyMessage} Năng lượng này mời gọi bạn hành động dứt khoát vào trọng tâm vấn đề.`;
  } else if (spreadType === 'three-card') {
    const pastCard = drawnCards[0];
    const presentCard = drawnCards[1];
    const futureCard = drawnCards[2];
    
    overallSummary = `Nhìn nhận dòng thời gian ${questionContext}, trải bài chỉ ra rằng bạn đã khởi hành từ năng lượng của ${pastCard.card.nameVi} (${pastCard.isReversed ? 'ngược' : 'xuôi'}), bước qua hiện tại được định hình bởi ${presentCard.card.nameVi} (${presentCard.isReversed ? 'ngược' : 'xuôi'}) và đang tiến tới xu hướng tương lai ${futureCard.card.nameVi} (${futureCard.isReversed ? 'ngược' : 'xuôi'}). Dòng chảy này phản ánh một tiến trình chuyển hóa rõ rệt: từ bài học quá khứ sang sự thức tỉnh nhận thức thực tại để mở lối cho tương lai đầy tiềm năng.`;
  } else if (spreadType === 'love-five') {
    overallSummary = `Trong không gian tình cảm ${questionContext}, trải bài 5 lá phản ánh thế giới nội tâm của bạn đang được dẫn dắt bởi ${firstCard.card.nameVi}. Thử thách trọng yếu cần vượt qua nằm ở lá ${drawnCards[3].card.nameVi} (${drawnCards[3].isReversed ? 'ngược' : 'xuôi'}), trong khi chìa khóa mở ra sự hòa hợp và thấu hiểu lâu dài kết tinh tại lá Lời Khuyên ${lastCard.card.nameVi}.`;
  } else if (spreadType === 'career-five') {
    overallSummary = `Trong tiến trình sự nghiệp ${questionContext}, hiện trạng của bạn được neo giữ bởi ${firstCard.card.nameVi}, điểm tựa vững chắc nhất là năng lượng từ ${drawnCards[1].card.nameVi}. Dù đối diện với rào cản ở vị trí ${drawnCards[2].card.nameVi}, cánh cửa cơ hội đột phá đang hé mở qua ${drawnCards[3].card.nameVi} và lời khuyên chiến lược tại ${lastCard.card.nameVi}.`;
  } else {
    overallSummary = `Bức tranh Thập Tự Celtic ${questionContext} phơi bày một cấu trúc năng lượng đa tầng sâu sắc. Trọng tâm hiện tại ${firstCard.card.nameVi} đang tương tác trực diện với thử thách ${drawnCards[1].card.nameVi}. Nền tảng quá khứ sâu kín từ ${drawnCards[2].card.nameVi} đang thúc đẩy nhận thức ${drawnCards[4].card.nameVi}, hướng tới điểm đến vĩ mô kết tinh tại lá thứ 10: ${lastCard.card.nameVi} (${lastCard.isReversed ? 'ngược' : 'xuôi'}).`;
  }

  // 5. Core Dynamics
  const dynamicsList: string[] = [];
  if (reversedCount > 0) {
    dynamicsList.push(`Có ${reversedCount}/${totalCards} lá xuất hiện ở trạng thái Ngược, nhắc nhở bạn rằng những trở ngại liên quan đến câu hỏi này chủ yếu xuất phát từ sự tắc nghẽn tâm lý bên trong, nỗi sợ vô thức hoặc việc kháng cự lại sự thay đổi tự nhiên hơn là do ngoại cảnh hoàn toàn chi phối.`);
  } else {
    dynamicsList.push(`Toàn bộ các lá bài đều xuất hiện ở chiều Xuôi, báo hiệu dòng chảy năng lượng đang vô cùng thông suốt và thuận chiều. Mọi trở ngại nếu có chỉ là những bài kiểm tra nhỏ thử thách lòng kiên định của bạn.`);
  }

  const c1 = drawnCards[0].card;
  const cLast = drawnCards[drawnCards.length - 1].card;
  dynamicsList.push(`Mối liên hệ giữa lá mở đầu (${c1.nameVi}) và lá kết thúc (${cLast.nameVi}) tạo nên một trục biến chuyển: từ điểm xuất phát ${c1.element} giàu tính bản năng sang bến đỗ ${cLast.element} chứa đựng trí tuệ và sự vững vàng.`);

  const coreDynamics = dynamicsList.join(' ');

  // 6. Actionable Advice
  const adviceParts: string[] = [];
  const primaryAdviceCard = drawnCards[drawnCards.length - 1];
  const adviceText = primaryAdviceCard.isReversed
    ? primaryAdviceCard.card.reversed.advice
    : primaryAdviceCard.card.upright.advice;

  adviceParts.push(`1. Quyết định trọng tâm: ${directVerdict.keyDecision}`);
  adviceParts.push(`2. Điều cấm kỵ cần tránh: ${directVerdict.whatToAvoid}`);
  adviceParts.push(`3. Lắng nghe thông điệp thực tiễn từ lá ${primaryAdviceCard.card.nameVi}: ${adviceText}`);
  adviceParts.push(`4. Về mặt thời điểm hành động: ${directVerdict.timingAdvice}`);

  const actionableAdvice = adviceParts.join('\n\n');

  // 7. Reflection Prompts
  const reflectionPrompts: string[] = [];
  drawnCards.slice(0, 3).forEach((dc) => {
    if (dc.card.reflectionQuestions && dc.card.reflectionQuestions.length > 0) {
      reflectionPrompts.push(dc.card.reflectionQuestions[0]);
    }
  });

  return {
    directVerdict,
    cardQuestionAnalyses,
    overallSummary,
    elementalBalance: fullElementalBalance,
    coreDynamics,
    actionableAdvice,
    reflectionPrompts: reflectionPrompts.slice(0, 3)
  };
}
