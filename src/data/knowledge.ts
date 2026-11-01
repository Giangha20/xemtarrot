export interface KnowledgeArticle {
  id: string;
  category: 'basics' | 'structure' | 'reading' | 'philosophy';
  title: string;
  subtitle: string;
  readTime: string;
  iconName: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    bulletPoints?: string[];
    quote?: string;
  }[];
}

export const TAROT_KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'what-is-tarot',
    category: 'basics',
    title: 'Tarot Là Gì? Chiếc Gương Phản Chiếu Tiềm Thức',
    subtitle: 'Khám phá bản chất thực sự của Tarot như một công cụ suy ngẫm và phát triển bản thân',
    readTime: '5 phút đọc',
    iconName: 'Sparkles',
    content: [
      {
        sectionTitle: 'Bản chất thực sự của Tarot',
        paragraphs: [
          'Tarot không phải là một công cụ bói toán mê tín nhằm tuyên bố những sự thật định mệnh tuyệt đối về tương lai. Về bản chất, Tarot là một hệ thống biểu tượng tâm lý học cổ xưa, một chiếc gương soi chiếu sâu thẳm vào tiềm thức và các dòng chảy năng lượng trong cuộc sống của bạn.',
          'Khi bạn đối diện với một lá bài Tarot, các hình ảnh biểu tượng, màu sắc và câu chuyện nguyên mẫu (archetypes) sẽ kích hoạt trực giác và tiếng nói nội tâm của bạn. Những điều bạn vốn đã lờ mờ cảm nhận nhưng chưa gọi tên được trong ý thức sẽ được lá bài phơi bày rõ ràng trên bàn trải.'
        ],
        quote: 'Tarot không vẽ nên số phận của bạn; Tarot trao cho bạn ngọn đèn để bạn tự tay thắp sáng và làm chủ con đường của chính mình.'
      },
      {
        sectionTitle: 'Nguồn gốc và lịch sử hình thành',
        paragraphs: [
          'Bộ bài Tarot đầu tiên được ghi nhận xuất hiện vào thế kỷ 15 tại miền bắc nước Ý (điển hình là bộ bài Visconti-Sforza). Ban đầu, chúng được giới quý tộc châu Âu sử dụng như một trò chơi bài có tên là "Tarocchi" hay "Trionfi".',
          'Đến cuối thế kỷ 18 và đầu thế kỷ 20, các học giả triết học và huyền học như Antoine Court de Gébelin, Eliphas Lévi, và đặc biệt là Arthur Edward Waite cùng nữ họa sĩ Pamela Colman Smith thuộc Hội Hermetic Order of the Golden Dawn đã hệ thống hóa Tarot thành bộ môn biểu tượng học tâm linh sâu sắc.',
          'Năm 1909, bộ bài Rider-Waite-Smith (RWS) ra đời với điểm đột phá: toàn bộ 78 lá bài (kể cả 56 lá Ẩn Phụ) đều được vẽ minh họa chi tiết với các biểu tượng giàu ý nghĩa. Đây chính là hệ thống Tarot chuẩn mực và phổ biến nhất trên toàn thế giới hiện nay.'
        ]
      }
    ]
  },
  {
    id: 'structure-of-78-cards',
    category: 'structure',
    title: 'Cấu Trúc Bộ Bài Tarot 78 Lá',
    subtitle: 'Tìm hiểu sự phân chia giữa 22 lá Ẩn Chính (Major Arcana) và 56 lá Ẩn Phụ (Minor Arcana)',
    readTime: '6 phút đọc',
    iconName: 'Layers',
    content: [
      {
        sectionTitle: 'Major Arcana – 22 Lá Ẩn Chính: Cuộc Hành Trình Của Chàng Khờ',
        paragraphs: [
          'Major Arcana (Ẩn Chính) gồm 22 lá bài được đánh số từ 0 (The Fool) đến XXI (The World). Đây là xương sống tâm linh của toàn bộ hệ thống Tarot, phản ánh "Cuộc hành trình của Chàng Khờ" (The Fool\'s Journey) - biểu tượng cho tiến trình tiến hóa tâm thức của một đời người.',
          'Khi một lá Ẩn Chính xuất hiện trong trải bài, nó báo hiệu những bài học nghiệp quả lớn, những bước ngoặt mang tính định hình vận mệnh hoặc những chuyển hóa sâu sắc từ bên trong mà bạn không thể phớt lờ.'
        ],
        bulletPoints: [
          'Strength (Sức Mạnh) mang số VIII và Justice (Công Lý) mang số XI theo chuẩn chuẩn xác của Rider-Waite-Smith.',
          'Từ The Fool ngây thơ bước vào thế giới cho đến The World viên mãn tròn đầy là cả một hành trình tích lũy trí tuệ.'
        ]
      },
      {
        sectionTitle: 'Minor Arcana – 56 Lá Ẩn Phụ: Đời Sống Thực Tế Hàng Ngày',
        paragraphs: [
          'Minor Arcana (Ẩn Phụ) gồm 56 lá bài, phản ánh những tình huống, cảm xúc, thử thách và cơ hội cụ thể trong đời sống thực tế thường nhật. 56 lá được chia đều thành 4 bộ tương ứng với 4 nguyên tố nền tảng của vũ trụ:',
          '1. Wands (Gậy) – Nguyên tố Lửa: Đại diện cho ý chí, năng lượng hành động, đam mê, sự nghiệp và nguồn cảm hứng sáng tạo.',
          '2. Cups (Cốc) – Nguyên tố Nước: Đại diện cho cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.',
          '3. Swords (Kiếm) – Nguyên tố Khí: Đại diện cho trí tuệ, lý trí, giao tiếp, sự thật, xung đột và những quyết định sắc bén.',
          '4. Pentacles (Tiền) – Nguyên tố Đất: Đại diện cho vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự bền vững lâu dài.'
        ]
      },
      {
        sectionTitle: 'Nhóm Bài Hoàng Gia (Court Cards)',
        paragraphs: [
          'Mỗi bộ trong Minor Arcana kết thúc bằng 4 lá Hoàng Gia: Page (Tiểu Đồng), Knight (Hiệp Sĩ), Queen (Hoàng Hậu), và King (Vua).',
          'Các lá bài này có thể đại diện cho những con người cụ thể bước vào cuộc đời bạn, hoặc đại diện cho mức độ trưởng thành tâm lý của chính bạn trong việc làm chủ nguyên tố đó: từ sự tò mò học hỏi (Page), hành động nhiệt huyết (Knight), thấu hiểu nội tâm (Queen) đến năng lực lãnh đạo toàn diện (King).'
        ]
      }
    ]
  },
  {
    id: 'upright-vs-reversed',
    category: 'reading',
    title: 'Ý Nghĩa Lá Xuôi (Upright) Và Lá Ngược (Reversed)',
    subtitle: 'Hiểu đúng về bài ngược: Không phải là điều xui xẻo, mà là lời nhắc nhở tinh tế từ nội tâm',
    readTime: '4 phút đọc',
    iconName: 'RotateCw',
    content: [
      {
        sectionTitle: 'Triết lý về lá bài ngược trong Tarot',
        paragraphs: [
          'Nhiều người mới học Tarot thường cảm thấy sợ hãi khi thấy lá bài xuất hiện ở trạng thái lộn ngược, lầm tưởng rằng lá ngược mang điềm xấu hoặc hoàn toàn đối lập với lá xuôi. Đây là một quan niệm sai lầm phổ biến.',
          'Trong triết lý Tarot hiện đại, lá bài ngược thường biểu thị:',
          '• Năng lượng của lá bài đang bị tắc nghẽn hoặc chưa được giải phóng ra thế giới bên ngoài.',
          '• Vấn đề mang tính nội tâm sâu kín: bạn đang trải nghiệm bài học đó bên trong tâm trí trước khi nó biểu hiện ra thực tế.',
          '• Sự thái quá hoặc thiếu hụt năng lượng: ví dụ, sự tự tin (xuôi) biến thành tự phụ (thái quá) hoặc tự ti (thiếu hụt) khi ngược.',
          '• Lời nhắc nhở cần điều chỉnh: Vũ trụ đang gửi tín hiệu để bạn chậm lại một nhịp và xem xét kỹ lưỡng hơn.'
        ],
        quote: 'Lá bài ngược không đóng lại cánh cửa; nó chỉ mách bạn rằng chìa khóa đang nằm ở một góc khuất bên trong tâm hồn bạn.'
      }
    ]
  },
  {
    id: 'how-to-ask-questions',
    category: 'reading',
    title: 'Nghệ Thuật Đặt Câu Hỏi Khi Trải Bài Tarot',
    subtitle: 'Cách đặt câu hỏi mở và trao quyền để nhận được sự dẫn dắt sâu sắc và thực tiễn nhất',
    readTime: '5 phút đọc',
    iconName: 'HelpCircle',
    content: [
      {
        sectionTitle: 'Chuyển từ câu hỏi thụ động sang câu hỏi trao quyền',
        paragraphs: [
          'Chất lượng câu trả lời của Tarot phụ thuộc trực tiếp vào chất lượng câu hỏi của bạn. Những câu hỏi đóng dạng "Tôi có trúng số không?", "Bao giờ anh ấy quay lại?" thường tạo ra tâm lý thụ động, phó mặc cuộc đời cho số phận và dễ gây hoang mang.',
          'Thay vào đó, hãy sử dụng các câu hỏi mở bắt đầu bằng "Tôi cần hiểu điều gì...", "Làm thế nào để tôi...", "Bài học nào đang dành cho tôi...". Những câu hỏi này đặt bạn vào vị thế chủ nhân của cuộc đời, có khả năng hành động và chuyển hóa tình thế.'
        ],
        bulletPoints: [
          'Thay vì: "Người ấy có yêu tôi không?" -> Hãy hỏi: "Năng lượng kết nối giữa tôi và người ấy hiện tại như thế nào, và tôi cần làm gì để nuôi dưỡng mối quan hệ này?"',
          'Thay vì: "Tôi có được thăng chức không?" -> Hãy hỏi: "Điểm mạnh nào tôi nên phát huy và rào cản nào tôi cần khắc phục để bứt phá trong sự nghiệp?"',
          'Thay vì: "Khi nào khó khăn này mới hết?" -> Hãy hỏi: "Bài học mà thử thách này muốn dạy cho tôi là gì, và tôi nên điều chỉnh tâm thái ra sao?"'
        ]
      }
    ]
  },
  {
    id: 'mastering-spreads',
    category: 'reading',
    title: 'Hướng Dẫn Đọc Các Phương Pháp Trải Bài',
    subtitle: 'Từ trải bài 1 lá nhanh chóng đến bố cục 10 lá Thập Tự Celtic huyền bí',
    readTime: '7 phút đọc',
    iconName: 'Compass',
    content: [
      {
        sectionTitle: 'Trải Bài Ba Lá: Quá Khứ – Hiện Tại – Tương Lai',
        paragraphs: [
          'Khi đọc trải bài 3 lá, điều quan trọng nhất không phải là phân tích từng lá tách biệt, mà là nhìn thấy câu chuyện liên tục chạy qua ba mốc thời gian:',
          'Lá Quá Khứ giải thích lý do vì sao bạn đang ở đây hôm nay. Lá Hiện Tại soi tỏ tâm thế và hoàn cảnh lúc này. Và lá Tương Lai chỉ ra xu hướng tự nhiên nếu bạn tiếp tục giữ nguyên quán tính năng lượng hiện tại.',
          'Hãy nhớ: Tương lai trong Tarot không bao giờ cố định bằng đá. Khi bạn thay đổi nhận thức và hành động ở Hiện Tại, tương lai sẽ tự khắc được viết lại.'
        ]
      },
      {
        sectionTitle: 'Bố Cục Thập Tự Celtic (Celtic Cross)',
        paragraphs: [
          'Celtic Cross là trải bài kinh điển gồm hai phần chính: Vòng Tròn Thập Tự (lá 1 đến 6) và Cột Năng Lượng (lá 7 đến 10).',
          '• Trọng tâm (lá 1 & 2): Lá 1 là trái tim vấn đề, lá 2 đặt ngang là lực cản trở hoặc trợ lực trực tiếp.',
          '• Trục dọc (lá 3 & 5): Lá 3 là gốc rễ quá khứ/tiềm thức; lá 5 là ngọn đèn nhận thức/mục tiêu ý thức.',
          '• Trục ngang (lá 4 & 6): Quá khứ vừa trôi qua (lá 4) chuyển giao sang tương lai sắp tới (lá 6).',
          '• Cột bên phải (lá 7, 8, 9, 10): Phản chiếu sự tương tác giữa Bản thân bạn (7), Môi trường xung quanh (8), Hy vọng & Nỗi sợ (9), và Kết quả tối hậu (10).'
        ]
      }
    ]
  },
  {
    id: 'ethical-tarot-code',
    category: 'philosophy',
    title: 'Quy Chuẩn Đạo Đức Khi Xem Tarot',
    subtitle: 'Tôn trọng quyền tự do ý chí, không phán xét và bảo vệ sự bình an của người hỏi',
    readTime: '4 phút đọc',
    iconName: 'ShieldCheck',
    content: [
      {
        sectionTitle: 'Những nguyên tắc đạo đức cốt lõi',
        paragraphs: [
          'Mystic Tarot luôn tuân thủ các chuẩn mực đạo đức nghiêm ngặt nhằm mang lại trải nghiệm tích cực và an toàn:',
          '1. Tôn trọng Tuyệt đối Quyền Tự do Ý chí: Không có định mệnh nào là bất biến. Bạn luôn là tác giả nắm giữ cây bút viết nên câu chuyện đời mình.',
          '2. Không Đưa ra Lời khuyên Y tế, Pháp lý hoặc Tài chính chuyên môn: Tarot là công cụ tham khảo tâm linh và chiêm nghiệm cảm xúc, không thay thế bác sĩ, luật sư hay chuyên gia tài chính.',
          '3. Không Hù dọa hay Gây hoang mang: Mọi lá bài, kể cả Death, The Tower hay The Devil, đều chứa đựng những bài học thức tỉnh quý giá và cơ hội chuyển hóa tích cực.',
          '4. Bảo mật và Tôn trọng Riêng tư: Mọi câu hỏi và kết quả trải bài của bạn trên Mystic Tarot được lưu trữ an toàn trong chính thiết bị của bạn qua LocalStorage.'
        ]
      }
    ]
  }
];
