import { TAROT_CARDS } from '@/data/tarotCards';
import { getSpreadById } from '@/data/spreads';
import { DrawnCard, ReadingResult, SpreadType, TarotCard } from '@/types/tarot';

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
 * Intelligent Algorithmic Tarot Synthesis Engine
 * Synthesizes cohesive, deeply personal, and multi-layered readings.
 */
export function synthesizeReading(
  question: string,
  topic: string,
  spreadType: SpreadType,
  drawnCards: DrawnCard[]
): ReadingResult['synthesis'] {
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

  // 3. Formulate Overall Summary based on specific cards & positions
  let overallSummary = '';
  const firstCard = drawnCards[0];
  const lastCard = drawnCards[drawnCards.length - 1];

  const questionContext = question && question.trim().length > 3
    ? `với câu hỏi "${question}" thuộc chủ đề ${topic}`
    : `về phương diện ${topic}`;

  if (spreadType === 'one-card') {
    const status = firstCard.isReversed ? 'ở trạng thái Ngược' : 'ở trạng thái Xuôi';
    overallSummary = `Đối diện ${questionContext}, thông điệp cốt lõi vũ trụ trao gửi đến bạn qua lá ${firstCard.card.nameVi} (${status}). Lá bài chỉ ra rằng: ${firstCard.isReversed ? firstCard.card.reversed.keyMessage : firstCard.card.upright.keyMessage} Năng lượng này mời gọi bạn nhìn nhận thẳng thắn vào trọng tâm vấn đề mà không né tránh.`;
  } else if (spreadType === 'three-card') {
    const pastCard = drawnCards[0];
    const presentCard = drawnCards[1];
    const futureCard = drawnCards[2];
    
    overallSummary = `Nhìn nhận dòng thời gian ${questionContext}, trải bài cho thấy bạn đã khởi hành từ năng lượng của ${pastCard.card.nameVi} (${pastCard.isReversed ? 'ngược' : 'xuôi'}), bước qua hiện tại được định hình bởi ${presentCard.card.nameVi} (${presentCard.isReversed ? 'ngược' : 'xuôi'}) và đang tiến tới xu hướng tương lai ${futureCard.card.nameVi} (${futureCard.isReversed ? 'ngược' : 'xuôi'}). Dòng chảy này phản ánh một tiến trình chuyển hóa rõ rệt: từ bài học quá khứ sang sự thức tỉnh nhận thức thực tại để mở lối cho tương lai đầy tiềm năng.`;
  } else if (spreadType === 'love-five') {
    overallSummary = `Trong không gian tình cảm ${questionContext}, trải bài 5 lá phản ánh thế giới nội tâm của bạn đang được dẫn dắt bởi ${firstCard.card.nameVi}. Thử thách trọng yếu cần vượt qua nằm ở lá ${drawnCards[3].card.nameVi} (${drawnCards[3].isReversed ? 'ngược' : 'xuôi'}), trong khi chìa khóa mở ra sự hòa hợp và thấu hiểu lâu dài kết tinh tại lá Lời Khuyên ${lastCard.card.nameVi}.`;
  } else if (spreadType === 'career-five') {
    overallSummary = `Trong tiến trình sự nghiệp ${questionContext}, hiện trạng của bạn được neo giữ bởi ${firstCard.card.nameVi}, điểm tựa vững chắc nhất là năng lượng từ ${drawnCards[1].card.nameVi}. Dù đối diện với rào cản ở vị trí ${drawnCards[2].card.nameVi}, cánh cửa cơ hội đột phá đang hé mở qua ${drawnCards[3].card.nameVi} và lời khuyên chiến lược tại ${lastCard.card.nameVi}.`;
  } else {
    // Celtic Cross
    overallSummary = `Bức tranh Thập Tự Celtic ${questionContext} phơi bày một cấu trúc năng lượng đa tầng sâu sắc. Trọng tâm hiện tại ${firstCard.card.nameVi} đang tương tác trực diện với thử thách ${drawnCards[1].card.nameVi}. Nền tảng quá khứ sâu kín từ ${drawnCards[2].card.nameVi} đang thúc đẩy nhận thức ${drawnCards[4].card.nameVi}, hướng tới điểm đến vĩ mô kết tinh tại lá thứ 10: ${lastCard.card.nameVi} (${lastCard.isReversed ? 'ngược' : 'xuôi'}).`;
  }

  // 4. Formulate Core Dynamics & Inter-card relationships
  const dynamicsList: string[] = [];
  if (reversedCount > 0) {
    dynamicsList.push(`Có ${reversedCount}/${totalCards} lá xuất hiện ở trạng thái Ngược, nhắc nhở bạn rằng những trở ngại hiện thời chủ yếu xuất phát từ sự tắc nghẽn tâm lý bên trong, sự dồn nén cảm xúc hoặc việc kháng cự lại sự thay đổi tự nhiên hơn là do thế lực bên ngoài áp đặt.`);
  } else {
    dynamicsList.push(`Toàn bộ các lá bài đều xuất hiện ở chiều Xuôi, báo hiệu dòng chảy năng lượng đang vô cùng thông suốt và thuận chiều. Mọi trở ngại nếu có chỉ là những bài kiểm tra nhỏ thử thách lòng kiên định của bạn.`);
  }

  // Contrast or harmonize first and last card
  const c1 = drawnCards[0].card;
  const cLast = drawnCards[drawnCards.length - 1].card;
  dynamicsList.push(`Mối liên hệ giữa lá mở đầu (${c1.nameVi}) và lá kết thúc (${cLast.nameVi}) tạo nên một trục biến chuyển: từ điểm xuất phát ${c1.element} giàu tính bản năng sang bến đỗ ${cLast.element} chứa đựng trí tuệ và sự vững vàng.`);

  const coreDynamics = dynamicsList.join(' ');

  // 5. Formulate Actionable Advice
  const adviceParts: string[] = [];
  const primaryAdviceCard = drawnCards[drawnCards.length - 1]; // usually advice or outcome
  const adviceText = primaryAdviceCard.isReversed
    ? primaryAdviceCard.card.reversed.advice
    : primaryAdviceCard.card.upright.advice;

  adviceParts.push(`1. Lắng nghe thông điệp thực tiễn: ${adviceText}`);
  adviceParts.push(`2. Về mặt tâm lý: Hãy tôn trọng quyền tự do ý chí và cảm xúc chân thật của bản thân. Đừng đưa ra quyết định hệ trọng trong lúc nóng vội hay khi cảm xúc đang xáo động.`);
  adviceParts.push(`3. Về mặt hành động: Tập trung năng lượng vào những điều bạn hoàn toàn kiểm soát được hôm nay thay vì lo âu về những kịch bản xa xôi chưa tới.`);

  const actionableAdvice = adviceParts.join('\n\n');

  // 6. Gather Reflection Prompts
  const reflectionPrompts: string[] = [];
  drawnCards.slice(0, 3).forEach((dc) => {
    if (dc.card.reflectionQuestions && dc.card.reflectionQuestions.length > 0) {
      reflectionPrompts.push(dc.card.reflectionQuestions[0]);
    }
  });

  return {
    overallSummary,
    elementalBalance: fullElementalBalance,
    coreDynamics,
    actionableAdvice,
    reflectionPrompts: reflectionPrompts.slice(0, 3)
  };
}
