import { SpreadConfig } from '@/types/tarot';

export const TAROT_SPREADS: SpreadConfig[] = [
  {
    id: 'one-card',
    name: 'One Card Spread',
    nameVi: 'Trải Bài Một Lá',
    cardCount: 1,
    tagline: 'Thông điệp cốt lõi & Lời khuyên trực tiếp',
    description: 'Phương pháp rút bài nhanh và tập trung nhất, thích hợp cho câu hỏi trong ngày hoặc khi bạn cần một lời khuyên dứt khoát, rõ ràng cho một vấn đề cấp bách.',
    recommendedTopics: ['Thông điệp trong ngày', 'Lời khuyên nhanh', 'Câu hỏi Có/Không', 'Tâm trạng hiện tại'],
    positions: [
      {
        index: 0,
        name: 'The Core Message',
        nameVi: 'Thông Điệp Cốt Lõi',
        descriptionVi: 'Trọng tâm năng lượng, bài học chủ đạo và lời khuyên then chốt vũ trụ dành cho bạn lúc này.'
      }
    ]
  },
  {
    id: 'three-card',
    name: 'Three Card Spread',
    nameVi: 'Trải Bài Ba Lá (Quá Khứ – Hiện Tại – Tương Lai)',
    cardCount: 3,
    tagline: 'Dòng chảy thời gian & Xu hướng phát triển',
    description: 'Một trong những kiểu trải bài kinh điển và phổ biến nhất. Khám phá nguyên nhân từ quá khứ, năng lượng hiện tại và xu hướng tương lai để bạn làm chủ tình huống.',
    recommendedTopics: ['Tổng quan tình huống', 'Tình cảm', 'Công việc', 'Định hướng tương lai'],
    positions: [
      {
        index: 0,
        name: 'Past',
        nameVi: 'Quá Khứ',
        descriptionVi: 'Những ảnh hưởng, sự kiện và bài học từ quá khứ đã hình thành nên tình huống hiện tại của bạn.'
      },
      {
        index: 1,
        name: 'Present',
        nameVi: 'Hiện Tại',
        descriptionVi: 'Năng lượng chủ đạo, hoàn cảnh thực tế và trạng thái tâm lý đang diễn ra xung quanh bạn.'
      },
      {
        index: 2,
        name: 'Future',
        nameVi: 'Tương Lai (Xu hướng)',
        descriptionVi: 'Xu hướng tự nhiên và tiềm năng có thể phát triển nếu bạn tiếp tục theo đà năng lượng hiện tại.'
      }
    ]
  },
  {
    id: 'love-five',
    name: 'Love Relationship Spread',
    nameVi: 'Trải Bài Tình Yêu Chuyên Sâu (5 Lá)',
    cardCount: 5,
    tagline: 'Thấu hiểu cảm xúc & Kết nối gắn kết',
    description: 'Dành riêng cho chuyện tình cảm đôi lứa, người độc thân đang tìm kiếm tình yêu, hoặc những mối quan hệ đang gặp khúc mắc cần thấu hiểu sâu sắc từ hai phía.',
    recommendedTopics: ['Tình cảm đôi lứa', 'Người độc thân', 'Hàn gắn mối quan hệ', 'Tri kỷ'],
    positions: [
      {
        index: 0,
        name: 'Your Feelings',
        nameVi: '1. Cảm Xúc Của Bạn',
        descriptionVi: 'Trạng thái trái tim, cảm xúc chân thật sâu kín bên trong bạn về mối quan hệ này.'
      },
      {
        index: 1,
        name: 'Your Desires',
        nameVi: '2. Điều Bạn Mong Muốn',
        descriptionVi: 'Kỳ vọng, khao khát thầm kín và điều bạn thực sự kiếm tìm trong tình yêu.'
      },
      {
        index: 2,
        name: 'Influencing Factors',
        nameVi: '3. Yếu Tố Tác Động',
        descriptionVi: 'Năng lượng từ đối phương, hoàn cảnh xung quanh hoặc các tác nhân ngoại cảnh ảnh hưởng đến cả hai.'
      },
      {
        index: 3,
        name: 'Challenges',
        nameVi: '4. Thử Thách Cần Nhìn Nhận',
        descriptionVi: 'Nút thắt tâm lý, bất đồng hoặc trở ngại cần sự can đảm đối diện để cùng vượt qua.'
      },
      {
        index: 4,
        name: 'Advice & Outcome',
        nameVi: '5. Lời Khuyên & Hướng Đi',
        descriptionVi: 'Chỉ dẫn tâm linh để chữa lành, vun đắp tình cảm và đạt tới sự hòa hợp bền vững.'
      }
    ]
  },
  {
    id: 'career-five',
    name: 'Career & Ambition Spread',
    nameVi: 'Trải Bài Công Việc & Sự Nghiệp (5 Lá)',
    cardCount: 5,
    tagline: 'Bứt phá sự nghiệp & Nắm bắt cơ hội',
    description: 'Dành cho những bước ngoặt nghề nghiệp, khởi nghiệp, thăng tiến hoặc khi bạn cảm thấy bế tắc cần tìm kiếm hướng đi phát triển tài năng và tài chính bền vững.',
    recommendedTopics: ['Thăng tiến sự nghiệp', 'Khởi nghiệp kinh doanh', 'Chuyển ngành đổi việc', 'Dự án mới'],
    positions: [
      {
        index: 0,
        name: 'Current Position',
        nameVi: '1. Vị Trí Hiện Tại',
        descriptionVi: 'Hiện trạng công việc, năng lực thực tế và vị thế hiện tại của bạn trong môi trường làm việc.'
      },
      {
        index: 1,
        name: 'Core Strengths',
        nameVi: '2. Điểm Mạnh Vượt Trội',
        descriptionVi: 'Tài năng tiềm ẩn, kỹ năng chuyên môn và nguồn lực bạn có thể tận dụng tối đa.'
      },
      {
        index: 2,
        name: 'Obstacles & Pitfalls',
        nameVi: '3. Khó Khăn & Trở Ngại',
        descriptionVi: 'Những rào cản khách quan, đối thủ cạnh tranh hoặc sự trì hoãn chủ quan cần khắc phục.'
      },
      {
        index: 3,
        name: 'Opportunities',
        nameVi: '4. Cơ Hội Bứt Phá',
        descriptionVi: 'Những cánh cửa mới, dự án tiềm năng hoặc quý nhân nâng đỡ sắp xuất hiện.'
      },
      {
        index: 4,
        name: 'Strategic Guidance',
        nameVi: '5. Lời Khuyên Chiến Lược',
        descriptionVi: 'Hành động cụ thể bạn nên thực hiện để hiện thực hóa tham vọng nghề nghiệp.'
      }
    ]
  },
  {
    id: 'celtic-cross',
    name: 'Celtic Cross Spread',
    nameVi: 'Trải Bài Thập Tự Celtic (10 Lá)',
    cardCount: 10,
    tagline: 'Phân tích đa chiều sâu sắc nhất trong nghệ thuật Tarot',
    description: 'Bố cục trải bài cổ điển và toàn diện nhất thế giới Tarot. Mổ xẻ mọi khía cạnh của một vấn đề phức tạp từ vô thức đến ý thức, quá khứ, tương lai và hoàn cảnh bên ngoài.',
    recommendedTopics: ['Vấn đề lớn phức tạp', 'Khủng hoảng bước ngoặt', 'Bức tranh toàn cảnh cuộc đời', 'Thức tỉnh tâm linh'],
    positions: [
      {
        index: 0,
        name: 'The Present / The Heart of the Matter',
        nameVi: '1. Hiện Tại (Trọng Tâm)',
        descriptionVi: 'Năng lượng cốt lõi và hoàn cảnh căn bản đang chi phối bạn lúc này.'
      },
      {
        index: 1,
        name: 'The Challenge / Cross Card',
        nameVi: '2. Thách Thức Trực Tiếp',
        descriptionVi: 'Trở ngại chắn ngang hoặc động lực thúc đẩy đang tác động trực tiếp lên vấn đề.'
      },
      {
        index: 2,
        name: 'The Root / The Foundation',
        nameVi: '3. Nền Tảng Quá Khứ',
        descriptionVi: 'Nguyên nhân sâu xa từ tiềm thức hoặc sự kiện gốc rễ đã định hình tình huống.'
      },
      {
        index: 3,
        name: 'The Past / Passing Influence',
        nameVi: '4. Quá Khứ Gần',
        descriptionVi: 'Sự kiện hoặc năng lượng vừa mới diễn ra và đang dần thoái lui.'
      },
      {
        index: 4,
        name: 'The Crown / Conscious Goal',
        nameVi: '5. Nhận Thức & Mục Tiêu',
        descriptionVi: 'Điều bạn đang hướng tới trong ý thức hoặc kết quả tốt nhất mà bạn kỳ vọng.'
      },
      {
        index: 5,
        name: 'The Near Future',
        nameVi: '6. Tương Lai Gần',
        descriptionVi: 'Sự việc hoặc năng lượng sẽ sớm bước vào cuộc sống của bạn trong thời gian tới.'
      },
      {
        index: 6,
        name: 'The Self / Querent',
        nameVi: '7. Bản Thân Người Hỏi',
        descriptionVi: 'Thái độ, tâm lý, năng lượng và cách bạn đang nhìn nhận chính mình.'
      },
      {
        index: 7,
        name: 'The Environment / External Influences',
        nameVi: '8. Môi Trường Xung Quanh',
        descriptionVi: 'Ảnh hưởng từ những người thân, đồng nghiệp, môi trường xã hội và năng lượng bên ngoài.'
      },
      {
        index: 8,
        name: 'Hopes and Fears',
        nameVi: '9. Hy Vọng & Nỗi Sợ',
        descriptionVi: 'Kỳ vọng thầm kín và những nỗi sợ tiềm thức đan xen nhau trong lòng bạn.'
      },
      {
        index: 9,
        name: 'The Outcome / Long-Term Potential',
        nameVi: '10. Kết Quả Cuối Cùng',
        descriptionVi: 'Điểm đến dài hạn và bài học tiến hóa tâm hồn nếu bạn đi trọn con đường này.'
      }
    ]
  }
];

export const getSpreadById = (id: string): SpreadConfig => {
  const found = TAROT_SPREADS.find((s) => s.id === id);
  return found || TAROT_SPREADS[1]; // default 3 cards
};
