// Full 78 Rider-Waite-Smith Tarot Cards Dataset
// Authoritative, comprehensive Vietnamese translations, symbolism, upright & reversed across all 8 aspects.
import { TarotCard } from '@/types/tarot';

export const TAROT_CARDS: TarotCard[] = [
  {
    "id": "the-fool",
    "name": "The Fool",
    "nameVi": "Kẻ Khờ",
    "number": 0,
    "romanNumeral": "0",
    "element": "Khí",
    "astrology": "Sao Thiên Vương (Uranus)",
    "keywords": [
      "New Beginnings",
      "Innocence",
      "Spontaneity",
      "Free Spirit",
      "Leap of Faith"
    ],
    "keywordsVi": [
      "Khởi đầu mới",
      "Sự ngây thơ",
      "Tự do phóng khoáng",
      "Cú nhảy niềm tin",
      "Tiềm năng vô hạn"
    ],
    "symbolism": [
      {
        "element": "Vực thẳm phía trước",
        "meaning": "Bước nhảy vào cõi vô định với lòng tin thuần khiết"
      },
      {
        "element": "Chú chó trắng",
        "meaning": "Bản năng bảo vệ, lòng trung thành và tiếng gọi của lý trí"
      },
      {
        "element": "Bông hoa hồng trắng",
        "meaning": "Sự thuần khiết, tâm hồn chưa vấy bẩn bởi định kiến trần tục"
      },
      {
        "element": "Mặt trời chiếu sáng rực rỡ",
        "meaning": "Nguồn năng lượng khởi nguyên vũ trụ ban phước cho cuộc hành trình"
      },
      {
        "element": "Chiếc túi nhỏ trên vai",
        "meaning": "Kinh nghiệm tích lũy từ các kiếp sống chưa mở ra"
      }
    ],
    "upright": {
      "keyMessage": "Hãy can đảm bước vào hành trình mới với tâm thế cởi mở và niềm tin thuần khiết.",
      "general": "The Fool đại diện cho khởi đầu của một chu kỳ mới, sự can đảm rũ bỏ gánh nặng quá khứ để bước vào vùng đất chưa biết. Đây là thời điểm của sự hào hứng, niềm tin vô tư và tiềm năng vô tận.",
      "love": "Khởi đầu một mối quan hệ mới đầy bất ngờ hoặc một làn gió tươi mới thổi vào tình yêu hiện tại. Hãy mở lòng và chấp nhận sự mạo hiểm ngọt ngào.",
      "career": "Cơ hội khởi nghiệp, đổi ngành hoặc bắt đầu một dự án mới đầy thách thức. Hãy tin vào trực giác và đừng để nỗi sợ thất bại kiềm chế.",
      "finance": "Có cơ hội tài chính mới mẻ nhưng cần lưu ý không nên quá mạo hiểm thiếu tính toán.",
      "family": "Không khí gia đình trẻ trung, vui vẻ; có thể có thành viên mới hoặc chuyến đi ngẫu hứng cùng người thân.",
      "personalGrowth": "Khám phá bản thân với tâm trí như một tờ giấy trắng, không định kiến, sẵn sàng học hỏi mọi trải nghiệm.",
      "advice": "Hãy cho phép bản thân được tự do thử nghiệm, lắng nghe tiếng gọi nội tâm và bước đi.",
      "strengths": [
        "Lòng dũng cảm",
        "Sự lạc quan",
        "Tâm hồn rộng mở"
      ],
      "opportunities": [
        "Bắt đầu dự án ấp ủ",
        "Gặp gỡ những người bạn mới",
        "Học kỹ năng mới"
      ],
      "warnings": [
        "Tránh bất cẩn, ngây thơ thái quá bỏ qua các cảnh báo thực tế."
      ]
    },
    "reversed": {
      "keyMessage": "Sự liều lĩnh thiếu thận trọng hoặc nỗi sợ hãi đang cản trở bước chân khởi đầu.",
      "blockedEnergy": "Năng lượng mạo hiểm bị bóp méo thành sự bốc đồng, hoặc ngược lại là sự do dự quá mức vì sợ sai.",
      "general": "The Fool ngược cảnh báo về sự bất cẩn, hành động thiếu suy nghĩ dẫn đến rủi ro không đáng có, hoặc nỗi sợ đang giam cầm bạn không dám bước ra khỏi vùng an toàn.",
      "love": "Mối quan hệ bốc đồng, thiếu cam kết, hoặc bạn đang quá sợ tổn thương mà bỏ lỡ cơ hội yêu thương thực sự.",
      "career": "Thiếu kế hoạch chi tiết cho công việc, nhảy việc bồng bột hoặc ngần ngại không dám nắm bắt cơ hội thăng tiến.",
      "finance": "Chi tiêu bốc đồng, đầu tư rủi ro cao mà không tìm hiểu kỹ lưỡng.",
      "family": "Hành vi vô trách nhiệm hoặc thiếu quan tâm đến cảm xúc của những người thân yêu.",
      "personalGrowth": "Bạn đang để sự hoài nghi hoặc nỗi sợ hãi che mờ trực giác và tiềm năng của chính mình.",
      "advice": "Hãy chậm lại một nhịp, kiểm tra lại mặt đất dưới chân trước khi nhảy.",
      "hiddenIssues": [
        "Sự ngây thơ mù quáng",
        "Thiếu trách nhiệm với bản thân",
        "Nỗi sợ vô hình"
      ],
      "adjustments": [
        "Lập kế hoạch cụ thể",
        "Lắng nghe lời khuyên từ người có kinh nghiệm",
        "Chịu trách nhiệm cho hành động"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Để ý những chi tiết thực tế và cảnh báo rủi ro xung quanh.",
      "whatToChange": "Bỏ đi thói quen chần chừ do sợ phán xét hoặc ngược lại là tính bốc đồng hấp tấp.",
      "whatToEmbrace": "Sự tươi mới trong tư duy, lòng dũng cảm khám phá điều kỳ diệu của cuộc sống.",
      "pitfalls": "Coi thường các quy tắc an toàn hoặc biến lòng tự do thành sự vô tâm."
    },
    "message": "Cuộc đời là một trang sách trắng tinh khôi đang chờ bạn đặt nét bút đầu tiên. Hãy bước đi bằng cả trái tim ngây thơ nhưng giữ đôi mắt luôn tỉnh thức.",
    "reflectionQuestions": [
      "Điều gì bạn luôn khao khát bắt đầu nhưng vẫn chưa dám bước tới?",
      "Nỗi sợ nào đang níu giữ bạn trong vùng an toàn cũ kỹ?",
      "Làm thế nào để bạn vừa giữ được lòng dũng cảm vừa duy trì sự tỉnh táo?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-magician",
    "name": "The Magician",
    "nameVi": "Nhà Ảo Thuật",
    "number": 1,
    "romanNumeral": "I",
    "element": "Khí",
    "astrology": "Sao Thủy (Mercury)",
    "keywords": [
      "Manifestation",
      "Resourcefulness",
      "Power",
      "Inspired Action",
      "Skill"
    ],
    "keywordsVi": [
      "Hiện thực hóa",
      "Năng lực biểu hiện",
      "Sự tháo vát",
      "Tập trung ý chí",
      "Tài năng làm chủ"
    ],
    "symbolism": [
      {
        "element": "Một tay chỉ lên trời, một tay chỉ xuống đất",
        "meaning": "Như trên trời, dưới đất cũng vậy (As above, so below) - biến ý niệm tâm linh thành hiện thực vật chất"
      },
      {
        "element": "Bốn biểu tượng trên bàn (Gậy, Cốc, Kiếm, Tiền)",
        "meaning": "Sở hữu trọn vẹn 4 nguyên tố: Ý chí, Cảm xúc, Trí tuệ, và Nguồn lực vật chất"
      },
      {
        "element": "Vòng vô cực (Lemniscate) trên đầu",
        "meaning": "Nguồn sáng tạo bất tận và sự kết nối với trí tuệ vũ trụ"
      },
      {
        "element": "Khăn choàng đỏ và áo trắng",
        "meaning": "Sự kết hợp giữa đam mê hành động và sự trong sạch của ý định"
      },
      {
        "element": "Khu vườn hoa hồng và hoa huệ",
        "meaning": "Khát vọng được nuôi dưỡng sẽ đơm hoa kết trái trong thực tại"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đã có đầy đủ mọi công cụ và tài năng cần thiết để biến ước mơ thành hiện thực.",
      "general": "The Magician là biểu tượng tối thượng của năng lực hiện thực hóa. Những gì bạn hình dung trong tâm trí hoàn toàn có thể trở thành hiện thực nếu bạn tập trung năng lượng và hành động dứt khoát.",
      "love": "Sự quyến rũ mạnh mẽ, khả năng giao tiếp tuyệt vời. Đây là lúc thể hiện tình cảm chân thành và chủ động kiến tạo mối quan hệ như ý nguyện.",
      "career": "Đỉnh cao của sự sáng tạo, năng lực chuyên môn và khả năng thuyết phục. Các dự án sẽ tiến triển ngoạn mục dưới sự dẫn dắt của bạn.",
      "finance": "Biết cách tận dụng tài nguyên sẵn có để tạo ra nguồn thu nhập mới. Khả năng biến ý tưởng thành lợi nhuận vật chất.",
      "family": "Đóng vai trò người giải quyết vấn đề, kết nối và mang lại sự ổn định, thấu hiểu trong gia đình.",
      "personalGrowth": "Làm chủ tâm trí và hành động, nhận ra sức mạnh tiềm ẩn không giới hạn bên trong bản thân.",
      "advice": "Hãy tập trung ý chí, sử dụng mọi nguồn lực bạn có và bắt tay vào hành động ngay lập tức.",
      "strengths": [
        "Sự khéo léo",
        "Khả năng giao tiếp",
        "Ý chí quyết đoán"
      ],
      "opportunities": [
        "Khởi động dự án quan trọng",
        "Thuyết phục đối tác",
        "Tạo đột phá cá nhân"
      ],
      "warnings": [
        "Đừng phân tán năng lượng vào quá nhiều việc cùng một lúc."
      ]
    },
    "reversed": {
      "keyMessage": "Cảnh giác với sự thao túng, tài năng bị lãng phí hoặc thiếu định hướng hành động rõ ràng.",
      "blockedEnergy": "Sức mạnh sáng tạo bị tắc nghẽn, hoài nghi năng lực bản thân hoặc lạm dụng mưu mẹo thay vì thực tài.",
      "general": "The Magician ngược biểu thị tiềm năng chưa được khai phá, cảm giác bất lực hoặc nguy cơ bị thao túng bởi người khác. Nó cũng cảnh báo về sự thiếu trung thực.",
      "love": "Sự thiếu chân thành, lời hứa suông hoặc cảm giác một bên đang kiểm soát, thao túng tâm lý bên kia.",
      "career": "Tài năng bị bỏ phí, thiếu tự tin khi trình bày ý tưởng hoặc gặp phải sự cạnh tranh không lành mạnh tại nơi làm việc.",
      "finance": "Cẩn trọng với những lời chào mời đầu tư quá hấp dẫn hoặc mánh khóe lừa đảo tài chính.",
      "family": "Hiểu lầm do giao tiếp không minh bạch hoặc che giấu sự thật trong mối quan hệ gia đình.",
      "personalGrowth": "Bạn cần xây dựng lại lòng tin vào giá trị và tài năng của chính mình, ngừng tự dối lòng.",
      "advice": "Hãy trung thực với chính mình, rèn luyện kỹ năng còn thiếu và nói không với những thủ đoạn ngắn hạn.",
      "hiddenIssues": [
        "Tự ti tiềm ẩn",
        "Mong muốn đi đường tắt",
        "Giao tiếp sai lệch"
      ],
      "adjustments": [
        "Minh bạch trong mọi giao dịch",
        "Kiên trì trau dồi chuyên môn",
        "Hành động bằng lương tâm"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Nhận diện những mánh khóe hoặc ý định thao túng xung quanh.",
      "whatToChange": "Chuyển hóa sự trì hoãn thành các bước hành động cụ thể.",
      "whatToEmbrace": "Sự tự tin vào tài năng và khả năng xoay xở của bản thân.",
      "pitfalls": "Ảo tưởng sức mạnh hoặc hứa hẹn những điều vượt quá khả năng thực tế."
    },
    "message": "Vũ trụ đã trao vào tay bạn cây đũa phép của ý chí và trí tuệ. Thế giới ngoài kia chỉ đang chờ đợi quyết định hành động của bạn.",
    "reflectionQuestions": [
      "Nguồn lực quý giá nhất mà bạn đang sở hữu lúc này là gì?",
      "Làm thế nào để chuyển hóa ý tưởng thành hành động cụ thể ngay hôm nay?",
      "Bạn có đang sử dụng quyền năng của mình vì mục đích chân chính?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-high-priestess",
    "name": "The High Priestess",
    "nameVi": "Nữ Tư Tế",
    "number": 2,
    "romanNumeral": "II",
    "element": "Nước",
    "astrology": "Mặt Trăng (Moon)",
    "keywords": [
      "Intuition",
      "Sacred Knowledge",
      "Divine Feminine",
      "Subconscious",
      "Mystery"
    ],
    "keywordsVi": [
      "Trực giác sâu sắc",
      "Tri thức bí truyền",
      "Năng lượng nữ tính linh thiêng",
      "Tiềm thức",
      "Sự tĩnh lặng"
    ],
    "symbolism": [
      {
        "element": "Hai cột Boaz (Đen) và Jachin (Trắng)",
        "meaning": "Sự cân bằng giữa nhị nguyên: Ánh sáng và Bóng tối, Ý thức và Tiềm thức"
      },
      {
        "element": "Tấm màn che thêu lựu và cọ",
        "meaning": "Cánh cổng dẫn vào cõi bí ẩn nội tâm, biểu tượng của sự màu mỡ tâm linh"
      },
      {
        "element": "Vương miện trăng ba pha (Hathor)",
        "meaning": "Sự kết nối với các chu kỳ vũ trụ, năng lượng trực giác và khả năng thấu thị"
      },
      {
        "element": "Cuộn kinh TORA trên tay",
        "meaning": "Quy luật vũ trụ và tri thức thiêng liêng chỉ hé mở cho người tĩnh tâm"
      },
      {
        "element": "Mặt trăng lưỡi liềm dưới chân",
        "meaning": "Sự làm chủ cảm xúc và các dòng chảy tiềm thức"
      }
    ],
    "upright": {
      "keyMessage": "Hãy lắng nghe tiếng nói tĩnh lặng của trực giác; câu trả lời đã nằm sẵn bên trong bạn.",
      "general": "The High Priestess mời gọi bạn rút lui khỏi sự ồn ào của thế giới bên ngoài để lắng nghe sự thông thái nội tâm. Đây là thời điểm của sự tĩnh lặng, quan sát sâu sắc và tin vào linh cảm.",
      "love": "Mối liên kết tâm linh sâu sắc, sự thấu hiểu không cần lời nói. Hãy để tình cảm phát triển tự nhiên và lắng nghe cảm giác trực giác của bạn về đối phương.",
      "career": "Thời điểm thích hợp để nghiên cứu, tích lũy kiến thức hoặc làm việc trong tĩnh lặng. Đừng vội vàng hành động công khai khi mọi việc chưa rõ ràng.",
      "finance": "Hãy giữ kín các kế hoạch tài chính của bạn, tin vào giác quan thứ sáu khi đứng trước các quyết định lớn.",
      "family": "Cần sự kiên nhẫn, thấu hiểu tinh tế và lắng nghe nhiều hơn là phán xét các mâu thuẫn gia đình.",
      "personalGrowth": "Kết nối sâu sắc với giấc mơ, thiền định và tiềm thức của chính mình.",
      "advice": "Hãy tin vào linh tính của bạn, giữ sự kín đáo và chờ đợi thời điểm chín muồi.",
      "strengths": [
        "Trực giác nhạy bén",
        "Khả năng thấu cảm",
        "Sự điềm tĩnh"
      ],
      "opportunities": [
        "Khai mở năng lực tâm linh",
        "Học hỏi tri thức sâu rộng",
        "Chữa lành nội tâm"
      ],
      "warnings": [
        "Tránh xa lánh thực tế hoặc giữ bí mật độc hại."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang phớt lờ trực giác bản thân hoặc bị mắc kẹt trong sự hoài nghi và bí mật tiêu cực.",
      "blockedEnergy": "Tiếng nói nội tâm bị tiếng ồn bên ngoài lấn át, hoặc sự thu mình biến thành cô lập và lạnh lùng.",
      "general": "The High Priestess ngược cảnh báo bạn đang bỏ qua những dấu hiệu cảnh báo mà linh cảm đã mách bảo, hoặc có những bí mật bị che giấu gây ra hiểu lầm.",
      "love": "Khoảng cách cảm xúc, thiếu cởi mở, nghi ngờ hoặc có những điều giấu kín chưa được sáng tỏ giữa hai người.",
      "career": "Thiếu thông tin quan trọng để ra quyết định, tin đồn thất thiệt nơi công sở hoặc cảm thấy bị cô lập trong tập thể.",
      "finance": "Những điều khoản ẩn chưa được đọc kỹ, rủi ro tài chính do thiếu minh bạch.",
      "family": "Sự im lặng đáng sợ thay vì đối thoại, những khúc mắc âm ỉ không được giải quyết.",
      "personalGrowth": "Bạn đang để lý trí kiểm soát quá mức, chối bỏ cảm xúc và trực giác tự nhiên của mình.",
      "advice": "Hãy tìm lại không gian tĩnh lặng cho riêng mình, giải phóng những bí mật nặng nề và lắng nghe trái tim.",
      "hiddenIssues": [
        "Bất an nội tâm",
        "Chối bỏ cảm giác thật",
        "Sợ bị phán xét"
      ],
      "adjustments": [
        "Thiền định định kỳ",
        "Học cách chia sẻ cởi mở hơn",
        "Tôn trọng trực giác của bản thân"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những giấc mơ, điềm báo và linh cảm lặp đi lặp lại.",
      "whatToChange": "Thói quen đưa ra quyết định vội vàng theo áp lực đám đông.",
      "whatToEmbrace": "Sự tĩnh lặng, chiều sâu nội tâm và tri thức huyền bí.",
      "pitfalls": "Đóng chặt cánh cửa tâm hồn hoặc trở nên xa cách, lãnh đạm với cuộc đời."
    },
    "message": "Trong sự tĩnh lặng tuyệt đối của tâm hồn, mọi bí ẩn của vũ trụ sẽ tự hé mở. Bạn không cần tìm kiếm câu trả lời ở đâu xa xôi ngoài chính bản thể mình.",
    "reflectionQuestions": [
      "Trực giác của bạn đang cố gắng nói với bạn điều gì trong thời gian gần đây?",
      "Có bí mật hay cảm xúc nào bạn đang cố che giấu với chính mình?",
      "Làm thế nào để bạn tạo ra khoảng lặng thiêng liêng giữa nhịp sống hối hả?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-empress",
    "name": "The Empress",
    "nameVi": "Hoàng Hậu",
    "number": 3,
    "romanNumeral": "III",
    "element": "Đất",
    "astrology": "Sao Kim (Venus)",
    "keywords": [
      "Abundance",
      "Nurturing",
      "Fertility",
      "Creativity",
      "Sensuality"
    ],
    "keywordsVi": [
      "Sự trù phú",
      "Nuôi dưỡng",
      "Sinh sôi nảy nở",
      "Sáng tạo phong phú",
      "Tình mẫu tử thiêng liêng"
    ],
    "symbolism": [
      {
        "element": "Vương miện 12 ngôi sao",
        "meaning": "Sự làm chủ 12 cung hoàng đạo và các chu kỳ tự nhiên của đất trời"
      },
      {
        "element": "Tấm khiên hình trái tim mang ký hiệu sao Kim",
        "meaning": "Tình yêu vô điều kiện, sắc đẹp và sự hòa hợp tối thượng"
      },
      {
        "element": "Cánh đồng lúa mì vàng óng",
        "meaning": "Mùa màng bội thu, sự thịnh vượng vật chất và thành quả ngọt ngào"
      },
      {
        "element": "Dòng thác nước chảy vào hồ",
        "meaning": "Dòng chảy cảm xúc dạt dào nuôi dưỡng sự sống và sáng tạo"
      },
      {
        "element": "Bộ váy thêu họa tiết quả lựu",
        "meaning": "Sự màu mỡ, khả năng sinh nở và tình yêu thương bao la"
      }
    ],
    "upright": {
      "keyMessage": "Mọi hạt mầm bạn gieo trồng bằng tình yêu thương và kiên nhẫn đang bước vào mùa đơm hoa kết trái.",
      "general": "The Empress đại diện cho Mẹ Thiên Nhiên, sự giàu có, viên mãn và tình yêu thương chăm sóc. Đây là điềm báo của sự thịnh vượng, niềm vui thụ hưởng và khả năng sáng tạo vượt bậc.",
      "love": "Mối quan hệ ấm áp, ngọt ngào và đầy đam mê. Khả năng tiến tới hôn nhân, xây dựng tổ ấm hạnh phúc hoặc chào đón thành viên mới.",
      "career": "Các dự án sáng tạo nở rộ, môi trường làm việc hòa thuận và được hỗ trợ nhiệt tình. Thành quả tài năng được công nhận xứng đáng.",
      "finance": "Tài chính dồi dào, thu hoạch lợi nhuận từ những nỗ lực kiên trì trước đó, cuộc sống thoải mái và sung túc.",
      "family": "Gia đình đầm ấm, sự gắn kết yêu thương sâu sắc, chăm sóc chu đáo cho các thế hệ.",
      "personalGrowth": "Học cách yêu thương và chăm sóc bản thân, kết nối với thiên nhiên và trân trọng vẻ đẹp cuộc sống.",
      "advice": "Hãy nuôi dưỡng ý tưởng và các mối quan hệ bằng tình yêu chân thành, tận hưởng từng khoảnh khắc ngọt ngào.",
      "strengths": [
        "Lòng trắc ẩn",
        "Óc thẩm mỹ",
        "Khả năng nuôi dưỡng"
      ],
      "opportunities": [
        "Thành công trong sáng tạo nghệ thuật",
        "Xây dựng mái ấm",
        "Gia tăng của cải"
      ],
      "warnings": [
        "Tránh nuông chiều bản thân quá mức hoặc sở hữu độc đoán."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang kiệt sức vì cho đi quá nhiều mà quên chăm sóc chính mình, hoặc gặp bế tắc trong sáng tạo.",
      "blockedEnergy": "Năng lượng nuôi dưỡng biến thành sự bao bọc ngột ngạt, hoặc cảm giác trống rỗng do thiếu thốn tình cảm.",
      "general": "The Empress ngược chỉ ra sự thiếu cân bằng: hoặc bạn đang bỏ bê bản thân để làm hài lòng người khác, hoặc đang cảm thấy bất an về vẻ ngoài và giá trị của mình.",
      "love": "Sự kiểm soát ngột ngạt nhân danh tình yêu, phụ thuộc cảm xúc hoặc cảm thấy đối phương không trân trọng sự hy sinh của bạn.",
      "career": "Cạn kiệt cảm hứng sáng tạo, môi trường làm việc độc hại thiếu sự đồng cảm, công sức chưa được đền đáp tương xứng.",
      "finance": "Chi tiêu hoang phí để bù đắp khoảng trống tinh thần, hoặc lo lắng thái quá về sự thiếu hụt tài chính.",
      "family": "Xung đột trong vai trò làm cha mẹ, sự can thiệp quá sâu vào cuộc sống của người thân.",
      "personalGrowth": "Cần học lại bài học yêu thương bản thân từ bên trong, chấp nhận vẻ đẹp tự nhiên của mình.",
      "advice": "Hãy dừng việc hy sinh mù quáng, dành thời gian nghỉ ngơi, nạp lại năng lượng và chăm sóc thân tâm.",
      "hiddenIssues": [
        "Tự ti về bản thân",
        "Hội chứng người cứu rỗi",
        "Sợ bị bỏ rơi"
      ],
      "adjustments": [
        "Thiết lập ranh giới cảm xúc",
        "Dành thời gian ở một mình",
        "Chăm sóc sức khỏe thể chất"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Dấu hiệu kiệt sức và cảm xúc quá tải do ôm đồm.",
      "whatToChange": "Thói quen xem nhẹ nhu cầu của bản thân để chiều lòng mọi người.",
      "whatToEmbrace": "Tình yêu thương vô điều kiện bắt đầu từ chính việc trân quý bản thân.",
      "pitfalls": "Biến tình yêu thành sự ràng buộc hay kiểm soát người khác."
    },
    "message": "Hãy để trái tim bạn trở thành mảnh đất màu mỡ nơi tình yêu và sự trù phú luôn sẵn sàng sinh sôi. Bạn xứng đáng được nhận lại tất cả sự dịu dàng mà bạn đã trao tặng cho thế gian.",
    "reflectionQuestions": [
      "Hôm nay bạn đã làm điều gì để thực sự nuôi dưỡng tâm hồn và cơ thể mình?",
      "Có mối quan hệ nào đang khiến bạn kiệt sức vì cho đi không giới hạn?",
      "Ý tưởng sáng tạo nào của bạn đang cần được tưới tắm bằng niềm tin và kiên nhẫn?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-emperor",
    "name": "The Emperor",
    "nameVi": "Hoàng Đế",
    "number": 4,
    "romanNumeral": "IV",
    "element": "Lửa",
    "astrology": "Bạch Dương (Aries)",
    "keywords": [
      "Authority",
      "Structure",
      "Stability",
      "Discipline",
      "Leadership"
    ],
    "keywordsVi": [
      "Quyền uy",
      "Cấu trúc trật tự",
      "Sự vững chắc",
      "Kỷ luật thép",
      "Khả năng lãnh đạo"
    ],
    "symbolism": [
      {
        "element": "Ngai vàng bằng đá khắc đầu cừu đực",
        "meaning": "Biểu tượng cung Bạch Dương - năng lượng lãnh đạo, ý chí sắt đá không lay chuyển"
      },
      {
        "element": "Cây trượng Ankh cầm tay phải",
        "meaning": "Biểu tượng sự sống vĩnh cửu và quyền cai trị thiêng liêng"
      },
      {
        "element": "Quả cầu cầm tay trái",
        "meaning": "Thế giới vật chất nằm trọn trong sự kiểm soát và trật tự"
      },
      {
        "element": "Bộ giáp sắt mặc bên trong áo choàng đỏ",
        "meaning": "Luôn sẵn sàng chiến đấu bảo vệ vương quốc và lý tưởng"
      },
      {
        "element": "Rặng núi đá cằn cỗi phía sau",
        "meaning": "Nền tảng vững chắc không thể suy suyển, vượt lên trên mọi thử thách"
      }
    ],
    "upright": {
      "keyMessage": "Hãy thiết lập trật tự, kỷ luật và nắm lấy quyền làm chủ cuộc đời bạn bằng bản lĩnh vững vàng.",
      "general": "The Emperor tượng trưng cho quyền lực, sự tổ chức, nguyên tắc và tính ổn định. Lá bài nhắc nhở bạn cần có tư duy chiến lược, kỷ luật tự giác và dũng khí để dẫn dắt mọi việc đi đúng hướng.",
      "love": "Mối quan hệ ổn định, an toàn và có cam kết lâu dài. Đối phương là người đáng tin cậy, vững chãi, luôn muốn che chở cho bạn.",
      "career": "Cơ hội thăng tiến lên vị trí lãnh đạo, quản lý. Kỹ năng tổ chức xuất sắc, khả năng giải quyết các vấn đề phức tạp bằng logic và quyết đoán.",
      "finance": "Tài chính ổn định, được quản lý chặt chẽ theo kế hoạch dài hạn. Đầu tư an toàn mang lại kết quả bền vững.",
      "family": "Là trụ cột gia đình đáng tin cậy, tạo dựng môi trường sống quy củ, an toàn cho người thân.",
      "personalGrowth": "Xây dựng tính kỷ luật thép, làm chủ thói quen xấu và hiện thực hóa mục tiêu bằng lộ trình rõ ràng.",
      "advice": "Hãy hành động dựa trên lý trí, thiết lập ranh giới rõ ràng và kiên định với mục tiêu đã chọn.",
      "strengths": [
        "Ý chí quyết đoán",
        "Kỹ năng quản trị",
        "Lòng trung kiên"
      ],
      "opportunities": [
        "Được bổ nhiệm vị trí cao",
        "Mở rộng quy mô công việc",
        "Tạo dựng uy tín"
      ],
      "warnings": [
        "Tránh trở nên quá độc đoán hoặc cứng nhắc không chịu lắng nghe."
      ]
    },
    "reversed": {
      "keyMessage": "Cảnh giác với tính độc đoán, lạm quyền hoặc ngược lại là sự thiếu kỷ luật, mất phương hướng.",
      "blockedEnergy": "Sự lãnh đạo biến thành áp bức, kiểm soát mù quáng hoặc mất đi hoàn toàn khả năng kiểm soát tình thế.",
      "general": "The Emperor ngược phản ánh sự khủng hoảng quyền lực: hoặc bạn đang gặp phải một người sếp/đối tác độc tài ép buộc bạn, hoặc bạn đang thiếu tính kỷ luật khiến mọi việc rơi vào hỗn loạn.",
      "love": "Sự gia trưởng, kiểm soát gắt gao làm nghẹt thở tình yêu, hoặc người bạn đời thiếu trách nhiệm, không chịu trưởng thành.",
      "career": "Mâu thuẫn gay gắt với cấp trên độc đoán, quy trình làm việc rườm rà quan liêu kìm hãm sự phát triển.",
      "finance": "Mất kiểm soát chi tiêu, thiếu kế hoạch dự phòng dẫn đến rủi ro tài chính nghiêm trọng.",
      "family": "Không khí gia đình căng thẳng do những quy định khắt khe thiếu tình cảm ấm áp.",
      "personalGrowth": "Bạn cần học cách linh hoạt hơn, thấu hiểu cảm xúc thay vì chỉ dựa vào sự áp đặt khô cứng.",
      "advice": "Hãy nới lỏng sự kiểm soát, lắng nghe ý kiến của người khác và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ mất kiểm soát",
        "Sự bất an về năng lực lãnh đạo",
        "Tính hiếu thắng"
      ],
      "adjustments": [
        "Học cách trao quyền cho người khác",
        "Tập lắng nghe với tâm thế cầu thị",
        "Rèn luyện sự kiên nhẫn"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Dấu hiệu của sự bảo thủ và phản kháng từ những người xung quanh.",
      "whatToChange": "Thái độ áp đặt và thói quen giải quyết vấn đề bằng mệnh lệnh thô bạo.",
      "whatToEmbrace": "Sự công bằng, tinh thần trách nhiệm và lòng bảo vệ chính trực.",
      "pitfalls": "Biến sự vững vàng thành sự cố chấp, cô lập bản thân trên đỉnh cao danh vọng."
    },
    "message": "Sức mạnh thực sự của một bậc quân vương không nằm ở khả năng khuất phục kẻ khác, mà ở năng lực làm chủ chính bản thân mình và tạo dựng bình an cho những người tin tưởng bạn.",
    "reflectionQuestions": [
      "Khía cạnh nào trong cuộc sống của bạn đang cần được sắp xếp lại trật tự và kỷ luật?",
      "Bạn có đang cố kiểm soát những điều nằm ngoài tầm tay của mình?",
      "Làm thế nào để bạn vừa giữ được nguyên tắc vừa thấu hiểu cảm xúc của người khác?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-hierophant",
    "name": "The Hierophant",
    "nameVi": "Giáo Hoàng",
    "number": 5,
    "romanNumeral": "V",
    "element": "Đất",
    "astrology": "Kim Ngưu (Taurus)",
    "keywords": [
      "Spiritual Wisdom",
      "Tradition",
      "Conformity",
      "Mentorship",
      "Institutions"
    ],
    "keywordsVi": [
      "Trí tuệ tâm linh",
      "Truyền thống",
      "Sự hòa nhập",
      "Người thầy dẫn đường",
      "Giá trị đạo đức"
    ],
    "symbolism": [
      {
        "element": "Chiếc vương miện ba tầng",
        "meaning": "Quyền lực trên ba thế giới: Thiên đàng, Trần gian và Địa ngục"
      },
      {
        "element": "Cây quyền trượng ba thánh giá",
        "meaning": "Biểu tượng của đức tin tôn giáo và trật tự tâm linh truyền thống"
      },
      {
        "element": "Hai chiếc chìa khóa bắt chéo dưới chân",
        "meaning": "Chìa khóa mở ra cánh cửa tri thức bí truyền và sự giải thoát tâm hồn"
      },
      {
        "element": "Hai đệ tử quỳ phía trước",
        "meaning": "Sự truyền dạy tri thức từ thế hệ này sang thế hệ khác"
      },
      {
        "element": "Hai cột đá hoa cương của ngôi đền",
        "meaning": "Luật pháp và sự bền vững của các định chế xã hội lâu đời"
      }
    ],
    "upright": {
      "keyMessage": "Hãy tìm kiếm sự chỉ dẫn từ những người thầy thông thái và tôn trọng các giá trị đạo đức truyền thống.",
      "general": "The Hierophant đại diện cho giáo dục, hệ thống niềm tin, đạo đức và các tổ chức xã hội. Lá bài khuyên bạn nên tuân thủ các quy tắc đã được kiểm chứng qua thời gian và tìm kiếm lời khuyên từ tiền bối.",
      "love": "Mối quan hệ hướng đến hôn nhân truyền thống, sự hòa hợp về mặt giá trị sống và quan điểm tôn giáo, gia đình ủng hộ.",
      "career": "Làm việc tốt trong môi trường doanh nghiệp lớn, trường học hoặc tổ chức có quy củ. Học hỏi từ người hướng dẫn (mentor) giàu kinh nghiệm.",
      "finance": "Đầu tư vào các kênh tài chính chính thống, an toàn; tránh các mô hình kiếm tiền phi pháp hoặc kỳ lạ.",
      "family": "Tôn trọng truyền thống gia phong, hòa giải mâu thuẫn bằng sự bao dung và các giá trị cội nguồn.",
      "personalGrowth": "Nghiên cứu triết học, tâm linh hoặc theo đuổi các khóa học chính quy để nâng cao nhận thức.",
      "advice": "Hãy hành động chuẩn mực, tôn trọng quy tắc chung và tìm kiếm lời chỉ dẫn từ người có chuyên môn.",
      "strengths": [
        "Đạo đức vững vàng",
        "Khả năng truyền đạt",
        "Sự uy tín"
      ],
      "opportunities": [
        "Tìm được người thầy tốt",
        "Gia nhập tổ chức danh tiếng",
        "Nâng cao học vấn"
      ],
      "warnings": [
        "Tránh đi theo lề thói một cách giáo điều, máy móc."
      ]
    },
    "reversed": {
      "keyMessage": "Hãy tự vấn lại những niềm tin lỗi thời và can đảm tìm con đường riêng của chính mình.",
      "blockedEnergy": "Sự cuồng tín, giáo điều cứng nhắc hoặc cuộc nổi loạn vô cớ chống lại mọi trật tự.",
      "general": "The Hierophant ngược phản ánh sự gò bó của những quy tắc cũ rích. Bạn đang cảm thấy ngột ngạt trong các định chế hoặc nhận ra những người tự xưng là thầy đang dẫn dắt bạn sai đường.",
      "love": "Áp lực định kiến gia đình về hôn nhân, sự bất đồng quan điểm sống sâu sắc hoặc mong muốn một mối quan hệ phi truyền thống.",
      "career": "Cảm thấy bị trói buộc bởi văn hóa doanh nghiệp độc hại, khao khát thoát ra để làm việc độc lập tự do.",
      "finance": "Cẩn trọng với những lời khuyên đầu tư từ các chuyên gia rởm hoặc nhóm hội đáng ngờ.",
      "family": "Mâu thuẫn thế hệ do khác biệt tư tưởng, xung đột giữa truyền thống hà khắc và tự do cá nhân.",
      "personalGrowth": "Tự xây dựng hệ giá trị đạo đức của riêng bạn thay vì mù quáng chấp nhận những gì xã hội áp đặt.",
      "advice": "Hãy dũng cảm phá vỡ những lề thói đã mục ruỗng, nhưng hãy làm điều đó bằng sự tỉnh thức chứ không phải bằng sự phá hoại.",
      "hiddenIssues": [
        "Tâm lý bầy đàn",
        "Sợ bị cộng đồng ruồng bỏ",
        "Mất niềm tin vào lý tưởng"
      ],
      "adjustments": [
        "Tư duy phản biện độc lập",
        "Lắng nghe lương tri bên trong",
        "Tìm môi trường cởi mở hơn"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những giáo điều đang kìm hãm sự sáng tạo và tự do của bạn.",
      "whatToChange": "Thói quen tuân phục vô điều kiện mà không kiểm chứng sự thật.",
      "whatToEmbrace": "Tri thức chân chính mang lại sự giải phóng tâm hồn.",
      "pitfalls": "Trở thành kẻ đạo đức giả hoặc mù quáng đi theo những giáo phái độc hại."
    },
    "message": "Người thầy vĩ đại nhất không tạo ra những đệ tử phục tùng, mà giúp họ đánh thức vị thầy thông thái vốn đã an trú bên trong trái tim mình.",
    "reflectionQuestions": [
      "Hệ niềm tin nào bạn đang theo đuổi thực sự là của bạn, và niềm tin nào do người khác cấy vào?",
      "Ai là người bạn có thể tin tưởng để xin lời khuyên trí tuệ lúc này?",
      "Làm thế nào để tôn trọng truyền thống mà vẫn giữ được sự độc bản của bản thân?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-lovers",
    "name": "The Lovers",
    "nameVi": "Những Người Yêu Nhau",
    "number": 6,
    "romanNumeral": "VI",
    "element": "Khí",
    "astrology": "Song Tử (Gemini)",
    "keywords": [
      "Love",
      "Harmony",
      "Relationships",
      "Values Alignment",
      "Choices"
    ],
    "keywordsVi": [
      "Tình yêu đích thực",
      "Sự hòa hợp",
      "Mối quan hệ thiêng liêng",
      "Sự đồng điệu giá trị",
      "Lựa chọn ngã rẽ"
    ],
    "symbolism": [
      {
        "element": "Tổng lãnh thiên thần Raphael",
        "meaning": "Vị thiên thần của sự chữa lành và tình yêu thương ban phước lành từ bầu trời"
      },
      {
        "element": "Người nam và người nữ khỏa thân",
        "meaning": "Adam và Eva trong vườn địa đàng - sự thuần khiết, chân thật không che đậy"
      },
      {
        "element": "Cây tri thức và con rắn",
        "meaning": "Sự cám dỗ, bài học về ý thức và cái giá của sự lựa chọn tự do"
      },
      {
        "element": "Cây sự sống với 12 ngọn lửa",
        "meaning": "Đam mê, năng lượng sáng tạo của 12 cung hoàng đạo"
      },
      {
        "element": "Ngọn núi lửa phía xa",
        "meaning": "Đam mê mãnh liệt và những thử thách cần vượt qua để hòa hợp"
      }
    ],
    "upright": {
      "keyMessage": "Một sự kết nối sâu sắc từ tâm hồn và một lựa chọn quan trọng đòi hỏi bạn phải sống thật với giá trị của mình.",
      "general": "The Lovers không chỉ đại diện cho tình yêu đôi lứa mà còn là biểu tượng của sự hợp nhất giữa hai bản thể, sự đồng điệu về lý tưởng và những ngã rẽ đạo đức đòi hỏi bạn phải lựa chọn bằng cả trái tim.",
      "love": "Tình yêu viên mãn, sự kết nối tri kỷ sâu sắc. Hai bạn tìm thấy ở nhau sự đồng cảm, tin tưởng tuyệt đối và sẵn sàng gắn bó dài lâu.",
      "career": "Quan hệ hợp tác làm ăn ăn ý, đôi bên cùng có lợi. Quyết định lựa chọn công việc phù hợp với đam mê và lương tâm.",
      "finance": "Hợp tác tài chính thuận lợi, các quyết định chi tiêu cần dựa trên sự đồng thuận và minh bạch.",
      "family": "Không khí yêu thương, gắn kết; giải quyết các hiểu lầm bằng sự thấu hiểu và sẻ chia chân thành.",
      "personalGrowth": "Hòa hợp giữa lý trí và cảm xúc, chấp nhận cả phần sáng lẫn phần tối bên trong mình.",
      "advice": "Hãy chọn con đường phù hợp nhất với giá trị đạo đức và tiếng gọi trái tim chân thật của bạn.",
      "strengths": [
        "Khả năng gắn kết",
        "Sự chân thành",
        "Trực giác tình cảm nhạy bén"
      ],
      "opportunities": [
        "Gặp được tri kỷ",
        "Ký kết hợp tác thành công",
        "Hàn gắn mối quan hệ rạn nứt"
      ],
      "warnings": [
        "Đừng để cảm xúc bốc đồng lấn át các cân nhắc về lâu dài."
      ]
    },
    "reversed": {
      "keyMessage": "Mối quan hệ đang mất đi sự cân bằng hoặc bạn đang đứng trước một lựa chọn sai lầm làm tổn thương lương tâm.",
      "blockedEnergy": "Sự bất hòa sâu sắc, mâu thuẫn giữa lý tưởng và thực tế, sự phản bội hoặc bất an trong cam kết.",
      "general": "The Lovers ngược phản ánh sự rạn nứt trong giao tiếp, bất đồng về hệ giá trị cốt lõi hoặc bạn đang né tránh một quyết định khó khăn trong cuộc sống.",
      "love": "Mối quan hệ rạn nứt, thiếu tin tưởng, nguy cơ có người thứ ba hoặc nhận ra hai người có những mục tiêu hoàn toàn khác biệt.",
      "career": "Bất đồng ý kiến với đối tác kinh doanh, xung đột lợi ích nơi làm việc, khó khăn trong việc đưa ra quyết định chuyển hướng nghề nghiệp.",
      "finance": "Bất đồng quan điểm tiền bạc giữa các bên hợp tác hoặc vợ chồng; nguy cơ mất mát do tin tưởng sai người.",
      "family": "Cảm giác xa cách với các thành viên trong gia đình, tranh cãi do thiếu sự nhường nhịn.",
      "personalGrowth": "Sự xung đột nội tâm gay gắt giữa điều bạn muốn và điều người khác kỳ vọng ở bạn.",
      "advice": "Hãy thành thật với chính mình về những gì bạn thực sự coi trọng, chấp nhận buông bỏ những mối nối độc hại.",
      "hiddenIssues": [
        "Sợ cô đơn",
        "Đánh đổi nguyên tắc cá nhân",
        "Giao tiếp đổ vỡ"
      ],
      "adjustments": [
        "Đối thoại cởi mở không phòng thủ",
        "Tái đánh giá mục tiêu chung",
        "Tôn trọng ranh giới của nhau"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những dấu hiệu cảnh báo về sự không tương thích trong giá trị sống.",
      "whatToChange": "Thói quen thỏa hiệp mù quáng để giữ hòa khí giả tạo.",
      "whatToEmbrace": "Tình yêu đích thực bắt đầu từ việc tôn trọng và yêu thương chính bản thân mình.",
      "pitfalls": "Đánh mất danh tính cá nhân trong một mối quan hệ."
    },
    "message": "Tình yêu chân thực nhất là tấm gương soi chiếu vẻ đẹp và sự hoàn thiện của tâm hồn bạn. Mọi lựa chọn được đưa ra từ sự chân thật sẽ luôn dẫn lối bạn về miền ánh sáng.",
    "reflectionQuestions": [
      "Giá trị cốt lõi nào bạn không bao giờ muốn đánh đổi trong tình yêu và công việc?",
      "Lựa chọn nào đang khiến bạn đắn đo giữa mong muốn của bản thân và kỳ vọng của người khác?",
      "Làm thế nào để nuôi dưỡng một mối quan hệ vừa gắn kết sâu sắc vừa tôn trọng tự do của mỗi người?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-chariot",
    "name": "The Chariot",
    "nameVi": "Cỗ Xe",
    "number": 7,
    "romanNumeral": "VII",
    "element": "Nước",
    "astrology": "Cự Giải (Cancer)",
    "keywords": [
      "Control",
      "Willpower",
      "Success",
      "Action",
      "Determination"
    ],
    "keywordsVi": [
      "Kiểm soát",
      "Ý chí sắt đá",
      "Chiến thắng vang dội",
      "Hành động quyết liệt",
      "Làm chủ số phận"
    ],
    "symbolism": [
      {
        "element": "Hai nhân sư Đen và Trắng",
        "meaning": "Hai nguồn lực đối lập bên trong: cảm xúc và lý trí, được điều khiển bằng ý chí thuần khiết thay vì dây cương"
      },
      {
        "element": "Màn trùm bầu trời đầy sao",
        "meaning": "Sự bảo hộ của vũ trụ và các nguồn năng lượng thiên thể tối cao"
      },
      {
        "element": "Ngôi sao 8 cánh trên mũ miện",
        "meaning": "Ý thức giác ngộ và ánh sáng dẫn đường cho chiến binh"
      },
      {
        "element": "Hai vầng trăng lưỡi liềm trên vai",
        "meaning": "Urim và Thummim - sự phán đoán chuẩn xác vượt qua các dao động cảm xúc"
      },
      {
        "element": "Bức tường thành phía sau",
        "meaning": "Rời bỏ vùng an toàn để tiến ra chiến trường chinh phục những chân trời mới"
      }
    ],
    "upright": {
      "keyMessage": "Bằng ý chí kiên định và sự tập trung cao độ, bạn sẽ vượt qua mọi nghịch cảnh để giành chiến thắng vang dội.",
      "general": "The Chariot biểu trưng cho sự đắc thắng nhờ kiểm soát được những lực lượng xung đột nội tại. Không có chướng ngại vật nào có thể ngăn cản bước tiến của bạn nếu bạn giữ vững mục tiêu.",
      "love": "Cùng nhau vượt qua thử thách bên ngoài để bảo vệ tình yêu. Bạn chủ động theo đuổi hạnh phúc và biết rõ mình muốn gì.",
      "career": "Đạt được bước tiến lớn trong sự nghiệp, vượt qua đối thủ cạnh tranh, hoàn thành các dự án khó khăn trước thời hạn.",
      "finance": "Kiểm soát ngân sách tốt, vượt qua giai đoạn thắt chặt tài chính để đạt được mục tiêu thịnh vượng.",
      "family": "Dẫn dắt gia đình vượt qua biến cố nhờ sự vững vàng, có thể có chuyến đi xa hoặc thay đổi nơi ở tích cực.",
      "personalGrowth": "Rèn luyện ý chí, làm chủ những xung đột cảm xúc phức tạp để hướng toàn bộ năng lượng vào mục tiêu lớn.",
      "advice": "Hãy giữ chặt tay lái cuộc đời, tập trung tuyệt đối vào mục tiêu và không dao động trước khó khăn.",
      "strengths": [
        "Ý chí phi thường",
        "Tính quyết đoán",
        "Khả năng tập trung"
      ],
      "opportunities": [
        "Đạt được thành tựu lớn",
        "Vượt qua kỳ thi/thử thách",
        "Chuyến đi thành công"
      ],
      "warnings": [
        "Đừng trở nên quá hiếu thắng hoặc chèn ép người khác trên đường đi."
      ]
    },
    "reversed": {
      "keyMessage": "Cỗ xe cuộc đời đang mất lái do sự mất kiểm soát, nóng vội hoặc bị chướng ngại vật áp đảo.",
      "blockedEnergy": "Sự bế tắc, bất lực, năng lượng bị phân tán hoặc biến thành sự hung hăng, phá hoại.",
      "general": "The Chariot ngược cảnh báo bạn đang cố đẩy mọi việc tiến lên quá nhanh bất chấp thực tế, hoặc ngược lại đang cảm thấy mất quyền kiểm soát hoàn toàn trước nghịch cảnh.",
      "love": "Tranh giành quyền lực trong tình yêu, cái tôi quá lớn khiến hai bên không ai chịu nhường ai dẫn đến va chạm gay gắt.",
      "career": "Kế hoạch bị trật bánh, dự án gặp trở ngại lớn ngoài tầm kiểm soát, cảm giác thất bại do quá chủ quan.",
      "finance": "Chi tiêu mất kiểm soát, đầu tư vội vàng vào các dự án rủi ro cao mà không tính đường lùi.",
      "family": "Căng thẳng do áp đặt ý muốn cá nhân lên các thành viên khác, nguy cơ tai nạn trong di chuyển nếu không cẩn thận.",
      "personalGrowth": "Cần học cách thả lỏng, nhận ra khi nào nên kiên trì tiến lên và khi nào nên dừng lại điều chỉnh hướng đi.",
      "advice": "Hãy đạp phanh, hít thở sâu và lấy lại bình tĩnh trước khi tiếp tục hành trình.",
      "hiddenIssues": [
        "Nóng nảy bốc đồng",
        "Cái tôi ngạo mạn",
        "Bất an sâu sắc"
      ],
      "adjustments": [
        "Xem xét lại chiến lược",
        "Học cách nhượng bộ đúng lúc",
        "Kiểm soát cơn nóng giận"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Tốc độ và sự hao mòn năng lượng thể chất, tinh thần.",
      "whatToChange": "Thói quen lao về phía trước một cách mù quáng không thèm quan sát địa hình.",
      "whatToEmbrace": "Sự kiên cường kết hợp với sự khôn ngoan điều tiết năng lượng.",
      "pitfalls": "Cháy sạch năng lượng (burnout) hoặc làm tổn thương những người đồng hành."
    },
    "message": "Chiến thắng vinh quang nhất không phải là đánh bại người khác, mà là làm chủ được hai chú nhân sư đối nghịch của nỗi sợ hãi và dục vọng ngay trong chính lòng mình.",
    "reflectionQuestions": [
      "Hai nguồn năng lượng đối lập nào đang giằng xé bên trong bạn?",
      "Bạn đang thực sự cầm lái cuộc đời mình hay để hoàn cảnh xô đẩy?",
      "Làm thế nào để kiên trì theo đuổi mục tiêu mà không đánh mất sự mềm mại của tâm hồn?"
    ],
    "arcana": "major"
  },
  {
    "id": "strength",
    "name": "Strength",
    "nameVi": "Sức Mạnh",
    "number": 8,
    "romanNumeral": "VIII",
    "element": "Lửa",
    "astrology": "Sư Tử (Leo)",
    "keywords": [
      "Inner Strength",
      "Courage",
      "Compassion",
      "Patience",
      "Soft Power"
    ],
    "keywordsVi": [
      "Sức mạnh nội tâm",
      "Lòng dũng cảm",
      "Lòng trắc ẩn",
      "Sự nhẫn nại",
      "Năng lượng mềm thuần hóa"
    ],
    "symbolism": [
      {
        "element": "Người phụ nữ nhẹ nhàng vuốt ve sư tử",
        "meaning": "Thuần phục bản năng hoang dã bằng sự dịu dàng và tình yêu thương thay vì bạo lực"
      },
      {
        "element": "Biểu tượng vô cực (Lemniscate) trên đầu",
        "meaning": "Sự kiểm soát vĩnh cửu và trí tuệ tâm linh vô biên"
      },
      {
        "element": "Vương miện và thắt lưng hoa hồng",
        "meaning": "Vẻ đẹp thuần khiết và tình yêu chiến thắng mọi sức mạnh cơ bắp"
      },
      {
        "element": "Con sư tử ngoan ngoãn vẫy đuôi",
        "meaning": "Bản năng nguyên thủy, dục vọng và nỗi sợ hãi được chuyển hóa thành nguồn năng lượng tích cực"
      },
      {
        "element": "Bầu trời vàng ấm áp",
        "meaning": "Sự khai sáng, tự tin và niềm vui thuần khiết của sự hòa hợp"
      }
    ],
    "upright": {
      "keyMessage": "Sức mạnh thực sự không đến từ sự thị uy mà đến từ lòng trắc ẩn, sự kiên nhẫn và bình an nội tâm.",
      "general": "Strength nhắc nhở rằng lòng can đảm và sự dịu dàng có thể chinh phục được những thử thách dữ dội nhất. Bạn có đủ bản lĩnh để đối diện với nỗi sợ hãi và làm chủ bản năng của mình.",
      "love": "Mối quan hệ được vun đắp bằng sự thấu hiểu, kiên nhẫn và lòng bao dung. Bạn cảm hóa được những góc cạnh khó tính của đối phương.",
      "career": "Vượt qua áp lực công việc một cách điềm tĩnh, được đồng nghiệp nể phục vì khả năng giải quyết xung đột bằng sự ôn hòa.",
      "finance": "Kiểm soát tốt ham muốn tiêu xài, kiên trì tích lũy và duy trì sự ổn định tài chính lâu dài.",
      "family": "Là chất keo gắn kết gia đình bằng sự ấm áp, nhẫn nại lắng nghe và hòa giải những bất đồng gay gắt.",
      "personalGrowth": "Chấp nhận những cảm xúc tiêu cực như giận dữ, ghen tuông mà không tự phán xét, chuyển hóa chúng thành sức mạnh sáng tạo.",
      "advice": "Hãy dùng sự dịu dàng và lòng kiên nhẫn để đối diện với mọi khó khăn; lùi một bước biển rộng trời cao.",
      "strengths": [
        "Lòng kiên nhẫn phi thường",
        "Sự điềm tĩnh",
        "Lòng từ bi"
      ],
      "opportunities": [
        "Hàn gắn mối quan hệ căng thẳng",
        "Chữa lành tổn thương cũ",
        "Làm chủ bản thân"
      ],
      "warnings": [
        "Tránh nhầm lẫn giữa sự nhẫn nại và sự chịu đựng cam chịu vô nghĩa."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang cảm thấy kiệt sức, mất tự tin hoặc để cho cơn giận dữ và bản năng mất kiểm soát.",
      "blockedEnergy": "Sự nghi ngờ bản thân, cảm giác bất an yếu thế hoặc bùng phát sự thô lỗ, thiếu kiên nhẫn.",
      "general": "Strength ngược chỉ ra rằng bạn đang để nỗi sợ hãi chế ngự, cảm thấy mình bất lực trước hoàn cảnh, hoặc ngược lại đang sử dụng vũ lực và sự hung hăng để che giấu sự tự ti.",
      "love": "Sự thiếu kiên nhẫn gây tổn thương đối phương, cảm giác bất an khiến bạn trở nên ghen tuông, kiểm soát hoặc tự ti.",
      "career": "Căng thẳng tột độ khiến bạn muốn bỏ cuộc, hoài nghi năng lực của bản thân, dễ nổi nóng với đồng nghiệp.",
      "finance": "Mất kiểm soát trước các cám dỗ chi tiêu, mua sắm theo cảm xúc để giải tỏa tâm lý bức bối.",
      "family": "Những cơn bùng nổ giận dữ làm tổn thương người thân, sự mệt mỏi khiến bạn không còn muốn cố gắng duy trì hòa khí.",
      "personalGrowth": "Cần học cách tha thứ cho chính mình, kết nối lại với nguồn năng lượng bình an sâu thẳm bên trong.",
      "advice": "Hãy cho phép bản thân nghỉ ngơi, đừng quá khắt khe với chính mình; hãy nhớ rằng bạn mạnh mẽ hơn bạn tưởng.",
      "hiddenIssues": [
        "Tự ti tiềm ẩn",
        "Sợ thất bại",
        "Đè nén cảm xúc quá lâu"
      ],
      "adjustments": [
        "Thực hành thở sâu khi căng thẳng",
        "Nhắc nhở bản thân về những thành công đã qua",
        "Tìm sự giúp đỡ khi cần"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Cơn giận dữ bộc phát và cảm giác muốn đầu hàng số phận.",
      "whatToChange": "Thói quen tự chì chiết bản thân khi mọi việc không như ý.",
      "whatToEmbrace": "Lòng trắc ẩn đối với chính những điểm yếu của mình.",
      "pitfalls": "Đè nén cảm xúc tiêu cực cho đến khi chúng nổ tung tàn khốc."
    },
    "message": "Sư tử dũng mãnh nhất trong khu rừng tâm trí bạn sẽ cúi đầu trước cái chạm nhẹ của một trái tim tràn ngập tình yêu thương và sự tĩnh lặng.",
    "reflectionQuestions": [
      "Con sư tử hoang dã nào (cơn giận, nỗi sợ, lòng kiêu hãnh) đang cần bạn thuần phục?",
      "Làm thế nào để bạn đối xử dịu dàng hơn với chính những vết thương của mình?",
      "Tình huống nào đang đòi hỏi bạn phải dùng sức mạnh mềm thay vì sự đối đầu trực diện?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-hermit",
    "name": "The Hermit",
    "nameVi": "Ẩn Sĩ",
    "number": 9,
    "romanNumeral": "IX",
    "element": "Đất",
    "astrology": "Xử Nữ (Virgo)",
    "keywords": [
      "Soul-Searching",
      "Introspection",
      "Solitude",
      "Inner Guidance",
      "Wisdom"
    ],
    "keywordsVi": [
      "Tìm kiếm chân lý",
      "Nội quan sâu sắc",
      "Sự tĩnh tại một mình",
      "Ngọn đèn dẫn lối",
      "Trí tuệ minh triết"
    ],
    "symbolism": [
      {
        "element": "Ngọn đèn lồng giơ cao chứa ngôi sao 6 cánh",
        "meaning": "Ánh sáng chân lý tâm linh (Dấu ấn Solomon) soi sáng con đường từng bước một"
      },
      {
        "element": "Cây gậy dài tay trái",
        "meaning": "Điểm tựa của kinh nghiệm sống và quyền năng bảo vệ người tìm đường"
      },
      {
        "element": "Áo choàng xám trùm đầu",
        "meaning": "Sự vô hình trước những thị phi trần tục, rút lui để bảo toàn năng lượng"
      },
      {
        "element": "Đỉnh núi tuyết trắng",
        "meaning": "Đỉnh cao của sự giác ngộ và cô đơn trên con đường tìm kiếm chân lý"
      },
      {
        "element": "Dáng đứng cúi nhìn xuống",
        "meaning": "Sẵn sàng chia sẻ ánh sáng tri thức cho những ai đang ở dưới chân núi muốn bước lên"
      }
    ],
    "upright": {
      "keyMessage": "Hãy tạm dừng lại, rút lui khỏi những ồn ào bên ngoài để lắng nghe ánh sáng chân lý từ nội tâm.",
      "general": "The Hermit là lời hiệu triệu bước vào hành trình nội quan. Đây không phải là sự cô đơn cô lập tiêu cực mà là sự tĩnh tại thiêng liêng để bạn tự nhìn nhận lại cuộc đời, mục đích sống và tìm ra câu trả lời cho riêng mình.",
      "love": "Khoảng lặng cần thiết để nhìn nhận lại tình cảm. Nếu độc thân, bạn đang tận hưởng sự tự do để hoàn thiện bản thân trước khi bắt đầu một mối quan hệ mới.",
      "career": "Cần thời gian nghiên cứu độc lập, đánh giá lại định hướng sự nghiệp lâu dài thay vì chạy theo đám đông.",
      "finance": "Thời điểm củng cố tài chính cẩn trọng, đơn giản hóa nhu cầu sống và không vung tiền vào những thứ phù phiếm.",
      "family": "Tôn trọng không gian riêng tư của mỗi người; bạn có thể đóng vai trò người cho lời khuyên thông thái khi được hỏi.",
      "personalGrowth": "Đọc sách, thiền định, hành hương hoặc tham gia các khóa học chuyên sâu để nâng cao nhận thức.",
      "advice": "Hãy dành thời gian ở một mình, soi chiếu lại hành trình đã qua và bước đi theo ngọn đèn lương tri của chính bạn.",
      "strengths": [
        "Sự thâm trầm",
        "Khả năng tự phản chiếu",
        "Tính độc lập cao"
      ],
      "opportunities": [
        "Tìm ra lẽ sống",
        "Hoàn thành nghiên cứu quan trọng",
        "Trưởng thành vượt bậc"
      ],
      "warnings": [
        "Đừng biến sự tĩnh tại thành sự xa lánh xã hội cay đắng."
      ]
    },
    "reversed": {
      "keyMessage": "Cảnh giác với sự cô lập thái quá, cảm giác cô đơn cay đắng hoặc từ chối đón nhận sự giúp đỡ từ người khác.",
      "blockedEnergy": "Sự cô lập biến thành sự trầm cảm, sợ hãi giao tiếp xã hội hoặc ngược lại là sợ ở một mình mà lao vào đám đông ồn ào.",
      "general": "The Hermit ngược cho thấy bạn đang tự giam mình trong ốc đảo cô độc, cự tuyệt lời khuyên đúng đắn hoặc quá mải mê tìm kiếm câu trả lời mà quên mất cuộc sống thực tế.",
      "love": "Sự xa cách lạnh lùng đẩy người kia ra xa, cảm giác cô đơn ngay trong chính mối quan hệ của mình.",
      "career": "Cố chấp làm một mình dẫn đến quá tải, từ chối hợp tác nhóm hoặc cảm thấy lạc lõng tại cơ quan.",
      "finance": "Thiếu thông tin thực tế do tự suy diễn, bỏ lỡ các cơ hội hợp tác tài chính tốt.",
      "family": "Tự cắt đứt liên lạc với người thân, khép kín lòng mình khiến mọi người lo lắng hiểu lầm.",
      "personalGrowth": "Cần mở cửa sổ tâm hồn để ánh sáng cuộc đời tràn vào, bước ra khỏi hang tối của sự hoài nghi.",
      "advice": "Hãy bước ra ngoài, kết nối lại với thế giới và nhớ rằng bạn không đơn độc trên hành tinh này.",
      "hiddenIssues": [
        "Nỗi sợ bị từ chối",
        "Tự phụ trí tuệ",
        "Cảm giác bị bỏ rơi"
      ],
      "adjustments": [
        "Gặp gỡ bạn bè thân thiết",
        "Chia sẻ cảm xúc chân thật",
        "Tham gia các hoạt động cộng đồng"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Xu hướng tự cô lập và những suy nghĩ tiêu cực khi ở một mình quá lâu.",
      "whatToChange": "Thói quen từ chối lời khuyên chân thành từ những người thực sự quan tâm đến bạn.",
      "whatToEmbrace": "Sự minh triết tĩnh lặng nhưng luôn sẵn sàng kết nối yêu thương.",
      "pitfalls": "Trở thành kẻ lập dị cay nghiệt hay tự phụ rằng mình thấu suốt mọi điều."
    },
    "message": "Ngọn đèn chân lý chỉ soi sáng đủ cho một bước chân tiếp theo. Hãy cứ đi bước ấy bằng niềm tin, bóng tối sẽ tự khắc lùi xa.",
    "reflectionQuestions": [
      "Bạn có đang thực sự lắng nghe chính mình hay chỉ đang trốn tránh những đối thoại cần thiết?",
      "Tri thức nào bạn đã tích lũy và đã đến lúc chia sẻ lại cho cuộc đời?",
      "Làm thế nào để cân bằng giữa sự tĩnh lặng nội tâm và trách nhiệm với cuộc sống bên ngoài?"
    ],
    "arcana": "major"
  },
  {
    "id": "wheel-of-fortune",
    "name": "Wheel of Fortune",
    "nameVi": "Bánh Xe Số Phận",
    "number": 10,
    "romanNumeral": "X",
    "element": "Lửa",
    "astrology": "Sao Mộc (Jupiter)",
    "keywords": [
      "Good Luck",
      "Karma",
      "Life Cycles",
      "Destiny",
      "Turning Point"
    ],
    "keywordsVi": [
      "May mắn bất ngờ",
      "Nhân quả tuần hoàn",
      "Chu kỳ cuộc sống",
      "Định mệnh an bài",
      "Bước ngoặt định mệnh"
    ],
    "symbolism": [
      {
        "element": "Bánh xe trung tâm với các chữ cái T-O-R-A",
        "meaning": "Vòng quay vĩnh cửu của Luật vũ trụ (Torah/Tarot/Rota) quản lý mọi sự biến thiên"
      },
      {
        "element": "Bốn sinh vật có cánh ở bốn góc (Thiên thần, Đại bàng, Sư tử, Bò đực)",
        "meaning": "Bốn chòm sao cố định (Bảo Bình, Bọ Cạp, Sư Tử, Kim Ngưu) giữ vững sự ổn định giữa biến chuyển"
      },
      {
        "element": "Nhân sư trên đỉnh bánh xe",
        "meaning": "Trí tuệ và sự cân bằng tâm linh nằm trên mọi thăng trầm của đời sống"
      },
      {
        "element": "Con rắn Typhon trượt xuống bên trái",
        "meaning": "Sự suy tàn tạm thời và những thử thách cần thiết của chu kỳ sinh tử"
      },
      {
        "element": "Vị thần đầu chó Anubis leo lên bên phải",
        "meaning": "Sự phục sinh, tái sinh và vươn lên đón nhận ánh sáng mới"
      }
    ],
    "upright": {
      "keyMessage": "Bánh xe cuộc đời đang quay theo chiều hướng tích cực, mang đến những cơ hội và bước ngoặt may mắn bất ngờ.",
      "general": "Wheel of Fortune nhắc nhở rằng mọi thứ trong vũ trụ đều vận động theo chu kỳ. Nếu bạn đang ở trong giai đoạn khó khăn, ánh sáng sắp sửa trở lại. Hãy sẵn sàng đón nhận những món quà định mệnh.",
      "love": "Gặp gỡ định mệnh, sự gắn kết duyên nợ bất ngờ. Mối quan hệ bước sang một giai đoạn mới tươi sáng và hòa hợp hơn.",
      "career": "Thời cơ chín muồi, quý nhân phù trợ, cơ hội thăng tiến hoặc trúng thưởng dự án lớn ngoài mong đợi.",
      "finance": "Vận may tài chính mỉm cười, các khoản đầu tư bắt đầu sinh lời, tình hình tiền bạc xoay chuyển khởi sắc.",
      "family": "Những bất hòa cũ được hóa giải, gia đình đón nhận tin vui lớn hoặc sự thay đổi tích cực về gia cảnh.",
      "personalGrowth": "Hiểu và chấp nhận quy luật vô thường của cuộc đời, sống trọn vẹn ở tâm của bánh xe bình an.",
      "advice": "Hãy nắm bắt cơ hội ngay khi nó xuất hiện, luôn giữ thái độ khiêm tốn và tích cực gieo nhân lành.",
      "strengths": [
        "Vận khí hanh thông",
        "Sự linh hoạt thích ứng",
        "Niềm tin vào quy luật vũ trụ"
      ],
      "opportunities": [
        "Bước ngoặt sự nghiệp",
        "Gặp gỡ tri kỷ định mệnh",
        "Thành công bất ngờ"
      ],
      "warnings": [
        "Hãy nhớ rằng vạn vật luôn biến đổi; đừng chủ quan khi đang ở trên đỉnh cao."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang trải qua giai đoạn đi xuống của chu kỳ hoặc cố bám víu chống lại những thay đổi tất yếu.",
      "blockedEnergy": "Cảm giác xui xẻo, kháng cự lại sự thay đổi, cảm thấy mình là nạn nhân bất lực của số phận.",
      "general": "Wheel of Fortune ngược cảnh báo về những trở ngại bất ngờ hoặc cảm giác mọi việc đang tuột khỏi tầm kiểm soát. Đây là bài học về sự buông bỏ kháng cự và học cách thuận theo dòng chảy.",
      "love": "Những biến cố bất ngờ gây xáo trộn tình cảm, cảm giác duyên số trắc trở; cần kiên nhẫn chờ cơn bão qua đi.",
      "career": "Kế hoạch bị hoãn lại do những yếu tố khách quan, công việc gặp trục trặc bất ngờ đòi hỏi sự kiên nhẫn thích ứng.",
      "finance": "Biến động tài chính bất lợi, cần thắt chặt chi tiêu và tránh các vụ đầu cơ may rủi.",
      "family": "Những biến động ngoài ý muốn trong gia đình, cần các thành viên nắm chặt tay nhau vượt qua thử thách.",
      "personalGrowth": "Nhận ra rằng thất bại cũng là một phần tất yếu của quá trình tiến hóa tâm hồn.",
      "advice": "Đừng cố sức chống lại dòng nước chảy xiết; hãy bình tâm, đứng ở trung tâm bánh xe và chờ thời cơ mới.",
      "hiddenIssues": [
        "Tâm lý nạn nhân",
        "Cố chấp kiểm soát những điều bất khả thi",
        "Trách móc số phận"
      ],
      "adjustments": [
        "Chấp nhận thực tế với lòng thanh thản",
        "Tìm bài học ẩn sau nghịch cảnh",
        "Giữ vững niềm tin"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những dấu hiệu chuyển biến của thời thế và cơ hội lướt qua.",
      "whatToChange": "Thói quen chống cự lại quy luật tự nhiên và sự biến đổi của cuộc sống.",
      "whatToEmbrace": "Tinh thần tùy duyên, giữ tâm bình thản giữa dòng đời vạn biến.",
      "pitfalls": "Đổ lỗi cho số phận thay vì tự chịu trách nhiệm cho các hành động của mình."
    },
    "message": "Dù bánh xe số phận quay lên thiên đàng hay hạ xuống vực thẳm, kẻ giữ được tâm mình ở trục trung tâm tĩnh lặng sẽ mãi mãi là người làm chủ sự tự do đích thực.",
    "reflectionQuestions": [
      "Bài học lớn nhất mà chu kỳ cuộc sống vừa qua mang lại cho bạn là gì?",
      "Bạn có đang cố chấp níu kéo một điều gì đó đã đến lúc phải thay đổi?",
      "Làm thế nào để bạn duy trì sự an lạc ngay cả khi hoàn cảnh bên ngoài đang biến động dữ dội?"
    ],
    "arcana": "major"
  },
  {
    "id": "justice",
    "name": "Justice",
    "nameVi": "Công Lý",
    "number": 11,
    "romanNumeral": "XI",
    "element": "Khí",
    "astrology": "Thiên Bình (Libra)",
    "keywords": [
      "Justice",
      "Fairness",
      "Truth",
      "Cause and Effect",
      "Law"
    ],
    "keywordsVi": [
      "Công lý liêm chính",
      "Sự công bằng",
      "Chân lý rõ ràng",
      "Quy luật Nhân Quả",
      "Pháp luật và chuẩn mực"
    ],
    "symbolism": [
      {
        "element": "Thanh kiếm dựng thẳng tay phải",
        "meaning": "Sự dứt khoát của lý trí, khả năng cắt bỏ ảo tưởng và thực thi sự thật"
      },
      {
        "element": "Cán cân thăng bằng tay trái",
        "meaning": "Sự cân nhắc công minh, cân bằng giữa trực giác và lý lẽ thực tế"
      },
      {
        "element": "Màn che màu tím phía sau",
        "meaning": "Lòng trắc ẩn bao trùm lên phán quyết, sự thông thái của thế giới vô hình"
      },
      {
        "element": "Mũi giày nhô ra dưới vạt áo",
        "meaning": "Sẵn sàng hành động để bảo vệ lẽ phải và thực thi công lý"
      },
      {
        "element": "Viên ngọc vuông trên ngực áo",
        "meaning": "Nền tảng của trật tự, tính chính trực và sự kiên định không thiên vị"
      }
    ],
    "upright": {
      "keyMessage": "Mọi quyết định bạn đưa ra cần dựa trên sự thật, tính công bằng và sự chịu trách nhiệm hoàn toàn cho kết quả.",
      "general": "Justice đại diện cho sự thật trần trụi, sự công bằng và luật nhân quả không sai một ly. Những gì bạn gieo hôm nay sẽ quyết định chính xác những gì bạn gặt hái ngày mai.",
      "love": "Mối quan hệ bình đẳng, tôn trọng lẫn nhau. Giải quyết khúc mắc bằng đối thoại thẳng thắn, công tâm và trung thực.",
      "career": "Ký kết hợp đồng minh bạch, giải quyết tranh chấp pháp lý thành công, được đánh giá công bằng với năng lực thực sự.",
      "finance": "Cân đối chi tiêu chuẩn xác, thanh toán sòng phẳng các khoản nợ, minh bạch trong mọi sổ sách tài chính.",
      "family": "Xử lý phân minh các mâu thuẫn giữa các thành viên, duy trì sự tôn trọng và nguyên tắc công bằng trong gia đình.",
      "personalGrowth": "Nhìn nhận bản thân một cách khách quan, không tự lừa dối cũng không quá khắt khe tự trừng phạt.",
      "advice": "Hãy hành động chính trực, cân nhắc mọi hệ quả trước khi quyết định và dám chịu trách nhiệm.",
      "strengths": [
        "Tính liêm chính",
        "Tư duy logic sắc sảo",
        "Lòng trung thực"
      ],
      "opportunities": [
        "Thắng lợi trong các vụ kiện tụng",
        "Ký kết hợp đồng quan trọng",
        "Khôi phục lại danh dự"
      ],
      "warnings": [
        "Tránh phán xét người khác một cách khô khan, thiếu đi lòng từ bi."
      ]
    },
    "reversed": {
      "keyMessage": "Cảnh giác với sự bất công, định kiến thiên vị hoặc bạn đang trốn tránh trách nhiệm cho hành vi của mình.",
      "blockedEnergy": "Sự dối trá, thiên vị, phán xét bất công hoặc bị đối xử không công bằng trong các mối quan hệ.",
      "general": "Justice ngược cảnh báo về sự bất minh trong các cam kết, nguy cơ vướng vào rắc rối pháp lý hoặc cảm giác bất lực khi chứng kiến điều bất công mà không thể can thiệp.",
      "love": "Sự thiếu trung thực, che giấu sự thật, cảm giác một bên luôn phải hy sinh nhiều hơn mà không được ghi nhận.",
      "career": "Bị đối xử bất công tại nơi làm việc, đồng nghiệp chơi xấu, hợp đồng có điều khoản gài bẫy bất lợi.",
      "finance": "Tranh chấp tài chính, gian lận tiền bạc hoặc bị phạt do vi phạm các quy định pháp luật.",
      "family": "Sự thiên vị giữa con cái, tranh chấp quyền thừa kế hoặc những lời phán xét cay độc làm tổn thương người thân.",
      "personalGrowth": "Bạn cần ngừng đổ lỗi cho hoàn cảnh, can đảm nhìn nhận phần sai của mình để sửa chữa.",
      "advice": "Hãy tự soi xét lương tâm của chính mình trước khi phán xét thế giới; sự thật cuối cùng sẽ luôn chiến thắng.",
      "hiddenIssues": [
        "Tự lừa dối bản thân",
        "Sợ đối diện hậu quả",
        "Định kiến hẹp hòi"
      ],
      "adjustments": [
        "Minh bạch trong mọi giấy tờ",
        "Thừa nhận sai lầm và xin lỗi chân thành",
        "Tìm kiếm sự tư vấn pháp lý uy tín"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Các điều khoản pháp lý và những chi tiết thiếu minh bạch.",
      "whatToChange": "Thói quen bao biện cho những hành vi không đúng đắn của bản thân.",
      "whatToEmbrace": "Sự liêm chính tuyệt đối ngay cả khi không có ai quan sát.",
      "pitfalls": "Biến công lý thành sự trả thù tàn nhẫn thiếu tình người."
    },
    "message": "Cán cân của vũ trụ có thể dao động, nhưng nó không bao giờ sai lệch. Hãy sống sao cho thanh kiếm của chân lý luôn là bạn đồng hành chứ không phải nỗi khiếp sợ của bạn.",
    "reflectionQuestions": [
      "Bạn có đang hoàn toàn trung thực với chính mình trong tình huống này?",
      "Quyết định nào bạn cần đưa ra để khôi phục lại sự công bằng và cân bằng trong cuộc sống?",
      "Làm thế nào để kết hợp giữa sự công minh của lý trí và lòng trắc ẩn của trái tim?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-hanged-man",
    "name": "The Hanged Man",
    "nameVi": "Người Treo Ngược",
    "number": 12,
    "romanNumeral": "XII",
    "element": "Nước",
    "astrology": "Sao Hải Vương (Neptune)",
    "keywords": [
      "Surrender",
      "New Perspective",
      "Letting Go",
      "Pause",
      "Sacrifice"
    ],
    "keywordsVi": [
      "Đầu hàng thông thái",
      "Góc nhìn mới mẻ",
      "Buông bỏ kiểm soát",
      "Tạm dừng lại",
      "Sự hy sinh có ý thức"
    ],
    "symbolism": [
      {
        "element": "Người đàn ông bị treo ngược bằng một chân",
        "meaning": "Đảo ngược góc nhìn thế tục, tạm dừng mọi hành động cưỡng cầu bên ngoài"
      },
      {
        "element": "Vầng hào quang sáng quanh đầu",
        "meaning": "Sự giác ngộ tâm linh xuất hiện chính trong khoảnh khắc buông bỏ hoàn toàn"
      },
      {
        "element": "Cây thập tự hình chữ T (Tau Cross) đâm chồi xanh",
        "meaning": "Cây sự sống - từ sự hy sinh và tĩnh lặng, sự sống mới sẽ sinh sôi"
      },
      {
        "element": "Khuôn mặt thanh thản, an nhiên",
        "meaning": "Tự nguyện đầu hàng hoàn cảnh chứ không phải bị trừng phạt đau đớn"
      },
      {
        "element": "Đôi chân tạo thành hình số 4 và hai tay hình tam giác",
        "meaning": "Nước chảy ngược, năng lượng vật chất thăng hoa thành ánh sáng tinh thần"
      }
    ],
    "upright": {
      "keyMessage": "Hãy buông bỏ sự cưỡng cầu, tạm dừng hành động và nhìn nhận vấn đề từ một góc độ hoàn toàn mới.",
      "general": "The Hanged Man cho thấy bạn đang ở trong giai đoạn đình trệ cần thiết. Càng vùng vẫy cố kiểm soát, bạn càng bị trói chặt. Hãy chấp nhận dừng lại để tâm trí được khai mở.",
      "love": "Tạm gác lại cái tôi và sự kiểm soát, nhìn nhận cảm xúc từ góc nhìn của đối phương. Có thể cần hy sinh một số thói quen cũ để nuôi dưỡng tình yêu.",
      "career": "Dự án tạm thời gián đoạn hoặc chưa có bước tiến rõ rệt. Đừng nôn nóng, hãy tận dụng thời gian này để xem xét lại chiến lược.",
      "finance": "Thời điểm cần tiết chế các kế hoạch đầu tư lớn; kiên nhẫn quan sát thị trường thay vì vội vàng hành động.",
      "family": "Cần sự kiên nhẫn lắng nghe, chấp nhận buông bỏ những kỳ vọng áp đặt lên người thân.",
      "personalGrowth": "Khai mở nhận thức tâm linh sâu sắc thông qua việc chấp nhận hiện thực và buông bỏ bản ngã.",
      "advice": "Hãy thả lỏng, ngừng thúc ép mọi việc và cho phép mọi thứ diễn ra tự nhiên theo cách của nó.",
      "strengths": [
        "Khả năng đổi mới góc nhìn",
        "Sự kiên nhẫn sâu sắc",
        "Tinh thần buông bỏ"
      ],
      "opportunities": [
        "Giác ngộ chân lý mới",
        "Tháo gỡ bế tắc lâu năm",
        "Chữa lành nội tâm"
      ],
      "warnings": [
        "Tránh tự biến mình thành nạn nhân cam chịu một cách thụ động."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang kháng cự lại sự hy sinh cần thiết, cố chấp bám víu góc nhìn cũ hoặc hy sinh vô ích vì người khác.",
      "blockedEnergy": "Sự bế tắc kéo dài do không chịu buông bỏ, cảm giác bất lực giả tạo hoặc đóng vai người tử vì đạo mù quáng.",
      "general": "The Hanged Man ngược cho thấy bạn đã treo mình quá lâu mà không thu được bài học gì, hoặc đang ngoan cố từ chối thay đổi góc nhìn dù sự thật đã hiển hiện rõ ràng.",
      "love": "Mối quan hệ bế tắc không lối thoát, bạn chấp nhận chịu đựng tổn thương vì sợ cô đơn thay vì dũng cảm bước tiếp.",
      "career": "Lãng phí thời gian và công sức vào một dự án không có tương lai, chần chừ không dám đưa ra quyết định thay đổi.",
      "finance": "Chịu thiệt thòi tài chính vì cả nể, không dám đòi lại những gì thuộc về mình.",
      "family": "Cảm giác bị lợi dụng lòng tốt trong gia đình, sự hy sinh một chiều không được trân trọng.",
      "personalGrowth": "Đã đến lúc bạn phải tự cắt dây trói, đứng thẳng dậy và hành động để giải phóng chính mình.",
      "advice": "Hãy ngừng hy sinh vô nghĩa; nếu việc dừng lại không còn đem lại giác ngộ, hãy bắt đầu bước đi.",
      "hiddenIssues": [
        "Tâm lý tử vì đạo",
        "Sợ thay đổi",
        "Trì hoãn kéo dài"
      ],
      "adjustments": [
        "Cắt đứt những ràng buộc độc hại",
        "Học cách từ chối",
        "Chủ động hành động"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Dấu hiệu của sự hy sinh một chiều không mang lại giá trị tiến hóa.",
      "whatToChange": "Thói quen phản kháng lại những giai đoạn tĩnh lặng tất yếu của cuộc đời.",
      "whatToEmbrace": "Sự giác ngộ đến từ khả năng nhìn cuộc đời bằng đôi mắt hoàn toàn khác biệt.",
      "pitfalls": "Chìm đắm trong sự thụ động và tự trách bản thân yếu kém."
    },
    "message": "Đôi khi, để nhìn thấy chân trời thực sự, bạn phải can đảm để thế giới cũ của mình bị đảo lộn. Khi bạn ngừng níu giữ, bạn mới nhận ra vũ trụ đang nâng đỡ bạn.",
    "reflectionQuestions": [
      "Điều gì bạn đang cố chấp nắm giữ mà vũ trụ đang khuyên bạn nên buông tay?",
      "Nếu nhìn vấn đề khó khăn này từ góc độ của người đối diện, bạn sẽ thấy điều gì?",
      "Làm thế nào để phân biệt giữa sự buông bỏ thông thái và sự trốn tránh trách nhiệm?"
    ],
    "arcana": "major"
  },
  {
    "id": "death",
    "name": "Death",
    "nameVi": "Cái Chết",
    "number": 13,
    "romanNumeral": "XIII",
    "element": "Nước",
    "astrology": "Bọ Cạp (Scorpio)",
    "keywords": [
      "Transformation",
      "Endings",
      "Change",
      "Transition",
      "Rebirth"
    ],
    "keywordsVi": [
      "Sự chuyển hóa",
      "Kết thúc chu kỳ cũ",
      "Biến đổi sâu sắc",
      "Chuyển giao thời khắc",
      "Tái sinh từ tro tàn"
    ],
    "symbolism": [
      {
        "element": "Bộ xương kỵ sĩ mặc giáp đen cưỡi ngựa trắng",
        "meaning": "Sự bất khả kháng của quy luật tự nhiên, ngựa trắng tượng trưng cho sự thuần khiết của tiến trình"
      },
      {
        "element": "Lá cờ đen thêu hoa hồng trắng Mystic Rose 5 cánh",
        "meaning": "Sự sống bất diệt, cái đẹp tái sinh ngay sau sự hủy diệt của cái cũ"
      },
      {
        "element": "Các nhân vật trước mặt ngựa (Vua, Giáo hoàng, Phụ nữ, Trẻ em)",
        "meaning": "Không ai có thể trốn tránh sự chuyển hóa: địa vị, niềm tin, giới tính hay tuổi tác"
      },
      {
        "element": "Mặt trời mọc giữa hai ngọn tháp phía chân trời",
        "meaning": "Bình minh của một kỷ nguyên mới, sự bất tử của linh hồn sau cái chết thể xác"
      },
      {
        "element": "Dòng sông phía sau với con thuyền",
        "meaning": "Dòng sông Styx đưa linh hồn qua bến bờ mới của nhận thức"
      }
    ],
    "upright": {
      "keyMessage": "Một giai đoạn cũ đang khép lại để nhường chỗ cho một khởi đầu mới mẻ và sâu sắc hơn rất nhiều.",
      "general": "Death hiếm khi mang ý nghĩa cái chết thể xác. Lá bài là biểu tượng hùng vĩ nhất của sự chuyển hóa: chấm dứt những điều đã lỗi thời để tái sinh mạnh mẽ hơn. Đừng sợ hãi sự kết thúc.",
      "love": "Chấm dứt những mô thức quan hệ độc hại cũ, buông bỏ tình cảm dĩ vãng để sẵn sàng cho tình yêu đích thực.",
      "career": "Rời bỏ công việc không còn mang lại ý nghĩa, chuyển đổi mô hình kinh doanh hoặc kết thúc một dự án để bước sang tầm cao mới.",
      "finance": "Thanh lý những khoản đầu tư kém hiệu quả, tái cấu trúc toàn bộ tài chính cá nhân một cách triệt để.",
      "family": "Thay đổi lớn trong lối sống gia đình, buông bỏ những mâu thuẫn truyền đời để hàn gắn.",
      "personalGrowth": "Lột xác ngoạn mục về mặt tâm hồn, rũ bỏ bản ngã cũ để trở thành phiên bản chân thật nhất của bạn.",
      "advice": "Hãy chấp nhận để cái cũ ra đi với lòng biết ơn, mở rộng vòng tay đón nhận sự tái sinh.",
      "strengths": [
        "Khả năng thích ứng chuyển hóa",
        "Lòng dũng cảm buông bỏ",
        "Sự kiên cường phi thường"
      ],
      "opportunities": [
        "Cơ hội làm lại từ đầu",
        "Giải phóng gánh nặng quá khứ",
        "Thức tỉnh tâm linh sâu sắc"
      ],
      "warnings": [
        "Đừng cố níu kéo những điều đã cạn kiệt sinh khí."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang sợ hãi sự thay đổi, cố chấp bám víu vào quá khứ và trì hoãn sự chuyển hóa tất yếu.",
      "blockedEnergy": "Sự níu kéo tuyệt vọng, sợ hãi bước vào vùng vô định, kéo dài nỗi đau một cách không cần thiết.",
      "general": "Death ngược cho thấy bạn biết rõ một điều gì đó đã kết thúc nhưng vẫn cố níu giữ vì sợ cô đơn hoặc sợ bất định. Sự trì hoãn này chỉ khiến quá trình trở nên đau đớn hơn.",
      "love": "Bám víu vào một mối quan hệ đã nguội lạnh, không dám đối diện với thực tế chia tay hoặc tha thứ cho người cũ.",
      "career": "Chôn chân ở một công việc bế tắc chỉ vì sự an toàn giả tạo, từ chối cơ hội đổi mới bản thân.",
      "finance": "Tiếp tục đổ tiền vào dự án thua lỗ vì tâm lý tiếc của, không dám cắt lỗ dứt khoát.",
      "family": "Né tránh đối thoại về những biến động không thể đảo ngược trong gia đình.",
      "personalGrowth": "Cần can đảm đối diện với nỗi sợ cái chết và nỗi sợ mất mát; giải thoát bản thân khỏi xiềng xích quá khứ.",
      "advice": "Hãy dũng cảm buông tay; cái chết của cái cũ là điều kiện duy nhất để cái mới có thể sinh ra.",
      "hiddenIssues": [
        "Sợ sự vô định",
        "Bám chấp ký ức cũ",
        "Chối bỏ thực tại"
      ],
      "adjustments": [
        "Chấp nhận quy luật buông bỏ",
        "Dọn dẹp không gian sống và tâm trí",
        "Tìm kiếm sự hỗ trợ tâm lý"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Cảm giác tiếc nuối và thói quen ngoái nhìn lại quá khứ.",
      "whatToChange": "Hành vi bám víu vào những gì đã không còn phục vụ cho sự phát triển của bạn.",
      "whatToEmbrace": "Niềm tin vào bình minh tươi sáng đang chờ đợi sau màn đêm.",
      "pitfalls": "Chống cự lại tiến trình tự nhiên khiến nỗi đau kéo dài dai dẳng."
    },
    "message": "Không có hạt giống nào có thể nảy mầm nếu nó không can đảm để lớp vỏ bọc ngoài vỡ tan trong lòng đất tối. Sự kết thúc chỉ là một cánh cửa ngụy trang của sự tái sinh bất diệt.",
    "reflectionQuestions": [
      "Thói quen, mối quan hệ hay niềm tin nào trong bạn đã cạn kiệt sinh khí và cần được khép lại?",
      "Nỗi sợ hãi nào đang khiến bạn không dám bước qua ngưỡng cửa chuyển hóa?",
      "Bạn mong muốn tái sinh thành con người như thế nào sau giai đoạn này?"
    ],
    "arcana": "major"
  },
  {
    "id": "temperance",
    "name": "Temperance",
    "nameVi": "Tiết Chế",
    "number": 14,
    "romanNumeral": "XIV",
    "element": "Lửa",
    "astrology": "Nhân Mã (Sagittarius)",
    "keywords": [
      "Balance",
      "Moderation",
      "Patience",
      "Purpose",
      "Alchemy"
    ],
    "keywordsVi": [
      "Cân bằng tĩnh tại",
      "Sự chừng mực",
      "Kiên nhẫn dung hòa",
      "Mục đích cao cả",
      "Thuật giả kim nội tâm"
    ],
    "symbolism": [
      {
        "element": "Thiên thần rót nước giữa hai chiếc cốc",
        "meaning": "Sự pha trộn hoàn hảo giữa hai thái cực, dòng chảy liên tục của cảm xúc và tâm linh"
      },
      {
        "element": "Một chân trên cạn, một chân dưới nước",
        "meaning": "Sự cân bằng tuyệt đối giữa thế giới vật chất thực tế và cõi tiềm thức trực giác"
      },
      {
        "element": "Hình tam giác trong hình vuông trên ngực áo",
        "meaning": "Bản chất thiêng liêng (3) được bảo vệ và hiện thực hóa trong thế giới vật chất (4)"
      },
      {
        "element": "Bông hoa diên vĩ nở rộ bên bờ",
        "meaning": "Biểu tượng của Iris - nữ thần cầu vồng nối liền trời và đất, mang lại hy vọng"
      },
      {
        "element": "Con đường uốn lượn dẫn tới vương miện rực sáng trên núi",
        "meaning": "Hành trình kiên trì và thanh lọc tâm hồn hướng tới sự giác ngộ cao nhất"
      }
    ],
    "upright": {
      "keyMessage": "Hãy giữ sự chừng mực, hòa giải các xung đột và kiên nhẫn tìm điểm cân bằng trung đạo trong mọi việc.",
      "general": "Temperance là nghệ thuật của sự điều hòa và dung hợp. Lá bài khuyên bạn không nên đi đến bất kỳ thái cực cực đoan nào. Bằng sự nhẫn nại và điềm tĩnh, bạn sẽ tạo ra điều kỳ diệu từ sự hòa hợp.",
      "love": "Mối quan hệ hòa hợp, bình yên và thấu hiểu sâu sắc. Hai bạn biết nhường nhịn, dung hòa những điểm khác biệt của nhau.",
      "career": "Hợp tác làm việc nhóm ăn ý, dung hòa các ý kiến trái chiều, tiến độ công việc ổn định và bền vững.",
      "finance": "Tài chính cân bằng ổn định, quản lý dòng tiền khéo léo, tránh mua sắm bốc đồng hay đầu tư mạo hiểm.",
      "family": "Bầu không khí yên ấm, đóng vai trò người hòa giải mang lại sự đồng thuận và yêu thương trong gia đình.",
      "personalGrowth": "Luyện tập lối sống điều độ, dung hợp giữa công việc và nghỉ ngơi, chăm sóc cả thể chất lẫn tinh thần.",
      "advice": "Hãy kiên nhẫn, điềm đạm và tìm kiếm giải pháp trung hòa mang lại lợi ích cho tất cả các bên.",
      "strengths": [
        "Sự điềm tĩnh",
        "Khả năng hòa giải",
        "Lối sống chừng mực"
      ],
      "opportunities": [
        "Hàn gắn xung đột",
        "Phát triển sức khỏe toàn diện",
        "Đạt tới sự an lạc nội tâm"
      ],
      "warnings": [
        "Tránh sự nhượng bộ quá mức làm mờ đi bản sắc riêng của bạn."
      ]
    },
    "reversed": {
      "keyMessage": "Cuộc sống của bạn đang rơi vào tình trạng mất cân bằng nghiêm trọng do sự thái quá hoặc nóng vội.",
      "blockedEnergy": "Sự cực đoan, thiếu kiên nhẫn, mâu thuẫn nội tâm gay gắt hoặc nghiện ngập những thói quen xấu.",
      "general": "Temperance ngược cảnh báo về sự mất kiểm soát: bạn đang làm việc quá sức, ăn uống vô độ, hoặc để cảm xúc bốc đồng chi phối các quyết định quan trọng.",
      "love": "Xung đột do bất đồng quan điểm không chịu hòa giải, thiếu kiên nhẫn với đối phương, tình cảm khi thì quá nồng nhiệt lúc lại quá lạnh nhạt.",
      "career": "Bất đồng gay gắt với đồng nghiệp, nóng vội muốn thấy kết quả ngay dẫn đến sai sót trong dự án.",
      "finance": "Chi tiêu mất cân đối, vung tay quá trán hoặc dồn hết trứng vào một giỏ rủi ro.",
      "family": "Căng thẳng do thiếu sự lắng nghe, các thành viên không tìm được tiếng nói chung.",
      "personalGrowth": "Cần thanh lọc cơ thể và tâm trí, dừng các hành vi độc hại phá hủy sức khỏe và sự bình an.",
      "advice": "Hãy chậm lại, xem xét lại chế độ sinh hoạt và khôi phục lại sự cân bằng trước khi mọi việc đi quá xa.",
      "hiddenIssues": [
        "Nóng vội bốc đồng",
        "Mất cân bằng cảm xúc",
        "Nghiện hành vi cực đoan"
      ],
      "adjustments": [
        "Thiết lập lại thời gian biểu lành mạnh",
        "Học cách thở sâu và thư giãn",
        "Hạn chế các chất kích thích"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những dấu hiệu của sự quá tải, mệt mỏi và thói quen sinh hoạt cực đoan.",
      "whatToChange": "Tâm lý muốn mọi thứ phải diễn ra ngay lập tức theo ý mình.",
      "whatToEmbrace": "Nghệ thuật của sự nhẫn nại và sức mạnh của sự điều hòa mềm mại.",
      "pitfalls": "Đổ lỗi cho hoàn cảnh thay vì tự điều chỉnh lối sống của chính mình."
    },
    "message": "Phép màu không nằm ở việc ép buộc hai dòng nước chảy ngược, mà ở việc nhẹ nhàng hòa quyện chúng thành một dòng sông êm đềm xuôi về biển lớn.",
    "reflectionQuestions": [
      "Khía cạnh nào trong cuộc sống của bạn đang bị lệch về một thái cực quá mức?",
      "Làm thế nào để bạn dung hòa những mâu thuẫn bên trong mà không đánh mất chính mình?",
      "Bạn có đủ kiên nhẫn để chờ đợi chiếc bánh cuộc đời chín từ từ trong lò nướng của thời gian?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-devil",
    "name": "The Devil",
    "nameVi": "Ác Quỷ",
    "number": 15,
    "romanNumeral": "XV",
    "element": "Đất",
    "astrology": "Ma Kết (Capricorn)",
    "keywords": [
      "Shadow Self",
      "Attachment",
      "Addiction",
      "Restriction",
      "Illusion of Bondage"
    ],
    "keywordsVi": [
      "Phần bóng tối (Shadow)",
      "Sự trói buộc",
      "Cám dỗ dục vọng",
      "Ảo tưởng bất lực",
      "Giải phóng xiềng xích"
    ],
    "symbolism": [
      {
        "element": "Ác quỷ Baphomet ngồi trên bệ đá",
        "meaning": "Bản năng động vật, nỗi sợ hãi và những cám dỗ vật chất thấp kém giam cầm con người"
      },
      {
        "element": "Hai người nam nữ bị xích vào bệ đá",
        "meaning": "Sợi xích đeo lỏng lẻo quanh cổ - họ hoàn toàn có thể tự tháo ra nhưng chọn ở lại vì ảo tưởng hoặc thỏa hiệp"
      },
      {
        "element": "Ngọn đuốc chúc xuống của quỷ",
        "meaning": "Lãng phí ngọn lửa sáng tạo tâm linh vào các đam mê mù quáng và dục vọng nhất thời"
      },
      {
        "element": "Ngôi sao 5 cánh lộn ngược trên trán Baphomet",
        "meaning": "Vật chất áp đảo tinh thần, bản năng hoang dã làm chủ lý trí"
      },
      {
        "element": "Đuôi có quả nho và ngọn lửa của hai nhân vật",
        "meaning": "Sự say xỉn trong khoái lạc giác quan và cơn giận thiêu đốt"
      }
    ],
    "upright": {
      "keyMessage": "Hãy nhận diện những ảo tưởng và sợi xích đang trói buộc bạn; bạn có đủ tự do để tháo bỏ chúng bất cứ lúc nào.",
      "general": "The Devil không phải là ma quỷ siêu nhiên mà chính là cái bóng (shadow self) bên trong bạn: nỗi sợ hãi, lòng tham, sự gắn bám mù quáng vào tiền bạc, quyền lực hoặc một mối quan hệ độc hại.",
      "love": "Sự hấp dẫn giới tính mãnh liệt nhưng mang tính chiếm hữu, ghen tuông độc đoán hoặc phụ thuộc cảm xúc (codependency).",
      "career": "Cảm giác bị mắc kẹt trong công việc kiếm ra tiền nhưng bóp nghẹt tâm hồn, môi trường công sở thao túng và độc hại.",
      "finance": "Nợ nần chồng chất do thói quen tiêu xài hưởng thụ, cám dỗ làm giàu bất chính hoặc bị đồng tiền kiểm soát.",
      "family": "Những mô thức thao túng tâm lý gia truyền, sự áp đặt danh dự làm nghẹt thở các thành viên.",
      "personalGrowth": "Can đảm đối diện với phần tối của bản thân, thấu hiểu nguyên nhân gốc rễ của những cơn nghiện và thói quen xấu.",
      "advice": "Hãy nhìn thẳng vào sự thật: sợi xích đang giữ bạn hoàn toàn lỏng lẻo; bạn tự do ngay khi bạn quyết định bước đi.",
      "strengths": [
        "Nhận thức sâu sắc về mặt tối",
        "Đam mê mãnh liệt",
        "Khả năng phá bỏ ràng buộc"
      ],
      "opportunities": [
        "Thoát khỏi mối quan hệ độc hại",
        "Cai nghiện thói quen xấu",
        "Giải phóng bản thân"
      ],
      "warnings": [
        "Tránh thỏa hiệp với lương tâm để đổi lấy sự thỏa mãn ngắn hạn."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang bắt đầu thức tỉnh, tháo bỏ xiềng xích và giành lại quyền tự do làm chủ cuộc đời mình.",
      "blockedEnergy": "Sự giải thoát đang diễn ra, hoặc ngược lại là sự chối bỏ thực tại, sợ hãi đối mặt với vết thương bóng tối.",
      "general": "The Devil ngược là một điềm báo tuyệt vời về sự giải phóng: bạn nhận ra sự thao túng, buông bỏ được các cơn nghiện, bước ra khỏi mối quan hệ độc hại và lấy lại ánh sáng của sự tự do.",
      "love": "Quyết định chấm dứt mối quan hệ độc hại, hàn gắn lại lòng tự trọng và thiết lập ranh giới cảm xúc lành mạnh.",
      "career": "Can đảm nộp đơn nghỉ việc nơi làm việc bóc lột, từ chối những cám dỗ bất chính để theo đuổi con đường chân chính.",
      "finance": "Bắt đầu kế hoạch trả nợ quyết liệt, kiểm soát lại ví tiền và không còn bị chi phối bởi các phù phiếm vật chất.",
      "family": "Phá vỡ các khuôn mẫu thế hệ độc hại, chữa lành các sang chấn tâm lý từ thời thơ ấu.",
      "personalGrowth": "Chiến thắng vinh quang trước cái bóng nội tâm, hòa giải và ôm lấy bản thể trọn vẹn của mình.",
      "advice": "Hãy tiếp tục bước về phía ánh sáng, đừng bao giờ quay đầu lại nhìn chiếc bệ đá giam cầm cũ.",
      "hiddenIssues": [
        "Tàn dư của sự sợ hãi",
        "Cám dỗ quay lại thói quen cũ",
        "Cảm giác tội lỗi"
      ],
      "adjustments": [
        "Cắt đứt liên lạc với những đối tượng độc hại",
        "Tìm kiếm sự đồng hành của bạn bè tốt",
        "Kiên định với tự do"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những lời mời gọi ngọt ngào che giấu cái bẫy thao túng.",
      "whatToChange": "Niềm tin sai lầm rằng bạn bất lực và không thể sống thiếu đối tượng ràng buộc.",
      "whatToEmbrace": "Quyền tự do ý chí và sự tự chủ tối thượng đối với cuộc đời bạn.",
      "pitfalls": "Đổ lỗi cho người khác đã trói buộc mình trong khi chính mình không chịu bước đi."
    },
    "message": "Không có song sắt nào kiên cố hơn niềm tin rằng mình là tù nhân. Khi bạn can đảm thắp lên ngọn đèn của sự thật, bóng tối của quỷ dữ sẽ tan biến như khói sương.",
    "reflectionQuestions": [
      "Thói quen, nỗi sợ hay mối quan hệ nào đang khiến bạn cảm thấy mất đi tự do cá nhân?",
      "Lợi ích ẩn giấu (secondary gain) nào khiến bạn vẫn chần chừ chưa chịu tháo bỏ sợi xích ấy?",
      "Bạn sẽ làm gì với cuộc đời mình ngay trong ngày đầu tiên được hoàn toàn tự do?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-tower",
    "name": "The Tower",
    "nameVi": "Tòa Tháp",
    "number": 16,
    "romanNumeral": "XVI",
    "element": "Lửa",
    "astrology": "Sao Hỏa (Mars)",
    "keywords": [
      "Sudden Change",
      "Upheaval",
      "Awakening",
      "Revelation",
      "Breakthrough"
    ],
    "keywordsVi": [
      "Sự sụp đổ đột ngột",
      "Biến động dữ dội",
      "Sự thức tỉnh sấm sét",
      "Sự thật phơi bày",
      "Đột phá giải phóng"
    ],
    "symbolism": [
      {
        "element": "Tòa tháp kiên cố xây trên đỉnh núi bị sét đánh",
        "meaning": "Bản ngã kiêu ngạo và những cấu trúc giả tạo xây trên nền móng sai lầm bị phá hủy bởi sự thật vũ trụ"
      },
      {
        "element": "Vương miện vàng bị hất văng khỏi tháp",
        "meaning": "Sự sụp đổ của cái tôi ngạo mạn, quyền lực giả tạo bị tước đoạt"
      },
      {
        "element": "Hai người rơi tự do xuống vực",
        "meaning": "Sự mất kiểm soát hoàn toàn trước biến cố bất ngờ, không phân biệt giàu nghèo"
      },
      {
        "element": "22 giọt lửa (yod) bay trong không trung",
        "meaning": "22 chữ cái Do Thái / 22 bài học Arcana - ân sủng cứu rỗi ẩn sau thảm họa"
      },
      {
        "element": "Những đám mây đen và khói xám",
        "meaning": "Sự hỗn loạn tạm thời trước khi bầu trời quang đãng trở lại"
      }
    ],
    "upright": {
      "keyMessage": "Cấu trúc giả tạo buộc phải sụp đổ để sự thật và sự sống chân chính được giải phóng.",
      "general": "The Tower là trải nghiệm sấm sét xé toang bức màn ảo tưởng. Dù ban đầu biến cố có thể gây sốc và đau đớn, nhưng nó phá hủy những gì vốn đã mục ruỗng để bạn có cơ hội xây dựng lại trên nền móng sự thật vững chắc.",
      "love": "Sự thật bị che giấu bất ngờ vỡ lở, cuộc cãi vã bùng nổ phá vỡ vỏ bọc hòa bình giả tạo, hoặc một sự chia tay bất ngờ nhưng cần thiết.",
      "career": "Công ty tái cơ cấu bất ngờ, mất việc hoặc dự án đổ vỡ đột ngột đòi hỏi bạn phải chuyển hướng khẩn cấp.",
      "finance": "Biến cố tài chính bất ngờ, tổn thất ngoài dự tính; cần bình tĩnh kiểm kê thiệt hại và lập lại kế hoạch.",
      "family": "Khủng hoảng gia đình phơi bày những mâu thuẫn âm ỉ lâu năm, buộc mọi người phải đối thoại thẳng thắn.",
      "personalGrowth": "Sự sụp đổ của một hệ niềm tin cũ kỹ, thức tỉnh tâm linh đột ngột sau một cú sốc lớn.",
      "advice": "Đừng cố giữ lấy bức tường đang sụp đổ; hãy bảo vệ bản thân và đón nhận sự tái thiết với lòng can đảm.",
      "strengths": [
        "Khả năng kiên cường sau cú sốc",
        "Sự thức tỉnh triệt để",
        "Giải phóng khỏi ảo tưởng"
      ],
      "opportunities": [
        "Xây dựng lại cuộc đời từ số không",
        "Nhận ra bộ mặt thật của sự việc",
        "Tự do hoàn toàn"
      ],
      "warnings": [
        "Tránh hoảng loạn hành động dại dột trong lúc cơn bão đang quét qua."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang cố né tránh một thảm họa không thể tránh khỏi hoặc trì hoãn sự thức tỉnh cần thiết.",
      "blockedEnergy": "Sợ hãi sự sụp đổ, sống trong ngôi nhà rạn nứt mà không dám bước ra, hoặc hồi phục chậm chạp sau cú sốc.",
      "general": "The Tower ngược cảnh báo rằng việc bạn cố chắp vá những điều đã vỡ nát chỉ làm tăng thêm đau khổ. Đôi khi nó cũng mang ý nghĩa một thảm họa vừa sượt qua và bạn may mắn thoát nạn trong gang tấc.",
      "love": "Cố níu kéo một mối quan hệ đã hoàn toàn rạn nứt vì sợ cảm giác đổ vỡ, kéo dài sự dằn vặt của cả hai.",
      "career": "Linh cảm thấy công việc sắp có biến động nhưng chần chừ không tìm lối thoát dự phòng.",
      "finance": "Tránh được một vụ vỡ nợ trong gang tấc nhưng cần lập tức thay đổi thói quen quản lý tiền bạc.",
      "family": "Tránh được một cuộc tranh cãi lớn nhưng các khúc mắc gốc rễ vẫn chưa được giải quyết dứt điểm.",
      "personalGrowth": "Bạn cần chấp nhận để bản ngã cũ chết đi; đừng cố níu giữ những danh xưng và ảo tưởng đã mục ruỗng.",
      "advice": "Hãy dũng cảm để những gì cần sụp đổ được sụp đổ; bạn không thể xây lâu đài mới trên đống đổ nát cũ.",
      "hiddenIssues": [
        "Nỗi sợ mất an toàn",
        "Bảo thủ ngoan cố",
        "Trốn tránh sự thật"
      ],
      "adjustments": [
        "Chủ động thay đổi trước khi bị bắt buộc",
        "Đối diện trực tiếp với nỗi sợ",
        "Buông bỏ tự ái"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những vết rạn nứt trong các cấu trúc cuộc sống mà bạn bấy lâu nay phớt lờ.",
      "whatToChange": "Ảo tưởng rằng những điều giả tạo có thể tồn tại mãi mãi.",
      "whatToEmbrace": "Cơ hội vàng để tái thiết cuộc đời trên nền móng của sự thật thuần khiết.",
      "pitfalls": "Cay đắng oán hờn số phận thay vì biết ơn vì đã được giải thoát khỏi ngục tù ảo tưởng."
    },
    "message": "Tia sét của Thượng đế đánh xuống không phải để tiêu diệt bạn, mà để phá hủy ngục tù kiêu ngạo mà chính bạn đã tự giam mình bấy lâu nay. Hãy đứng dậy từ tro tàn, bầu trời tự do đang rộng mở.",
    "reflectionQuestions": [
      "Tòa tháp ảo tưởng nào trong cuộc đời bạn đã đến lúc cần sụp đổ?",
      "Sự thật nào bạn đang cố tình phớt lờ vì sợ hãi cảm giác đau đớn?",
      "Làm thế nào để bạn xây dựng lại cuộc đời mình trên nền móng kiên cố của sự thật và tình yêu?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-star",
    "name": "The Star",
    "nameVi": "Ngôi Sao",
    "number": 17,
    "romanNumeral": "XVII",
    "element": "Khí",
    "astrology": "Bảo Bình (Aquarius)",
    "keywords": [
      "Hope",
      "Faith",
      "Healing",
      "Inspiration",
      "Serenity"
    ],
    "keywordsVi": [
      "Niềm hy vọng rực sáng",
      "Đức tin vững chắc",
      "Chữa lành diệu kỳ",
      "Cảm hứng tâm linh",
      "Sự an lạc thanh tịnh"
    ],
    "symbolism": [
      {
        "element": "Người phụ nữ khỏa thân bên bờ nước",
        "meaning": "Sự chân thật, thuần khiết tuyệt đối, không phòng thủ trước vũ trụ"
      },
      {
        "element": "Ngôi sao 8 cánh lớn màu vàng ở trung tâm",
        "meaning": "Ngôi sao Sirius và luân xa ánh sáng dẫn đường cho linh hồn"
      },
      {
        "element": "Bảy ngôi sao nhỏ xung quanh",
        "meaning": "Bảy luân xa chính trong cơ thể được thanh lọc và cân bằng hoàn hảo"
      },
      {
        "element": "Hai bình nước rót xuống đất và hồ",
        "meaning": "Nuôi dưỡng cả đời sống vật chất hữu hình lẫn tiềm thức tâm linh vô hình"
      },
      {
        "element": "Cây cối và chú chim Ibis trên cành",
        "meaning": "Biểu tượng thần Thoth - sự thông thái, hồi sinh của tự nhiên sau giông bão"
      }
    ],
    "upright": {
      "keyMessage": "Sau cơn bão tố của The Tower, ánh sáng hy vọng và sự chữa lành diệu kỳ đang chiếu rọi xuống cuộc đời bạn.",
      "general": "The Star là một trong những lá bài phước lành đẹp nhất bộ bài Tarot. Nó mang đến sự thanh thản, niềm tin phục sinh, cảm hứng sáng tạo và cảm giác bình yên sâu thẳm sau những tháng ngày giông bão.",
      "love": "Tình yêu trong sáng, chữa lành những tổn thương cũ, sự kết nối tâm hồn sâu sắc và tràn đầy niềm tin vào tương lai.",
      "career": "Tìm lại niềm đam mê trong công việc, cơ hội phát triển rực rỡ, tài năng được tỏa sáng và truyền cảm hứng cho người khác.",
      "finance": "Tài chính dần hồi phục và đi vào quỹ đạo tươi sáng, vận may âm thầm trợ lực.",
      "family": "Không khí hòa thuận, ấm áp trở lại; mọi người cảm thấy nhẹ nhõm và yêu thương nhau hơn.",
      "personalGrowth": "Chữa lành hoàn toàn các vết thương tinh thần, kết nối trực tiếp với nguồn năng lượng thiêng liêng của vũ trụ.",
      "advice": "Hãy giữ vững niềm tin, mở rộng trái tim cho đi và vững bước theo ánh sao dẫn lối của trực giác.",
      "strengths": [
        "Niềm lạc quan vô điều kiện",
        "Khả năng truyền cảm hứng",
        "Tâm hồn thanh khiết"
      ],
      "opportunities": [
        "Hồi phục sức khỏe kỳ diệu",
        "Tỏa sáng trong sự nghiệp",
        "Gặp được tình yêu chữa lành"
      ],
      "warnings": [
        "Tránh mơ mộng hão huyền mà quên mất các bước thực hiện thực tế."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang cảm thấy mất niềm tin, tuyệt vọng và để sự bi quan che mờ ánh sáng hy vọng.",
      "blockedEnergy": "Sự hoài nghi, chán nản, cảm giác bị vũ trụ bỏ rơi, cạn kiệt cảm hứng sáng tạo.",
      "general": "The Star ngược cho thấy bạn đang quá tập trung vào những vết thương cũ mà quên rằng cơn bão đã qua rồi. Đừng để nỗi thất vọng tạm thời dập tắt ngọn nến hy vọng trong tim bạn.",
      "love": "Cảm giác nghi ngờ tình cảm, sợ bị tổn thương lần nữa khiến bạn không dám mở lòng đón nhận tình yêu chân thành.",
      "career": "Mất phương hướng nghề nghiệp, cảm thấy công việc vô nghĩa và thiếu động lực cống hiến.",
      "finance": "Lo lắng thái quá về tiền bạc dù thực tế không đến mức bi đát như bạn tưởng tượng.",
      "family": "Cảm giác cô độc giữa những người thân, thiếu niềm tin vào sự gắn kết gia đình.",
      "personalGrowth": "Cần nạp lại năng lượng tâm linh, thực hành lòng biết ơn mỗi ngày để xua tan đám mây u ám.",
      "advice": "Hãy ngước nhìn lên bầu trời; dù mây đen có dày đến đâu, các vì sao vẫn luôn tỏa sáng đợi bạn.",
      "hiddenIssues": [
        "Tâm lý bi quan yếm thế",
        "Tổn thương chưa lành",
        "Thiếu đức tin"
      ],
      "adjustments": [
        "Viết nhật ký biết ơn",
        "Gần gũi với thiên nhiên",
        "Tìm kiếm sự khích lệ từ bạn bè tích cực"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những suy nghĩ tiêu cực tự hủy hoại niềm tin bên trong.",
      "whatToChange": "Thói quen phóng đại khó khăn và xem nhẹ những phước lành đang có.",
      "whatToEmbrace": "Lòng biết ơn sâu sắc và sự phó thác thanh thản cho dòng chảy vũ trụ.",
      "pitfalls": "Rơi vào sự bi kịch hóa cuộc đời hoặc sống trong ảo tưởng xa rời thực tế."
    },
    "message": "Bạn chính là một vì sao giáng trần để thắp sáng góc thế giới của riêng mình. Không có đêm đen nào đủ sức dập tắt ánh sáng thiêng liêng vốn đã được an bài trong tâm hồn bạn.",
    "reflectionQuestions": [
      "Ước mơ thuần khiết nhất nào bạn từng có đang cần được thắp sáng trở lại?",
      "Vết thương nào trong bạn đã sẵn sàng để được dòng nước yêu thương chữa lành?",
      "Làm thế nào để bạn trở thành ngọn đèn hy vọng cho những người xung quanh lúc này?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-moon",
    "name": "The Moon",
    "nameVi": "Mặt Trăng",
    "number": 18,
    "romanNumeral": "XVIII",
    "element": "Nước",
    "astrology": "Song Ngư (Pisces)",
    "keywords": [
      "Illusion",
      "Fear",
      "Subconscious",
      "Intuition",
      "Uncertainty"
    ],
    "keywordsVi": [
      "Ảo ảnh mơ hồ",
      "Nỗi sợ vô hình",
      "Cõi tiềm thức sâu thẳm",
      "Trực giác nhạy cảm",
      "Sự bất định sương mù"
    ],
    "symbolism": [
      {
        "element": "Mặt trăng tròn đầy với khuôn mặt u sầu nhìn xuống",
        "meaning": "Ánh sáng phản chiếu gián tiếp, thế giới của giấc mơ, ảo ảnh và sự bí ẩn"
      },
      {
        "element": "Con chó nhà và con chó sói tru trăng",
        "meaning": "Bản tính thuần hóa và bản năng hoang dã sơ khai bên trong con người trước nỗi sợ đêm tối"
      },
      {
        "element": "Con tôm hùm bò lên từ đầm lầy sâu thẳm",
        "meaning": "Những ký ức sâu kín, nỗi sợ nguyên thủy từ đáy tiềm thức trồi lên mặt nước"
      },
      {
        "element": "Hai tòa tháp canh gác hai bên",
        "meaning": "Cánh cổng dẫn vào cõi vô thức chưa được khám phá"
      },
      {
        "element": "Con đường uốn lượn biến mất vào bóng đêm",
        "meaning": "Hành trình xuyên qua sương mù đòi hỏi sự can đảm và lắng nghe trực giác"
      }
    ],
    "upright": {
      "keyMessage": "Mọi việc hiện tại chưa rõ ràng như vẻ bề ngoài; hãy cẩn trọng với ảo tưởng và lắng nghe linh cảm mách bảo.",
      "general": "The Moon đưa bạn vào vương quốc của đêm tối, tiềm thức và sự bất định. Đây là thời điểm trí tưởng tượng và nỗi sợ hãi có thể bóp méo sự thật. Đừng vội đưa ra các quyết định hệ trọng khi sương mù chưa tan.",
      "love": "Sự nghi ngờ, hiểu lầm, bất an cảm xúc hoặc có những điều bí mật chưa được phơi bày giữa hai người.",
      "career": "Thiếu thông tin minh bạch trong dự án, cẩn trọng với những lời hứa hẹn mờ ám hoặc đối thủ ngầm nơi công sở.",
      "finance": "Rủi ro lừa đảo, đầu tư vào những mô hình mù mờ; tuyệt đối không ký kết hợp đồng tài chính khi còn nghi vấn.",
      "family": "Bầu không khí u ám do những khúc mắc không ai chịu nói ra, nỗi lo âu vô cớ về tương lai.",
      "personalGrowth": "Khám phá các giấc mơ, đối diện với những sang chấn và bóng tối tiềm thức để thấu hiểu bản thân trọn vẹn hơn.",
      "advice": "Hãy bước đi thật chậm, giữ bình tĩnh trước nỗi sợ hãi và tin vào giác quan thứ sáu nhưng kiểm chứng bằng thực tế.",
      "strengths": [
        "Trực giác thấu thị",
        "Trí tưởng tượng phong phú",
        "Khả năng thấu cảm cõi vô thức"
      ],
      "opportunities": [
        "Sáng tạo nghệ thuật thăng hoa",
        "Giải mã giấc mơ",
        "Chữa lành tổn thương tiềm thức"
      ],
      "warnings": [
        "Tránh để nỗi sợ hãi tự thêu dệt nên những kịch bản tồi tệ."
      ]
    },
    "reversed": {
      "keyMessage": "Sương mù đang dần tan biến, sự thật được phơi bày và bạn đang thoát khỏi cơn ác mộng của nỗi sợ hãi.",
      "blockedEnergy": "Sự giải tỏa nỗi ám ảnh, nhận diện sự lừa dối, hoặc ngược lại là chìm sâu vào ảo giác và hoang tưởng.",
      "general": "The Moon ngược cho thấy ánh sáng ban mai bắt đầu xua tan những ảo ảnh. Bạn nhìn thấu những điều khuất tất, trút bỏ được gánh nặng lo âu vô cớ và tìm lại sự sáng suốt của lý trí.",
      "love": "Sự thật được sáng tỏ, giải tỏa những nghi ngờ ghen tuông vô căn cứ hoặc dũng cảm đối diện với sự phản bội.",
      "career": "Lật tẩy những mánh khóe cạnh tranh bẩn thỉu, kế hoạch công việc trở nên rõ ràng và minh bạch hơn.",
      "finance": "Phát hiện kịp thời các khoản thất thoát, tránh được cái bẫy tài chính nguy hiểm trong gang tấc.",
      "family": "Các bí mật gia đình được hé lộ giúp tháo gỡ nút thắt tâm lý đè nặng bấy lâu nay.",
      "personalGrowth": "Chiến thắng nỗi sợ hãi mơ hồ, tâm trí tìm lại sự bình yên và sáng rõ.",
      "advice": "Hãy kiên nhẫn đợi những tia nắng đầu tiên của sự thật chiếu rọi; màn đêm sắp sửa kết thúc.",
      "hiddenIssues": [
        "Ám ảnh quá khứ",
        "Hoang tưởng tự suy diễn",
        "Che giấu sự thật"
      ],
      "adjustments": [
        "Kiểm chứng thông tin đa chiều",
        "Thực hành bài tập nối đất (grounding)",
        "Nói chuyện thẳng thắn với người liên quan"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những dấu hiệu mờ ám và cảm giác bất an không giải thích được.",
      "whatToChange": "Thói quen để trí tưởng tượng tiêu cực phóng đại nỗi sợ hãi.",
      "whatToEmbrace": "Sự can đảm bước đi xuyên qua bóng tối bằng niềm tin vào ngọn đèn nội tâm.",
      "pitfalls": "Tự lừa dối bản thân hoặc tin vào những ảo tưởng viển vông."
    },
    "message": "Bóng ma trong bóng tối chỉ tan biến khi bạn can đảm bật sáng ngọn đèn nhận thức. Đừng chiến đấu với bóng tối, hãy thắp sáng ngọn nến của sự thật.",
    "reflectionQuestions": [
      "Nỗi sợ hãi nào đang điều khiển các suy nghĩ và hành động gần đây của bạn?",
      "Trực giác của bạn đang cảnh báo điều gì về tình huống hoặc con người này?",
      "Làm thế nào để bạn phân biệt giữa linh cảm chân thực và nỗi lo âu tự thêu dệt?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-sun",
    "name": "The Sun",
    "nameVi": "Mặt Trời",
    "number": 19,
    "romanNumeral": "XIX",
    "element": "Lửa",
    "astrology": "Mặt Trời (Sun)",
    "keywords": [
      "Joy",
      "Success",
      "Celebration",
      "Positivity",
      "Vitality"
    ],
    "keywordsVi": [
      "Niềm vui rạng rỡ",
      "Thành công rực rỡ",
      "Lễ hội ăn mừng",
      "Sự tích cực ấm áp",
      "Sinh lực tràn trề"
    ],
    "symbolism": [
      {
        "element": "Mặt trời khổng lồ tỏa chiếu 16 tia sáng (thẳng và lượn sóng)",
        "meaning": "Sự kết hợp giữa chân lý lý trí và trực giác tình cảm, nguồn năng lượng sống tối thượng"
      },
      {
        "element": "Đứa trẻ khỏa thân cười rạng rỡ cưỡi ngựa trắng",
        "meaning": "Sự thuần khiết, ngây thơ tuyệt đối, tự do hoàn toàn và sự hòa hợp với thiên nhiên"
      },
      {
        "element": "Bức tường gạch phía sau",
        "meaning": "Đã vượt qua mọi giới hạn của trần tục để bước vào khu vườn bình an"
      },
      {
        "element": "Bốn bông hoa hướng dương nở rộ",
        "meaning": "Bốn bộ Minor Arcana và bốn nguyên tố đều đạt đến trạng thái viên mãn, trù phú"
      },
      {
        "element": "Dải băng đỏ bay phấp phới trên đầu đứa trẻ",
        "meaning": "Sức sống mãnh liệt và năng lượng hành động thuần khiết của sự thức tỉnh"
      }
    ],
    "upright": {
      "keyMessage": "Ánh sáng rực rỡ của niềm vui, thành công và sự thịnh vượng đang sưởi ấm toàn bộ cuộc đời bạn.",
      "general": "The Sun là lá bài tích cực và tươi sáng nhất trong Tarot. Mọi u ám tan biến, sự thật được soi tỏ, may mắn và hạnh phúc ngập tràn. Bạn cảm thấy tràn đầy năng lượng, tự tin và yêu đời.",
      "love": "Tình yêu viên mãn, hạnh phúc ngập tràn tiếng cười. Mối quan hệ ấm áp, cởi mở, có thể đón chào hôn lễ rực rỡ hoặc tin vui con cái.",
      "career": "Thành công vượt bậc, dự án đạt kết quả rực rỡ, được công chúng và cấp trên tán thưởng nhiệt liệt.",
      "finance": "Tài chính dồi dào, thu nhập tăng trưởng mạnh mẽ, các khoản đầu tư sinh lời vượt ngoài mong đợi.",
      "family": "Gia đình sum vầy, tràn ngập niềm vui, sức khỏe người thân dồi dào và hòa thuận ấm cúng.",
      "personalGrowth": "Tỏa sáng bằng sự tự tin chân thật, sống hồn nhiên như một đứa trẻ nhưng mang trí tuệ của bậc giác ngộ.",
      "advice": "Hãy chia sẻ niềm vui của bạn với mọi người, sống hết mình và tận hưởng từng giây phút huy hoàng này.",
      "strengths": [
        "Sự rạng rỡ lạc quan",
        "Sức hút cá nhân mãnh liệt",
        "Nguồn năng lượng tích cực dồi dào"
      ],
      "opportunities": [
        "Gặt hái thành tựu lớn nhất",
        "Hôn nhân viên mãn",
        "Sức khỏe hồi phục thần kỳ"
      ],
      "warnings": [
        "Hãy giữ sự khiêm nhường để ánh sáng của bạn luôn sưởi ấm thay vì thiêu đốt người khác."
      ]
    },
    "reversed": {
      "keyMessage": "Mặt trời vẫn đang tỏa sáng, chỉ có một đám mây nhỏ tạm che khuất; niềm vui sắp trở lại trọn vẹn.",
      "blockedEnergy": "Sự lạc quan bị giảm sút tạm thời, mệt mỏi thể xác hoặc quá tự phụ, kiêu ngạo.",
      "general": "The Sun ngược hiếm khi mang ý nghĩa tiêu cực. Nó chỉ báo hiệu sự chậm trễ nhỏ trong việc đón nhận thành quả, hoặc bạn đang gặp khó khăn trong việc nhìn thấy những điều tích cực xung quanh mình.",
      "love": "Tình cảm vẫn tốt đẹp nhưng có chút nguội lạnh tạm thời do bận rộn; cần dành thời gian hâm nóng lại sự lãng mạn.",
      "career": "Thành công bị chậm lại đôi chút so với kế hoạch, hoặc bạn chưa thực sự thỏa mãn với những gì đạt được do kỳ vọng quá cao.",
      "finance": "Tài chính ổn định nhưng chưa bứt phá ngoạn mục như mong đợi; tránh chi tiêu xa xỉ phô trương.",
      "family": "Những bất đồng nhỏ do hiểu lầm vụn vặt; chỉ cần một buổi trò chuyện vui vẻ là mọi thứ lại êm ấm.",
      "personalGrowth": "Học cách tìm kiếm niềm vui từ những điều giản dị mỗi ngày thay vì chờ đợi những sự kiện vĩ đại.",
      "advice": "Hãy xua tan những suy nghĩ bi quan; mặt trời không bao giờ ngừng chiếu sáng, hãy mở cửa sổ đón ánh nắng vào phòng.",
      "hiddenIssues": [
        "Tự phụ kiêu căng",
        "Kỳ vọng phi thực tế",
        "Mệt mỏi kiệt sức"
      ],
      "adjustments": [
        "Tắm nắng và vận động ngoài trời",
        "Hạ bớt tiêu chuẩn hoàn hảo",
        "Tập mỉm cười và biết ơn"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Dấu hiệu của sự tự phụ và kiêu ngạo khi đạt được thành công lớn.",
      "whatToChange": "Thói quen u sầu và bi kịch hóa những trở ngại nhỏ nhặt.",
      "whatToEmbrace": "Năng lượng ấm áp, lòng hào phóng và sự vô tư yêu đời.",
      "pitfalls": "Chói mắt bởi thành công mà quên mất sự cẩn trọng cần thiết."
    },
    "message": "Bạn sinh ra là để tỏa sáng như vầng thái dương. Khi bạn dám sống trọn vẹn với sự chân thật và lòng yêu đời của mình, cả vũ trụ sẽ hòa cùng điệu múa rộn rã với bạn.",
    "reflectionQuestions": [
      "Điều gì khiến trái tim bạn bừng sáng niềm vui thuần khiết nhất lúc này?",
      "Làm thế nào để bạn lan tỏa sự ấm áp và tích cực này đến những người đang trong bóng tối?",
      "Bạn có đang cho phép bản thân được hoàn toàn hạnh phúc mà không cảm thấy tội lỗi?"
    ],
    "arcana": "major"
  },
  {
    "id": "judgement",
    "name": "Judgement",
    "nameVi": "Phán Xét",
    "number": 20,
    "romanNumeral": "XX",
    "element": "Lửa",
    "astrology": "Sao Diêm Vương (Pluto)",
    "keywords": [
      "Rebirth",
      "Inner Calling",
      "Absolution",
      "Awakening",
      "Self-Evaluation"
    ],
    "keywordsVi": [
      "Tái sinh tâm hồn",
      "Tiếng gọi nội tâm",
      "Sự xá tội tha thứ",
      "Sự thức tỉnh vĩ đại",
      "Tự phán xét công tâm"
    ],
    "symbolism": [
      {
        "element": "Tổng lãnh thiên thần Gabriel thổi kèn vàng",
        "meaning": "Tiếng kèn hiệu triệu của vũ trụ đánh thức các linh hồn khỏi giấc ngủ mê muội của thế tục"
      },
      {
        "element": "Những người trỗi dậy từ các ngôi mộ đá xám",
        "meaning": "Sự phục sinh, thoát khỏi gánh nặng của quá khứ, sẵn sàng cho một cuộc đời mới"
      },
      {
        "element": "Lá cờ chữ thập đỏ trên nền trắng của kèn",
        "meaning": "Sự cân bằng hoàn hảo giữa bốn phương, biểu tượng của sự cứu chuộc và ánh sáng"
      },
      {
        "element": "Rặng núi xanh xa xa",
        "meaning": "Chân lý bất biến và các tầng nhận thức tâm linh cao cấp"
      },
      {
        "element": "Biển nước bao quanh",
        "meaning": "Dòng chảy ký ức tập thể được thanh tẩy bởi âm thanh thức tỉnh"
      }
    ],
    "upright": {
      "keyMessage": "Hãy lắng nghe tiếng gọi thiêng liêng từ sâu thẳm tâm hồn; đã đến lúc tha thứ cho quá khứ và bước vào cuộc đời mới.",
      "general": "Judgement là thời khắc của sự thức tỉnh tối thượng. Bạn được kêu gọi để đánh giá lại toàn bộ hành trình cuộc đời mình một cách công tâm, buông bỏ mọi cảm giác tội lỗi, ân hận và tái sinh trong một hình hài nhận thức cao hơn.",
      "love": "Thời điểm đưa ra quyết định dứt khoát về mối quan hệ: hoặc nâng cấp lên sự cam kết gắn bó trọn đời, hoặc dũng cảm buông tay trong hòa bình và tha thứ.",
      "career": "Tìm thấy tiếng gọi sứ mệnh nghề nghiệp đích thực (calling). Được đền đáp xứng đáng cho những nỗ lực cống hiến suốt thời gian dài.",
      "finance": "Giải quyết dứt điểm các vướng mắc tiền bạc cũ, thanh thản bước sang chu kỳ tài chính mới minh bạch.",
      "family": "Hàn gắn sâu sắc giữa các thế hệ thông qua sự tha thứ chân thành, rũ bỏ những oán hận truyền đời.",
      "personalGrowth": "Tái sinh tâm linh, tha thứ trọn vẹn cho chính mình và nhận ra mục đích tối thượng của sự hiện diện của bạn trên cõi đời này.",
      "advice": "Hãy lắng nghe tiếng gọi nội tâm, dũng cảm đưa ra phán quyết cuộc đời và tự tin bước vào chương mới.",
      "strengths": [
        "Nhận thức thức tỉnh",
        "Lòng vị tha bao dung",
        "Sự dứt khoát sáng suốt"
      ],
      "opportunities": [
        "Tìm thấy lẽ sống đích thực",
        "Được tha thứ và chữa lành",
        "Bước sang trang mới huy hoàng"
      ],
      "warnings": [
        "Tránh phán xét người khác một cách khắc nghiệt và bảo thủ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang phớt lờ tiếng gọi nội tâm, bị mắc kẹt trong sự tự dằn vặt và sợ hãi đưa ra quyết định thay đổi.",
      "blockedEnergy": "Sự tự ti, hối hận kéo dài, từ chối tha thứ cho bản thân, sợ hãi bước vào cuộc sống mới.",
      "general": "Judgement ngược cảnh báo bạn đang tự giam mình trong ngôi mộ của những sai lầm quá khứ. Tiếng kèn vũ trụ đã vang lên nhưng bạn cố tình bịt tai vì sợ phải chịu trách nhiệm cho sự tái sinh của mình.",
      "love": "Né tránh quyết định quan trọng trong tình cảm, tiếp tục kéo dài sự mập mờ hoặc chì chiết lỗi lầm cũ của đối phương.",
      "career": "Bỏ lỡ cơ hội chuyển hướng nghề nghiệp đúng với đam mê do thiếu tự tin và sợ bị người khác phán xét.",
      "finance": "Chần chừ không chịu giải quyết dứt điểm các khoản nợ cũ khiến rắc rối kéo dài dai dẳng.",
      "family": "Tiếp tục nuôi dưỡng những hận thù cũ trong gia đình, từ chối hòa giải dù cơ hội đã mở ra.",
      "personalGrowth": "Cần học cách xá tội cho chính mình; không ai có thể cứu rỗi bạn nếu bạn không chịu bước ra khỏi nấm mồ mặc cảm.",
      "advice": "Hãy tha thứ cho bản thân vì những điều chưa biết trong quá khứ; hôm nay là một ngày mới để làm lại cuộc đời.",
      "hiddenIssues": [
        "Mặc cảm tội lỗi",
        "Sợ bị phán xét",
        "Trì hoãn sự thức tỉnh"
      ],
      "adjustments": [
        "Viết thư tha thứ cho quá khứ",
        "Lắng nghe trực giác tĩnh lặng",
        "Chịu trách nhiệm cho hiện tại"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Cảm giác tội lỗi và xu hướng tự trừng phạt bản thân.",
      "whatToChange": "Thói quen bới móc lại những sai lầm cũ của mình và người khác.",
      "whatToEmbrace": "Lòng vị tha, sự ân xá và dũng khí đón nhận tiếng gọi sứ mệnh.",
      "pitfalls": "Tự biến mình thành quan tòa tàn nhẫn đối với chính tâm hồn mình."
    },
    "message": "Tiếng kèn thức tỉnh không phải để phán tội bạn, mà để gọi bạn thức dậy sau một giấc ngủ dài. Hãy đứng dậy, rũ sạch lớp bụi trần quá khứ và bước vào ánh sáng huy hoàng của sự tự do.",
    "reflectionQuestions": [
      "Tiếng gọi sứ mệnh nào từ sâu thẳm tâm hồn mà bạn bấy lâu nay cố tình né tránh?",
      "Lỗi lầm nào trong quá khứ mà bạn cần ban cho chính mình sự xá tội và tha thứ?",
      "Nếu bắt đầu lại cuộc đời từ hôm nay với một tờ giấy trắng, bạn sẽ lựa chọn điều gì?"
    ],
    "arcana": "major"
  },
  {
    "id": "the-world",
    "name": "The World",
    "nameVi": "Thế Giới",
    "number": 21,
    "romanNumeral": "XXI",
    "element": "Đất",
    "astrology": "Sao Thổ (Saturn)",
    "keywords": [
      "Completion",
      "Integration",
      "Accomplishment",
      "Travel",
      "Wholeness"
    ],
    "keywordsVi": [
      "Hoàn thành viên mãn",
      "Hợp nhất trọn vẹn",
      "Thành tựu đỉnh cao",
      "Chuyến đi rộng mở",
      "Sự tròn đầy tuyệt đối"
    ],
    "symbolism": [
      {
        "element": "Vũ công nhảy múa trong vòng nguyệt quế",
        "meaning": "Sự chiến thắng trọn vẹn, vòng quay vô tận của sự sống đạt tới sự hoàn mỹ"
      },
      {
        "element": "Hai cây trượng cầm trên hai tay",
        "meaning": "Làm chủ hoàn toàn cả thế giới ý thức lẫn tiềm thức, năng lượng sáng tạo viên mãn"
      },
      {
        "element": "Bốn sinh vật thần thánh ở bốn góc (Người, Đại bàng, Sư tử, Bò đực)",
        "meaning": "Bốn nguyên tố và toàn bộ vũ trụ chúc phúc cho sự thành tựu của linh hồn"
      },
      {
        "element": "Dải ruy băng đỏ thắt hình số 8 vô cực",
        "meaning": "Sự kết nối bất diệt giữa khởi đầu và kết thúc, chu kỳ hoàn thành để mở ra chu kỳ mới cao hơn"
      },
      {
        "element": "Khăn choàng màu tím uốn quanh thân",
        "meaning": "Sự tự do tuyệt đối, tâm linh và vật chất hòa làm một"
      }
    ],
    "upright": {
      "keyMessage": "Chúc mừng bạn! Bạn đã hoàn thành xuất sắc một chương lớn của cuộc đời và đạt tới sự viên mãn trọn vẹn.",
      "general": "The World là đích đến vinh quang của hành trình Chàng Khờ (Fool's Journey). Mọi mảnh ghép rơi đúng vào vị trí của nó. Thành tựu lớn, sự công nhận toàn diện, sự trọn vẹn tâm hồn và cơ hội mở rộng tầm nhìn ra toàn thế giới.",
      "love": "Tình yêu đạt đến độ chín muồi viên mãn, cái kết hạnh phúc trọn vẹn (hôn nhân, tổ ấm vững bền), cảm giác tìm thấy mảnh ghép hoàn hảo.",
      "career": "Hoàn thành xuất sắc dự án trọng điểm, được công nhận ở quy mô lớn hoặc quốc tế, đạt được đỉnh cao sự nghiệp mơ ước.",
      "finance": "Tài chính dồi dào, tự do tài chính, mọi nỗ lực đầu tư dài hạn đều mang lại trái ngọt trọn vẹn.",
      "family": "Gia đình sum vầy, viên mãn, tràn đầy niềm tự hào và bình an; có thể có những chuyến du lịch xa cùng nhau.",
      "personalGrowth": "Hợp nhất hoàn toàn các khía cạnh của bản thân, đạt tới sự thông thái và an lạc nội tâm tuyệt đối.",
      "advice": "Hãy ăn mừng chiến thắng của bạn, tận hưởng cảm giác trọn vẹn và sẵn sàng cho một vòng xoáy tiến hóa mới cao hơn.",
      "strengths": [
        "Sự toàn diện",
        "Tầm nhìn quốc tế",
        "Cảm giác viên mãn sâu sắc"
      ],
      "opportunities": [
        "Chuyến đi xa/xuất ngoại thành công",
        "Tốt nghiệp/hoàn thành dự án lớn",
        "Thăng hoa toàn diện"
      ],
      "warnings": [
        "Hãy tận hưởng thành quả nhưng đừng dừng lại quá lâu trên đỉnh vinh quang."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đã ở rất gần đích đến nhưng còn một mảnh ghép nhỏ cuối cùng cần hoàn thiện để thực sự trọn vẹn.",
      "blockedEnergy": "Sự trì hoãn ở bước cuối cùng, cảm giác thiếu thốn dù gần thành công, sự thiếu dứt khoát để đóng lại chương cũ.",
      "general": "The World ngược cho thấy bạn sắp cán đích nhưng đang bị phân tâm, chần chừ hoặc cố tình để ngỏ một việc gì đó chưa giải quyết xong. Hãy tập trung nốt chút năng lượng cuối cùng để hoàn tất trọn vẹn.",
      "love": "Mối quan hệ tốt đẹp nhưng thiếu một sự cam kết dứt khoát, hoặc một trong hai người vẫn chưa hoàn toàn buông bỏ bóng hình người cũ.",
      "career": "Dự án gần xong nhưng gặp chút trục trặc giấy tờ thủ tục cuối cùng; cần kiên trì giải quyết dứt điểm.",
      "finance": "Mục tiêu tài chính gần đạt được nhưng phát sinh khoản chi ngoài dự kiến; kiên nhẫn tích lũy thêm chút nữa.",
      "family": "Các kế hoạch du lịch hoặc sum họp gia đình bị hoãn lại đôi chút; cần sự linh hoạt sắp xếp.",
      "personalGrowth": "Nhận ra bài học còn sót lại trước khi có thể hoàn toàn tốt nghiệp lớp học đường đời này.",
      "advice": "Đừng bỏ cuộc khi chỉ còn cách vạch đích vài bước chân; hãy hoàn thành những chi tiết cuối cùng với sự tỉ mỉ.",
      "hiddenIssues": [
        "Sợ cảm giác kết thúc",
        "Trì hoãn bước cuối",
        "Tìm kiếm sự hoàn hảo thái quá"
      ],
      "adjustments": [
        "Rà soát lại danh sách việc cần làm",
        "Đóng lại các vòng lặp dở dang",
        "Ăn mừng từng bước tiến nhỏ"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những chi tiết chưa hoàn tất ở những khâu cuối cùng.",
      "whatToChange": "Tâm lý chủ quan xả hơi quá sớm trước khi thực sự về đích.",
      "whatToEmbrace": "Cảm giác mãn nguyện và sự thông thái của một người đã trải qua toàn bộ hành trình.",
      "pitfalls": "Bỏ dở giữa chừng khi thành công đã nằm ngay trong tầm tay."
    },
    "message": "Vũ trụ là một vòng tròn trọn vẹn không có khởi đầu cũng chẳng có kết thúc. Khi bạn nhảy điệu múa của sự hoàn thiện, bạn nhận ra cả thế giới này đang nằm trọn trong trái tim bạn.",
    "reflectionQuestions": [
      "Mục tiêu lớn nào bạn sắp sửa hoàn thành và cần thêm một cú hích cuối cùng?",
      "Điều gì bạn cần đóng lại dứt khoát để có thể tự do bước sang một chu kỳ sống mới?",
      "Bạn cảm thấy biết ơn điều gì nhất sau tất cả những thăng trầm của hành trình đã qua?"
    ],
    "arcana": "major"
  },
  {
    "id": "ace-of-wands",
    "name": "Ace of Wands",
    "nameVi": "Ace of Wands – Át Gậy",
    "arcana": "minor",
    "number": 1,
    "romanNumeral": "I",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Inspiration",
      "Power",
      "Creation",
      "New Passion",
      "Potential"
    ],
    "keywordsVi": [
      "Ngọn lửa cảm hứng",
      "Đam mê bùng cháy",
      "Khởi đầu sáng tạo",
      "Năng lượng hành động",
      "Tiềm năng bứt phá"
    ],
    "symbolism": [
      {
        "element": "Bàn tay thần nhô ra từ mây",
        "meaning": "Món quà cảm hứng từ vũ trụ trao tặng"
      },
      {
        "element": "Cây gậy đâm chồi",
        "meaning": "Sức sống trỗi dậy, tiềm năng sáng tạo bất tận"
      },
      {
        "element": "Lâu đài trên đồi",
        "meaning": "Đích đến thành tựu đang vẫy gọi"
      }
    ],
    "upright": {
      "keyMessage": "Một ngọn lửa cảm hứng và cơ hội bùng nổ đang đến; hãy nắm bắt và hành động với tất cả đam mê.",
      "general": "Ace of Wands đại diện cho tia lửa khởi nguyên của hành động và sự sáng tạo. Bạn tràn đầy năng lượng, ý tưởng mới mẻ và dũng khí để bắt tay vào một dự án đầy thử thách.",
      "love": "Trong tình yêu, Ace of Wands – Át Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Ngọn lửa đam mê đang bị dập tắt bởi sự trì hoãn, thiếu phương hướng hoặc cạn kiệt năng lượng.",
      "blockedEnergy": "Năng lượng của Ace of Wands – Át Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ace of Wands ngược cảnh báo bạn đang cảm thấy thiếu động lực, ý tưởng bị đình trệ hoặc gặp phải trở ngại lớn ngay từ bước đầu do thiếu kế hoạch.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ace of Wands – Át Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Một đốm lửa nhỏ cũng có thể làm bừng sáng cả màn đêm lạnh giá. Hãy tin vào tiếng gọi đam mê đang cháy trong tim bạn.",
    "reflectionQuestions": [
      "Lá bài Ace of Wands – Át Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "two-of-wands",
    "name": "Two of Wands",
    "nameVi": "Two of Wands – Hai Gậy",
    "arcana": "minor",
    "number": 2,
    "romanNumeral": "II",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Future Planning",
      "Progress",
      "Decisions",
      "Discovery",
      "Expansion"
    ],
    "keywordsVi": [
      "Lên kế hoạch tương lai",
      "Tầm nhìn xa trông rộng",
      "Quyết định bước ngoặt",
      "Mở rộng bờ cõi",
      "Khát vọng vươn xa"
    ],
    "symbolism": [
      {
        "element": "Quả địa cầu trên tay",
        "meaning": "Thế giới và cơ hội nằm trong tầm kiểm soát"
      },
      {
        "element": "Hai cây gậy trên thành lũy",
        "meaning": "Sự cân bằng giữa bảo toàn hiện tại và khát vọng vươn xa"
      },
      {
        "element": "Biển cả phía xa",
        "meaning": "Những chân trời mới chưa được khám phá"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đã có thành tựu ban đầu; giờ là lúc mở rộng tầm nhìn và lên kế hoạch cho những bước tiến lớn hơn.",
      "general": "Two of Wands nói về việc đứng trên đỉnh cao nhìn ra thế giới. Bạn đang có nền tảng vững chắc và đứng trước cơ hội mở rộng quy mô, vươn ra khỏi vùng an toàn.",
      "love": "Trong tình yêu, Two of Wands – Hai Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang do dự không dám bước ra khỏi vùng an toàn hoặc kế hoạch tương lai đang thiếu tính thực tế.",
      "blockedEnergy": "Năng lượng của Two of Wands – Hai Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Two of Wands ngược cảnh báo bạn đang tự giam mình trong vùng an toàn cũ kỹ vì sợ rủi ro, hoặc kế hoạch đặt ra quá viển vông.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Two of Wands – Hai Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Cả thế giới rộng lớn đang nằm trong tay bạn. Đừng chỉ đứng mãi trên pháo đài cũ để ngắm nhìn; hãy dong buồm ra khơi và khám phá chân trời của riêng mình.",
    "reflectionQuestions": [
      "Lá bài Two of Wands – Hai Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "three-of-wands",
    "name": "Three of Wands",
    "nameVi": "Three of Wands – Ba Gậy",
    "arcana": "minor",
    "number": 3,
    "romanNumeral": "III",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Expansion",
      "Foresight",
      "Overseas Opportunity",
      "Self-Reliance",
      "Looking Ahead"
    ],
    "keywordsVi": [
      "Mở rộng thành công",
      "Cơ hội xuất ngoại",
      "Thuyền bè cập bến",
      "Tự lực cánh sinh",
      "Đón nhận thành quả"
    ],
    "symbolism": [
      {
        "element": "Ba cây gậy cắm trên mặt đất",
        "meaning": "Nền móng vững chắc đã hình thành"
      },
      {
        "element": "Những con thuyền trên biển",
        "meaning": "Thành quả và cơ hội đang trên đường cập bến"
      },
      {
        "element": "Dáng người quay lưng nhìn ra biển",
        "meaning": "Sự kiên định dõi theo mục tiêu tương lai"
      }
    ],
    "upright": {
      "keyMessage": "Những nỗ lực của bạn đã bắt đầu đơm hoa kết trái; hãy sẵn sàng đón nhận những chuyến tàu cơ hội đang trở về.",
      "general": "Three of Wands là lá bài của sự tự tin, mở rộng và thành tựu đang trên đường tới. Bạn đã gieo hạt, đã hành động và giờ đây chỉ cần vững tâm theo dõi tiến trình.",
      "love": "Trong tình yêu, Three of Wands – Ba Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Những chuyến tàu cơ hội bị chậm trễ hoặc bạn đang gặp khó khăn trong việc mở rộng do thiếu sự chuẩn bị.",
      "blockedEnergy": "Năng lượng của Three of Wands – Ba Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Three of Wands ngược cho thấy các kế hoạch mở rộng của bạn đang gặp rào cản bất ngờ, hoặc bạn đang cảm thấy nản lòng vì thành quả chưa đến nhanh như mong đợi.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Three of Wands – Ba Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Những con thuyền chở ước mơ của bạn đang lướt sóng trở về mang theo châu báu của sự nỗ lực. Hãy vững vàng đón nhận thành quả xứng đáng.",
    "reflectionQuestions": [
      "Lá bài Three of Wands – Ba Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "four-of-wands",
    "name": "Four of Wands",
    "nameVi": "Four of Wands – Bốn Gậy",
    "arcana": "minor",
    "number": 4,
    "romanNumeral": "IV",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Celebration",
      "Homecoming",
      "Harmony",
      "Community",
      "Milestone"
    ],
    "keywordsVi": [
      "Lễ ăn mừng",
      "Tổ ấm bình yên",
      "Hòa thuận sum vầy",
      "Cột mốc thành công",
      "Hỷ sự viên mãn"
    ],
    "symbolism": [
      {
        "element": "Bốn cây gậy kết cổng hoa trái cây",
        "meaning": "Sự vững chắc, viên mãn và mùa màng bội thu"
      },
      {
        "element": "Hai người nâng hoa chào đón",
        "meaning": "Niềm vui sum họp và tình bằng hữu nồng hậu"
      },
      {
        "element": "Lâu đài kiên cố phía sau",
        "meaning": "Mái ấm an toàn chở che cho hạnh phúc"
      }
    ],
    "upright": {
      "keyMessage": "Hãy tận hưởng niềm vui ăn mừng bên những người thân yêu; bạn đã đạt được một cột mốc quan trọng và xứng đáng được hạnh phúc.",
      "general": "Four of Wands là biểu tượng của sự hòa hợp, mái ấm bình an và những bữa tiệc ăn mừng hỷ sự. Mọi nỗ lực của bạn đã tạo dựng nên một không gian đầm ấm, vững bền.",
      "love": "Trong tình yêu, Four of Wands – Bốn Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Căng thẳng trong gia đình, tiệc mừng bị hoãn hoặc cảm giác lạc lõng ngay giữa chính tổ ấm của mình.",
      "blockedEnergy": "Năng lượng của Four of Wands – Bốn Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Four of Wands ngược cảnh báo về sự bất hòa ngầm trong gia đình hoặc tập thể, cảm giác mất kết nối với nơi chốn quen thuộc.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Four of Wands – Bốn Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hạnh phúc đích thực là khi được sum vầy bên những người thực sự yêu thương bạn dưới một mái nhà bình yên và ấm áp.",
    "reflectionQuestions": [
      "Lá bài Four of Wands – Bốn Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "five-of-wands",
    "name": "Five of Wands",
    "nameVi": "Five of Wands – Năm Gậy",
    "arcana": "minor",
    "number": 5,
    "romanNumeral": "V",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Conflict",
      "Competition",
      "Disagreements",
      "Tension",
      "Rivalry"
    ],
    "keywordsVi": [
      "Cạnh tranh gay gắt",
      "Xung đột ý kiến",
      "Sự hỗn loạn va chạm",
      "Thử thách tôi luyện",
      "Tranh đấu bộc phát"
    ],
    "symbolism": [
      {
        "element": "Năm chàng trai vung gậy đối đầu",
        "meaning": "Sự xung đột năng lượng và cái tôi cá nhân"
      },
      {
        "element": "Trang phục đa màu sắc",
        "meaning": "Sự bất đồng về quan điểm và xuất thân"
      },
      {
        "element": "Địa hình gồ ghề",
        "meaning": "Môi trường thiếu ổn định và nhiều biến động"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang ở giữa một cuộc cạnh tranh sôi nổi; hãy xem đây là cơ hội để tôi luyện bản lĩnh và khẳng định năng lực.",
      "general": "Five of Wands phản ánh sự va chạm ý kiến, sự tranh đua nhiệt huyết và những mâu thuẫn nhỏ. Đây là môi trường rèn luyện sự sắc bén và linh hoạt của bạn.",
      "love": "Trong tình yêu, Five of Wands – Năm Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Xung đột đang lắng xuống để tìm tiếng nói chung, hoặc bạn đang né tránh mâu thuẫn một cách tiêu cực.",
      "blockedEnergy": "Năng lượng của Five of Wands – Năm Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Five of Wands ngược cho thấy sự thỏa hiệp đang dần hình thành, hoặc bạn đang mệt mỏi với những cuộc tranh cãi vô ích và muốn rút lui.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Five of Wands – Năm Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Sắt chỉ biến thành thép cứng khi trải qua ngọn lửa thiêu đốt và những nhát búa va đập liên hồi. Hãy xem xung đột là lò rèn tôi luyện bản lĩnh.",
    "reflectionQuestions": [
      "Lá bài Five of Wands – Năm Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "six-of-wands",
    "name": "Six of Wands",
    "nameVi": "Six of Wands – Sáu Gậy",
    "arcana": "minor",
    "number": 6,
    "romanNumeral": "VI",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Victory",
      "Success",
      "Public Recognition",
      "Progress",
      "Self-Confidence"
    ],
    "keywordsVi": [
      "Chiến thắng vẻ vang",
      "Công nhận rộng rãi",
      "Khúc khải hoàn",
      "Niềm tự hào chính đáng",
      "Bước tiến vượt bậc"
    ],
    "symbolism": [
      {
        "element": "Người cưỡi ngựa trắng đội vòng nguyệt quế",
        "meaning": "Sự đắc thắng thuần khiết và danh dự vinh quang"
      },
      {
        "element": "Cây gậy buộc vòng hoa giơ cao",
        "meaning": "Biểu tượng chiến thắng được giương cao trước muôn người"
      },
      {
        "element": "Đám đông đi theo",
        "meaning": "Sự ủng hộ và tán thưởng của tập thể"
      }
    ],
    "upright": {
      "keyMessage": "Khúc ca khải hoàn đang vang lên; mọi nỗ lực vượt qua thử thách của bạn được toàn thể cộng đồng công nhận.",
      "general": "Six of Wands là hình ảnh của vị tướng thắng trận trở về trong sự tung hô của đám đông. Bạn đạt được thành công lớn, khẳng định vị thế và được khen thưởng xứng đáng.",
      "love": "Trong tình yêu, Six of Wands – Sáu Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Thành công bị hoãn lại, thiếu sự công nhận từ cấp trên hoặc cảm giác tự phụ kiêu ngạo sau chiến thắng.",
      "blockedEnergy": "Năng lượng của Six of Wands – Sáu Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Six of Wands ngược cảnh báo về sự thất vọng khi công sức chưa được đền đáp, hoặc lời cảnh tỉnh về việc ngủ quên trên chiến thắng.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Six of Wands – Sáu Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy ngẩng cao đầu bước đi trong khúc khải hoàn của danh dự. Nhưng hãy giữ cho trái tim luôn khiêm nhường để ánh sáng vinh quang không làm bạn mù quáng.",
    "reflectionQuestions": [
      "Lá bài Six of Wands – Sáu Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "seven-of-wands",
    "name": "Seven of Wands",
    "nameVi": "Seven of Wands – Bảy Gậy",
    "arcana": "minor",
    "number": 7,
    "romanNumeral": "VII",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Challenge",
      "Defensiveness",
      "Perseverance",
      "Standing Ground",
      "Courage"
    ],
    "keywordsVi": [
      "Bảo vệ lập trường",
      "Kiên cường giữ vững vị trí",
      "Đương đầu áp lực",
      "Không lùi bước",
      "Dũng khí kiên định"
    ],
    "symbolism": [
      {
        "element": "Người đứng trên mỏm đất cao",
        "meaning": "Lợi thế địa hình và vị thế đạo đức vững vàng"
      },
      {
        "element": "Hai chiếc giày khác nhau",
        "meaning": "Sự ứng biến trong tình huống bất ngờ và áp lực"
      },
      {
        "element": "Sáu cây gậy chĩa lên từ bên dưới",
        "meaning": "Sự cạnh tranh và những lời dèm pha của đối thủ"
      }
    ],
    "upright": {
      "keyMessage": "Dù đang bị bao vây bởi áp lực từ nhiều phía, bạn đang ở vị thế cao hơn và hoàn toàn đủ sức bảo vệ lập trường của mình.",
      "general": "Seven of Wands thể hiện người chiến binh đứng trên đỉnh dốc một mình chống lại sáu cây gậy tấn công từ bên dưới. Bạn có lợi thế địa hình và ý chí kiên định để bảo vệ thành quả.",
      "love": "Trong tình yêu, Seven of Wands – Bảy Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang cảm thấy quá tải, kiệt sức vì phải liên tục phòng thủ hoặc bị áp lực dư luận đè bẹp.",
      "blockedEnergy": "Năng lượng của Seven of Wands – Bảy Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Seven of Wands ngược cho thấy bạn đang đuối sức trước sự tấn công dồn dập, cảm giác muốn buông xuôi hoặc tự ti vào khả năng của mình.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Seven of Wands – Bảy Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Khi bạn đứng trên đỉnh cao của lẽ phải và sự thật, một mình bạn cũng đủ sức ngăn chặn một đạo quân nghi ngờ. Hãy vững vàng, đừng lùi dù chỉ một bước.",
    "reflectionQuestions": [
      "Lá bài Seven of Wands – Bảy Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "eight-of-wands",
    "name": "Eight of Wands",
    "nameVi": "Eight of Wands – Tám Gậy",
    "arcana": "minor",
    "number": 8,
    "romanNumeral": "VIII",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Rapid Action",
      "Movement",
      "Quick Decisions",
      "Fast News",
      "Alignment"
    ],
    "keywordsVi": [
      "Tốc độ phi thường",
      "Tin tức nhanh chóng",
      "Hành động dứt khoát",
      "Dòng chảy thuận lợi",
      "Chuyến đi gấp rút"
    ],
    "symbolism": [
      {
        "element": "Tám cây gậy bay song song trên trời",
        "meaning": "Năng lượng tập trung cao độ và định hướng chuẩn xác"
      },
      {
        "element": "Bầu trời quang đãng",
        "meaning": "Không còn chướng ngại vật cản trở dòng chảy"
      },
      {
        "element": "Dòng sông êm đềm bên dưới",
        "meaning": "Cảm xúc thuận hòa nâng đỡ hành động dứt khoát"
      }
    ],
    "upright": {
      "keyMessage": "Mọi việc đang tiến triển với tốc độ ánh sáng; những tin tức mong đợi đang bay về và cơ hội mở ra dồn dập.",
      "general": "Eight of Wands là lá bài duy nhất không có hình người trong bộ Gậy, chỉ có 8 cây gậy bay vút qua bầu trời quang đãng. Năng lượng thông suốt, rào cản tan biến, mọi thứ diễn ra cực nhanh.",
      "love": "Trong tình yêu, Eight of Wands – Tám Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự chậm trễ khó chịu, tin tức bị gián đoạn, hành động nóng vội hấp tấp dẫn đến sai sót đáng tiếc.",
      "blockedEnergy": "Năng lượng của Eight of Wands – Tám Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Eight of Wands ngược cảnh báo bạn đang hành động quá vội vàng khi chưa rõ thông tin, hoặc ngược lại đang bức bối vì mọi việc bị hoãn lại ngoài ý muốn.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Eight of Wands – Tám Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Mũi tên của ý chí đã được bắn đi từ cây cung của lòng kiên định. Hãy giữ đôi mắt sắc bén và chuẩn bị đón nhận đích đến đang tới rất gần.",
    "reflectionQuestions": [
      "Lá bài Eight of Wands – Tám Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "nine-of-wands",
    "name": "Nine of Wands",
    "nameVi": "Nine of Wands – Chín Gậy",
    "arcana": "minor",
    "number": 9,
    "romanNumeral": "IX",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Resilience",
      "Grit",
      "Last Stand",
      "Persistence",
      "Boundaries"
    ],
    "keywordsVi": [
      "Kiên cường bất khuất",
      "Chặng đường cuối cùng",
      "Thiết lập ranh giới",
      "Vết sẹo danh dự",
      "Bền bỉ đến cùng"
    ],
    "symbolism": [
      {
        "element": "Băng trắng quấn trên đầu",
        "meaning": "Kinh nghiệm xương máu và vết sẹo từ những trận chiến đã qua"
      },
      {
        "element": "Tám cây gậy làm hàng rào phía sau",
        "meaning": "Hàng rào bảo vệ vững chắc và ranh giới an toàn"
      },
      {
        "element": "Ánh mắt cảnh giác kiên định",
        "meaning": "Ý chí không bao giờ khuất phục trước khó khăn"
      }
    ],
    "upright": {
      "keyMessage": "Dù mang trên mình những vết thương sau nhiều trận chiến, bạn sắp về đích rồi; hãy ráng thêm một chút nữa để giữ vững phòng tuyến.",
      "general": "Nine of Wands khắc họa người chiến binh băng đầu, đứng dựa vào một cây gậy trong khi 8 cây gậy dựng thành hàng rào phía sau. Bạn mệt mỏi nhưng kiên cường, cảnh giác và không bao giờ bỏ cuộc.",
      "love": "Trong tình yêu, Nine of Wands – Chín Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang cảm thấy kiệt quệ hoàn toàn, đa nghi thái quá hoặc dựng lên những bức tường phòng thủ quá mức cần thiết.",
      "blockedEnergy": "Năng lượng của Nine of Wands – Chín Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Nine of Wands ngược cho thấy sự kiệt sức do gồng mình quá lâu, chứng hoang tưởng sợ bị tấn công khiến bạn không dám mở lòng đón nhận sự giúp đỡ.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Nine of Wands – Chín Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Những vết thương bạn mang trên mình không phải là biểu tượng của sự yếu đuối, mà là huy chương của một tâm hồn bất khuất chưa bao giờ đầu hàng số phận.",
    "reflectionQuestions": [
      "Lá bài Nine of Wands – Chín Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ten-of-wands",
    "name": "Ten of Wands",
    "nameVi": "Ten of Wands – Mười Gậy",
    "arcana": "minor",
    "number": 10,
    "romanNumeral": "X",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Burden",
      "Extra Responsibility",
      "Hard Work",
      "Stress",
      "Obligation"
    ],
    "keywordsVi": [
      "Gánh nặng quá tải",
      "Trách nhiệm đè nặng",
      "Làm việc cật lực",
      "Áp lực trách nhiệm",
      "Cần học cách chia sẻ"
    ],
    "symbolism": [
      {
        "element": "Mười cây gậy nặng che khuất mặt",
        "meaning": "Công việc quá tải làm mất đi tầm nhìn và niềm vui cuộc sống"
      },
      {
        "element": "Dáng người còng lưng bước đi",
        "meaning": "Nỗ lực tột cùng gánh vác trách nhiệm"
      },
      {
        "element": "Ngôi làng phía trước mặt",
        "meaning": "Mục tiêu đã rất gần, chỉ cần cố gắng nốt đoạn cuối"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang ôm đồm quá nhiều việc lên vai; đích đến đã ở ngay trước mắt nhưng bạn cần học cách buông bớt gánh nặng.",
      "general": "Ten of Wands là hình ảnh người đàn ông còng lưng ôm trọn 10 cây gậy nặng nề bước về thị trấn. Thành công mang lại quá nhiều nghĩa vụ khiến bạn kiệt sức và bị che khuất tầm nhìn.",
      "love": "Trong tình yêu, Ten of Wands – Mười Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự sụp đổ vì kiệt sức do gánh vác quá mức, hoặc bạn đang bắt đầu biết buông bỏ và ủy quyền công việc cho người khác.",
      "blockedEnergy": "Năng lượng của Ten of Wands – Mười Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ten of Wands ngược là lời cảnh báo khẩn cấp: nếu bạn tiếp tục không chịu san sẻ công việc, lưng bạn sẽ gãy. Hãy học cách nói 'không' và giao phó cho người khác.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ten of Wands – Mười Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Trở thành người hùng không có nghĩa là phải một mình gánh cả thế giới trên vai. Hãy can đảm đặt bớt những cành củi khô xuống để đôi tay bạn được tự do ôm lấy niềm vui.",
    "reflectionQuestions": [
      "Lá bài Ten of Wands – Mười Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "page-of-wands",
    "name": "Page of Wands",
    "nameVi": "Page of Wands – Tiểu Đồng Gậy",
    "arcana": "minor",
    "number": 11,
    "romanNumeral": "Page",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Enthusiasm",
      "Exploration",
      "Discovery",
      "Free Spirit",
      "New Ideas"
    ],
    "keywordsVi": [
      "Nhiệt huyết tuổi trẻ",
      "Tinh thần khám phá",
      "Ý tưởng tươi mới",
      "Sứ giả tin vui",
      "Đam mê học hỏi"
    ],
    "symbolism": [
      {
        "element": "Chàng trai trẻ nhìn chăm chú vào chồi cây",
        "meaning": "Sự say mê với ý tưởng và tiềm năng sáng tạo"
      },
      {
        "element": "Họa tiết kỳ nhông lửa trên áo",
        "meaning": "Nguyên tố Lửa thuần khiết, khả năng tái sinh và biến hóa"
      },
      {
        "element": "Ba ngọn kim tự tháp xa xa",
        "meaning": "Tri thức cổ xưa đang chờ được khám phá"
      }
    ],
    "upright": {
      "keyMessage": "Một tin tức hào hứng hoặc một cơ hội sáng tạo mới đang được mang đến bởi một tâm hồn trẻ trung, đầy nhiệt huyết.",
      "general": "Page of Wands là người mang sứ mệnh khám phá, tràn ngập tò mò và lòng dũng cảm. Cậu đứng giữa sa mạc nhìn vào cây gậy đang nảy lộc với ánh mắt say mê học hỏi điều mới mẻ.",
      "love": "Trong tình yêu, Page of Wands – Tiểu Đồng Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự nóng vội bốc đồng, ý tưởng hay nhưng thiếu kiên trì thực hiện, hoặc tin tức bị trì hoãn gây hụt hẫng.",
      "blockedEnergy": "Năng lượng của Page of Wands – Tiểu Đồng Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Page of Wands ngược cảnh báo về sự thiếu tập trung, nói nhiều làm ít, hoặc hành động hấp tấp làm hỏng việc của một người trẻ tuổi thiếu kinh nghiệm.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Page of Wands – Tiểu Đồng Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy giữ cho ngọn lửa đam mê của bạn luôn tươi mới và tinh khôi như ngày đầu tiên. Đừng sợ hãi sự bỡ ngỡ của kẻ bắt đầu khám phá thế giới.",
    "reflectionQuestions": [
      "Lá bài Page of Wands – Tiểu Đồng Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "knight-of-wands",
    "name": "Knight of Wands",
    "nameVi": "Knight of Wands – Hiệp Sĩ Gậy",
    "arcana": "minor",
    "number": 12,
    "romanNumeral": "Knight",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Energy",
      "Passion",
      "Adventure",
      "Impulsiveness",
      "Action"
    ],
    "keywordsVi": [
      "Hành động táo bạo",
      "Tinh thần phiêu lưu",
      "Đam mê rực lửa",
      "Tiến nhanh về phía trước",
      "Khí phách dũng mãnh"
    ],
    "symbolism": [
      {
        "element": "Chiến mã lồng lên phi nước đại",
        "meaning": "Năng lượng hành động cuồn cuộn không thể kìm hãm"
      },
      {
        "element": "Áo choàng thêu hình kỳ nhông lửa",
        "meaning": "Sức mạnh chuyển hóa và đam mê bất tận"
      },
      {
        "element": "Chùm lông đỏ rực trên mũ giáp",
        "meaning": "Ý chí sắt đá và nhiệt huyết bùng cháy"
      }
    ],
    "upright": {
      "keyMessage": "Hãy dũng cảm lao về phía trước với ngọn lửa đam mê; sự quyết đoán và năng lượng bùng nổ sẽ giúp bạn tạo nên kỳ tích.",
      "general": "Knight of Wands phi trên lưng con chiến mã rực lửa, áo giáp sáng chói, sẵn sàng chinh phục mọi đỉnh cao. Chàng là hiện thân của hành động nhanh, quyết liệt và tinh thần không ngại hiểm nguy.",
      "love": "Trong tình yêu, Knight of Wands – Hiệp Sĩ Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Nóng giận mất kiểm soát, bốc đồng lao vào nguy hiểm, hành xử thô lỗ hoặc đốt cháy giai đoạn dẫn đến thất bại.",
      "blockedEnergy": "Năng lượng của Knight of Wands – Hiệp Sĩ Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Knight of Wands ngược cảnh báo bạn đang hành động quá hung hăng, thiếu kiên nhẫn, dễ chán nản khi gặp trở ngại đầu tiên.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Knight of Wands – Hiệp Sĩ Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Ngọn gió đam mê đã nâng bước chiến mã của bạn. Hãy cưỡi trên ngọn sóng nhiệt huyết ấy nhưng đừng quên giữ chặt dây cương của sự sáng suốt.",
    "reflectionQuestions": [
      "Lá bài Knight of Wands – Hiệp Sĩ Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "queen-of-wands",
    "name": "Queen of Wands",
    "nameVi": "Queen of Wands – Hoàng Hậu Gậy",
    "arcana": "minor",
    "number": 13,
    "romanNumeral": "Queen",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Courage",
      "Confidence",
      "Independence",
      "Social Charm",
      "Warmth"
    ],
    "keywordsVi": [
      "Tự tin rạng ngời",
      "Sức hút quyến rũ",
      "Nữ quyền độc lập",
      "Ấm áp hào sảng",
      "Bản lĩnh truyền cảm hứng"
    ],
    "symbolism": [
      {
        "element": "Bông hoa hướng dương tay trái",
        "meaning": "Sự hướng thiện, niềm vui rạng rỡ và sinh lực dồi dào"
      },
      {
        "element": "Chú mèo đen dưới chân ngai",
        "meaning": "Trực giác sắc bén và sự kết nối với bí ẩn tâm linh"
      },
      {
        "element": "Sư tử khắc trên ngai vàng",
        "meaning": "Lòng dũng cảm và năng lượng hoàng gia quyền quý"
      }
    ],
    "upright": {
      "keyMessage": "Hãy tỏa sáng bằng sự tự tin, lòng ấm áp và sức quyến rũ tự nhiên của bạn; bạn có khả năng thắp sáng bất kỳ không gian nào bạn bước vào.",
      "general": "Queen of Wands ngồi trên ngai vàng khắc hình sư tử và hoa hướng dương, một tay cầm gậy, một tay cầm hoa hướng dương. Bên chân bà là chú mèo đen biểu trưng cho trực giác sâu sắc. Bà vừa mạnh mẽ, độc lập vừa ấm áp và tràn đầy sức sống.",
      "love": "Trong tình yêu, Queen of Wands – Hoàng Hậu Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Cảm giác bất an, tự ti, hoặc biến thành người thích kiểm soát, ghen tuông độc đoán và đòi hỏi sự chú ý thái quá.",
      "blockedEnergy": "Năng lượng của Queen of Wands – Hoàng Hậu Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Queen of Wands ngược cảnh báo về sự nóng nảy, tính khí thất thường, hoặc cảm giác đánh mất ngọn lửa tự tin bên trong.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Queen of Wands – Hoàng Hậu Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Vẻ đẹp rạng rỡ nhất của bạn tỏa ra từ sự tự tin chân thật và lòng nhân ái ấm áp. Hãy cứ là vầng thái dương sưởi ấm thế giới theo cách của riêng bạn.",
    "reflectionQuestions": [
      "Lá bài Queen of Wands – Hoàng Hậu Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "king-of-wands",
    "name": "King of Wands",
    "nameVi": "King of Wands – Vua Gậy",
    "arcana": "minor",
    "number": 14,
    "romanNumeral": "King",
    "suit": "wands",
    "element": "Lửa",
    "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
    "keywords": [
      "Natural Leader",
      "Visionary",
      "Honor",
      "Overcoming Challenges",
      "Charisma"
    ],
    "keywordsVi": [
      "Thủ lĩnh bẩm sinh",
      "Nhà lãnh đạo có tầm nhìn",
      "Khí chất quân vương",
      "Truyền lửa truyền cảm hứng",
      "Bản lĩnh đại trượng phu"
    ],
    "symbolism": [
      {
        "element": "Ngai vàng khắc sư tử và kỳ nhông cắn đuôi (Ouroboros)",
        "meaning": "Sự làm chủ đam mê và chu kỳ quyền lực bất tận"
      },
      {
        "element": "Áo choàng màu cam đỏ rực rỡ",
        "meaning": "Nhiệt huyết lãnh đạo và khí phách kiên định"
      },
      {
        "element": "Dáng ngồi nghiêng sẵn sàng hành động",
        "meaning": "Không bao giờ trì trệ, luôn chủ động nắm bắt thời cơ"
      }
    ],
    "upright": {
      "keyMessage": "Bằng tầm nhìn xa trông rộng và khí chất đĩnh đạc, bạn có khả năng dẫn dắt tập thể vượt qua mọi giông bão để đạt thành tựu vĩ đại.",
      "general": "King of Wands ngồi uy nghi trên ngai vàng, cầm cây gậy đâm chồi, ánh mắt nhìn thẳng vào tương lai. Ngài là bậc thầy làm chủ nguyên tố Lửa: vừa có đam mê vừa có sự điềm tĩnh và kỷ luật của một nhà lãnh đạo kiệt xuất.",
      "love": "Trong tình yêu, King of Wands – Vua Gậy xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Lãnh đạo độc đoán, nóng nảy, áp đặt ý chí lên người khác hoặc đưa ra những quyết định liều lĩnh thiếu cân nhắc.",
      "blockedEnergy": "Năng lượng của King of Wands – Vua Gậy bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "King of Wands ngược cảnh báo bạn đang trở nên quá gia trưởng, tự phụ, không chịu lắng nghe cấp dưới dẫn đến thất bại tập thể.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà King of Wands – Vua Gậy mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Người lãnh đạo vĩ đại nhất không tạo ra sự sợ hãi, mà thổi bùng ngọn lửa đam mê và niềm tin vào trái tim của những người cùng đồng hành.",
    "reflectionQuestions": [
      "Lá bài King of Wands – Vua Gậy đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ace-of-cups",
    "name": "Ace of Cups",
    "nameVi": "Ace of Cups – Át Cốc",
    "arcana": "minor",
    "number": 1,
    "romanNumeral": "I",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Love",
      "New Feelings",
      "Emotional Awakening",
      "Compassion",
      "Intuition"
    ],
    "keywordsVi": [
      "Tình yêu tinh khôi",
      "Dòng chảy cảm xúc",
      "Đánh thức trái tim",
      "Lòng trắc ẩn",
      "Trực giác tâm linh"
    ],
    "symbolism": [
      {
        "element": "Chim bồ câu trắng mang bánh thánh",
        "meaning": "Ân phước tâm linh và sự bình an thuần khiết"
      },
      {
        "element": "Năm dòng nước tuôn trào",
        "meaning": "Năm giác quan và tình cảm dạt dào không bờ bến"
      },
      {
        "element": "Mặt hồ phủ hoa súng trắng",
        "meaning": "Sự thanh tịnh của tiềm thức giác ngộ"
      }
    ],
    "upright": {
      "keyMessage": "Một dòng suối tình cảm ngọt ngào và sự chữa lành đang tuôn trào; hãy mở rộng trái tim để đón nhận tình yêu thuần khiết.",
      "general": "Ace of Cups là cội nguồn của mọi cảm xúc thánh thiện. Chiếc chén thánh tràn ngập năm dòng nước biểu trưng cho năm giác quan được thanh tẩy, chim bồ câu trắng mang bánh thánh rơi vào chén mang lại ân phước thiêng liêng.",
      "love": "Trong tình yêu, Ace of Cups – Át Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Cảm xúc bị tắc nghẽn, tổn thương tình cảm cũ chưa lành, hoặc bạn đang đóng chặt cửa lòng vì sợ đau đớn.",
      "blockedEnergy": "Năng lượng của Ace of Cups – Át Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ace of Cups ngược cho thấy trái tim bạn đang khô hạn do thiếu tình thương, hoặc đang để cảm xúc tiêu cực ứ đọng phá hủy sự bình an.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ace of Cups – Át Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Trái tim bạn là chiếc chén thánh không đáy của vũ trụ. Càng rót ra tình yêu thương vô điều kiện, nó lại càng tràn ngập nguồn nước sự sống ngọt ngào.",
    "reflectionQuestions": [
      "Lá bài Ace of Cups – Át Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "two-of-cups",
    "name": "Two of Cups",
    "nameVi": "Two of Cups – Hai Cốc",
    "arcana": "minor",
    "number": 2,
    "romanNumeral": "II",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Unified Love",
      "Partnership",
      "Mutual Attraction",
      "Connection",
      "Soulmates"
    ],
    "keywordsVi": [
      "Tình yêu tri kỷ",
      "Sự hòa hợp đôi lứa",
      "Thu hút lẫn nhau",
      "Kết nối tâm hồn",
      "Đối tác ăn ý"
    ],
    "symbolism": [
      {
        "element": "Quyền trượng Caduceus và sư tử có cánh",
        "meaning": "Sự chữa lành và thăng hoa năng lượng qua tình yêu"
      },
      {
        "element": "Hai người nâng chén trao nhau",
        "meaning": "Sự bình đẳng, tôn trọng và gắn kết chân thành"
      },
      {
        "element": "Vòng hoa trên đầu hai nhân vật",
        "meaning": "Tình cảm tươi đẹp và sự chúc phúc của tự nhiên"
      }
    ],
    "upright": {
      "keyMessage": "Hai tâm hồn tìm thấy sự đồng điệu sâu sắc; đây là sự khởi đầu của một mối quan hệ tri kỷ hoặc hợp tác hoàn hảo.",
      "general": "Two of Cups khắc họa đôi nam nữ nâng cốc chúc mừng nhau dưới quyền trượng Caduceus của thần Hermes và đầu sư tử có cánh. Sự hòa hợp âm dương tuyệt đối, tôn trọng và tin tưởng lẫn nhau.",
      "love": "Trong tình yêu, Two of Cups – Hai Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự bất hòa, rạn nứt trong giao tiếp, hiểu lầm hoặc cảm giác mất đi sự kết nối sâu sắc giữa hai người.",
      "blockedEnergy": "Năng lượng của Two of Cups – Hai Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Two of Cups ngược cảnh báo về sự mất cân bằng trong mối quan hệ, một bên cho đi quá nhiều trong khi bên kia hời hợt, hoặc tranh cãi do cái tôi.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Two of Cups – Hai Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Tình yêu đích thực không phải là hai người nhìn nhau đắm đuối, mà là hai tâm hồn cùng nhìn về một hướng với lòng tin son sắt.",
    "reflectionQuestions": [
      "Lá bài Two of Cups – Hai Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "three-of-cups",
    "name": "Three of Cups",
    "nameVi": "Three of Cups – Ba Cốc",
    "arcana": "minor",
    "number": 3,
    "romanNumeral": "III",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Celebration",
      "Friendship",
      "Sisterhood",
      "Creativity",
      "Gathering"
    ],
    "keywordsVi": [
      "Tình bạn thắm thiết",
      "Tiệc mừng vui vẻ",
      "Sự gắn kết hội nhóm",
      "Sáng tạo thăng hoa",
      "Chia sẻ ngọt ngào"
    ],
    "symbolism": [
      {
        "element": "Ba cô gái nâng cốc nhảy múa",
        "meaning": "Sự tương trợ, tình chị em/bạn hữu keo sơn"
      },
      {
        "element": "Hoa quả và ngũ cốc vương trên đất",
        "meaning": "Sự sung túc và chia sẻ thành quả ngọt ngào"
      },
      {
        "element": "Trang phục rực rỡ",
        "meaning": "Sự đa dạng trong tính cách nhưng hòa quyện trong niềm vui"
      }
    ],
    "upright": {
      "keyMessage": "Hãy nâng ly chúc mừng bên những người bạn tri kỷ; tình bạn chân thành và sự hỗ trợ lẫn nhau sẽ mang lại niềm vui lớn.",
      "general": "Three of Cups là hình ảnh ba người thiếu nữ nhảy múa trong vườn hoa trái, nâng cao ba chiếc cốc chúc mừng nhau. Lá bài biểu trưng cho tình bạn đẹp, sự tương trợ và niềm vui chia sẻ.",
      "love": "Trong tình yêu, Three of Cups – Ba Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Tin đồn thất thiệt trong nhóm bạn, cảm giác bị cô lập, hoặc tiệc tùng quá đà làm tổn hại sức khỏe.",
      "blockedEnergy": "Năng lượng của Three of Cups – Ba Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Three of Cups ngược cảnh báo về những mối quan hệ bè phái độc hại, thói ngồi lê đôi mách hoặc sự ghen tị ngầm giữa những người tưởng như thân thiết.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Three of Cups – Ba Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Một niềm vui được sẻ chia sẽ nhân đôi, một nỗi buồn được tâm tình sẽ vơi đi một nửa. Hãy trân quý những người bạn cùng bạn nâng cốc chúc mừng cuộc đời.",
    "reflectionQuestions": [
      "Lá bài Three of Cups – Ba Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "four-of-cups",
    "name": "Four of Cups",
    "nameVi": "Four of Cups – Bốn Cốc",
    "arcana": "minor",
    "number": 4,
    "romanNumeral": "IV",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Apathy",
      "Contemplation",
      "Disconnection",
      "Melancholy",
      "Boredom"
    ],
    "keywordsVi": [
      "Chán chường thờ ơ",
      "Ngồi suy tư trầm mặc",
      "Mất kết nối cảm xúc",
      "Bỏ lỡ cơ hội mới",
      "Thu mình u sầu"
    ],
    "symbolism": [
      {
        "element": "Người khoanh tay quay mặt đi",
        "meaning": "Sự phòng thủ, khép kín lòng mình và chán nản"
      },
      {
        "element": "Ba chiếc cốc trên cỏ",
        "meaning": "Những trải nghiệm cũ đã không còn mang lại sự hào hứng"
      },
      {
        "element": "Chiếc cốc thứ tư lơ lửng từ mây",
        "meaning": "Món quà mới của vũ trụ đang chờ được nhận diện"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang quá tập trung vào nỗi thất vọng cũ mà không nhận ra chiếc cốc cơ hội mới toanh đang được dâng tận tay.",
      "general": "Four of Cups cho thấy chàng trai ngồi khoanh tay dưới gốc cây, nhìn chăm chú vào ba chiếc cốc trên mặt đất với vẻ chán nản. Một bàn tay từ mây chìa ra chiếc cốc thứ tư nhưng chàng không thèm đoái hoài.",
      "love": "Trong tình yêu, Four of Cups – Bốn Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn bắt đầu thức tỉnh khỏi cơn u sầu, ngước nhìn lên và sẵn sàng đón nhận những cơ hội mới của cuộc đời.",
      "blockedEnergy": "Năng lượng của Four of Cups – Bốn Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Four of Cups ngược là dấu hiệu tích cực: bạn đã chán ngán sự tự thương hại bản thân, đứng dậy bước ra ngoài và mở lòng đón nhận tình cảm mới.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Four of Cups – Bốn Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Cánh cửa này khép lại thì cánh cửa khác sẽ mở ra. Đừng mải nhìn chăm chăm vào cánh cửa đóng kín mà bỏ lỡ cả bầu trời cơ hội đang hé nở bên cạnh.",
    "reflectionQuestions": [
      "Lá bài Four of Cups – Bốn Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "five-of-cups",
    "name": "Five of Cups",
    "nameVi": "Five of Cups – Năm Cốc",
    "arcana": "minor",
    "number": 5,
    "romanNumeral": "V",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Loss",
      "Grief",
      "Disappointment",
      "Regret",
      "Focus on the Negative"
    ],
    "keywordsVi": [
      "Mất mát đau thương",
      "Nuối tiếc muộn màng",
      "Thất vọng tình cảm",
      "Vẫn còn hy vọng",
      "Chữa lành nỗi đau"
    ],
    "symbolism": [
      {
        "element": "Áo choàng đen trùm kín",
        "meaning": "Nỗi buồn sâu sắc và sự tang tóc trong tâm hồn"
      },
      {
        "element": "Ba chiếc cốc đổ rượu đỏ tràn trề",
        "meaning": "Mất mát, tiếc nuối và ước mơ tan vỡ"
      },
      {
        "element": "Hai chiếc cốc đứng vững phía sau",
        "meaning": "Những phước lành, tình yêu vẫn còn nguyên vẹn"
      },
      {
        "element": "Cây cầu dẫn về lâu đài",
        "meaning": "Lối thoát và con đường trở về với sự an toàn"
      }
    ],
    "upright": {
      "keyMessage": "Dù ba chiếc cốc đã đổ và rượu quý đã tràn, hãy quay đầu lại; hai chiếc cốc nguyên vẹn vẫn đang đợi bạn tiếp tục hành trình.",
      "general": "Five of Cups là bức tranh đầy cảm xúc về sự nuối tiếc. Người áo choàng đen cúi đầu nhìn ba chiếc cốc đổ trước mặt, đau buồn về những gì đã mất mà quên rằng sau lưng vẫn còn hai chiếc cốc đứng vững.",
      "love": "Trong tình yêu, Five of Cups – Năm Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang dần nguôi ngoai nỗi đau, chấp nhận tha thứ cho quá khứ và bắt đầu quay lại với những điều quý giá còn sót lại.",
      "blockedEnergy": "Năng lượng của Five of Cups – Năm Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Five of Cups ngược báo hiệu sự phục hồi sau mất mát. Bạn ngừng than khóc cho những gì đã đổ vỡ, đứng dậy nhặt lấy hai chiếc cốc còn lại và bước qua cây cầu trở về nhà.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Five of Cups – Năm Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Khóc cho những điều đã qua là bản năng của trái tim, nhưng quay đầu lại ôm lấy những gì còn ở lại mới là sự dũng cảm của tâm hồn.",
    "reflectionQuestions": [
      "Lá bài Five of Cups – Năm Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "six-of-cups",
    "name": "Six of Cups",
    "nameVi": "Six of Cups – Sáu Cốc",
    "arcana": "minor",
    "number": 6,
    "romanNumeral": "VI",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Nostalgia",
      "Childhood Memories",
      "Innocence",
      "Reunion",
      "Joy"
    ],
    "keywordsVi": [
      "Ký ức tuổi thơ",
      "Hoài niệm ngọt ngào",
      "Tâm hồn trong sáng",
      "Gặp lại cố nhân",
      "Món quà chân thành"
    ],
    "symbolism": [
      {
        "element": "Cậu bé trao cốc hoa cho cô bé",
        "meaning": "Sự sẻ chia thuần khiết, tình cảm ngây thơ không vụ lợi"
      },
      {
        "element": "Sáu chiếc cốc cắm hoa trắng",
        "meaning": "Ký ức ngọt ngào và sự bình yên của tâm hồn"
      },
      {
        "element": "Người lính bảo vệ xa xa",
        "meaning": "Sự an toàn và che chở của gia đình thời thơ ấu"
      }
    ],
    "upright": {
      "keyMessage": "Một cuộc hội ngộ ấm áp với quá khứ, những kỷ niệm êm đềm tuổi thơ mang lại sự vỗ về ngọt ngào cho hiện tại.",
      "general": "Six of Cups đưa ta về khu vườn cổ tích nơi cậu bé trao cho cô bé một chiếc cốc cắm đầy hoa trắng tinh khôi. Lá bài nói về sự thuần khiết, lòng tốt không toan tính và sự ngọt ngào của những ký ức xưa.",
      "love": "Trong tình yêu, Six of Cups – Sáu Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn đang mắc kẹt trong quá khứ, sống mãi trong hào quang cũ hoặc ngây thơ quá mức trước thực tế khắc nghiệt.",
      "blockedEnergy": "Năng lượng của Six of Cups – Sáu Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Six of Cups ngược nhắc nhở bạn cần trưởng thành, buông bỏ sự bám víu vào những hoài niệm đã qua để tập trung xây dựng hiện tại.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Six of Cups – Sáu Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy giữ lại sự thuần khiết và lòng tốt của đứa trẻ ngày xưa trong tim bạn, nhưng hãy bước đi bằng đôi chân vững chãi của một người lớn kiên cường.",
    "reflectionQuestions": [
      "Lá bài Six of Cups – Sáu Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "seven-of-cups",
    "name": "Seven of Cups",
    "nameVi": "Seven of Cups – Bảy Cốc",
    "arcana": "minor",
    "number": 7,
    "romanNumeral": "VII",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Illusion",
      "Choices",
      "Wishful Thinking",
      "Fantasy",
      "Imagination"
    ],
    "keywordsVi": [
      "Ảo ảnh mê hoặc",
      "Đứng trước nhiều lựa chọn",
      "Mơ mộng viển vông",
      "Trí tưởng tượng bay bổng",
      "Cần tỉnh thức thực tế"
    ],
    "symbolism": [
      {
        "element": "Bảy chiếc cốc trong mây",
        "meaning": "Những giấc mơ, ảo tưởng và dục vọng của con người"
      },
      {
        "element": "Con rồng và con rắn",
        "meaning": "Những cám dỗ nguy hiểm và hiểm họa tiềm ẩn"
      },
      {
        "element": "Dáng người quay lưng nhìn",
        "meaning": "Sự bối rối và choáng ngợp trước ma trận lựa chọn"
      }
    ],
    "upright": {
      "keyMessage": "Có quá nhiều lời mời gọi hấp dẫn đang hiện ra trước mắt; hãy tỉnh táo phân biệt giữa ảo tưởng nhất thời và giá trị đích thực.",
      "general": "Seven of Cups miêu tả người đứng trước 7 chiếc cốc lơ lửng trên mây, mỗi cốc chứa một điều kỳ lạ: lâu đài, châu báu, vòng nguyệt quế, rồng, rắn, mặt người và khăn trùm bí ẩn. Bạn đứng trước nhiều lựa chọn nhưng đầy cạm bẫy.",
      "love": "Trong tình yêu, Seven of Cups – Bảy Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Ảo ảnh tan biến, bạn nhìn rõ sự thật và đưa ra được quyết định dứt khoát dựa trên thực tế.",
      "blockedEnergy": "Năng lượng của Seven of Cups – Bảy Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Seven of Cups ngược giúp bạn tỉnh mộng sau chuỗi ngày mơ tưởng hão huyền, tập trung vào mục tiêu cụ thể và bắt tay vào hành động thực tế.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Seven of Cups – Bảy Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Không phải thứ gì lấp lánh cũng là vàng. Hãy dùng con mắt của trí tuệ và sự thật để soi thấu qua những đám mây ảo ảnh rực rỡ.",
    "reflectionQuestions": [
      "Lá bài Seven of Cups – Bảy Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "eight-of-cups",
    "name": "Eight of Cups",
    "nameVi": "Eight of Cups – Tám Cốc",
    "arcana": "minor",
    "number": 8,
    "romanNumeral": "VIII",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Walking Away",
      "Abandoning Old Path",
      "Searching for Truth",
      "Letting Go",
      "Withdrawal"
    ],
    "keywordsVi": [
      "Dứt áo ra đi",
      "Từ bỏ con đường cũ",
      "Tìm kiếm ý nghĩa sâu sắc",
      "Hành trình tâm linh",
      "Can đảm buông tay"
    ],
    "symbolism": [
      {
        "element": "Người quay lưng bước lên núi",
        "meaning": "Hành trình tìm kiếm chân lý và giá trị tâm linh cao hơn"
      },
      {
        "element": "Tám chiếc cốc xếp ngay ngắn",
        "meaning": "Thành tựu vật chất đã từng quý giá nhưng nay không còn đủ đầy"
      },
      {
        "element": "Mặt trăng khuyết kết hợp nhật thực",
        "meaning": "Sự bất an nội tâm thúc đẩy cuộc hành hương"
      }
    ],
    "upright": {
      "keyMessage": "Dù đã dày công gây dựng, bạn nhận ra những điều này không còn làm bạn hạnh phúc; hãy can đảm quay lưng bước đi tìm chân trời mới.",
      "general": "Eight of Cups khắc họa người đàn ông mặc áo đỏ chống gậy bước đi trong đêm trăng, bỏ lại sau lưng 8 chiếc cốc xếp ngay ngắn. Chàng rời bỏ sự ổn định vật chất để đi tìm ý nghĩa tâm linh cao cả hơn.",
      "love": "Trong tình yêu, Eight of Cups – Tám Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn sợ hãi không dám từ bỏ một mối quan hệ hay công việc đã nguội lạnh, chấp nhận sống mòn trong sự bế tắc.",
      "blockedEnergy": "Năng lượng của Eight of Cups – Tám Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Eight of Cups ngược cảnh báo bạn đang chần chừ, bám víu vào những thứ không còn giá trị chỉ vì tiếc công sức đã bỏ ra trong quá khứ.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Eight of Cups – Tám Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Đôi khi, việc can đảm quay lưng bước đi không phải là sự bỏ cuộc, mà là sự tôn trọng tối thượng dành cho tiếng gọi thiêng liêng của linh hồn bạn.",
    "reflectionQuestions": [
      "Lá bài Eight of Cups – Tám Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "nine-of-cups",
    "name": "Nine of Cups",
    "nameVi": "Nine of Cups – Chín Cốc",
    "arcana": "minor",
    "number": 9,
    "romanNumeral": "IX",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Contentment",
      "Satisfaction",
      "Wish Come True",
      "Gratitude",
      "Pleasure"
    ],
    "keywordsVi": [
      "Ước nguyện thành hiện thực",
      "Hài lòng mãn nguyện",
      "Hưởng thụ thành quả",
      "Lòng biết ơn",
      "Lá bài điều ước"
    ],
    "symbolism": [
      {
        "element": "Người đàn ông mỉm cười khoanh tay",
        "meaning": "Sự mãn nguyện sâu sắc và cảm giác đủ đầy"
      },
      {
        "element": "Chín chiếc cốc vàng xếp vòng cung",
        "meaning": "Mọi ước nguyện về tình cảm và vật chất đều được đáp ứng"
      },
      {
        "element": "Khăn trải bàn màu xanh hy vọng",
        "meaning": "Sự an lành và thịnh vượng bền vững"
      }
    ],
    "upright": {
      "keyMessage": "Lá bài 'Wish Card' mang đến điềm lành tối thượng: điều ước chân thành bấy lâu nay của bạn sắp sửa trở thành hiện thực.",
      "general": "Nine of Cups khắc họa người đàn ông bệ vệ ngồi khoanh tay mỉm cười tự mãn, phía sau là 9 chiếc cốc vàng óng xếp ngay ngắn trên kệ phủ vải xanh. Đây là trạng thái thỏa mãn toàn diện về cả thể chất, tình cảm và tinh thần.",
      "love": "Trong tình yêu, Nine of Cups – Chín Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Thỏa mãn bề ngoài nhưng trống rỗng bên trong, tự mãn kiêu ngạo hoặc chi tiêu hưởng thụ quá đà.",
      "blockedEnergy": "Năng lượng của Nine of Cups – Chín Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Nine of Cups ngược cảnh báo bạn đạt được điều mình muốn nhưng nhận ra nó không mang lại hạnh phúc như tưởng tượng, hoặc đang quá nuông chiều bản thân.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Nine of Cups – Chín Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy mỉm cười và đón nhận phước lành viên mãn của vũ trụ. Hạnh phúc thực sự là khi tâm bạn biết đủ và tràn ngập lòng biết ơn cuộc đời.",
    "reflectionQuestions": [
      "Lá bài Nine of Cups – Chín Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ten-of-cups",
    "name": "Ten of Cups",
    "nameVi": "Ten of Cups – Mười Cốc",
    "arcana": "minor",
    "number": 10,
    "romanNumeral": "X",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Divine Love",
      "Blissful Family",
      "Harmony",
      "Happily Ever After",
      "Alignment"
    ],
    "keywordsVi": [
      "Gia đình viên mãn",
      "Hạnh phúc ngập tràn",
      "Cầu vồng phước lành",
      "Tình yêu bất diệt",
      "Tổ ấm bình an"
    ],
    "symbolism": [
      {
        "element": "Cầu vồng 10 chiếc cốc vàng trên trời",
        "meaning": "Lời hứa thiêng liêng của vũ trụ về hòa bình và hạnh phúc vĩnh cửu"
      },
      {
        "element": "Đôi vợ chồng ôm nhau và hai con nhảy múa",
        "meaning": "Sự viên mãn tròn đầy của tình thân và tình yêu đôi lứa"
      },
      {
        "element": "Dòng sông xanh và ngôi nhà xa xa",
        "meaning": "Sự an cư lạc nghiệp và dòng chảy cảm xúc êm đềm"
      }
    ],
    "upright": {
      "keyMessage": "Một bức tranh gia đình hạnh phúc hoàn hảo, tình yêu thăng hoa trọn vẹn dưới cầu vồng phước lành của trời cao.",
      "general": "Ten of Cups là cái kết ngọt ngào nhất của bộ Cốc. Đôi vợ chồng ôm nhau nhìn lên cầu vồng kết bằng 10 chiếc cốc vàng, hai đứa trẻ vui vẻ nhảy múa bên cạnh, ngôi nhà ấm cúng nép bên dòng sông êm đềm.",
      "love": "Trong tình yêu, Ten of Cups – Mười Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Mâu thuẫn gia đình, rạn nứt hôn nhân, cảm giác cô đơn ngay trong chính mái ấm của mình.",
      "blockedEnergy": "Năng lượng của Ten of Cups – Mười Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ten of Cups ngược cảnh báo về sự bất hòa giữa các thế hệ trong nhà, hôn nhân nguội lạnh hoặc lý tưởng gia đình hoàn hảo bị vỡ vụn.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ten of Cups – Mười Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Phước lành lớn nhất đời người là tìm được nơi chốn và những con người mà khi trở về, trái tim bạn được hoàn toàn thả lỏng trong sự bình yên và yêu thương vô điều kiện.",
    "reflectionQuestions": [
      "Lá bài Ten of Cups – Mười Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "page-of-cups",
    "name": "Page of Cups",
    "nameVi": "Page of Cups – Tiểu Đồng Cốc",
    "arcana": "minor",
    "number": 11,
    "romanNumeral": "Page",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Creative Opportunities",
      "Intuitive Message",
      "Curiosity",
      "Sweetness",
      "Emotional Openness"
    ],
    "keywordsVi": [
      "Thông điệp tình cảm",
      "Cảm xúc ngọt ngào",
      "Trực giác nhạy cảm",
      "Ý tưởng nghệ thuật",
      "Sứ giả tình yêu"
    ],
    "symbolism": [
      {
        "element": "Chú cá nhỏ nhô lên từ chiếc cốc",
        "meaning": "Trực giác và những ý niệm sáng tạo bất ngờ trồi lên từ tiềm thức"
      },
      {
        "element": "Áo thêu hoa sen xanh",
        "meaning": "Sự thanh khiết và tâm hồn nghệ sĩ thơ mộng"
      },
      {
        "element": "Sóng biển nhấp nhô phía sau",
        "meaning": "Cảm xúc dạt dào luôn chuyển động"
      }
    ],
    "upright": {
      "keyMessage": "Một tin nhắn ngọt ngào, lời tỏ tình đáng yêu hoặc một cảm hứng nghệ thuật bất ngờ đang tìm đến bạn.",
      "general": "Page of Cups là chàng trai trẻ thơ mộng cầm chiếc cốc vàng, từ trong cốc một chú cá thò đầu ra nhìn chàng. Chàng đón nhận thế giới bằng sự ngạc nhiên, trái tim nhạy cảm và trực giác thuần khiết.",
      "love": "Trong tình yêu, Page of Cups – Tiểu Đồng Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự nhõng nhẽo cảm xúc, yếu đuối ủy mị, tin buồn trong tình cảm hoặc bị tổn thương vì quá nhạy cảm.",
      "blockedEnergy": "Năng lượng của Page of Cups – Tiểu Đồng Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Page of Cups ngược cảnh báo bạn đang để cảm xúc trẻ con chi phối, dễ dỗi hờn, hoặc đang trốn tránh thực tế vào những ảo mộng tình ái viển vông.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Page of Cups – Tiểu Đồng Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy giữ cho trái tim bạn luôn nhạy cảm trước cái đẹp của cuộc đời. Một tâm hồn biết rung động trước những điều nhỏ bé sẽ không bao giờ cạn kiệt niềm vui.",
    "reflectionQuestions": [
      "Lá bài Page of Cups – Tiểu Đồng Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "knight-of-cups",
    "name": "Knight of Cups",
    "nameVi": "Knight of Cups – Hiệp Sĩ Cốc",
    "arcana": "minor",
    "number": 12,
    "romanNumeral": "Knight",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Romance",
      "Charm",
      "Knight in Shining Armor",
      "Following Heart",
      "Idealism"
    ],
    "keywordsVi": [
      "Chàng hiệp sĩ lãng mạn",
      "Theo đuổi tiếng gọi con tim",
      "Sức hút ngọt ngào",
      "Lời mời hẹn hò",
      "Lý tưởng hóa tình cảm"
    ],
    "symbolism": [
      {
        "element": "Ngựa trắng bước đi êm đềm",
        "meaning": "Sự hòa bình, điềm tĩnh và phong thái lịch thiệp"
      },
      {
        "element": "Đôi cánh trên mũ giáp và gót chân",
        "meaning": "Biểu tượng thần Hermes - trí tưởng tượng bay bổng và sự tinh tế"
      },
      {
        "element": "Áo choàng thêu hình cá bơi lội",
        "meaning": "Tâm hồn chìm đắm trong thế giới cảm xúc và thơ ca"
      }
    ],
    "upright": {
      "keyMessage": "Một chàng hiệp sĩ mang chiếc cốc tình yêu đang tiến đến; hãy lắng nghe và dũng cảm đi theo tiếng gọi của trái tim.",
      "general": "Knight of Cups cưỡi chú ngựa trắng bước đi khoan thai bên bờ suối, tay nâng niu chiếc cốc vàng như báu vật. Chàng là hiện thân của sự lãng mạn, thi sĩ, lời mời hẹn hò ngọt ngào và sự chân thành.",
      "love": "Trong tình yêu, Knight of Cups – Hiệp Sĩ Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Kẻ lừa tình ngọt ngào, hứa hươu hứa vượn, sống trong mộng tưởng xa rời thực tế hoặc tâm trạng thất thường.",
      "blockedEnergy": "Năng lượng của Knight of Cups – Hiệp Sĩ Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Knight of Cups ngược cảnh báo về sự thất vọng khi đối phương không hoàn hảo như bạn kỳ vọng, hoặc một kẻ chuyên dùng lời đường mật để thao túng tình cảm.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Knight of Cups – Hiệp Sĩ Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Đừng ngần ngại bày tỏ tình cảm chân thật của bạn. Sự lãng mạn chân thành là phương thuốc xoa dịu những góc cạnh thô ráp của thế giới thực tại.",
    "reflectionQuestions": [
      "Lá bài Knight of Cups – Hiệp Sĩ Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "queen-of-cups",
    "name": "Queen of Cups",
    "nameVi": "Queen of Cups – Hoàng Hậu Cốc",
    "arcana": "minor",
    "number": 13,
    "romanNumeral": "Queen",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Compassion",
      "Calm",
      "Intuitive Healer",
      "Emotional Security",
      "Empathy"
    ],
    "keywordsVi": [
      "Trực giác thấu thị",
      "Trái tim nhân hậu",
      "Người chữa lành cảm xúc",
      "Bình an nội tâm",
      "Sự thấu cảm sâu sắc"
    ],
    "symbolism": [
      {
        "element": "Chiếc cốc có nắp đậy tinh xảo hai tay nâng",
        "meaning": "Bí mật tiềm thức và chiều sâu tâm hồn thiêng liêng"
      },
      {
        "element": "Bàn chân chạm nhẹ vào mép nước",
        "meaning": "Sự kết nối an toàn giữa thế giới thực tại và đại dương cảm xúc"
      },
      {
        "element": "Hình khắc nàng tiên cá trên ngai",
        "meaning": "Sự hòa quyện giữa con người và thế giới tâm linh màu nhiệm"
      }
    ],
    "upright": {
      "keyMessage": "Bằng trái tim nhân ái và trực giác nhạy bén, bạn có khả năng thấu hiểu và chữa lành mọi vết thương lòng của người khác.",
      "general": "Queen of Cups ngồi trên ngai vàng khắc hình thiên thần và nàng tiên cá bên bờ biển. Bà chăm chú nhìn vào chiếc chén nạm ngọc tinh xảo nhất bộ bài Tarot. Bà là bậc thầy làm chủ cảm xúc, lắng nghe sâu sắc mà không phán xét.",
      "love": "Trong tình yêu, Queen of Cups – Hoàng Hậu Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bị cảm xúc chi phối quá mức, suy nghĩ u sầu, hy sinh bản thân mù quáng hoặc thao túng cảm xúc người khác.",
      "blockedEnergy": "Năng lượng của Queen of Cups – Hoàng Hậu Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Queen of Cups ngược cảnh báo bạn đang bị kiệt sức vì gánh vác cảm xúc của người khác, hoặc để sự đa sầu đa cảm nhấn chìm lý trí.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Queen of Cups – Hoàng Hậu Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Trái tim biết lắng nghe là món quà quý giá nhất mà bạn có thể trao tặng cho thế gian. Hãy giữ cho dòng nước tâm hồn luôn trong trẻo và bình an.",
    "reflectionQuestions": [
      "Lá bài Queen of Cups – Hoàng Hậu Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "king-of-cups",
    "name": "King of Cups",
    "nameVi": "King of Cups – Vua Cốc",
    "arcana": "minor",
    "number": 14,
    "romanNumeral": "King",
    "suit": "cups",
    "element": "Nước",
    "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
    "keywords": [
      "Emotional Balance",
      "Wisdom",
      "Diplomacy",
      "Compassion",
      "Generosity"
    ],
    "keywordsVi": [
      "Làm chủ cảm xúc",
      "Bình thản giữa giông bão",
      "Ngoại giao khôn khéo",
      "Bao dung độ lượng",
      "Người cha tinh thần"
    ],
    "symbolism": [
      {
        "element": "Ngai vàng đá nổi trên biển động",
        "meaning": "Sự vững chãi, không bị hoàn cảnh bên ngoài làm lung lay"
      },
      {
        "element": "Con cá heo nhảy múa và con thuyền vượt sóng",
        "meaning": "Trí thông minh cảm xúc và khả năng điều hướng cuộc đời khôn khéo"
      },
      {
        "element": "Dây chuyền mang biểu tượng con cá",
        "meaning": "Làm chủ tiềm thức và năng lượng tâm linh cao cấp"
      }
    ],
    "upright": {
      "keyMessage": "Hãy giữ sự điềm tĩnh và khôn ngoan; bạn có đủ bản lĩnh để làm chủ mọi cơn sóng gió cảm xúc bằng lòng bao dung.",
      "general": "King of Cups ngồi trên ngai vàng nổi giữa đại dương cuộn sóng, nhưng chân ngài khô ráo và nét mặt hoàn toàn thanh thản. Ngài cầm quyền trượng và chiếc cốc, làm chủ cả bão tố lẫn sự tĩnh lặng.",
      "love": "Trong tình yêu, King of Cups – Vua Cốc xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Mất kiểm soát cảm xúc, lạnh lùng tàn nhẫn bên ngoài nhưng dậy sóng bên trong, hoặc thói thao túng tâm lý độc hại.",
      "blockedEnergy": "Năng lượng của King of Cups – Vua Cốc bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "King of Cups ngược cảnh báo về sự bất ổn tâm lý, thói quen đè nén cảm xúc cho đến khi bùng nổ, hoặc dùng sự im lặng để trừng phạt người khác.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà King of Cups – Vua Cốc mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Biển cả ngoài kia có thể gầm thét, nhưng người làm chủ được đại dương trong lòng mình sẽ luôn tìm thấy sự bình an tối thượng.",
    "reflectionQuestions": [
      "Lá bài King of Cups – Vua Cốc đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ace-of-swords",
    "name": "Ace of Swords",
    "nameVi": "Ace of Swords – Át Kiếm",
    "arcana": "minor",
    "number": 1,
    "romanNumeral": "I",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Breakthrough",
      "Clarity",
      "Sharp Mind",
      "Truth",
      "Justice"
    ],
    "keywordsVi": [
      "Đột phá tư duy",
      "Chân lý sáng tỏ",
      "Trí tuệ sắc bén",
      "Cắt đứt ảo tưởng",
      "Chiến thắng của sự thật"
    ],
    "symbolism": [
      {
        "element": "Thanh kiếm dựng thẳng xuyên qua vương miện",
        "meaning": "Chân lý và trí tuệ chiến thắng mọi quyền lực trần tục"
      },
      {
        "element": "Cành cọ và cành ô liu treo trên kiếm",
        "meaning": "Chiến thắng và hòa bình đạt được nhờ sự sáng suốt"
      },
      {
        "element": "Núi non hiểm trở bên dưới",
        "meaning": "Lý trí vượt lên trên mọi địa hình trắc trở của cảm xúc"
      }
    ],
    "upright": {
      "keyMessage": "Một tia chớp của sự thấu suốt trí tuệ; thanh kiếm chân lý sẽ giúp bạn cắt đứt mọi nghi ngờ và đưa ra quyết định chuẩn xác.",
      "general": "Ace of Swords là bàn tay thiên thần cầm thanh kiếm dựng thẳng đứng, xuyên qua vương miện vàng kết cành cọ và cành ô liu. Biểu tượng của sự thật tối cao, công lý và tư duy đột phá.",
      "love": "Trong tình yêu, Ace of Swords – Át Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Tư duy bế tắc, hiểu lầm tai hại, lời nói cay độc làm tổn thương người khác hoặc sự thật bị bóp méo.",
      "blockedEnergy": "Năng lượng của Ace of Swords – Át Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ace of Swords ngược cảnh báo bạn đang dùng lý trí một cách tàn nhẫn, hoặc đang bị những suy nghĩ tiêu cực tự đầu độc tâm trí mình.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ace of Swords – Át Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Thanh kiếm của sự thật có thể làm bạn đau đớn trong chốc lát, nhưng nó sẽ giải thoát bạn mãi mãi khỏi ngục tù của sự dối trá.",
    "reflectionQuestions": [
      "Lá bài Ace of Swords – Át Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "two-of-swords",
    "name": "Two of Swords",
    "nameVi": "Two of Swords – Hai Kiếm",
    "arcana": "minor",
    "number": 2,
    "romanNumeral": "II",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Stalemate",
      "Blind Spot",
      "Difficult Choices",
      "Avoidance",
      "Balance"
    ],
    "keywordsVi": [
      "Thế tiến thoái lưỡng nan",
      "Bịt mắt trốn tránh",
      "Lựa chọn khó khăn",
      "Cân bằng mong manh",
      "Cần mở mắt đối diện"
    ],
    "symbolism": [
      {
        "element": "Chiếc khăn bịt mắt trắng",
        "meaning": "Sự trốn tránh thực tế hoặc cố gắng lắng nghe trực giác nội tâm"
      },
      {
        "element": "Hai thanh kiếm bắt chéo trước ngực",
        "meaning": "Tấm khiên phòng thủ và sự bế tắc giữa hai luồng suy nghĩ"
      },
      {
        "element": "Mặt trăng khuyết và biển đá ngầm",
        "meaning": "Cảm xúc nguy hiểm rình rập nếu không đưa ra quyết định"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang bịt mắt trốn tránh một quyết định khó khăn; hãy tháo khăn bịt mắt và can đảm đối diện với sự thật.",
      "general": "Two of Swords khắc họa người phụ nữ bịt mắt, hai tay bắt chéo giữ hai thanh kiếm nặng nề trước ngực, ngồi trên ghế đá bên bờ biển đêm đầy đá ngầm. Tình thế bế tắc do không chịu nhìn thẳng vào thực tế.",
      "love": "Trong tình yêu, Two of Swords – Hai Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Khăn bịt mắt đã rơi, sự thật phơi bày buộc bạn phải đưa ra quyết định, kết thúc tình trạng lấp lửng.",
      "blockedEnergy": "Năng lượng của Two of Swords – Hai Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Two of Swords ngược cho thấy sự quá tải thông tin, sự thật bùng nổ không thể tiếp tục che giấu, buộc bạn phải chọn lựa dù muốn hay không.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Two of Swords – Hai Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Trốn tránh sự thật không làm cho vấn đề biến mất. Chỉ khi bạn can đảm mở mắt nhìn thẳng vào sự việc, con đường sáng mới xuất hiện dưới chân bạn.",
    "reflectionQuestions": [
      "Lá bài Two of Swords – Hai Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "three-of-swords",
    "name": "Three of Swords",
    "nameVi": "Three of Swords – Ba Kiếm",
    "arcana": "minor",
    "number": 3,
    "romanNumeral": "III",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Heartbreak",
      "Grief",
      "Painful Truth",
      "Betrayal",
      "Sorrow"
    ],
    "keywordsVi": [
      "Nỗi đau xé lòng",
      "Trái tim rỉ máu",
      "Sự thật nghiệt ngã",
      "Tan vỡ tình cảm",
      "Bài học trưởng thành"
    ],
    "symbolism": [
      {
        "element": "Trái tim bị ba thanh kiếm đâm xuyên",
        "meaning": "Tổn thương sâu sắc do lời nói, sự phản bội hoặc chia tay"
      },
      {
        "element": "Mây đen và mưa giông tầm tã",
        "meaning": "Bão táp cảm xúc và những giọt nước mắt giải tỏa"
      },
      {
        "element": "Không có con người xuất hiện",
        "meaning": "Nỗi đau là trải nghiệm phổ quát mà ai cũng phải kinh qua"
      }
    ],
    "upright": {
      "keyMessage": "Một nỗi đau thắt lòng hoặc sự thật đắng cay vừa xảy ra; hãy cho phép mình được khóc để thanh lọc và chữa lành.",
      "general": "Three of Swords là hình ảnh kinh điển: trái tim đỏ bị ba thanh kiếm đâm xuyên qua, giữa bầu trời xám xịt mưa giông tầm tã. Nỗi đau của sự chia ly, phản bội hoặc mất mát trong tình cảm.",
      "love": "Trong tình yêu, Three of Swords – Ba Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Cơn đau bắt đầu nguôi ngoai, sự tha thứ hé nở, bạn đang chữa lành vết thương lòng và bước tiếp.",
      "blockedEnergy": "Năng lượng của Three of Swords – Ba Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Three of Swords ngược báo hiệu sự hồi phục sau cú sốc tình cảm. Mây đen tan dần, bạn bắt đầu rút từng thanh kiếm ra khỏi trái tim và tìm lại bình yên.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Three of Swords – Ba Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Vết thương ở đâu, ánh sáng sẽ đi vào tâm hồn bạn ở đó. Đừng sợ hãi trái tim tan vỡ; chính qua những vết rạn nứt ấy, lòng trắc ẩn của bạn mới được khai mở.",
    "reflectionQuestions": [
      "Lá bài Three of Swords – Ba Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "four-of-swords",
    "name": "Four of Swords",
    "nameVi": "Four of Swords – Bốn Kiếm",
    "arcana": "minor",
    "number": 4,
    "romanNumeral": "IV",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Rest",
      "Recovery",
      "Contemplation",
      "Sanctuary",
      "Recharge"
    ],
    "keywordsVi": [
      "Nghỉ ngơi tĩnh dưỡng",
      "Hồi phục sinh lực",
      "Thiền định chiêm nghiệm",
      "Khoảng lặng thiêng liêng",
      "Bảo toàn năng lượng"
    ],
    "symbolism": [
      {
        "element": "Hiệp sĩ nằm tĩnh lặng cầu nguyện",
        "meaning": "Sự nghỉ ngơi tâm linh và bảo toàn năng lượng sống"
      },
      {
        "element": "Cửa sổ kính màu khắc hình thánh",
        "meaning": "Sự che chở của đức tin và nơi chốn bình an"
      },
      {
        "element": "Ba kiếm trên tường và một kiếm dưới thân",
        "meaning": "Những xung đột tạm gác lại, luôn sẵn sàng phòng thủ khi cần"
      }
    ],
    "upright": {
      "keyMessage": "Hãy buông thanh kiếm xuống và nằm nghỉ ngơi; tâm trí và cơ thể bạn đang tha thiết kêu cứu cần được phục hồi.",
      "general": "Four of Swords miêu tả bức tượng hiệp sĩ nằm tĩnh lặng trên ngôi mộ đá trong thánh đường, hai tay chắp trước ngực cầu nguyện. Một thanh kiếm đặt cạnh chàng, ba thanh kiếm treo trên tường. Khoảng lặng cần thiết sau chiến trận.",
      "love": "Trong tình yêu, Four of Swords – Bốn Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Kỳ nghỉ ngơi kết thúc, bạn đã sạc đầy năng lượng và sẵn sàng quay trở lại chiến trường cuộc đời.",
      "blockedEnergy": "Năng lượng của Four of Swords – Bốn Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Four of Swords ngược cảnh báo tình trạng kiệt sức do không chịu nghỉ ngơi, hoặc ngược lại là sự trì trệ nằm lì quá lâu không chịu đứng dậy hoạt động.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Four of Swords – Bốn Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Nghỉ ngơi không phải là sự lười biếng, mà là sự chuẩn bị thông thái cho những bước nhảy vọt tiếp theo. Hãy cho tâm trí bạn một bến đỗ bình yên.",
    "reflectionQuestions": [
      "Lá bài Four of Swords – Bốn Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "five-of-swords",
    "name": "Five of Swords",
    "nameVi": "Five of Swords – Năm Kiếm",
    "arcana": "minor",
    "number": 5,
    "romanNumeral": "V",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Hollow Victory",
      "Conflict",
      "Dishonor",
      "Defeat",
      "Pride"
    ],
    "keywordsVi": [
      "Chiến thắng cay đắng",
      "Tổn thất danh dự",
      "Tranh cãi hơn thua",
      "Cái tôi ngạo mạn",
      "Bài học rút lui"
    ],
    "symbolism": [
      {
        "element": "Nụ cười đắc thắng cay độc",
        "meaning": "Cái tôi ngạo mạn thắng lợi bằng mưu hèn kế bẩn"
      },
      {
        "element": "Hai người bại trận cúi đầu bước đi",
        "meaning": "Sự cay đắng, tổn thương danh dự và mối quan hệ tan vỡ"
      },
      {
        "element": "Bầu trời mây rách lởm chởm",
        "meaning": "Bầu không khí độc hại sau cuộc tranh đấu ác liệt"
      }
    ],
    "upright": {
      "keyMessage": "Bạn có thể thắng cuộc tranh cãi nhưng sẽ mất đi một mối quan hệ quý giá; hãy tự hỏi chiến thắng này có đáng giá không?",
      "general": "Five of Swords cho thấy chàng trai mỉm cười xảo quyệt nhặt ba thanh kiếm của hai kẻ bại trận đang cúi đầu bỏ đi trong u sầu. Bầu trời nhiều mây rách rưới. Một chiến thắng cay đắng (Pyrrhic victory) không mang lại vinh quang.",
      "love": "Trong tình yêu, Five of Swords – Năm Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Mong muốn hòa giải, buông bỏ hận thù, nhận ra sự vô nghĩa của việc tranh giành hơn thua.",
      "blockedEnergy": "Năng lượng của Five of Swords – Năm Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Five of Swords ngược là cơ hội để chôn vùi chiếc rìu chiến tranh, xin lỗi chân thành và hàn gắn những đổ vỡ do cái tôi gây ra.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Five of Swords – Năm Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hạ thấp người khác không bao giờ làm bạn cao hơn. Thắng một cuộc tranh cãi mà mất đi một người tri kỷ là thất bại đắng cay nhất của đời người.",
    "reflectionQuestions": [
      "Lá bài Five of Swords – Năm Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "six-of-swords",
    "name": "Six of Swords",
    "nameVi": "Six of Swords – Sáu Kiếm",
    "arcana": "minor",
    "number": 6,
    "romanNumeral": "VI",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Transition",
      "Moving Forward",
      "Leaving Pain",
      "Calmer Waters",
      "Relief"
    ],
    "keywordsVi": [
      "Chuyển bến bình yên",
      "Rời xa sóng gió",
      "Vượt qua giông bão",
      "Chữa lành dần dần",
      "Hành trình hy vọng"
    ],
    "symbolism": [
      {
        "element": "Con thuyền chở gia đình qua sông",
        "meaning": "Hành trình di chuyển tìm kiếm sự an toàn và bình yên"
      },
      {
        "element": "Vùng nước gợn sóng phía sau và êm đềm phía trước",
        "meaning": "Rời bỏ quá khứ đau thương hướng tới tương lai thanh thản"
      },
      {
        "element": "Sáu thanh kiếm cắm trên thuyền",
        "meaning": "Kinh nghiệm và bài học mang theo nhưng không làm đắm thuyền"
      }
    ],
    "upright": {
      "keyMessage": "Cơn bão tố tồi tệ nhất đã ở lại phía sau; con thuyền cuộc đời bạn đang êm đềm lướt về vùng nước lặng sóng hơn.",
      "general": "Six of Swords là hình ảnh người lái đò chở hai mẹ con trùm khăn kín mít qua sông. Sáu thanh kiếm cắm trên thuyền mang theo ký ức cũ, mạn thuyền bên phải gợn sóng nhưng phía trước là mặt nước phẳng lặng như gương.",
      "love": "Trong tình yêu, Six of Swords – Sáu Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Chuyến đi gặp trục trặc, bão tố quay lại, hoặc bạn vẫn cố mang theo những khúc mắc cũ làm nặng thuyền.",
      "blockedEnergy": "Năng lượng của Six of Swords – Sáu Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Six of Swords ngược cảnh báo sự chậm trễ trong quá trình phục hồi, vết thương cũ bị khơi lại hoặc gặp khó khăn khi thích nghi với môi trường mới.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Six of Swords – Sáu Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Dù hành trình chuyển bến có trầm buồn và nặng trĩu âu lo, hãy tin rằng vùng nước bình yên đang ở ngay trước mũi thuyền của bạn.",
    "reflectionQuestions": [
      "Lá bài Six of Swords – Sáu Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "seven-of-swords",
    "name": "Seven of Swords",
    "nameVi": "Seven of Swords – Bảy Kiếm",
    "arcana": "minor",
    "number": 7,
    "romanNumeral": "VII",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Deception",
      "Trickery",
      "Strategy",
      "Sneakiness",
      "Resourcefulness"
    ],
    "keywordsVi": [
      "Hành động lén lút",
      "Chiến lược thông minh",
      "Cảnh giác lừa dối",
      "Rút lui bí mật",
      "Tự lừa dối mình"
    ],
    "symbolism": [
      {
        "element": "Người nhón chân ôm kiếm chuồn đi",
        "meaning": "Hành động bí mật, tránh đối đầu trực diện hoặc sự gian dối"
      },
      {
        "element": "Ngoái đầu nhìn lại hai thanh kiếm",
        "meaning": "Sự bất an, sợ bị phát hiện hoặc bỏ sót chi tiết quan trọng"
      },
      {
        "element": "Doanh trại quân địch phía sau",
        "meaning": "Môi trường nguy hiểm đòi hỏi sự khôn khéo để sinh tồn"
      }
    ],
    "upright": {
      "keyMessage": "Hãy cẩn trọng với những điều mờ ám xung quanh hoặc hãy dùng sự khôn khéo, kín kẽ để giải quyết vấn đề một cách êm đẹp.",
      "general": "Seven of Swords khắc họa người đàn ông rón rén ôm 5 thanh kiếm chuồn khỏi doanh trại quân địch, ngoái đầu nhìn lại hai thanh kiếm còn cắm trên đất. Chiến thuật du kích, sự khôn khéo hoặc hành vi che giấu sự thật.",
      "love": "Trong tình yêu, Seven of Swords – Bảy Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bí mật bị bại lộ, sự thật phơi bày, hoặc bạn quyết định thú nhận sai lầm và sống minh bạch.",
      "blockedEnergy": "Năng lượng của Seven of Swords – Bảy Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Seven of Swords ngược cho thấy cái kim trong bọc lâu ngày cũng lòi ra; tốt nhất hãy thẳng thắn đối thoại thay vì tiếp tục dối trá lòng vòng.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Seven of Swords – Bảy Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Mưu mẹo có thể giúp bạn thoát khỏi một rắc rối ngắn hạn, nhưng chỉ có sự chính trực và minh bạch mới xây dựng được danh dự cả một đời.",
    "reflectionQuestions": [
      "Lá bài Seven of Swords – Bảy Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "eight-of-swords",
    "name": "Eight of Swords",
    "nameVi": "Eight of Swords – Tám Kiếm",
    "arcana": "minor",
    "number": 8,
    "romanNumeral": "VIII",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Imprisonment",
      "Entrapment",
      "Self-Victimization",
      "Powerlessness",
      "Mental Trap"
    ],
    "keywordsVi": [
      "Mắc kẹt trong tâm trí",
      "Cảm giác bất lực",
      "Ảo tưởng tù đày",
      "Sợ hãi tê liệt",
      "Tự cởi trói bước đi"
    ],
    "symbolism": [
      {
        "element": "Dây trói lỏng lẻo quanh thân",
        "meaning": "Sự giam cầm mang tính tâm lý hơn là rào cản thực tế"
      },
      {
        "element": "Tám thanh kiếm cắm xung quanh",
        "meaning": "Những niềm tin giới hạn và nỗi sợ do chính mình tưởng tượng ra"
      },
      {
        "element": "Lối đi trống trải phía trước",
        "meaning": "Cánh cửa tự do luôn rộng mở ngay khi can đảm bước chân"
      }
    ],
    "upright": {
      "keyMessage": "Song sắt giam cầm bạn không phải do người khác dựng lên mà nằm trong chính suy nghĩ của bạn; dây trói rất lỏng, hãy tự bước ra.",
      "general": "Eight of Swords khắc họa người phụ nữ bị trói lỏng lẻo và bịt mắt, đứng giữa 8 thanh kiếm cắm quanh bùn lầy. Nhưng không có thanh kiếm nào chắn trước mặt nàng, dây trói có thể tự tháo. Đây là nhà tù của tâm trí.",
      "love": "Trong tình yêu, Eight of Swords – Tám Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạn bắt đầu nhận ra ảo tưởng, cởi bỏ khăn bịt mắt và tự do bước ra khỏi nhà tù suy nghĩ tiêu cực.",
      "blockedEnergy": "Năng lượng của Eight of Swords – Tám Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Eight of Swords ngược là sự thức tỉnh diệu kỳ: bạn không còn đóng vai nạn nhân, nhận ra quyền năng tự quyết của mình và dũng cảm bước đi.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Eight of Swords – Tám Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Kẻ giam cầm bạn tàn nhẫn nhất chính là giọng nói bên trong bảo rằng bạn không thể làm được. Hãy tháo khăn bịt mắt, bạn vốn dĩ luôn tự do.",
    "reflectionQuestions": [
      "Lá bài Eight of Swords – Tám Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "nine-of-swords",
    "name": "Nine of Swords",
    "nameVi": "Nine of Swords – Chín Kiếm",
    "arcana": "minor",
    "number": 9,
    "romanNumeral": "IX",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Anxiety",
      "Nightmares",
      "Worry",
      "Insomnia",
      "Guilt"
    ],
    "keywordsVi": [
      "Âu lo tột độ",
      "Cơn ác mộng nửa đêm",
      "Mất ngủ dằn vặt",
      "Trầm cảm suy nghĩ",
      "Bóng ma tâm trí"
    ],
    "symbolism": [
      {
        "element": "Người ôm mặt ngồi trên giường",
        "meaning": "Nỗi đau đớn tinh thần, sự cô đơn và dằn vặt trong đêm"
      },
      {
        "element": "Chín thanh kiếm treo ngang trên tường",
        "meaning": "Những suy nghĩ tiêu cực đè nặng lên tâm trí"
      },
      {
        "element": "Khăn trải giường thêu hoa hồng và cung hoàng đạo",
        "meaning": "Sự sống và vẻ đẹp vẫn hiện hữu ngay bên cạnh nỗi đau"
      }
    ],
    "upright": {
      "keyMessage": "Đêm tối khuếch đại mọi nỗi sợ lên gấp mười lần; hãy thở sâu, sáng mai mặt trời lên, mọi việc sẽ không tệ như bạn nghĩ.",
      "general": "Nine of Swords là hình ảnh người ôm mặt khóc trên giường trong đêm tối, phía sau tường treo 9 thanh kiếm chĩa ngang. Cơn ác mộng, sự lo âu, cảm giác tội lỗi và mất ngủ do suy nghĩ quá nhiều (overthinking).",
      "love": "Trong tình yêu, Nine of Swords – Chín Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Cơn ác mộng tan biến, bạn tìm lại được sự thanh thản, học cách chia sẻ gánh nặng tâm lý với người khác.",
      "blockedEnergy": "Năng lượng của Nine of Swords – Chín Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Nine of Swords ngược cho thấy ánh sáng ban mai bắt đầu rọi vào căn phòng tăm tối, bạn nhận ra những lo lắng bấy lâu hoàn toàn vô căn cứ.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Nine of Swords – Chín Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Đừng đàm phán với những con quái vật của nỗi sợ lúc nửa đêm. Hãy chợp mắt nghỉ ngơi, ánh sáng ban mai sẽ biến chúng thành làn khói vô hại.",
    "reflectionQuestions": [
      "Lá bài Nine of Swords – Chín Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ten-of-swords",
    "name": "Ten of Swords",
    "nameVi": "Ten of Swords – Mười Kiếm",
    "arcana": "minor",
    "number": 10,
    "romanNumeral": "X",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Rock Bottom",
      "Painful Endings",
      "Betrayal",
      "Defeat",
      "Dawn of New Day"
    ],
    "keywordsVi": [
      "Chạm đáy nỗi đau",
      "Kết thúc nghiệt ngã",
      "Đâm sau lưng",
      "Tận cùng bóng tối",
      "Bình minh sắp ló rạng"
    ],
    "symbolism": [
      {
        "element": "Mười thanh kiếm cắm trên lưng",
        "meaning": "Sự kết thúc triệt để, không còn gì để mất thêm nữa"
      },
      {
        "element": "Khăn đỏ phủ trên thân thể",
        "meaning": "Năng lượng sinh mệnh vẫn còn âm ỉ chờ ngày phục sinh"
      },
      {
        "element": "Chân trời vàng óng phía xa",
        "meaning": "Bình minh của một kỷ nguyên mới đang bắt đầu"
      }
    ],
    "upright": {
      "keyMessage": "Điều tồi tệ nhất đã xảy ra rồi, bạn không thể rơi xuống thấp hơn được nữa; từ đây trở đi, mọi bước chân đều là đi lên.",
      "general": "Ten of Swords là người đàn ông nằm sấp trên bãi biển bị 10 thanh kiếm cắm dọc sống lưng, phủ tấm vải đỏ. Nhưng ở đường chân trời phía xa, bầu trời đen kịt đang nứt ra những tia nắng vàng rực rỡ của bình minh mới.",
      "love": "Trong tình yêu, Ten of Swords – Mười Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Sự hồi sinh từ cõi chết, vết thương bắt đầu lành lặn, bạn gượng dậy từ đống đổ nát với sức sống mới.",
      "blockedEnergy": "Năng lượng của Ten of Swords – Mười Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ten of Swords ngược là lời tuyên bố: bạn đã sống sót qua cơn bão kinh hoàng nhất. Hãy đứng dậy, rũ sạch tro tàn và chào đón một chương đời hoàn toàn mới.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ten of Swords – Mười Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Khi bạn đã chạm tới tận cùng của đáy vực, con đường duy nhất còn lại là ngước lên và bước lên ánh sáng. Màn đêm đen tối nhất chính là lúc bình minh chuẩn bị ló rạng.",
    "reflectionQuestions": [
      "Lá bài Ten of Swords – Mười Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "page-of-swords",
    "name": "Page of Swords",
    "nameVi": "Page of Swords – Tiểu Đồng Kiếm",
    "arcana": "minor",
    "number": 11,
    "romanNumeral": "Page",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Curiosity",
      "Restless Mind",
      "Mental Agility",
      "New Ideas",
      "Vigilance"
    ],
    "keywordsVi": [
      "Trí tuệ nhanh nhạy",
      "Hiếu kỳ quan sát",
      "Cảnh giác cao độ",
      "Sứ giả tin tức",
      "Sắc sảo thẳng thắn"
    ],
    "symbolism": [
      {
        "element": "Thanh kiếm giơ cao bằng hai tay",
        "meaning": "Sự sẵn sàng chiến đấu bảo vệ sự thật và tri thức"
      },
      {
        "element": "Gió thổi mạnh làm tóc và mây bay",
        "meaning": "Dòng chảy tư duy mãnh liệt và biến động của nguyên tố Khí"
      },
      {
        "element": "Đàn chim bay trên bầu trời",
        "meaning": "Tin tức nhanh chóng bay đến từ nhiều phương"
      }
    ],
    "upright": {
      "keyMessage": "Hãy giữ đôi mắt sắc bén và tâm trí cởi mở; một thông tin quan trọng hoặc một thử thách trí tuệ đang đến với bạn.",
      "general": "Page of Swords là chàng trai trẻ cầm thanh kiếm bằng cả hai tay, đứng trên mỏm đồi lộng gió, ánh mắt cảnh giác nhìn quanh. Chàng thông minh, ham học hỏi, thẳng thắn nhưng đôi khi hơi thiếu khéo léo trong lời nói.",
      "love": "Trong tình yêu, Page of Swords – Tiểu Đồng Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Lời nói cay độc, tính tọc mạch t nhiều chuyện, cãi bướng vô lễ hoặc phát tán tin đồn thất thiệt.",
      "blockedEnergy": "Năng lượng của Page of Swords – Tiểu Đồng Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Page of Swords ngược cảnh báo bạn đang dùng sự thông minh vào việc chỉ trích người khác, hoặc đang bị kẻ xấu soi mói đời tư.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Page of Swords – Tiểu Đồng Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Sự sắc bén của trí tuệ là một món quà tuyệt vời, nhưng hãy dùng nó như chiếc dao mổ cứu người chứ không phải lưỡi kiếm vô cớ làm tổn thương tha nhân.",
    "reflectionQuestions": [
      "Lá bài Page of Swords – Tiểu Đồng Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "knight-of-swords",
    "name": "Knight of Swords",
    "nameVi": "Knight of Swords – Hiệp Sĩ Kiếm",
    "arcana": "minor",
    "number": 12,
    "romanNumeral": "Knight",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Action-Oriented",
      "Direct Communication",
      "Fierce Ambition",
      "Impatience",
      "Intellectual Force"
    ],
    "keywordsVi": [
      "Tấn công dũng mãnh",
      "Quyết đoán không khoan nhượng",
      "Tham vọng rực lửa",
      "Thẳng thắn sắc bén",
      "Lao nhanh về phía trước"
    ],
    "symbolism": [
      {
        "element": "Chiến mã lao vút trong gió bão",
        "meaning": "Hành động thần tốc và sự tập trung cao độ vào mục tiêu"
      },
      {
        "element": "Thanh kiếm chĩa thẳng về phía trước",
        "meaning": "Lý trí sắc nhọn không chùn bước trước bất kỳ rào cản nào"
      },
      {
        "element": "Mây gió cuộn tròn hình sóng",
        "meaning": "Sự xáo động mạnh mẽ trong môi trường tư tưởng"
      }
    ],
    "upright": {
      "keyMessage": "Hãy lao nhanh về phía trước với tất cả sự sắc bén của lý trí; không gì có thể ngăn cản bước tiến dũng mãnh của bạn.",
      "general": "Knight of Swords phi ngựa nước đại xông thẳng vào giông bão, thanh kiếm tuốt trần giơ cao uy hiếp mọi kẻ thù. Chàng là hiện thân của tốc độ tư duy, tham vọng ngút trời và sự quyết liệt không nhân nhượng.",
      "love": "Trong tình yêu, Knight of Swords – Hiệp Sĩ Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Nóng giận mất khôn, lời nói như đao kiếm đâm vào tim người khác, hành động hấp tấp tự đưa mình vào chỗ hiểm.",
      "blockedEnergy": "Năng lượng của Knight of Swords – Hiệp Sĩ Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Knight of Swords ngược cảnh báo về sự độc đoán, hung hăng, cãi cùn và thói hiếu thắng phá hủy các mối quan hệ quý báu.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Knight of Swords – Hiệp Sĩ Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Dũng cảm tiến lên là điều đáng khen, nhưng người kỵ sĩ vĩ đại là người biết khi nào nên tuốt gươm xông trận và khi nào nên tra gươm vào vỏ để giữ gìn hòa bình.",
    "reflectionQuestions": [
      "Lá bài Knight of Swords – Hiệp Sĩ Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "queen-of-swords",
    "name": "Queen of Swords",
    "nameVi": "Queen of Swords – Hoàng Hậu Kiếm",
    "arcana": "minor",
    "number": 13,
    "romanNumeral": "Queen",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Perceptive",
      "Clear Boundaries",
      "Directness",
      "Truth-Seeker",
      "Independence"
    ],
    "keywordsVi": [
      "Thấu suốt sắc sảo",
      "Ranh giới rõ ràng",
      "Độc lập kiên cường",
      "Thẳng thắn công tâm",
      "Bản lĩnh qua giông bão"
    ],
    "symbolism": [
      {
        "element": "Thanh kiếm dựng thẳng tay phải",
        "meaning": "Lý trí sáng suốt, khả năng phán đoán công minh không thiên vị"
      },
      {
        "element": "Bàn tay trái vươn ra phía trước",
        "meaning": "Sẵn sàng đón nhận sự thật trần trụi dù có đau đớn"
      },
      {
        "element": "Thiên thần và bướm khắc trên ngai",
        "meaning": "Sự chuyển hóa tâm hồn qua những thử thách nghiệt ngã"
      }
    ],
    "upright": {
      "keyMessage": "Hãy sử dụng trí tuệ sắc bén và khả năng nhìn thấu bản chất sự việc; sự độc lập và ranh giới rõ ràng sẽ bảo vệ bạn.",
      "general": "Queen of Swords ngồi uy nghi trên ngai chạm hình thiên thần, tay phải giơ thẳng thanh kiếm, tay trái vươn ra đón nhận sự thật. Gương mặt bà nghiêm nghị nhưng công bằng. Người phụ nữ đã trải qua nhiều đau thương để đạt tới sự thông thái tột cùng.",
      "love": "Trong tình yêu, Queen of Swords – Hoàng Hậu Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Lạnh lùng cay nghiệt, phán xét tàn nhẫn, trái tim băng giá khép chặt không cho ai tiếp cận.",
      "blockedEnergy": "Năng lượng của Queen of Swords – Hoàng Hậu Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Queen of Swords ngược cảnh báo bạn đang để những tổn thương quá khứ biến mình thành người cay độc, đa nghi và cô lập với thế giới.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Queen of Swords – Hoàng Hậu Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Trí tuệ thấu suốt không nhất thiết phải đi kèm với sự lạnh lùng. Bạn hoàn toàn có thể vừa giữ vững sự sắc bén của lý trí vừa sưởi ấm trái tim bằng lòng trắc ẩn.",
    "reflectionQuestions": [
      "Lá bài Queen of Swords – Hoàng Hậu Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "king-of-swords",
    "name": "King of Swords",
    "nameVi": "King of Swords – Vua Kiếm",
    "arcana": "minor",
    "number": 14,
    "romanNumeral": "King",
    "suit": "swords",
    "element": "Khí",
    "astrology": "Song Tử, Thiên Bình, Bảo Bình",
    "keywords": [
      "Mental Clarity",
      "Intellectual Power",
      "Authority",
      "Truth",
      "Discipline"
    ],
    "keywordsVi": [
      "Uy quyền trí tuệ",
      "Lý trí tối cao",
      "Phán xét công minh",
      "Lãnh đạo bằng sự thật",
      "Kỷ luật thép"
    ],
    "symbolism": [
      {
        "element": "Thanh kiếm dựng thẳng tay phải",
        "meaning": "Quyền lực tối cao của luật pháp và chân lý vũ trụ"
      },
      {
        "element": "Áo choàng màu tím và xanh lam",
        "meaning": "Sự thông thái tâm linh kết hợp với sự điềm tĩnh tuyệt đối"
      },
      {
        "element": "Hai chú bướm khắc trên ngai vàng",
        "meaning": "Sự linh hoạt trong tư duy và chiều sâu của nhận thức"
      }
    ],
    "upright": {
      "keyMessage": "Hãy đưa ra quyết định dựa trên sự thật khách quan, luật pháp và logic sắc bén; bạn có đầy đủ thẩm quyền và trí tuệ để phán xử.",
      "general": "King of Swords ngồi thẳng trên ngai vàng cao ngất, thanh kiếm dựng đứng hơi nghiêng sẵn sàng hành động. Ánh mắt ngài thấu suốt mọi điều dối trá. Ngài là hiện thân tối thượng của luật pháp, đạo đức và trí tuệ làm chủ thế giới.",
      "love": "Trong tình yêu, King of Swords – Vua Kiếm xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bạo chúa lý trí, độc đoán tàn nhẫn, lạm dụng quyền lực hoặc thao túng người khác bằng những lập luận ngụy biện.",
      "blockedEnergy": "Năng lượng của King of Swords – Vua Kiếm bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "King of Swords ngược cảnh báo về sự độc tài, thiếu tình người, hoặc bị những kẻ mưu mô lợi dụng sự cứng nhắc của bạn.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà King of Swords – Vua Kiếm mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Quyền uy thực sự của một bậc minh quân không nằm ở việc trừng phạt kẻ có tội, mà ở việc thiết lập trật tự và công lý để bảo vệ sự thật và hòa bình cho muôn loài.",
    "reflectionQuestions": [
      "Lá bài King of Swords – Vua Kiếm đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ace-of-pentacles",
    "name": "Ace of Pentacles",
    "nameVi": "Ace of Pentacles – Át Tiền",
    "arcana": "minor",
    "number": 1,
    "romanNumeral": "I",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Financial Opportunity",
      "Abundance",
      "Manifestation",
      "New Job",
      "Security"
    ],
    "keywordsVi": [
      "Cơ hội tài chính vàng",
      "Mầm mống thịnh vượng",
      "Hiện thực hóa của cải",
      "Công việc mới tốt lành",
      "Nền tảng vững chắc"
    ],
    "symbolism": [
      {
        "element": "Bàn tay thần nâng đồng tiền vàng",
        "meaning": "Món quà vật chất và nguồn lực thực tế từ vũ trụ"
      },
      {
        "element": "Khu vườn hoa nở rộ và cổng vòm",
        "meaning": "Sự màu mỡ, thịnh vượng và cánh cổng dẫn đến tương lai tươi sáng"
      },
      {
        "element": "Dãy núi xanh phía xa",
        "meaning": "Thành tựu vững chắc và sự phát triển bền bỉ theo thời gian"
      }
    ],
    "upright": {
      "keyMessage": "Một cơ hội tài chính quý giá như vàng đang được vũ trụ trao tặng; hãy nắm lấy và gieo mầm xuống mảnh đất màu mỡ.",
      "general": "Ace of Pentacles là bàn tay từ mây nâng đồng tiền vàng khổng lồ bên trên một khu vườn nở rộ hoa bách hợp và hoa hồng, cổng vòm dẫn ra dãy núi xanh mướt. Đây là điềm báo của sự sung túc, công việc mới hoặc khoản đầu tư sinh lời lớn.",
      "love": "Trong tình yêu, Ace of Pentacles – Át Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bỏ lỡ cơ hội tài chính tốt, chi tiêu hoang phí, hoặc kế hoạch làm ăn thiếu khả thi thực tế.",
      "blockedEnergy": "Năng lượng của Ace of Pentacles – Át Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ace of Pentacles ngược cảnh báo về sự quản lý tiền bạc kém, đầu tư vội vàng vào những dự án ảo hoặc lòng tham làm mờ mắt.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ace of Pentacles – Át Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Mọi cây cổ thụ tỏa bóng mát ngút ngàn đều khởi đầu từ một hạt mầm nhỏ bé nằm yên trong lòng đất. Hãy nâng niu và vun trồng hạt giống thịnh vượng hôm nay.",
    "reflectionQuestions": [
      "Lá bài Ace of Pentacles – Át Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "two-of-pentacles",
    "name": "Two of Pentacles",
    "nameVi": "Two of Pentacles – Hai Tiền",
    "arcana": "minor",
    "number": 2,
    "romanNumeral": "II",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Balance",
      "Adaptability",
      "Time Management",
      "Priorities",
      "Juggling"
    ],
    "keywordsVi": [
      "Linh hoạt xoay xở",
      "Cân bằng cuộc sống",
      "Quản lý thời gian",
      "Lướt trên sóng gió",
      "Thích ứng nhanh nhạy"
    ],
    "symbolism": [
      {
        "element": "Hai đồng tiền trong vòng vô cực",
        "meaning": "Dòng chảy tài chính liên tục và sự cân bằng động khéo léo"
      },
      {
        "element": "Chàng trai nhảy múa vui vẻ",
        "meaning": "Thái độ lạc quan và tinh thần linh hoạt trước thử thách"
      },
      {
        "element": "Những con thuyền cưỡi sóng phía sau",
        "meaning": "Sự thăng trầm tự nhiên của thị trường và cuộc đời"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang xoay xở khéo léo giữa nhiều trách nhiệm; hãy giữ sự linh hoạt và mỉm cười lướt qua những con sóng thăng trầm.",
      "general": "Two of Pentacles khắc họa chàng trai trẻ nhảy múa tung hứng hai đồng tiền vàng trong vòng vô cực (Lemniscate). Phía sau chàng, những con tàu dập dềnh cưỡi trên những con sóng lớn. Khả năng thích ứng tuyệt vời trước biến động tài chính và cuộc sống.",
      "love": "Trong tình yêu, Two of Pentacles – Hai Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Mất cân bằng nghiêm trọng, nợ nần chồng chất, quá tải vì ôm đồm quá nhiều việc cùng lúc.",
      "blockedEnergy": "Năng lượng của Two of Pentacles – Hai Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Two of Pentacles ngược cảnh báo bạn đang bị rối loạn tài chính, chi tiêu vượt quá thu nhập hoặc căng thẳng vì không biết sắp xếp thứ tự ưu tiên.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Two of Pentacles – Hai Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Cuộc sống giống như trò tung hứng giữa nhiều quả bóng trách nhiệm. Đừng cố gồng mình giữ mọi thứ bất động; hãy học cách uyển chuyển theo từng nhịp điệu của dòng đời.",
    "reflectionQuestions": [
      "Lá bài Two of Pentacles – Hai Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "three-of-pentacles",
    "name": "Three of Pentacles",
    "nameVi": "Three of Pentacles – Ba Tiền",
    "arcana": "minor",
    "number": 3,
    "romanNumeral": "III",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Teamwork",
      "Mastery",
      "Craftsmanship",
      "Collaboration",
      "Building"
    ],
    "keywordsVi": [
      "Hợp tác nhóm ăn ý",
      "Tay nghề bậc thầy",
      "Xây dựng nền móng",
      "Được chuyên gia đánh giá cao",
      "Kiến tạo kiệt tác"
    ],
    "symbolism": [
      {
        "element": "Ba đồng tiền vàng trên vòm thánh đường",
        "meaning": "Sự gắn kết hoàn hảo giữa kế hoạch, tâm linh và bàn tay thợ giỏi"
      },
      {
        "element": "Người thợ cầm đục và búa",
        "meaning": "Kỹ năng chuyên môn vững vàng và tinh thần lao động cần mẫn"
      },
      {
        "element": "Bản vẽ thiết kế trên tay kiến trúc sư",
        "meaning": "Kế hoạch bài bản và sự chỉ dẫn chuyên môn chuẩn xác"
      }
    ],
    "upright": {
      "keyMessage": "Sự kết hợp giữa tài năng của bạn và sự hỗ trợ của những người đồng nghiệp giỏi sẽ tạo nên một công trình xuất sắc.",
      "general": "Three of Pentacles cho thấy người thợ chạm khắc đá trẻ tuổi đứng trên bệ đang thảo luận bản vẽ với một tu sĩ và một kiến trúc sư trong thánh đường. Ba đồng tiền vàng chạm trên vòm đá. Tinh thần đồng đội, tay nghề tinh xảo và sự công nhận chuyên môn.",
      "love": "Trong tình yêu, Three of Pentacles – Ba Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bất đồng ý kiến trong nhóm làm việc, thiếu sự phối hợp, tay nghề non kém hoặc không chịu lắng nghe chỉ dẫn.",
      "blockedEnergy": "Năng lượng của Three of Pentacles – Ba Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Three of Pentacles ngược cảnh báo về sự chia rẽ nội bộ, mỗi người làm một phách khiến dự án bị chậm trễ và giảm sút chất lượng.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Three of Pentacles – Ba Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Muốn đi nhanh hãy đi một mình, muốn đi xa và xây nên những lâu đài nguy nga hãy đi cùng nhau. Hãy trân trọng giá trị và đóng góp của từng người đồng đội.",
    "reflectionQuestions": [
      "Lá bài Three of Pentacles – Ba Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "four-of-pentacles",
    "name": "Four of Pentacles",
    "nameVi": "Four of Pentacles – Bốn Tiền",
    "arcana": "minor",
    "number": 4,
    "romanNumeral": "IV",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Saving Money",
      "Security",
      "Conservatism",
      "Scarcity Mindset",
      "Possessiveness"
    ],
    "keywordsVi": [
      "Tích lũy của cải",
      "Giữ gìn an toàn",
      "Tâm lý sợ thiếu thốn",
      "Bám víu vật chất",
      "Cần học cách sẻ chia"
    ],
    "symbolism": [
      {
        "element": "Bốn đồng tiền gắn chặt vào đầu, ngực và chân",
        "meaning": "Sự kiểm soát tuyệt đối và bám chấp nặng nề vào của cải"
      },
      {
        "element": "Tư thế ngồi bất động cứng nhắc",
        "meaning": "Nỗi sợ thay đổi làm tê liệt khả năng phát triển"
      },
      {
        "element": "Thành phố phía sau lưng",
        "meaning": "Xa lánh xã hội và dòng chảy cuộc sống để bảo vệ của riêng"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang bảo vệ thành quả tài chính rất tốt, nhưng đừng để nỗi sợ mất mát biến bạn thành kẻ keo kiệt, khép chặt cánh cửa lòng.",
      "general": "Four of Pentacles là người đàn ông ngồi ôm chặt một đồng tiền trước ngực, đội một đồng trên đầu và giẫm hai chân lên hai đồng khác. Ông quay lưng lại với thành phố sầm uất. Sự an toàn tài chính nhưng đi kèm với sự bủn xỉn và sợ hãi mất mát.",
      "love": "Trong tình yêu, Four of Pentacles – Bốn Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Chi tiêu mất kiểm soát, phá vỡ quỹ tiết kiệm, hoặc ngược lại là bắt đầu học được cách hào phóng mở rộng bàn tay.",
      "blockedEnergy": "Năng lượng của Four of Pentacles – Bốn Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Four of Pentacles ngược có hai chiều hướng: hoặc bạn vung tay quá trán làm hao hụt tiền bạc, hoặc bạn đã nhận ra tiền chỉ là phương tiện và bắt đầu biết sẻ chia giúp đỡ người khác.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Four of Pentacles – Bốn Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Bàn tay nắm chặt chỉ có thể giữ được những gì đang có, nhưng nó sẽ không bao giờ có thể mở ra để đón nhận những phước lành lớn hơn từ vũ trụ.",
    "reflectionQuestions": [
      "Lá bài Four of Pentacles – Bốn Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "five-of-pentacles",
    "name": "Five of Pentacles",
    "nameVi": "Five of Pentacles – Năm Tiền",
    "arcana": "minor",
    "number": 5,
    "romanNumeral": "V",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Financial Loss",
      "Poverty",
      "Isolation",
      "Worry",
      "Hardship"
    ],
    "keywordsVi": [
      "Khó khăn tài chính",
      "Cảm giác thiếu thốn",
      "Lạnh lẽo ngoài bão tuyết",
      "Bỏ qua sự giúp đỡ",
      "Hy vọng trong nghịch cảnh"
    ],
    "symbolism": [
      {
        "element": "Cửa sổ kính màu thánh đường ấm áp",
        "meaning": "Sự cứu rỗi, lòng bác ái và sự trợ giúp luôn sẵn có"
      },
      {
        "element": "Hai người lê bước trong bão tuyết",
        "meaning": "Nghịch cảnh vật chất và cảm giác bị xã hội ruồng bỏ"
      },
      {
        "element": "Chiếc chuông đeo trên cổ người chống nạng",
        "meaning": "Cảm giác mặc cảm bệnh tật và sự cô lập"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đang trải qua giai đoạn khó khăn về vật chất hoặc cảm giác cô độc; hãy ngước nhìn lên, cánh cửa thánh đường ấm áp đang rộng mở ngay cạnh bạn.",
      "general": "Five of Pentacles miêu tả hai người ăn mày rách rưới, một người chống nạng lê bước trong bão tuyết lạnh giá. Họ đi ngang qua cửa sổ kính màu ấm áp của một ngôi thánh đường thắp sáng 5 đồng tiền mà không hề ngước nhìn lên tìm sự giúp đỡ.",
      "love": "Trong tình yêu, Five of Pentacles – Năm Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Giai đoạn khó khăn nhất đã qua, tìm được công việc mới, nhận được sự trợ giúp kịp thời và phục hồi tài chính.",
      "blockedEnergy": "Năng lượng của Five of Pentacles – Năm Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Five of Pentacles ngược báo hiệu ánh sáng cuối đường hầm. Khủng hoảng tài chính dần được tháo gỡ, bạn tìm lại được nơi nương tựa và sức khỏe thể chất hồi phục.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Five of Pentacles – Năm Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Dù bão tuyết cuộc đời có lạnh giá đến đâu, hãy nhớ rằng luôn có một cánh cửa ấm áp sẵn sàng đón bạn vào sưởi ấm. Đừng ngần ngại gõ cửa và xin sự giúp đỡ.",
    "reflectionQuestions": [
      "Lá bài Five of Pentacles – Năm Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "six-of-pentacles",
    "name": "Six of Pentacles",
    "nameVi": "Six of Pentacles – Sáu Tiền",
    "arcana": "minor",
    "number": 6,
    "romanNumeral": "VI",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Generosity",
      "Charity",
      "Giving and Receiving",
      "Fairness",
      "Sharing Wealth"
    ],
    "keywordsVi": [
      "Lòng hào phóng",
      "Làm việc thiện nguyện",
      "Cân bằng cho và nhận",
      "Được quý nhân giúp đỡ",
      "Chia sẻ tài lộc"
    ],
    "symbolism": [
      {
        "element": "Cán cân thăng bằng tay trái",
        "meaning": "Sự công bằng, minh bạch trong phân chia của cải"
      },
      {
        "element": "Thương gia phát tiền tay phải",
        "meaning": "Lòng hào phóng chân thành và tinh thần sẻ chia với cộng đồng"
      },
      {
        "element": "Hai người quỳ nhận tiền",
        "meaning": "Sự biết ơn và lòng khiêm nhường khi đón nhận ân huệ"
      }
    ],
    "upright": {
      "keyMessage": "Dòng chảy tiền bạc và lòng tốt đang lưu chuyển tuyệt vời; hãy hào phóng chia sẻ khi bạn dư dả và khiêm nhường đón nhận khi cần.",
      "general": "Six of Pentacles khắc họa thương gia giàu có cầm cán cân công lý tay trái, tay phải đang ban phát tiền vàng cho hai người nghèo khó quỳ bên dưới. Sự cân bằng hoàn hảo giữa cho và nhận trong vũ trụ.",
      "love": "Trong tình yêu, Six of Pentacles – Sáu Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Lòng tốt bị lợi dụng, nợ nần khó đòi, bố thí với thái độ kẻ cả ban ơn hoặc phụ thuộc vào sự trợ cấp của người khác.",
      "blockedEnergy": "Năng lượng của Six of Pentacles – Sáu Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Six of Pentacles ngược cảnh báo về sự thiếu công bằng trong phân chia quyền lợi, hoặc bạn đang cho đi quá nhiều khiến bản thân rơi vào cảnh túng thiếu.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Six of Pentacles – Sáu Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Cho đi là còn mãi. Khi bạn trở thành kênh dẫn cho sự thịnh vượng chảy qua cuộc đời người khác, chính bạn sẽ luôn được vũ trụ làm đầy bằng những phước lành vô tận.",
    "reflectionQuestions": [
      "Lá bài Six of Pentacles – Sáu Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "seven-of-pentacles",
    "name": "Seven of Pentacles",
    "nameVi": "Seven of Pentacles – Bảy Tiền",
    "arcana": "minor",
    "number": 7,
    "romanNumeral": "VII",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Long-Term View",
      "Sustainable Results",
      "Patience",
      "Investment",
      "Evaluation"
    ],
    "keywordsVi": [
      "Kiên nhẫn chờ thu hoạch",
      "Tầm nhìn dài hạn",
      "Đánh giá thành quả",
      "Đầu tư bền bỉ",
      "Không sốt ruột"
    ],
    "symbolism": [
      {
        "element": "Người nông dân tựa cằm vào cuốc",
        "meaning": "Sự chiêm nghiệm, kiên nhẫn và đánh giá lại tiến trình lao động"
      },
      {
        "element": "Giàn cây trĩu quả là các đồng tiền vàng",
        "meaning": "Thành quả vật chất đang âm thầm tích lũy từng ngày"
      },
      {
        "element": "Một đồng tiền nằm dưới chân",
        "meaning": "Thành quả trước mắt có thể dùng ngay trong khi chờ vụ mùa lớn"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đã lao động chăm chỉ và hạt mầm đang lớn lên; hãy kiên nhẫn chờ quả chín, đừng vội vã hái khi quả còn xanh.",
      "general": "Seven of Pentacles là người nông dân đứng chống cằm tựa vào chiếc cuốc, trầm ngâm ngắm nhìn giàn cây trĩu 7 đồng tiền vàng. Chàng dừng lại để đánh giá công sức đã bỏ ra và chờ đợi thời điểm thu hoạch tối ưu.",
      "love": "Trong tình yêu, Seven of Pentacles – Bảy Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Mất kiên nhẫn, nản lòng vì kết quả chậm, hoặc nhận ra mình đã đầu tư sai chỗ và cần cắt lỗ chuyển hướng.",
      "blockedEnergy": "Năng lượng của Seven of Pentacles – Bảy Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Seven of Pentacles ngược cảnh báo về sự lười biếng bỏ bê công việc, hoặc sự sốt ruột thu hoạch sớm làm hỏng cả mùa màng.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Seven of Pentacles – Bảy Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Mọi vụ mùa bội thu đều cần thời gian của đất trời để chín ngọt. Hãy tiếp tục cần mẫn tưới tắm và đặt niềm tin vào sự sinh sôi tự nhiên của hạt giống.",
    "reflectionQuestions": [
      "Lá bài Seven of Pentacles – Bảy Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "eight-of-pentacles",
    "name": "Eight of Pentacles",
    "nameVi": "Eight of Pentacles – Tám Tiền",
    "arcana": "minor",
    "number": 8,
    "romanNumeral": "VIII",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Apprenticeship",
      "Repetitive Effort",
      "Mastery",
      "Skill Development",
      "Quality"
    ],
    "keywordsVi": [
      "Rèn luyện tay nghề",
      "Chăm chỉ tỉ mỉ",
      "Nâng cao kỹ năng",
      "Bậc thầy tương lai",
      "Tập trung chuyên môn"
    ],
    "symbolism": [
      {
        "element": "Người thợ ngồi chăm chú đục từng chi tiết",
        "meaning": "Sự tập trung cao độ, tình yêu nghề và sự tỉ mỉ kiên trì"
      },
      {
        "element": "Tám đồng tiền vàng hoàn thiện tinh xảo",
        "meaning": "Sự tích lũy kỹ năng và chất lượng sản phẩm vượt trội"
      },
      {
        "element": "Thị trấn xa xa phía sau",
        "meaning": "Tách mình khỏi những xao nhãng để tập trung tôi luyện tay nghề"
      }
    ],
    "upright": {
      "keyMessage": "Hãy tập trung mài giũa kỹ năng với tất cả sự tỉ mỉ và kiên trì; sự chuyên nghiệp sẽ đưa bạn đến đỉnh cao danh vọng.",
      "general": "Eight of Pentacles khắc họa người thợ trẻ ngồi cần mẫn đục đẽo từng đồng tiền vàng một cách tinh xảo. Sáu đồng đã hoàn thành treo ngay ngắn trên cây cột, một đồng đang làm và một đồng nằm dưới chân. Lao động chăm chỉ, say mê và không ngừng hoàn thiện bản thân.",
      "love": "Trong tình yêu, Eight of Pentacles – Tám Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Làm việc cẩu thả, thiếu tập trung, chán nản công việc lặp đi lặp lại hoặc làm việc quá sức biến thành cỗ máy.",
      "blockedEnergy": "Năng lượng của Eight of Pentacles – Tám Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Eight of Pentacles ngược cảnh báo về thói đi đường tắt, làm ẩu để lấy số lượng, hoặc cảm thấy bế tắc trong công việc không có cơ hội thăng tiến.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Eight of Pentacles – Tám Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Không có thiên tài nào không khởi đầu từ sự khổ luyện cần mẫn mỗi ngày. Hãy yêu lấy từng chi tiết nhỏ nhặt nhất trong công việc của bạn, kiệt tác sẽ tự khắc thành hình.",
    "reflectionQuestions": [
      "Lá bài Eight of Pentacles – Tám Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "nine-of-pentacles",
    "name": "Nine of Pentacles",
    "nameVi": "Nine of Pentacles – Chín Tiền",
    "arcana": "minor",
    "number": 9,
    "romanNumeral": "IX",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Abundance",
      "Luxury",
      "Self-Sufficiency",
      "Financial Independence",
      "Grace"
    ],
    "keywordsVi": [
      "Tự do tài chính",
      "Cuộc sống vương giả",
      "Độc lập tự chủ",
      "Hưởng thụ thành quả",
      "Thanh lịch quý phái"
    ],
    "symbolism": [
      {
        "element": "Người phụ nữ quý phái trong vườn nho",
        "meaning": "Sự viên mãn, trù phú và thành tựu tự thân đáng tự hào"
      },
      {
        "element": "Chú chim ưng đậu trên tay đeo găng",
        "meaning": "Bản năng và dục vọng đã được thuần hóa bởi trí tuệ và sự tự chủ"
      },
      {
        "element": "Chú ốc sên bò dưới chân",
        "meaning": "Bước tiến chậm rãi, chắc chắn và an toàn"
      }
    ],
    "upright": {
      "keyMessage": "Bạn đã tự mình tạo dựng nên một cơ ngơi thịnh vượng và an nhàn; hãy tự hào tận hưởng thành quả của sự độc lập tự chủ.",
      "general": "Nine of Pentacles là người phụ nữ quý phái mặc áo choàng lộng lẫy đứng trong vườn nho trĩu quả đầy những đồng tiền vàng. Trên tay bà đeo găng có một chú chim ưng săn mồi đã được thuần hóa. Biểu tượng của người phụ nữ tự lập, giàu có, tinh tế và làm chủ hoàn toàn cuộc đời mình.",
      "love": "Trong tình yêu, Nine of Pentacles – Chín Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Phụ thuộc tài chính vào người khác, chi tiêu xa xỉ vượt khả năng, hoặc cảm giác cô đơn dù sống trong nhung lụa.",
      "blockedEnergy": "Năng lượng của Nine of Pentacles – Chín Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Nine of Pentacles ngược cảnh báo bạn đang phải trả giá quá đắt về mặt tình cảm để đổi lấy vật chất, hoặc đang đối mặt với nguy cơ mất đi sự tự chủ tài chính.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Nine of Pentacles – Chín Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Sự quyến rũ lớn nhất của một con người là sự tự do tự tại khi tự mình làm chủ được cuộc đời và tài chính của chính mình mà không cần dựa dẫm vào bất kỳ ai.",
    "reflectionQuestions": [
      "Lá bài Nine of Pentacles – Chín Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "ten-of-pentacles",
    "name": "Ten of Pentacles",
    "nameVi": "Ten of Pentacles – Mười Tiền",
    "arcana": "minor",
    "number": 10,
    "romanNumeral": "X",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Wealth",
      "Legacy",
      "Family Heritage",
      "Long-Term Security",
      "Tradition"
    ],
    "keywordsVi": [
      "Gia tài đồ sộ",
      "Di sản truyền đời",
      "Gia tộc hưng vượng",
      "Bảo đảm lâu dài",
      "Phúc lộc tràn trề"
    ],
    "symbolism": [
      {
        "element": "Mười đồng tiền xếp theo Cây Sự Sống Kabbalah",
        "meaning": "Sự hoàn hảo, thịnh vượng viên mãn kết nối đất trời"
      },
      {
        "element": "Ba thế hệ cùng hai chú chó trung thành",
        "meaning": "Sự tiếp nối truyền thống, lòng trung thành và phúc đức gia tộc"
      },
      {
        "element": "Cổng lâu đài khắc gia huy",
        "meaning": "Di sản văn hóa và tài sản bền vững truyền đời"
      }
    ],
    "upright": {
      "keyMessage": "Một nền tảng thịnh vượng vững chắc cho nhiều thế hệ; bạn đang được bao bọc bởi phước lộc của gia đình và tổ tiên.",
      "general": "Ten of Pentacles là bức tranh gia đình ba thế hệ sum vầy trong khuôn viên lâu đài cổ kính: ông lão ngồi vuốt ve hai chú chó trung thành, đôi vợ chồng trò chuyện bên cổng thành, đứa trẻ nắm tay mẹ. Mười đồng tiền vàng xếp theo hình Cây Sự Sống (Tree of Life). Thịnh vượng bền vững tột đỉnh.",
      "love": "Trong tình yêu, Ten of Pentacles – Mười Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Tranh chấp tài sản thừa kế, gia đình bất hòa vì tiền bạc, hoặc gánh nặng nợ nần từ thế hệ trước.",
      "blockedEnergy": "Năng lượng của Ten of Pentacles – Mười Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Ten of Pentacles ngược cảnh báo về sự rạn nứt tình thân do lòng tham của cải, rủi ro mất mát tài sản gia đình hoặc đầu tư mạo hiểm làm tiêu tán cơ nghiệp.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Ten of Pentacles – Mười Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Gia tài quý giá nhất mà bạn để lại cho thế hệ mai sau không chỉ là những đồng tiền vàng trong két sắt, mà là những giá trị đạo đức và tình yêu thương ấm áp được gìn giữ qua năm tháng.",
    "reflectionQuestions": [
      "Lá bài Ten of Pentacles – Mười Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "page-of-pentacles",
    "name": "Page of Pentacles",
    "nameVi": "Page of Pentacles – Tiểu Đồng Tiền",
    "arcana": "minor",
    "number": 11,
    "romanNumeral": "Page",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Manifestation",
      "Financial Opportunity",
      "Skill Building",
      "Diligent Student",
      "Practicality"
    ],
    "keywordsVi": [
      "Chăm chỉ thực tế",
      "Học hỏi kỹ năng mới",
      "Cơ hội nghề nghiệp tốt",
      "Hạt mầm tiền bạc",
      "Ý thức trách nhiệm"
    ],
    "symbolism": [
      {
        "element": "Chàng trai hai tay nâng niu đồng tiền vàng",
        "meaning": "Sự trân trọng giá trị vật chất và khao khát học hỏi thực tế"
      },
      {
        "element": "Cánh đồng màu mỡ và lùm cây phía sau",
        "meaning": "Mảnh đất trù phú sẵn sàng đón nhận những hạt mầm nỗ lực"
      },
      {
        "element": "Rặng cây và ngọn núi phía xa",
        "meaning": "Tương lai vững chắc đang chờ đón người kiên trì"
      }
    ],
    "upright": {
      "keyMessage": "Một cơ hội học tập hoặc công việc thực tế đầy tiềm năng đang mở ra; hãy tiếp cận nó bằng sự chăm chỉ và cầu tiến.",
      "general": "Page of Pentacles là chàng trai trẻ ăn mặc giản dị nhưng trang nhã, đứng giữa cánh đồng xanh tươi, hai tay nâng niu đồng tiền vàng và chăm chú ngắm nhìn. Chàng là người học trò chăm chỉ, thực tế, luôn muốn biến tri thức thành của cải cụ thể.",
      "love": "Trong tình yêu, Page of Pentacles – Tiểu Đồng Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Lười biếng, thiếu tập trung, lãng phí tiền bạc vào những thứ vô bổ hoặc chần chừ không chịu bắt tay vào việc.",
      "blockedEnergy": "Năng lượng của Page of Pentacles – Tiểu Đồng Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Page of Pentacles ngược cảnh báo về thói quen mơ mộng viển vông mà không chịu bỏ công sức học hành, thiếu trách nhiệm với tiền bạc và tương lai.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Page of Pentacles – Tiểu Đồng Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Hãy học cách nâng niu từng đồng tiền nhỏ và từng bài học thực tế mỗi ngày. Bàn tay chăm chỉ và khối óc cầu tiến sẽ biến mọi ước mơ thành hiện thực.",
    "reflectionQuestions": [
      "Lá bài Page of Pentacles – Tiểu Đồng Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "knight-of-pentacles",
    "name": "Knight of Pentacles",
    "nameVi": "Knight of Pentacles – Hiệp Sĩ Tiền",
    "arcana": "minor",
    "number": 12,
    "romanNumeral": "Knight",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Hard Work",
      "Productivity",
      "Routine",
      "Conservatism",
      "Methodical"
    ],
    "keywordsVi": [
      "Lao động kiên trì",
      "Đáng tin cậy tuyệt đối",
      "Quy trình bài bản",
      "Bền bỉ tiến bước",
      "Trách nhiệm sắt đá"
    ],
    "symbolism": [
      {
        "element": "Chiến mã đen lực lưỡng đứng vững trên đất",
        "meaning": "Sức mạnh bền bỉ, tính ổn định và sự kiên nhẫn phi thường"
      },
      {
        "element": "Cánh đồng cày xới tơi xốp thẳng tắp",
        "meaning": "Sự chuẩn bị kỹ lưỡng, quy trình lao động bài bản"
      },
      {
        "element": "Cành sồi xanh trên mũ giáp",
        "meaning": "Sự trường thọ, sức sống dẻo dai và hòa hợp với thiên nhiên"
      }
    ],
    "upright": {
      "keyMessage": "Bằng sự cần mẫn, tỉ mỉ và phương pháp làm việc chuẩn xác, bạn chắc chắn sẽ hoàn thành mục tiêu dù con đường có dài đến đâu.",
      "general": "Knight of Pentacles cưỡi chú ngựa đen lực lưỡng đứng yên trên cánh đồng cày xới thẳng tắp, chăm chú nhìn vào đồng tiền vàng trên tay. Chàng không lao nhanh như các kỵ sĩ khác mà tiến từng bước chắc chắn, kiên định và không bao giờ bỏ cuộc giữa chừng.",
      "love": "Trong tình yêu, Knight of Pentacles – Hiệp Sĩ Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bảo thủ cứng nhắc, lười biếng trì trệ, lối mòn nhàm chán hoặc làm việc như một cái máy vô cảm.",
      "blockedEnergy": "Năng lượng của Knight of Pentacles – Hiệp Sĩ Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Knight of Pentacles ngược cảnh báo bạn đang quá an phận thủ thường, sợ hãi đổi mới hoặc kiệt sức vì những công việc lặp đi lặp lại không lối thoát.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Knight of Pentacles – Hiệp Sĩ Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Không có con đường tắt nào dẫn tới thành công bền vững. Người bước đi chậm rãi nhưng không bao giờ dừng lại sẽ luôn là người cán đích vinh quang đầu tiên.",
    "reflectionQuestions": [
      "Lá bài Knight of Pentacles – Hiệp Sĩ Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "queen-of-pentacles",
    "name": "Queen of Pentacles",
    "nameVi": "Queen of Pentacles – Hoàng Hậu Tiền",
    "arcana": "minor",
    "number": 13,
    "romanNumeral": "Queen",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Nurturing",
      "Practicality",
      "Down-to-Earth",
      "Financial Security",
      "Home Comfort"
    ],
    "keywordsVi": [
      "Người mẹ đảm đang",
      "Thực tế khéo léo",
      "Tổ ấm tiện nghi",
      "Tài chính vững vàng",
      "Gần gũi thiên nhiên"
    ],
    "symbolism": [
      {
        "element": "Người phụ nữ nâng niu đồng tiền trên đùi",
        "meaning": "Khả năng nuôi dưỡng của cải và trân trọng nguồn lực gia đình"
      },
      {
        "element": "Chú thỏ rừng chạy nhảy bên cạnh ngai",
        "meaning": "Sự màu mỡ, sinh sôi nảy nở và trực giác hòa hợp với đất mẹ"
      },
      {
        "element": "Vòm cây hoa hồng đỏ rực phía trên",
        "meaning": "Tình yêu thương dồi dào che chở cho tổ ấm bình an"
      }
    ],
    "upright": {
      "keyMessage": "Hãy chăm sóc bản thân và gia đình bằng sự khéo léo và tình yêu thương; bạn có tài năng biến mọi không gian thành tổ ấm thịnh vượng.",
      "general": "Queen of Pentacles ngồi trên ngai vàng khắc hình hoa quả, thiên thần và các loài thú giữa khu vườn thiên nhiên rực rỡ. Trên đùi bà nâng niu đồng tiền vàng, bên cạnh có chú thỏ rừng chạy nhảy. Người phụ nữ hiền thục, chu đáo, vừa giỏi giang kinh tế vừa ấm áp chở che.",
      "love": "Trong tình yêu, Queen of Pentacles – Hoàng Hậu Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Bỏ bê việc gia đình, lo âu thái quá về tiền bạc, ghen tị vật chất hoặc kiểm soát người thân bằng tiền.",
      "blockedEnergy": "Năng lượng của Queen of Pentacles – Hoàng Hậu Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "Queen of Pentacles ngược cảnh báo bạn đang quá mải mê kiếm tiền mà quên mất sự ấm áp của gia đình, hoặc cảm giác bất an thường trực về sự thiếu hụt của cải.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà Queen of Pentacles – Hoàng Hậu Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Sự giàu có đích thực không chỉ nằm ở số dư tài khoản, mà ở khả năng tạo ra một bữa cơm ấm cúng và một vòng tay che chở cho những người thân yêu khi trở về nhà.",
    "reflectionQuestions": [
      "Lá bài Queen of Pentacles – Hoàng Hậu Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  },
  {
    "id": "king-of-pentacles",
    "name": "King of Pentacles",
    "nameVi": "King of Pentacles – Vua Tiền",
    "arcana": "minor",
    "number": 14,
    "romanNumeral": "King",
    "suit": "pentacles",
    "element": "Đất",
    "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
    "keywords": [
      "Wealth",
      "Business Savvy",
      "Leadership",
      "Security",
      "Abundance"
    ],
    "keywordsVi": [
      "Ông trùm kinh doanh",
      "Bậc thầy tài chính",
      "Thịnh vượng đỉnh cao",
      "Đáng tin cậy vững chãi",
      "Bàn tay Midas"
    ],
    "symbolism": [
      {
        "element": "Áo choàng thêu chùm nho tím mọng",
        "meaning": "Sự ngọt ngào, sung túc và bội thu của các khoản đầu tư"
      },
      {
        "element": "Đầu bò đực khắc trên ngai vàng",
        "meaning": "Cung Kim Ngưu - sự bền vững, kiên định và thịnh vượng đất đai"
      },
      {
        "element": "Bàn chân đặt lên đầu quái thú",
        "meaning": "Làm chủ hoàn toàn dục vọng vật chất và nỗi sợ hãi nghèo khó"
      }
    ],
    "upright": {
      "keyMessage": "Bằng đầu óc kinh doanh nhạy bén và kỷ luật vững vàng, bất cứ dự án nào qua tay bạn cũng sẽ sinh sôi nảy nở thành công vang dội.",
      "general": "King of Pentacles ngồi uy nghiêm trên ngai vàng chạm khắc đầu bò đực uy lực, mặc áo choàng thêu chùm nho tím mọng, chân đặt lên đầu quái thú. Tay ngài cầm quyền trượng và đồng tiền vàng lớn, phía sau là lâu đài kiên cố. Bậc thầy tối cao của sự thịnh vượng vật chất.",
      "love": "Trong tình yêu, King of Pentacles – Vua Tiền xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
      "career": "Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
      "finance": "Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
      "family": "Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
      "personalGrowth": "Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
      "advice": "Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
      "strengths": [
        "Tính kiên định",
        "Sự nhạy bén",
        "Khả năng thích ứng"
      ],
      "opportunities": [
        "Cơ hội phát triển mới",
        "Mở rộng quan hệ tốt đẹp",
        "Gặt hái thành quả xứng đáng"
      ],
      "warnings": [
        "Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."
      ]
    },
    "reversed": {
      "keyMessage": "Tham lam tàn nhẫn, kẻ hám tiền coi thường đạo lý, đầu tư rủi ro thua lỗ hoặc phá sản vì kiêu ngạo.",
      "blockedEnergy": "Năng lượng của King of Pentacles – Vua Tiền bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
      "general": "King of Pentacles ngược cảnh báo bạn đang biến đồng tiền thành ông chủ tàn độc chi phối lương tâm, hoặc gặp phải đối tác làm ăn quỵt nợ lừa đảo.",
      "love": "Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
      "career": "Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
      "finance": "Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
      "family": "Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
      "personalGrowth": "Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
      "advice": "Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
      "hiddenIssues": [
        "Nỗi sợ thất bại",
        "Thiếu kiên nhẫn",
        "Dồn nén cảm xúc"
      ],
      "adjustments": [
        "Lắng nghe ý kiến chuyên gia",
        "Thực hành tĩnh tâm",
        "Tập trung vào giải pháp thực tế"
      ]
    },
    "adviceDetail": {
      "whatToWatch": "Những tín hiệu cảnh báo về sự mất cân bằng trong vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững.",
      "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
      "whatToEmbrace": "Năng lượng tích cực và bài học tôi luyện mà King of Pentacles – Vua Tiền mang lại.",
      "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
    },
    "message": "Người thực sự giàu có là người biết dùng tiền bạc như một công cụ đắc lực để kiến tạo giá trị, bảo vệ những người yếu thế và xây dựng một thế giới ngày càng tốt đẹp hơn.",
    "reflectionQuestions": [
      "Lá bài King of Pentacles – Vua Tiền đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
      "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
      "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
    ]
  }
];

export const getCardById = (id: string): TarotCard | undefined => {
  return TAROT_CARDS.find((card) => card.id === id);
};

export const getMajorArcana = (): TarotCard[] => {
  return TAROT_CARDS.filter((card) => card.arcana === 'major');
};

export const getMinorArcana = (suit?: 'wands' | 'cups' | 'swords' | 'pentacles'): TarotCard[] => {
  if (suit) {
    return TAROT_CARDS.filter((card) => card.arcana === 'minor' && card.suit === suit);
  }
  return TAROT_CARDS.filter((card) => card.arcana === 'minor');
};
