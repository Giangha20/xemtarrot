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
    // User picked specific cards
    selectedCards = chosenCardIds
      .slice(0, count)
      .map((id) => TAROT_CARDS.find((c) => c.id === id)!)
      .filter(Boolean);
  } else {
    // Random draw
    const shuffled = shuffleDeck(TAROT_CARDS);
    selectedCards = shuffled.slice(0, count);
  }

  // Assign positions and reversed flags
  return selectedCards.map((card, idx) => {
    // Random reversed status if allowed (approx 35% chance)
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
  const qLower = (question || '').toLowerCase().trim();
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
  const isDecision = qLower.includes('có nên') || qLower.includes('nên hay') || qLower.includes('chọn') || qLower.includes('được không') || qLower.includes('liệu có');
  const isLove = qLower.includes('người yêu') || qLower.includes('tình cảm') || qLower.includes('quay lại') || qLower.includes('chia tay') || qLower.includes('crush') || qLower.includes('kết hôn') || tLower.includes('tình');
  const isCareer = qLower.includes('công việc') || qLower.includes('chuyển việc') || qLower.includes('xin việc') || qLower.includes('thăng tiến') || qLower.includes('sếp') || qLower.includes('công ty') || tLower.includes('công') || tLower.includes('sự nghiệp');
  const isFinance = qLower.includes('tiền') || qLower.includes('tài chính') || qLower.includes('đầu tư') || qLower.includes('bất động sản') || qLower.includes('chứng khoán') || qLower.includes('nợ') || tLower.includes('tài');
  const isTiming = qLower.includes('khi nào') || qLower.includes('bao giờ') || qLower.includes('thời điểm') || qLower.includes('sắp tới') || qLower.includes('tháng') || qLower.includes('năm');

  // Lead card and final card determine momentum
  const outcomeCard = drawnCards[drawnCards.length - 1];
  const leadCard = drawnCards[0];

  let verdict = '';
  let confidenceLevel = '';
  let keyDecision = '';
  let timingAdvice = '';

  if (favorablePercent >= 70) {
    confidenceLevel = 'Rất Thuận Lợi';
    if (isDecision) {
      verdict = `CÂU TRẢ LỜI: NÊN TIẾN HÀNH (Khả năng thuận lợi cao ~${favorablePercent}%)`;
      keyDecision = `Vũ trụ gửi tín hiệu đèn xanh. Bạn hãy mạnh dạn xúc tiến kế hoạch đã ấp ủ, năng lượng tích cực từ lá ${outcomeCard.card.nameVi} sẽ che chở cho bước đi của bạn.`;
    } else if (isLove) {
      verdict = `CÂU TRẢ LỜI: TÍN HIỆU RẤT TÍCH CỰC & GẮN KẾT (~${favorablePercent}%)`;
      keyDecision = `Mối quan hệ này có nền tảng cảm xúc chân thành. Hãy cởi mở chia sẻ sự chân thật và lòng tin để đón nhận tình cảm trọn vẹn.`;
    } else if (isCareer) {
      verdict = `CÂU TRẢ LỜI: CƠ HỘI ĐỘT PHÁ & THĂNG TIẾN (~${favorablePercent}%)`;
      keyDecision = `Con đường nghề nghiệp đang mở rộng. Nỗ lực và kỹ năng thực chất của bạn sẽ được ghi nhận và tưởng thưởng xứng đáng.`;
    } else {
      verdict = `CÂU TRẢ LỜI: THUẬN LỢI & HANH THÔNG (~${favorablePercent}%)`;
      keyDecision = `Dòng năng lượng vũ trụ đang ủng hộ bạn. Hãy tự tin vào trực giác và tiếp tục vững bước.`;
    }
    timingAdvice = `Thời điểm vàng đang nằm trong khoảng 2 đến 6 tuần tới. Hành động sớm khi tinh thần và cơ hội đang cộng hưởng tốt nhất.`;
  } else if (favorablePercent <= 40) {
    confidenceLevel = 'Cần Thận Trọng & Tạm Hoãn';
    if (isDecision) {
      verdict = `CÂU TRẢ LỜI: CHƯA NÊN TIẾN HÀNH NGAY (Cảnh báo rủi ro cao ~${100 - favorablePercent}%)`;
      keyDecision = `Hiện tại chưa phải thời điểm chín muồi. Lá bài cảnh báo có những góc khuất hoặc rủi ro tiềm ẩn bạn chưa nhìn thấy hết. Hãy tạm dừng để rà soát.`;
    } else if (isLove) {
      verdict = `CÂU TRẢ LỜI: CẦN KHOẢNG LẶNG ĐỂ TỰ CHỮA LÀNH`;
      keyDecision = `Đừng vội vàng gượng ép hay tìm kiếm câu trả lời ngay lúc này. Sự nóng vội có thể gây thêm rạn nứt. Hãy học cách yêu thương chính mình trước.`;
    } else if (isCareer) {
      verdict = `CÂU TRẢ LỜI: NÊN CỦNG CỐ, TRÁNH MẠO HIỂM LÚC NÀY`;
      keyDecision = `Chưa nên mạo hiểm nhảy việc hay rót vốn lớn. Môi trường mới có thể mang theo nhiều áp lực ngoài dự tính. Hãy củng cố vị thế hiện tại.`;
    } else {
      verdict = `CÂU TRẢ LỜI: CẦN THẬN TRỌNG & TỰ SOI CHIẾU`;
      keyDecision = `Có những khúc mắc tâm lý hoặc tác động ngoại cảnh bất lợi cần được tháo gỡ từng bước thay vì hành động hấp tấp.`;
    }
    timingAdvice = `Hãy dành ít nhất 1 chu kỳ trăng (khoảng 3-4 tuần) để tĩnh tâm, quan sát và thu thập thêm dữ kiện trước khi đưa ra phán quyết sau cùng.`;
  } else {
    confidenceLevel = 'Chuyển Biến Tùy Thuộc Vào Quyết Định Của Bạn';
    verdict = `CÂU TRẢ LỜI: CƠ HỘI VÀ THỬ THÁCH SONG HÀNH (~${favorablePercent}%)`;
    keyDecision = `Kết quả phụ thuộc trực tiếp vào cách bạn đối diện với trở ngại. Nếu dũng cảm sửa đổi thói quen cũ và giữ vững lý trí, tình hình sẽ xoay chuyển theo hướng tốt đẹp.`;
    timingAdvice = `Khoảng 1 đến 2 tháng tới sẽ là giai đoạn bước ngoặt, đòi hỏi bạn phải có chiến lược rõ ràng và kiên định.`;
  }

  // 3. Formulate deep textual response answering the exact question
  const qDisplay = question && question.trim().length > 3 ? `"${question}"` : 'câu hỏi bạn đang trăn trở';
  
  const leadCardName = `${leadCard.card.nameVi} (${leadCard.isReversed ? 'chiều Ngược' : 'chiều Xuôi'})`;
  const outcomeCardName = `${outcomeCard.card.nameVi} (${outcomeCard.isReversed ? 'chiều Ngược' : 'chiều Xuôi'})`;

  const directAnswerSummary = `Về câu hỏi cụ thể của bạn: ${qDisplay}

1. TRỰC DIỆN BẢN CHẤT VẤN ĐỀ:
Bộ bài cho thấy câu hỏi này xuất phát từ một nhu cầu nội tâm sâu sắc, bắt nguồn từ năng lượng của lá ${leadCardName}. Bạn đang không chỉ tìm kiếm một kết quả đơn thuần mà đang tìm kiếm sự giải phóng khỏi cảm giác bất an hoặc do dự bấy lâu. Năng lượng phản chiếu cho thấy bối cảnh hiện tại có sự đan xen giữa mong muốn cá nhân và những tác động đa chiều từ hoàn cảnh xung quanh.

2. CÂU TRẢ LỜI RÕ RÀNG CHO BĂN KHOĂN CỦA BẠN:
Ứng vào thắc mắc của bạn, kết quả trải bài ${favorablePercent >= 70 ? 'đang mở ra hướng đi rất sáng sủa và tích cực' : favorablePercent <= 40 ? 'cho thấy bạn đang đối diện với những nút thắt cần giải quyết trước khi có thể đạt được điều mong muốn' : 'cho thấy tình thế đang ở thế cân bằng động, kết quả cuối cùng hoàn toàn nằm ở sự dứt khoát và trí tuệ của chính bạn'}. 

3. ĐIỂM TỰA VÀ ĐÍCH ĐẾN:
Lá bài chỉ báo kết quả hoặc bến đỗ sau cùng là ${outcomeCardName}. ${
    outcomeCard.isReversed 
      ? `Lá bài ở trạng thái Ngược nhắc nhở bạn rằng nếu bạn không chủ động chuyển hóa sự tắc nghẽn này, tình huống có thể kéo dài sự mệt mỏi. ${outcomeCard.card.reversed.advice}`
      : `Lá bài ở trạng thái Xuôi khẳng định một tương lai có hậu và vững chãi, miễn là bạn làm theo chỉ dẫn: ${outcomeCard.card.upright.advice}`
  }`;

  return {
    verdict,
    confidenceLevel,
    directAnswerSummary,
    keyDecision,
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
  const cleanQ = question ? question.trim() : '';

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

  // 2. Formulate Elemental Balance Analysis
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
    ? ` Sự xuất hiện của ${majorCount} lá Ẩn Chính (${majorRatio}% trải bài) cho thấy đây là một bước ngoặt nghiệp quả (karmic milestone) quan trọng mang tính định hình vận mệnh lâu dài của bạn.`
    : ` Tỷ lệ bài Ẩn Phụ cao cho thấy đây là vấn đề thực tế đời thường nằm trọn trong tầm kiểm soát và sự lựa chọn hàng ngày của bạn.`;

  const fullElementalBalance = `${elementalSummary}${arcanaNote}`;

  // 3. Direct Question Verdict & Specific Alignment
  const directVerdict = generateDirectQuestionVerdict(cleanQ, topic, drawnCards);

  // 4. Card-by-Card Question Relevance Analysis
  const cardQuestionAnalyses: CardQuestionAnalysis[] = drawnCards.map((dc) => {
    const card = dc.card;
    const isRev = dc.isReversed;
    const content = isRev ? card.reversed : card.upright;
    const posName = dc.position.nameVi;

    // Pick contextual aspect
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

    // Compose tailored answer from this card to the user's question
    const qReference = cleanQ ? `câu hỏi "${cleanQ}"` : 'vấn đề bạn đang hỏi';
    
    let directExplanation = '';
    if (isRev) {
      directExplanation = `Ứng vào ${qReference}, tại vị trí [${posName}], lá ${card.nameVi} (Ngược) cảnh báo rằng: ${card.reversed.keyMessage}. Bạn có thể đang gặp trở ngại bởi: ${card.reversed.blockedEnergy}. Khía cạnh liên quan mật thiết: ${aspectMeaning}`;
    } else {
      directExplanation = `Ứng vào ${qReference}, tại vị trí [${posName}], lá ${card.nameVi} (Xuôi) mang thông điệp sáng tỏ: ${card.upright.keyMessage}. Đây là nguồn trợ lực quý giá giúp bạn: ${aspectMeaning}`;
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

  // 5. Formulate Overall Summary based on specific cards & positions
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
    // Celtic Cross
    overallSummary = `Bức tranh Thập Tự Celtic ${questionContext} phơi bày một cấu trúc năng lượng đa tầng sâu sắc. Trọng tâm hiện tại ${firstCard.card.nameVi} đang tương tác trực diện với thử thách ${drawnCards[1].card.nameVi}. Nền tảng quá khứ sâu kín từ ${drawnCards[2].card.nameVi} đang thúc đẩy nhận thức ${drawnCards[4].card.nameVi}, hướng tới điểm đến vĩ mô kết tinh tại lá thứ 10: ${lastCard.card.nameVi} (${lastCard.isReversed ? 'ngược' : 'xuôi'}).`;
  }

  // 6. Formulate Core Dynamics & Inter-card relationships
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

  // 7. Formulate Actionable Advice
  const adviceParts: string[] = [];
  const primaryAdviceCard = drawnCards[drawnCards.length - 1];
  const adviceText = primaryAdviceCard.isReversed
    ? primaryAdviceCard.card.reversed.advice
    : primaryAdviceCard.card.upright.advice;

  adviceParts.push(`1. Quyết định trọng tâm: ${directVerdict.keyDecision}`);
  adviceParts.push(`2. Lắng nghe thông điệp thực tiễn từ lá ${primaryAdviceCard.card.nameVi}: ${adviceText}`);
  adviceParts.push(`3. Về mặt tâm lý: Tôn trọng quyền tự do ý chí và cảm xúc chân thật của bạn. Đừng đưa ra quyết định hệ trọng trong lúc nóng vội hay khi tâm trí đang dao động.`);
  adviceParts.push(`4. Về mặt thời điểm: ${directVerdict.timingAdvice}`);

  const actionableAdvice = adviceParts.join('\n\n');

  // 8. Gather Reflection Prompts
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
