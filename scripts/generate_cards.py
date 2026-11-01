# -*- coding: utf-8 -*-
import json
import os

major_arcana_raw = [
    {
        "id": "the-fool",
        "name": "The Fool",
        "nameVi": "Kẻ Khờ",
        "number": 0,
        "romanNumeral": "0",
        "element": "Khí",
        "astrology": "Sao Thiên Vương (Uranus)",
        "keywords": ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Leap of Faith"],
        "keywordsVi": ["Khởi đầu mới", "Sự ngây thơ", "Tự do phóng khoáng", "Cú nhảy niềm tin", "Tiềm năng vô hạn"],
        "symbolism": [
            {"element": "Vực thẳm phía trước", "meaning": "Bước nhảy vào cõi vô định với lòng tin thuần khiết"},
            {"element": "Chú chó trắng", "meaning": "Bản năng bảo vệ, lòng trung thành và tiếng gọi của lý trí"},
            {"element": "Bông hoa hồng trắng", "meaning": "Sự thuần khiết, tâm hồn chưa vấy bẩn bởi định kiến trần tục"},
            {"element": "Mặt trời chiếu sáng rực rỡ", "meaning": "Nguồn năng lượng khởi nguyên vũ trụ ban phước cho cuộc hành trình"},
            {"element": "Chiếc túi nhỏ trên vai", "meaning": "Kinh nghiệm tích lũy từ các kiếp sống chưa mở ra"}
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
            "strengths": ["Lòng dũng cảm", "Sự lạc quan", "Tâm hồn rộng mở"],
            "opportunities": ["Bắt đầu dự án ấp ủ", "Gặp gỡ những người bạn mới", "Học kỹ năng mới"],
            "warnings": ["Tránh bất cẩn, ngây thơ thái quá bỏ qua các cảnh báo thực tế."]
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
            "hiddenIssues": ["Sự ngây thơ mù quáng", "Thiếu trách nhiệm với bản thân", "Nỗi sợ vô hình"],
            "adjustments": ["Lập kế hoạch cụ thể", "Lắng nghe lời khuyên từ người có kinh nghiệm", "Chịu trách nhiệm cho hành động"]
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
        ]
    },
    {
        "id": "the-magician",
        "name": "The Magician",
        "nameVi": "Nhà Ảo Thuật",
        "number": 1,
        "romanNumeral": "I",
        "element": "Khí",
        "astrology": "Sao Thủy (Mercury)",
        "keywords": ["Manifestation", "Resourcefulness", "Power", "Inspired Action", "Skill"],
        "keywordsVi": ["Hiện thực hóa", "Năng lực biểu hiện", "Sự tháo vát", "Tập trung ý chí", "Tài năng làm chủ"],
        "symbolism": [
            {"element": "Một tay chỉ lên trời, một tay chỉ xuống đất", "meaning": "Như trên trời, dưới đất cũng vậy (As above, so below) - biến ý niệm tâm linh thành hiện thực vật chất"},
            {"element": "Bốn biểu tượng trên bàn (Gậy, Cốc, Kiếm, Tiền)", "meaning": "Sở hữu trọn vẹn 4 nguyên tố: Ý chí, Cảm xúc, Trí tuệ, và Nguồn lực vật chất"},
            {"element": "Vòng vô cực (Lemniscate) trên đầu", "meaning": "Nguồn sáng tạo bất tận và sự kết nối với trí tuệ vũ trụ"},
            {"element": "Khăn choàng đỏ và áo trắng", "meaning": "Sự kết hợp giữa đam mê hành động và sự trong sạch của ý định"},
            {"element": "Khu vườn hoa hồng và hoa huệ", "meaning": "Khát vọng được nuôi dưỡng sẽ đơm hoa kết trái trong thực tại"}
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
            "strengths": ["Sự khéo léo", "Khả năng giao tiếp", "Ý chí quyết đoán"],
            "opportunities": ["Khởi động dự án quan trọng", "Thuyết phục đối tác", "Tạo đột phá cá nhân"],
            "warnings": ["Đừng phân tán năng lượng vào quá nhiều việc cùng một lúc."]
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
            "hiddenIssues": ["Tự ti tiềm ẩn", "Mong muốn đi đường tắt", "Giao tiếp sai lệch"],
            "adjustments": ["Minh bạch trong mọi giao dịch", "Kiên trì trau dồi chuyên môn", "Hành động bằng lương tâm"]
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
        ]
    },
    {
        "id": "the-high-priestess",
        "name": "The High Priestess",
        "nameVi": "Nữ Tư Tế",
        "number": 2,
        "romanNumeral": "II",
        "element": "Nước",
        "astrology": "Mặt Trăng (Moon)",
        "keywords": ["Intuition", "Sacred Knowledge", "Divine Feminine", "Subconscious", "Mystery"],
        "keywordsVi": ["Trực giác sâu sắc", "Tri thức bí truyền", "Năng lượng nữ tính linh thiêng", "Tiềm thức", "Sự tĩnh lặng"],
        "symbolism": [
            {"element": "Hai cột Boaz (Đen) và Jachin (Trắng)", "meaning": "Sự cân bằng giữa nhị nguyên: Ánh sáng và Bóng tối, Ý thức và Tiềm thức"},
            {"element": "Tấm màn che thêu lựu và cọ", "meaning": "Cánh cổng dẫn vào cõi bí ẩn nội tâm, biểu tượng của sự màu mỡ tâm linh"},
            {"element": "Vương miện trăng ba pha (Hathor)", "meaning": "Sự kết nối với các chu kỳ vũ trụ, năng lượng trực giác và khả năng thấu thị"},
            {"element": "Cuộn kinh TORA trên tay", "meaning": "Quy luật vũ trụ và tri thức thiêng liêng chỉ hé mở cho người tĩnh tâm"},
            {"element": "Mặt trăng lưỡi liềm dưới chân", "meaning": "Sự làm chủ cảm xúc và các dòng chảy tiềm thức"}
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
            "strengths": ["Trực giác nhạy bén", "Khả năng thấu cảm", "Sự điềm tĩnh"],
            "opportunities": ["Khai mở năng lực tâm linh", "Học hỏi tri thức sâu rộng", "Chữa lành nội tâm"],
            "warnings": ["Tránh xa lánh thực tế hoặc giữ bí mật độc hại."]
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
            "hiddenIssues": ["Bất an nội tâm", "Chối bỏ cảm giác thật", "Sợ bị phán xét"],
            "adjustments": ["Thiền định định kỳ", "Học cách chia sẻ cởi mở hơn", "Tôn trọng trực giác của bản thân"]
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
        ]
    },
    {
        "id": "the-empress",
        "name": "The Empress",
        "nameVi": "Hoàng Hậu",
        "number": 3,
        "romanNumeral": "III",
        "element": "Đất",
        "astrology": "Sao Kim (Venus)",
        "keywords": ["Abundance", "Nurturing", "Fertility", "Creativity", "Sensuality"],
        "keywordsVi": ["Sự trù phú", "Nuôi dưỡng", "Sinh sôi nảy nở", "Sáng tạo phong phú", "Tình mẫu tử thiêng liêng"],
        "symbolism": [
            {"element": "Vương miện 12 ngôi sao", "meaning": "Sự làm chủ 12 cung hoàng đạo và các chu kỳ tự nhiên của đất trời"},
            {"element": "Tấm khiên hình trái tim mang ký hiệu sao Kim", "meaning": "Tình yêu vô điều kiện, sắc đẹp và sự hòa hợp tối thượng"},
            {"element": "Cánh đồng lúa mì vàng óng", "meaning": "Mùa màng bội thu, sự thịnh vượng vật chất và thành quả ngọt ngào"},
            {"element": "Dòng thác nước chảy vào hồ", "meaning": "Dòng chảy cảm xúc dạt dào nuôi dưỡng sự sống và sáng tạo"},
            {"element": "Bộ váy thêu họa tiết quả lựu", "meaning": "Sự màu mỡ, khả năng sinh nở và tình yêu thương bao la"}
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
            "strengths": ["Lòng trắc ẩn", "Óc thẩm mỹ", "Khả năng nuôi dưỡng"],
            "opportunities": ["Thành công trong sáng tạo nghệ thuật", "Xây dựng mái ấm", "Gia tăng của cải"],
            "warnings": ["Tránh nuông chiều bản thân quá mức hoặc sở hữu độc đoán."]
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
            "hiddenIssues": ["Tự ti về bản thân", "Hội chứng người cứu rỗi", "Sợ bị bỏ rơi"],
            "adjustments": ["Thiết lập ranh giới cảm xúc", "Dành thời gian ở một mình", "Chăm sóc sức khỏe thể chất"]
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
        ]
    },
    {
        "id": "the-emperor",
        "name": "The Emperor",
        "nameVi": "Hoàng Đế",
        "number": 4,
        "romanNumeral": "IV",
        "element": "Lửa",
        "astrology": "Bạch Dương (Aries)",
        "keywords": ["Authority", "Structure", "Stability", "Discipline", "Leadership"],
        "keywordsVi": ["Quyền uy", "Cấu trúc trật tự", "Sự vững chắc", "Kỷ luật thép", "Khả năng lãnh đạo"],
        "symbolism": [
            {"element": "Ngai vàng bằng đá khắc đầu cừu đực", "meaning": "Biểu tượng cung Bạch Dương - năng lượng lãnh đạo, ý chí sắt đá không lay chuyển"},
            {"element": "Cây trượng Ankh cầm tay phải", "meaning": "Biểu tượng sự sống vĩnh cửu và quyền cai trị thiêng liêng"},
            {"element": "Quả cầu cầm tay trái", "meaning": "Thế giới vật chất nằm trọn trong sự kiểm soát và trật tự"},
            {"element": "Bộ giáp sắt mặc bên trong áo choàng đỏ", "meaning": "Luôn sẵn sàng chiến đấu bảo vệ vương quốc và lý tưởng"},
            {"element": "Rặng núi đá cằn cỗi phía sau", "meaning": "Nền tảng vững chắc không thể suy suyển, vượt lên trên mọi thử thách"}
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
            "strengths": ["Ý chí quyết đoán", "Kỹ năng quản trị", "Lòng trung kiên"],
            "opportunities": ["Được bổ nhiệm vị trí cao", "Mở rộng quy mô công việc", "Tạo dựng uy tín"],
            "warnings": ["Tránh trở nên quá độc đoán hoặc cứng nhắc không chịu lắng nghe."]
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
            "hiddenIssues": ["Nỗi sợ mất kiểm soát", "Sự bất an về năng lực lãnh đạo", "Tính hiếu thắng"],
            "adjustments": ["Học cách trao quyền cho người khác", "Tập lắng nghe với tâm thế cầu thị", "Rèn luyện sự kiên nhẫn"]
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
        ]
    },
    {
        "id": "the-hierophant",
        "name": "The Hierophant",
        "nameVi": "Giáo Hoàng",
        "number": 5,
        "romanNumeral": "V",
        "element": "Đất",
        "astrology": "Kim Ngưu (Taurus)",
        "keywords": ["Spiritual Wisdom", "Tradition", "Conformity", "Mentorship", "Institutions"],
        "keywordsVi": ["Trí tuệ tâm linh", "Truyền thống", "Sự hòa nhập", "Người thầy dẫn đường", "Giá trị đạo đức"],
        "symbolism": [
            {"element": "Chiếc vương miện ba tầng", "meaning": "Quyền lực trên ba thế giới: Thiên đàng, Trần gian và Địa ngục"},
            {"element": "Cây quyền trượng ba thánh giá", "meaning": "Biểu tượng của đức tin tôn giáo và trật tự tâm linh truyền thống"},
            {"element": "Hai chiếc chìa khóa bắt chéo dưới chân", "meaning": "Chìa khóa mở ra cánh cửa tri thức bí truyền và sự giải thoát tâm hồn"},
            {"element": "Hai đệ tử quỳ phía trước", "meaning": "Sự truyền dạy tri thức từ thế hệ này sang thế hệ khác"},
            {"element": "Hai cột đá hoa cương của ngôi đền", "meaning": "Luật pháp và sự bền vững của các định chế xã hội lâu đời"}
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
            "strengths": ["Đạo đức vững vàng", "Khả năng truyền đạt", "Sự uy tín"],
            "opportunities": ["Tìm được người thầy tốt", "Gia nhập tổ chức danh tiếng", "Nâng cao học vấn"],
            "warnings": ["Tránh đi theo lề thói một cách giáo điều, máy móc."]
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
            "hiddenIssues": ["Tâm lý bầy đàn", "Sợ bị cộng đồng ruồng bỏ", "Mất niềm tin vào lý tưởng"],
            "adjustments": ["Tư duy phản biện độc lập", "Lắng nghe lương tri bên trong", "Tìm môi trường cởi mở hơn"]
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
        ]
    },
    {
        "id": "the-lovers",
        "name": "The Lovers",
        "nameVi": "Những Người Yêu Nhau",
        "number": 6,
        "romanNumeral": "VI",
        "element": "Khí",
        "astrology": "Song Tử (Gemini)",
        "keywords": ["Love", "Harmony", "Relationships", "Values Alignment", "Choices"],
        "keywordsVi": ["Tình yêu đích thực", "Sự hòa hợp", "Mối quan hệ thiêng liêng", "Sự đồng điệu giá trị", "Lựa chọn ngã rẽ"],
        "symbolism": [
            {"element": "Tổng lãnh thiên thần Raphael", "meaning": "Vị thiên thần của sự chữa lành và tình yêu thương ban phước lành từ bầu trời"},
            {"element": "Người nam và người nữ khỏa thân", "meaning": "Adam và Eva trong vườn địa đàng - sự thuần khiết, chân thật không che đậy"},
            {"element": "Cây tri thức và con rắn", "meaning": "Sự cám dỗ, bài học về ý thức và cái giá của sự lựa chọn tự do"},
            {"element": "Cây sự sống với 12 ngọn lửa", "meaning": "Đam mê, năng lượng sáng tạo của 12 cung hoàng đạo"},
            {"element": "Ngọn núi lửa phía xa", "meaning": "Đam mê mãnh liệt và những thử thách cần vượt qua để hòa hợp"}
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
            "strengths": ["Khả năng gắn kết", "Sự chân thành", "Trực giác tình cảm nhạy bén"],
            "opportunities": ["Gặp được tri kỷ", "Ký kết hợp tác thành công", "Hàn gắn mối quan hệ rạn nứt"],
            "warnings": ["Đừng để cảm xúc bốc đồng lấn át các cân nhắc về lâu dài."]
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
            "hiddenIssues": ["Sợ cô đơn", "Đánh đổi nguyên tắc cá nhân", "Giao tiếp đổ vỡ"],
            "adjustments": ["Đối thoại cởi mở không phòng thủ", "Tái đánh giá mục tiêu chung", "Tôn trọng ranh giới của nhau"]
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
        ]
    },
    {
        "id": "the-chariot",
        "name": "The Chariot",
        "nameVi": "Cỗ Xe",
        "number": 7,
        "romanNumeral": "VII",
        "element": "Nước",
        "astrology": "Cự Giải (Cancer)",
        "keywords": ["Control", "Willpower", "Success", "Action", "Determination"],
        "keywordsVi": ["Kiểm soát", "Ý chí sắt đá", "Chiến thắng vang dội", "Hành động quyết liệt", "Làm chủ số phận"],
        "symbolism": [
            {"element": "Hai nhân sư Đen và Trắng", "meaning": "Hai nguồn lực đối lập bên trong: cảm xúc và lý trí, được điều khiển bằng ý chí thuần khiết thay vì dây cương"},
            {"element": "Màn trùm bầu trời đầy sao", "meaning": "Sự bảo hộ của vũ trụ và các nguồn năng lượng thiên thể tối cao"},
            {"element": "Ngôi sao 8 cánh trên mũ miện", "meaning": "Ý thức giác ngộ và ánh sáng dẫn đường cho chiến binh"},
            {"element": "Hai vầng trăng lưỡi liềm trên vai", "meaning": "Urim và Thummim - sự phán đoán chuẩn xác vượt qua các dao động cảm xúc"},
            {"element": "Bức tường thành phía sau", "meaning": "Rời bỏ vùng an toàn để tiến ra chiến trường chinh phục những chân trời mới"}
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
            "strengths": ["Ý chí phi thường", "Tính quyết đoán", "Khả năng tập trung"],
            "opportunities": ["Đạt được thành tựu lớn", "Vượt qua kỳ thi/thử thách", "Chuyến đi thành công"],
            "warnings": ["Đừng trở nên quá hiếu thắng hoặc chèn ép người khác trên đường đi."]
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
            "hiddenIssues": ["Nóng nảy bốc đồng", "Cái tôi ngạo mạn", "Bất an sâu sắc"],
            "adjustments": ["Xem xét lại chiến lược", "Học cách nhượng bộ đúng lúc", "Kiểm soát cơn nóng giận"]
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
        ]
    },
    {
        "id": "strength",
        "name": "Strength",
        "nameVi": "Sức Mạnh",
        "number": 8,
        "romanNumeral": "VIII",
        "element": "Lửa",
        "astrology": "Sư Tử (Leo)",
        "keywords": ["Inner Strength", "Courage", "Compassion", "Patience", "Soft Power"],
        "keywordsVi": ["Sức mạnh nội tâm", "Lòng dũng cảm", "Lòng trắc ẩn", "Sự nhẫn nại", "Năng lượng mềm thuần hóa"],
        "symbolism": [
            {"element": "Người phụ nữ nhẹ nhàng vuốt ve sư tử", "meaning": "Thuần phục bản năng hoang dã bằng sự dịu dàng và tình yêu thương thay vì bạo lực"},
            {"element": "Biểu tượng vô cực (Lemniscate) trên đầu", "meaning": "Sự kiểm soát vĩnh cửu và trí tuệ tâm linh vô biên"},
            {"element": "Vương miện và thắt lưng hoa hồng", "meaning": "Vẻ đẹp thuần khiết và tình yêu chiến thắng mọi sức mạnh cơ bắp"},
            {"element": "Con sư tử ngoan ngoãn vẫy đuôi", "meaning": "Bản năng nguyên thủy, dục vọng và nỗi sợ hãi được chuyển hóa thành nguồn năng lượng tích cực"},
            {"element": "Bầu trời vàng ấm áp", "meaning": "Sự khai sáng, tự tin và niềm vui thuần khiết của sự hòa hợp"}
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
            "strengths": ["Lòng kiên nhẫn phi thường", "Sự điềm tĩnh", "Lòng từ bi"],
            "opportunities": ["Hàn gắn mối quan hệ căng thẳng", "Chữa lành tổn thương cũ", "Làm chủ bản thân"],
            "warnings": ["Tránh nhầm lẫn giữa sự nhẫn nại và sự chịu đựng cam chịu vô nghĩa."]
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
            "hiddenIssues": ["Tự ti tiềm ẩn", "Sợ thất bại", "Đè nén cảm xúc quá lâu"],
            "adjustments": ["Thực hành thở sâu khi căng thẳng", "Nhắc nhở bản thân về những thành công đã qua", "Tìm sự giúp đỡ khi cần"]
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
        ]
    },
    {
        "id": "the-hermit",
        "name": "The Hermit",
        "nameVi": "Ẩn Sĩ",
        "number": 9,
        "romanNumeral": "IX",
        "element": "Đất",
        "astrology": "Xử Nữ (Virgo)",
        "keywords": ["Soul-Searching", "Introspection", "Solitude", "Inner Guidance", "Wisdom"],
        "keywordsVi": ["Tìm kiếm chân lý", "Nội quan sâu sắc", "Sự tĩnh tại một mình", "Ngọn đèn dẫn lối", "Trí tuệ minh triết"],
        "symbolism": [
            {"element": "Ngọn đèn lồng giơ cao chứa ngôi sao 6 cánh", "meaning": "Ánh sáng chân lý tâm linh (Dấu ấn Solomon) soi sáng con đường từng bước một"},
            {"element": "Cây gậy dài tay trái", "meaning": "Điểm tựa của kinh nghiệm sống và quyền năng bảo vệ người tìm đường"},
            {"element": "Áo choàng xám trùm đầu", "meaning": "Sự vô hình trước những thị phi trần tục, rút lui để bảo toàn năng lượng"},
            {"element": "Đỉnh núi tuyết trắng", "meaning": "Đỉnh cao của sự giác ngộ và cô đơn trên con đường tìm kiếm chân lý"},
            {"element": "Dáng đứng cúi nhìn xuống", "meaning": "Sẵn sàng chia sẻ ánh sáng tri thức cho những ai đang ở dưới chân núi muốn bước lên"}
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
            "strengths": ["Sự thâm trầm", "Khả năng tự phản chiếu", "Tính độc lập cao"],
            "opportunities": ["Tìm ra lẽ sống", "Hoàn thành nghiên cứu quan trọng", "Trưởng thành vượt bậc"],
            "warnings": ["Đừng biến sự tĩnh tại thành sự xa lánh xã hội cay đắng."]
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
            "hiddenIssues": ["Nỗi sợ bị từ chối", "Tự phụ trí tuệ", "Cảm giác bị bỏ rơi"],
            "adjustments": ["Gặp gỡ bạn bè thân thiết", "Chia sẻ cảm xúc chân thật", "Tham gia các hoạt động cộng đồng"]
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
        ]
    },
    {
        "id": "wheel-of-fortune",
        "name": "Wheel of Fortune",
        "nameVi": "Bánh Xe Số Phận",
        "number": 10,
        "romanNumeral": "X",
        "element": "Lửa",
        "astrology": "Sao Mộc (Jupiter)",
        "keywords": ["Good Luck", "Karma", "Life Cycles", "Destiny", "Turning Point"],
        "keywordsVi": ["May mắn bất ngờ", "Nhân quả tuần hoàn", "Chu kỳ cuộc sống", "Định mệnh an bài", "Bước ngoặt định mệnh"],
        "symbolism": [
            {"element": "Bánh xe trung tâm với các chữ cái T-O-R-A", "meaning": "Vòng quay vĩnh cửu của Luật vũ trụ (Torah/Tarot/Rota) quản lý mọi sự biến thiên"},
            {"element": "Bốn sinh vật có cánh ở bốn góc (Thiên thần, Đại bàng, Sư tử, Bò đực)", "meaning": "Bốn chòm sao cố định (Bảo Bình, Bọ Cạp, Sư Tử, Kim Ngưu) giữ vững sự ổn định giữa biến chuyển"},
            {"element": "Nhân sư trên đỉnh bánh xe", "meaning": "Trí tuệ và sự cân bằng tâm linh nằm trên mọi thăng trầm của đời sống"},
            {"element": "Con rắn Typhon trượt xuống bên trái", "meaning": "Sự suy tàn tạm thời và những thử thách cần thiết của chu kỳ sinh tử"},
            {"element": "Vị thần đầu chó Anubis leo lên bên phải", "meaning": "Sự phục sinh, tái sinh và vươn lên đón nhận ánh sáng mới"}
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
            "strengths": ["Vận khí hanh thông", "Sự linh hoạt thích ứng", "Niềm tin vào quy luật vũ trụ"],
            "opportunities": ["Bước ngoặt sự nghiệp", "Gặp gỡ tri kỷ định mệnh", "Thành công bất ngờ"],
            "warnings": ["Hãy nhớ rằng vạn vật luôn biến đổi; đừng chủ quan khi đang ở trên đỉnh cao."]
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
            "hiddenIssues": ["Tâm lý nạn nhân", "Cố chấp kiểm soát những điều bất khả thi", "Trách móc số phận"],
            "adjustments": ["Chấp nhận thực tế với lòng thanh thản", "Tìm bài học ẩn sau nghịch cảnh", "Giữ vững niềm tin"]
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
        ]
    },
    {
        "id": "justice",
        "name": "Justice",
        "nameVi": "Công Lý",
        "number": 11,
        "romanNumeral": "XI",
        "element": "Khí",
        "astrology": "Thiên Bình (Libra)",
        "keywords": ["Justice", "Fairness", "Truth", "Cause and Effect", "Law"],
        "keywordsVi": ["Công lý liêm chính", "Sự công bằng", "Chân lý rõ ràng", "Quy luật Nhân Quả", "Pháp luật và chuẩn mực"],
        "symbolism": [
            {"element": "Thanh kiếm dựng thẳng tay phải", "meaning": "Sự dứt khoát của lý trí, khả năng cắt bỏ ảo tưởng và thực thi sự thật"},
            {"element": "Cán cân thăng bằng tay trái", "meaning": "Sự cân nhắc công minh, cân bằng giữa trực giác và lý lẽ thực tế"},
            {"element": "Màn che màu tím phía sau", "meaning": "Lòng trắc ẩn bao trùm lên phán quyết, sự thông thái của thế giới vô hình"},
            {"element": "Mũi giày nhô ra dưới vạt áo", "meaning": "Sẵn sàng hành động để bảo vệ lẽ phải và thực thi công lý"},
            {"element": "Viên ngọc vuông trên ngực áo", "meaning": "Nền tảng của trật tự, tính chính trực và sự kiên định không thiên vị"}
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
            "strengths": ["Tính liêm chính", "Tư duy logic sắc sảo", "Lòng trung thực"],
            "opportunities": ["Thắng lợi trong các vụ kiện tụng", "Ký kết hợp đồng quan trọng", "Khôi phục lại danh dự"],
            "warnings": ["Tránh phán xét người khác một cách khô khan, thiếu đi lòng từ bi."]
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
            "hiddenIssues": ["Tự lừa dối bản thân", "Sợ đối diện hậu quả", "Định kiến hẹp hòi"],
            "adjustments": ["Minh bạch trong mọi giấy tờ", "Thừa nhận sai lầm và xin lỗi chân thành", "Tìm kiếm sự tư vấn pháp lý uy tín"]
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
        ]
    },
    {
        "id": "the-hanged-man",
        "name": "The Hanged Man",
        "nameVi": "Người Treo Ngược",
        "number": 12,
        "romanNumeral": "XII",
        "element": "Nước",
        "astrology": "Sao Hải Vương (Neptune)",
        "keywords": ["Surrender", "New Perspective", "Letting Go", "Pause", "Sacrifice"],
        "keywordsVi": ["Đầu hàng thông thái", "Góc nhìn mới mẻ", "Buông bỏ kiểm soát", "Tạm dừng lại", "Sự hy sinh có ý thức"],
        "symbolism": [
            {"element": "Người đàn ông bị treo ngược bằng một chân", "meaning": "Đảo ngược góc nhìn thế tục, tạm dừng mọi hành động cưỡng cầu bên ngoài"},
            {"element": "Vầng hào quang sáng quanh đầu", "meaning": "Sự giác ngộ tâm linh xuất hiện chính trong khoảnh khắc buông bỏ hoàn toàn"},
            {"element": "Cây thập tự hình chữ T (Tau Cross) đâm chồi xanh", "meaning": "Cây sự sống - từ sự hy sinh và tĩnh lặng, sự sống mới sẽ sinh sôi"},
            {"element": "Khuôn mặt thanh thản, an nhiên", "meaning": "Tự nguyện đầu hàng hoàn cảnh chứ không phải bị trừng phạt đau đớn"},
            {"element": "Đôi chân tạo thành hình số 4 và hai tay hình tam giác", "meaning": "Nước chảy ngược, năng lượng vật chất thăng hoa thành ánh sáng tinh thần"}
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
            "strengths": ["Khả năng đổi mới góc nhìn", "Sự kiên nhẫn sâu sắc", "Tinh thần buông bỏ"],
            "opportunities": ["Giác ngộ chân lý mới", "Tháo gỡ bế tắc lâu năm", "Chữa lành nội tâm"],
            "warnings": ["Tránh tự biến mình thành nạn nhân cam chịu một cách thụ động."]
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
            "hiddenIssues": ["Tâm lý tử vì đạo", "Sợ thay đổi", "Trì hoãn kéo dài"],
            "adjustments": ["Cắt đứt những ràng buộc độc hại", "Học cách từ chối", "Chủ động hành động"]
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
        ]
    },
    {
        "id": "death",
        "name": "Death",
        "nameVi": "Cái Chết",
        "number": 13,
        "romanNumeral": "XIII",
        "element": "Nước",
        "astrology": "Bọ Cạp (Scorpio)",
        "keywords": ["Transformation", "Endings", "Change", "Transition", "Rebirth"],
        "keywordsVi": ["Sự chuyển hóa", "Kết thúc chu kỳ cũ", "Biến đổi sâu sắc", "Chuyển giao thời khắc", "Tái sinh từ tro tàn"],
        "symbolism": [
            {"element": "Bộ xương kỵ sĩ mặc giáp đen cưỡi ngựa trắng", "meaning": "Sự bất khả kháng của quy luật tự nhiên, ngựa trắng tượng trưng cho sự thuần khiết của tiến trình"},
            {"element": "Lá cờ đen thêu hoa hồng trắng Mystic Rose 5 cánh", "meaning": "Sự sống bất diệt, cái đẹp tái sinh ngay sau sự hủy diệt của cái cũ"},
            {"element": "Các nhân vật trước mặt ngựa (Vua, Giáo hoàng, Phụ nữ, Trẻ em)", "meaning": "Không ai có thể trốn tránh sự chuyển hóa: địa vị, niềm tin, giới tính hay tuổi tác"},
            {"element": "Mặt trời mọc giữa hai ngọn tháp phía chân trời", "meaning": "Bình minh của một kỷ nguyên mới, sự bất tử của linh hồn sau cái chết thể xác"},
            {"element": "Dòng sông phía sau với con thuyền", "meaning": "Dòng sông Styx đưa linh hồn qua bến bờ mới của nhận thức"}
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
            "strengths": ["Khả năng thích ứng chuyển hóa", "Lòng dũng cảm buông bỏ", "Sự kiên cường phi thường"],
            "opportunities": ["Cơ hội làm lại từ đầu", "Giải phóng gánh nặng quá khứ", "Thức tỉnh tâm linh sâu sắc"],
            "warnings": ["Đừng cố níu kéo những điều đã cạn kiệt sinh khí."]
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
            "hiddenIssues": ["Sợ sự vô định", "Bám chấp ký ức cũ", "Chối bỏ thực tại"],
            "adjustments": ["Chấp nhận quy luật buông bỏ", "Dọn dẹp không gian sống và tâm trí", "Tìm kiếm sự hỗ trợ tâm lý"]
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
        ]
    },
    {
        "id": "temperance",
        "name": "Temperance",
        "nameVi": "Tiết Chế",
        "number": 14,
        "romanNumeral": "XIV",
        "element": "Lửa",
        "astrology": "Nhân Mã (Sagittarius)",
        "keywords": ["Balance", "Moderation", "Patience", "Purpose", "Alchemy"],
        "keywordsVi": ["Cân bằng tĩnh tại", "Sự chừng mực", "Kiên nhẫn dung hòa", "Mục đích cao cả", "Thuật giả kim nội tâm"],
        "symbolism": [
            {"element": "Thiên thần rót nước giữa hai chiếc cốc", "meaning": "Sự pha trộn hoàn hảo giữa hai thái cực, dòng chảy liên tục của cảm xúc và tâm linh"},
            {"element": "Một chân trên cạn, một chân dưới nước", "meaning": "Sự cân bằng tuyệt đối giữa thế giới vật chất thực tế và cõi tiềm thức trực giác"},
            {"element": "Hình tam giác trong hình vuông trên ngực áo", "meaning": "Bản chất thiêng liêng (3) được bảo vệ và hiện thực hóa trong thế giới vật chất (4)"},
            {"element": "Bông hoa diên vĩ nở rộ bên bờ", "meaning": "Biểu tượng của Iris - nữ thần cầu vồng nối liền trời và đất, mang lại hy vọng"},
            {"element": "Con đường uốn lượn dẫn tới vương miện rực sáng trên núi", "meaning": "Hành trình kiên trì và thanh lọc tâm hồn hướng tới sự giác ngộ cao nhất"}
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
            "strengths": ["Sự điềm tĩnh", "Khả năng hòa giải", "Lối sống chừng mực"],
            "opportunities": ["Hàn gắn xung đột", "Phát triển sức khỏe toàn diện", "Đạt tới sự an lạc nội tâm"],
            "warnings": ["Tránh sự nhượng bộ quá mức làm mờ đi bản sắc riêng của bạn."]
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
            "hiddenIssues": ["Nóng vội bốc đồng", "Mất cân bằng cảm xúc", "Nghiện hành vi cực đoan"],
            "adjustments": ["Thiết lập lại thời gian biểu lành mạnh", "Học cách thở sâu và thư giãn", "Hạn chế các chất kích thích"]
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
        ]
    },
    {
        "id": "the-devil",
        "name": "The Devil",
        "nameVi": "Ác Quỷ",
        "number": 15,
        "romanNumeral": "XV",
        "element": "Đất",
        "astrology": "Ma Kết (Capricorn)",
        "keywords": ["Shadow Self", "Attachment", "Addiction", "Restriction", "Illusion of Bondage"],
        "keywordsVi": ["Phần bóng tối (Shadow)", "Sự trói buộc", "Cám dỗ dục vọng", "Ảo tưởng bất lực", "Giải phóng xiềng xích"],
        "symbolism": [
            {"element": "Ác quỷ Baphomet ngồi trên bệ đá", "meaning": "Bản năng động vật, nỗi sợ hãi và những cám dỗ vật chất thấp kém giam cầm con người"},
            {"element": "Hai người nam nữ bị xích vào bệ đá", "meaning": "Sợi xích đeo lỏng lẻo quanh cổ - họ hoàn toàn có thể tự tháo ra nhưng chọn ở lại vì ảo tưởng hoặc thỏa hiệp"},
            {"element": "Ngọn đuốc chúc xuống của quỷ", "meaning": "Lãng phí ngọn lửa sáng tạo tâm linh vào các đam mê mù quáng và dục vọng nhất thời"},
            {"element": "Ngôi sao 5 cánh lộn ngược trên trán Baphomet", "meaning": "Vật chất áp đảo tinh thần, bản năng hoang dã làm chủ lý trí"},
            {"element": "Đuôi có quả nho và ngọn lửa của hai nhân vật", "meaning": "Sự say xỉn trong khoái lạc giác quan và cơn giận thiêu đốt"}
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
            "strengths": ["Nhận thức sâu sắc về mặt tối", "Đam mê mãnh liệt", "Khả năng phá bỏ ràng buộc"],
            "opportunities": ["Thoát khỏi mối quan hệ độc hại", "Cai nghiện thói quen xấu", "Giải phóng bản thân"],
            "warnings": ["Tránh thỏa hiệp với lương tâm để đổi lấy sự thỏa mãn ngắn hạn."]
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
            "hiddenIssues": ["Tàn dư của sự sợ hãi", "Cám dỗ quay lại thói quen cũ", "Cảm giác tội lỗi"],
            "adjustments": ["Cắt đứt liên lạc với những đối tượng độc hại", "Tìm kiếm sự đồng hành của bạn bè tốt", "Kiên định với tự do"]
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
        ]
    },
    {
        "id": "the-tower",
        "name": "The Tower",
        "nameVi": "Tòa Tháp",
        "number": 16,
        "romanNumeral": "XVI",
        "element": "Lửa",
        "astrology": "Sao Hỏa (Mars)",
        "keywords": ["Sudden Change", "Upheaval", "Awakening", "Revelation", "Breakthrough"],
        "keywordsVi": ["Sự sụp đổ đột ngột", "Biến động dữ dội", "Sự thức tỉnh sấm sét", "Sự thật phơi bày", "Đột phá giải phóng"],
        "symbolism": [
            {"element": "Tòa tháp kiên cố xây trên đỉnh núi bị sét đánh", "meaning": "Bản ngã kiêu ngạo và những cấu trúc giả tạo xây trên nền móng sai lầm bị phá hủy bởi sự thật vũ trụ"},
            {"element": "Vương miện vàng bị hất văng khỏi tháp", "meaning": "Sự sụp đổ của cái tôi ngạo mạn, quyền lực giả tạo bị tước đoạt"},
            {"element": "Hai người rơi tự do xuống vực", "meaning": "Sự mất kiểm soát hoàn toàn trước biến cố bất ngờ, không phân biệt giàu nghèo"},
            {"element": "22 giọt lửa (yod) bay trong không trung", "meaning": "22 chữ cái Do Thái / 22 bài học Arcana - ân sủng cứu rỗi ẩn sau thảm họa"},
            {"element": "Những đám mây đen và khói xám", "meaning": "Sự hỗn loạn tạm thời trước khi bầu trời quang đãng trở lại"}
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
            "strengths": ["Khả năng kiên cường sau cú sốc", "Sự thức tỉnh triệt để", "Giải phóng khỏi ảo tưởng"],
            "opportunities": ["Xây dựng lại cuộc đời từ số không", "Nhận ra bộ mặt thật của sự việc", "Tự do hoàn toàn"],
            "warnings": ["Tránh hoảng loạn hành động dại dột trong lúc cơn bão đang quét qua."]
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
            "hiddenIssues": ["Nỗi sợ mất an toàn", "Bảo thủ ngoan cố", "Trốn tránh sự thật"],
            "adjustments": ["Chủ động thay đổi trước khi bị bắt buộc", "Đối diện trực tiếp với nỗi sợ", "Buông bỏ tự ái"]
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
        ]
    },
    {
        "id": "the-star",
        "name": "The Star",
        "nameVi": "Ngôi Sao",
        "number": 17,
        "romanNumeral": "XVII",
        "element": "Khí",
        "astrology": "Bảo Bình (Aquarius)",
        "keywords": ["Hope", "Faith", "Healing", "Inspiration", "Serenity"],
        "keywordsVi": ["Niềm hy vọng rực sáng", "Đức tin vững chắc", "Chữa lành diệu kỳ", "Cảm hứng tâm linh", "Sự an lạc thanh tịnh"],
        "symbolism": [
            {"element": "Người phụ nữ khỏa thân bên bờ nước", "meaning": "Sự chân thật, thuần khiết tuyệt đối, không phòng thủ trước vũ trụ"},
            {"element": "Ngôi sao 8 cánh lớn màu vàng ở trung tâm", "meaning": "Ngôi sao Sirius và luân xa ánh sáng dẫn đường cho linh hồn"},
            {"element": "Bảy ngôi sao nhỏ xung quanh", "meaning": "Bảy luân xa chính trong cơ thể được thanh lọc và cân bằng hoàn hảo"},
            {"element": "Hai bình nước rót xuống đất và hồ", "meaning": "Nuôi dưỡng cả đời sống vật chất hữu hình lẫn tiềm thức tâm linh vô hình"},
            {"element": "Cây cối và chú chim Ibis trên cành", "meaning": "Biểu tượng thần Thoth - sự thông thái, hồi sinh của tự nhiên sau giông bão"}
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
            "strengths": ["Niềm lạc quan vô điều kiện", "Khả năng truyền cảm hứng", "Tâm hồn thanh khiết"],
            "opportunities": ["Hồi phục sức khỏe kỳ diệu", "Tỏa sáng trong sự nghiệp", "Gặp được tình yêu chữa lành"],
            "warnings": ["Tránh mơ mộng hão huyền mà quên mất các bước thực hiện thực tế."]
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
            "hiddenIssues": ["Tâm lý bi quan yếm thế", "Tổn thương chưa lành", "Thiếu đức tin"],
            "adjustments": ["Viết nhật ký biết ơn", "Gần gũi với thiên nhiên", "Tìm kiếm sự khích lệ từ bạn bè tích cực"]
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
        ]
    },
    {
        "id": "the-moon",
        "name": "The Moon",
        "nameVi": "Mặt Trăng",
        "number": 18,
        "romanNumeral": "XVIII",
        "element": "Nước",
        "astrology": "Song Ngư (Pisces)",
        "keywords": ["Illusion", "Fear", "Subconscious", "Intuition", "Uncertainty"],
        "keywordsVi": ["Ảo ảnh mơ hồ", "Nỗi sợ vô hình", "Cõi tiềm thức sâu thẳm", "Trực giác nhạy cảm", "Sự bất định sương mù"],
        "symbolism": [
            {"element": "Mặt trăng tròn đầy với khuôn mặt u sầu nhìn xuống", "meaning": "Ánh sáng phản chiếu gián tiếp, thế giới của giấc mơ, ảo ảnh và sự bí ẩn"},
            {"element": "Con chó nhà và con chó sói tru trăng", "meaning": "Bản tính thuần hóa và bản năng hoang dã sơ khai bên trong con người trước nỗi sợ đêm tối"},
            {"element": "Con tôm hùm bò lên từ đầm lầy sâu thẳm", "meaning": "Những ký ức sâu kín, nỗi sợ nguyên thủy từ đáy tiềm thức trồi lên mặt nước"},
            {"element": "Hai tòa tháp canh gác hai bên", "meaning": "Cánh cổng dẫn vào cõi vô thức chưa được khám phá"},
            {"element": "Con đường uốn lượn biến mất vào bóng đêm", "meaning": "Hành trình xuyên qua sương mù đòi hỏi sự can đảm và lắng nghe trực giác"}
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
            "strengths": ["Trực giác thấu thị", "Trí tưởng tượng phong phú", "Khả năng thấu cảm cõi vô thức"],
            "opportunities": ["Sáng tạo nghệ thuật thăng hoa", "Giải mã giấc mơ", "Chữa lành tổn thương tiềm thức"],
            "warnings": ["Tránh để nỗi sợ hãi tự thêu dệt nên những kịch bản tồi tệ."]
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
            "hiddenIssues": ["Ám ảnh quá khứ", "Hoang tưởng tự suy diễn", "Che giấu sự thật"],
            "adjustments": ["Kiểm chứng thông tin đa chiều", "Thực hành bài tập nối đất (grounding)", "Nói chuyện thẳng thắn với người liên quan"]
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
        ]
    },
    {
        "id": "the-sun",
        "name": "The Sun",
        "nameVi": "Mặt Trời",
        "number": 19,
        "romanNumeral": "XIX",
        "element": "Lửa",
        "astrology": "Mặt Trời (Sun)",
        "keywords": ["Joy", "Success", "Celebration", "Positivity", "Vitality"],
        "keywordsVi": ["Niềm vui rạng rỡ", "Thành công rực rỡ", "Lễ hội ăn mừng", "Sự tích cực ấm áp", "Sinh lực tràn trề"],
        "symbolism": [
            {"element": "Mặt trời khổng lồ tỏa chiếu 16 tia sáng (thẳng và lượn sóng)", "meaning": "Sự kết hợp giữa chân lý lý trí và trực giác tình cảm, nguồn năng lượng sống tối thượng"},
            {"element": "Đứa trẻ khỏa thân cười rạng rỡ cưỡi ngựa trắng", "meaning": "Sự thuần khiết, ngây thơ tuyệt đối, tự do hoàn toàn và sự hòa hợp với thiên nhiên"},
            {"element": "Bức tường gạch phía sau", "meaning": "Đã vượt qua mọi giới hạn của trần tục để bước vào khu vườn bình an"},
            {"element": "Bốn bông hoa hướng dương nở rộ", "meaning": "Bốn bộ Minor Arcana và bốn nguyên tố đều đạt đến trạng thái viên mãn, trù phú"},
            {"element": "Dải băng đỏ bay phấp phới trên đầu đứa trẻ", "meaning": "Sức sống mãnh liệt và năng lượng hành động thuần khiết của sự thức tỉnh"}
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
            "strengths": ["Sự rạng rỡ lạc quan", "Sức hút cá nhân mãnh liệt", "Nguồn năng lượng tích cực dồi dào"],
            "opportunities": ["Gặt hái thành tựu lớn nhất", "Hôn nhân viên mãn", "Sức khỏe hồi phục thần kỳ"],
            "warnings": ["Hãy giữ sự khiêm nhường để ánh sáng của bạn luôn sưởi ấm thay vì thiêu đốt người khác."]
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
            "hiddenIssues": ["Tự phụ kiêu căng", "Kỳ vọng phi thực tế", "Mệt mỏi kiệt sức"],
            "adjustments": ["Tắm nắng và vận động ngoài trời", "Hạ bớt tiêu chuẩn hoàn hảo", "Tập mỉm cười và biết ơn"]
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
        ]
    },
    {
        "id": "judgement",
        "name": "Judgement",
        "nameVi": "Phán Xét",
        "number": 20,
        "romanNumeral": "XX",
        "element": "Lửa",
        "astrology": "Sao Diêm Vương (Pluto)",
        "keywords": ["Rebirth", "Inner Calling", "Absolution", "Awakening", "Self-Evaluation"],
        "keywordsVi": ["Tái sinh tâm hồn", "Tiếng gọi nội tâm", "Sự xá tội tha thứ", "Sự thức tỉnh vĩ đại", "Tự phán xét công tâm"],
        "symbolism": [
            {"element": "Tổng lãnh thiên thần Gabriel thổi kèn vàng", "meaning": "Tiếng kèn hiệu triệu của vũ trụ đánh thức các linh hồn khỏi giấc ngủ mê muội của thế tục"},
            {"element": "Những người trỗi dậy từ các ngôi mộ đá xám", "meaning": "Sự phục sinh, thoát khỏi gánh nặng của quá khứ, sẵn sàng cho một cuộc đời mới"},
            {"element": "Lá cờ chữ thập đỏ trên nền trắng của kèn", "meaning": "Sự cân bằng hoàn hảo giữa bốn phương, biểu tượng của sự cứu chuộc và ánh sáng"},
            {"element": "Rặng núi xanh xa xa", "meaning": "Chân lý bất biến và các tầng nhận thức tâm linh cao cấp"},
            {"element": "Biển nước bao quanh", "meaning": "Dòng chảy ký ức tập thể được thanh tẩy bởi âm thanh thức tỉnh"}
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
            "strengths": ["Nhận thức thức tỉnh", "Lòng vị tha bao dung", "Sự dứt khoát sáng suốt"],
            "opportunities": ["Tìm thấy lẽ sống đích thực", "Được tha thứ và chữa lành", "Bước sang trang mới huy hoàng"],
            "warnings": ["Tránh phán xét người khác một cách khắc nghiệt và bảo thủ."]
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
            "hiddenIssues": ["Mặc cảm tội lỗi", "Sợ bị phán xét", "Trì hoãn sự thức tỉnh"],
            "adjustments": ["Viết thư tha thứ cho quá khứ", "Lắng nghe trực giác tĩnh lặng", "Chịu trách nhiệm cho hiện tại"]
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
        ]
    },
    {
        "id": "the-world",
        "name": "The World",
        "nameVi": "Thế Giới",
        "number": 21,
        "romanNumeral": "XXI",
        "element": "Đất",
        "astrology": "Sao Thổ (Saturn)",
        "keywords": ["Completion", "Integration", "Accomplishment", "Travel", "Wholeness"],
        "keywordsVi": ["Hoàn thành viên mãn", "Hợp nhất trọn vẹn", "Thành tựu đỉnh cao", "Chuyến đi rộng mở", "Sự tròn đầy tuyệt đối"],
        "symbolism": [
            {"element": "Vũ công nhảy múa trong vòng nguyệt quế", "meaning": "Sự chiến thắng trọn vẹn, vòng quay vô tận của sự sống đạt tới sự hoàn mỹ"},
            {"element": "Hai cây trượng cầm trên hai tay", "meaning": "Làm chủ hoàn toàn cả thế giới ý thức lẫn tiềm thức, năng lượng sáng tạo viên mãn"},
            {"element": "Bốn sinh vật thần thánh ở bốn góc (Người, Đại bàng, Sư tử, Bò đực)", "meaning": "Bốn nguyên tố và toàn bộ vũ trụ chúc phúc cho sự thành tựu của linh hồn"},
            {"element": "Dải ruy băng đỏ thắt hình số 8 vô cực", "meaning": "Sự kết nối bất diệt giữa khởi đầu và kết thúc, chu kỳ hoàn thành để mở ra chu kỳ mới cao hơn"},
            {"element": "Khăn choàng màu tím uốn quanh thân", "meaning": "Sự tự do tuyệt đối, tâm linh và vật chất hòa làm một"}
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
            "strengths": ["Sự toàn diện", "Tầm nhìn quốc tế", "Cảm giác viên mãn sâu sắc"],
            "opportunities": ["Chuyến đi xa/xuất ngoại thành công", "Tốt nghiệp/hoàn thành dự án lớn", "Thăng hoa toàn diện"],
            "warnings": ["Hãy tận hưởng thành quả nhưng đừng dừng lại quá lâu trên đỉnh vinh quang."]
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
            "hiddenIssues": ["Sợ cảm giác kết thúc", "Trì hoãn bước cuối", "Tìm kiếm sự hoàn hảo thái quá"],
            "adjustments": ["Rà soát lại danh sách việc cần làm", "Đóng lại các vòng lặp dở dang", "Ăn mừng từng bước tiến nhỏ"]
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
        ]
    }
]

print(f"Loaded {len(major_arcana_raw)} Major Arcana cards.")
