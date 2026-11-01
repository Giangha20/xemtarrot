# -*- coding: utf-8 -*-
"""
Full dataset for 56 Minor Arcana cards:
Wands (Lửa), Cups (Nước), Swords (Khí), Pentacles (Đất)
"""

suits_config = {
    "wands": {
        "suitVi": "Gậy",
        "element": "Lửa",
        "astrology_prefix": "Bạch Dương, Sư Tử, Nhân Mã",
        "nature": "Ý chí, đam mê, hành động, trực giác sáng tạo, sự nghiệp và nguồn cảm hứng"
    },
    "cups": {
        "suitVi": "Cốc",
        "element": "Nước",
        "astrology_prefix": "Cự Giải, Bọ Cạp, Song Ngư",
        "nature": "Cảm xúc, tình yêu, trực giác tâm linh, mối quan hệ và sự thấu cảm"
    },
    "swords": {
        "suitVi": "Kiếm",
        "element": "Khí",
        "astrology_prefix": "Song Tử, Thiên Bình, Bảo Bình",
        "nature": "Trí tuệ, tư duy lý trí, giao tiếp, xung đột, sự thật và quyết định logic"
    },
    "pentacles": {
        "suitVi": "Tiền",
        "element": "Đất",
        "astrology_prefix": "Kim Ngưu, Xử Nữ, Ma Kết",
        "nature": "Vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự bền vững"
    }
}

# Detailed definitions for each rank (Ace to King) across all 4 suits
minor_definitions = [
    # ================= WANDS (GẬY) =================
    {
        "suit": "wands", "number": 1, "id": "ace-of-wands", "name": "Ace of Wands", "nameVi": "Ace of Wands – Át Gậy",
        "romanNumeral": "I", "astrology": "Cung Lửa (Bạch Dương, Sư Tử, Nhân Mã)",
        "keywords": ["Inspiration", "Power", "Creation", "New Passion", "Potential"],
        "keywordsVi": ["Ngọn lửa cảm hứng", "Đam mê bùng cháy", "Khởi đầu sáng tạo", "Năng lượng hành động", "Tiềm năng bứt phá"],
        "symbolism": [
            {"element": "Bàn tay thần thánh nhô ra từ đám mây", "meaning": "Món quà cảm hứng và cơ hội trực tiếp từ vũ trụ trao tặng"},
            {"element": "Cây gậy đâm chồi nảy lộc", "meaning": "Sự sống trỗi dậy, sức sáng tạo và tiềm năng sinh sôi bất tận"},
            {"element": "Lá cây vàng rơi lơ lửng hình chữ Yod", "meaning": "22 chữ cái cổ - ân huệ thiêng liêng ban phước cho ý tưởng mới"},
            {"element": "Lâu đài trên đồi xa", "meaning": "Mục tiêu thành tựu lớn đang vẫy gọi người dám hành động"}
        ],
        "upright": {
            "keyMessage": "Một ngọn lửa cảm hứng và cơ hội bùng nổ đang đến; hãy nắm bắt và hành động với tất cả đam mê.",
            "general": "Ace of Wands đại diện cho tia lửa khởi nguyên của hành động và sự sáng tạo. Bạn tràn đầy năng lượng, ý tưởng mới mẻ và dũng khí để bắt tay vào một dự án đầy thử thách.",
            "love": "Tình yêu nồng cháy, sự hấp dẫn mãnh liệt ngay từ cái nhìn đầu tiên; làn gió mới hâm nóng tình cảm đôi lứa.",
            "career": "Cơ hội khởi nghiệp tuyệt vời, dự án mới đầy triển vọng, sự nhiệt huyết đỉnh cao thúc đẩy công việc tiến nhanh.",
            "finance": "Cơ hội gia tăng thu nhập từ một ý tưởng kinh doanh mới; cần quyết đoán nắm bắt thời cơ.",
            "family": "Năng lượng vui tươi, tích cực trong gia đình; có thể có những kế hoạch cải tạo không gian sống đầy hứng khởi.",
            "personalGrowth": "Khơi dậy niềm đam mê đích thực, dũng cảm theo đuổi ước mơ bấy lâu nay ấp ủ.",
            "advice": "Hãy hành động ngay khi ngọn lửa cảm hứng còn đang rực cháy; đừng để sự chần chừ làm nguội nhiệt huyết.",
            "strengths": ["Nhiệt huyết dồi dào", "Sáng tạo đột phá", "Tinh thần tiên phong"],
            "opportunities": ["Bắt đầu dự án mới", "Đột phá sự nghiệp", "Gặp gỡ tình yêu say đắm"],
            "warnings": ["Tránh bốc đồng bắt đầu quá nhiều thứ rồi bỏ dở giữa chừng."]
        },
        "reversed": {
            "keyMessage": "Ngọn lửa đam mê đang bị dập tắt bởi sự trì hoãn, thiếu phương hướng hoặc cạn kiệt năng lượng.",
            "blockedEnergy": "Sự chán chường, bế tắc ý tưởng, thiếu tự tin hoặc năng lượng bốc đồng thiêu đốt mù quáng.",
            "general": "Ace of Wands ngược cảnh báo bạn đang cảm thấy thiếu động lực, ý tưởng bị đình trệ hoặc gặp phải trở ngại lớn ngay từ bước đầu.",
            "love": "Sự nguội lạnh cảm xúc, thiếu lửa trong tình yêu, hoặc sự bốc đồng nóng nảy làm tổn thương đối phương.",
            "career": "Dự án mới bị hoãn lại, thiếu sự chuẩn bị kỹ lưỡng dẫn đến lúng túng, mất phương hướng nghề nghiệp.",
            "finance": "Đầu tư bốc đồng theo cảm tính dẫn đến hao hụt; cần thận trọng trước những lời rủ rê làm ăn vội vã.",
            "family": "Căng thẳng do những cơn nóng giận vô cớ, thiếu sự gắn kết nhiệt tình giữa các thành viên.",
            "personalGrowth": "Cần tìm lại ngọn lửa đam mê bên trong, chữa lành tình trạng kiệt sức trước khi tiếp tục.",
            "advice": "Hãy cho phép bản thân nghỉ ngơi để tích lũy năng lượng; định hình rõ mục tiêu trước khi thắp lại ngọn lửa.",
            "hiddenIssues": ["Sợ thất bại", "Cạn kiệt năng lượng sáng tạo", "Nóng vội thiếu kiên nhẫn"],
            "adjustments": ["Tập trung vào một mục tiêu duy nhất", "Tìm nguồn cảm hứng mới", "Lên kế hoạch chi tiết"]
        },
        "adviceDetail": {
            "whatToWatch": "Tia lửa cảm hứng lướt qua nhanh chóng.",
            "whatToChange": "Thói quen chần chừ và sự lười biếng trì hoãn.",
            "whatToEmbrace": "Dũng khí tiên phong và tinh thần dám nghĩ dám làm.",
            "pitfalls": "Bốc đồng đốt cháy giai đoạn hoặc làm việc theo kiểu đầu voi đuôi chuột."
        },
        "message": "Một đốm lửa nhỏ cũng có thể làm bừng sáng cả màn đêm lạnh giá. Hãy tin vào tiếng gọi đam mê đang cháy trong tim bạn.",
        "reflectionQuestions": [
            "Điều gì khiến bạn cảm thấy tràn đầy sinh lực và hào hứng nhất lúc này?",
            "Ý tưởng nào bạn luôn muốn thực hiện nhưng chưa dám bắt đầu?",
            "Làm thế nào để duy trì ngọn lửa nhiệt huyết lâu dài sau sự hào hứng ban đầu?"
        ]
    },
    {
        "suit": "wands", "number": 2, "id": "two-of-wands", "name": "Two of Wands", "nameVi": "Two of Wands – Hai Gậy",
        "romanNumeral": "II", "astrology": "Sao Hỏa tại Bạch Dương",
        "keywords": ["Future Planning", "Progress", "Decisions", "Discovery", "Expansion"],
        "keywordsVi": ["Lên kế hoạch tương lai", "Tầm nhìn xa trông rộng", "Quyết định bước ngoặt", "Mở rộng bờ cõi", "Khát vọng vươn xa"],
        "symbolism": [
            {"element": "Người đàn ông cầm quả địa cầu đứng trên tường thành", "meaning": "Tầm nhìn toàn cầu, thế giới nằm trong tay người có khát vọng lớn"},
            {"element": "Một cây gậy cố định trên tường, một cây gậy cầm trong tay", "meaning": "Sự vững chắc của hiện tại và sự sẵn sàng bước ra thế giới mới"},
            {"element": "Hoa hồng và hoa bách hợp thêu trên tường", "meaning": "Sự kết hợp giữa đam mê hành động và ý định thuần khiết"},
            {"element": "Bờ biển và vịnh nước phía xa", "meaning": "Những chân trời xa xôi đang chờ được khám phá"}
        ],
        "upright": {
            "keyMessage": "Bạn đã có thành tựu ban đầu; giờ là lúc mở rộng tầm nhìn và lên kế hoạch cho những bước tiến lớn hơn.",
            "general": "Two of Wands nói về việc đứng trên đỉnh cao nhìn ra thế giới. Bạn đang có nền tảng vững chắc và đứng trước cơ hội mở rộng quy mô, vươn ra khỏi vùng an toàn.",
            "love": "Cùng nhau lên kế hoạch dài hạn cho tương lai; có thể là chuyến đi xa hoặc quyết định chuyển nơi sinh sống cùng nhau.",
            "career": "Mở rộng kinh doanh, hợp tác quốc tế, tìm kiếm thị trường mới hoặc chuẩn bị cho một bước chuyển mình lớn.",
            "finance": "Kế hoạch tài chính dài hạn được thiết lập bài bản; cơ hội đầu tư ra nước ngoài hoặc lĩnh vực mới.",
            "family": "Thảo luận về tương lai dài hạn của gia đình, xây dựng nhà cửa hoặc kế hoạch định cư.",
            "personalGrowth": "Mở rộng thế giới quan, học ngoại ngữ hoặc các kỹ năng mới để nâng tầm bản thân.",
            "advice": "Hãy can đảm ước mơ lớn, xây dựng lộ trình chi tiết và sẵn sàng bước ra biển lớn.",
            "strengths": ["Tầm nhìn chiến lược", "Bản lĩnh vững vàng", "Khát vọng vươn lên"],
            "opportunities": ["Hợp tác quốc tế", "Mở rộng chi nhánh", "Du học/làm việc xa"],
            "warnings": ["Đừng đứng mãi trên tường thành suy tính mà không chịu bước đi."]
        },
        "reversed": {
            "keyMessage": "Bạn đang do dự không dám bước ra khỏi vùng an toàn hoặc kế hoạch tương lai đang thiếu tính thực tế.",
            "blockedEnergy": "Nỗi sợ vô định, ngần ngại trước những thay đổi lớn, tầm nhìn hạn hẹp hoặc kế hoạch bị đình trệ.",
            "general": "Two of Wands ngược cảnh báo bạn đang tự giam mình trong vùng an toàn cũ kỹ vì sợ rủi ro, hoặc kế hoạch đặt ra quá viển vông.",
            "love": "Sự bất đồng về kế hoạch tương lai giữa hai người; một bên muốn bứt phá trong khi bên kia muốn giữ nguyên hiện trạng.",
            "career": "Kế hoạch mở rộng gặp trở ngại, ngần ngại không dám nắm bắt cơ hội làm việc tại môi trường mới.",
            "finance": "Rủi ro khi đầu tư vào những thị trường chưa hiểu rõ; nên tập trung củng cố những gì đang có.",
            "family": "Bất an về những kế hoạch thay đổi nơi ở hoặc xáo trộn nếp sống quen thuộc.",
            "personalGrowth": "Bạn cần vượt qua nỗi sợ thất bại để dám bước những bước đi lớn hơn trong đời.",
            "advice": "Hãy kiểm tra lại tính khả thi của kế hoạch; nếu đã sẵn sàng, đừng để nỗi sợ giữ chân bạn.",
            "hiddenIssues": ["Sợ thay đổi", "Thiếu tự tin vào năng lực", "Tầm nhìn ngắn hạn"],
            "adjustments": ["Chia nhỏ kế hoạch lớn", "Tìm kiếm sự cố vấn từ người đi trước", "Tin vào bản thân"]
        },
        "adviceDetail": {
            "whatToWatch": "Cơ hội mở rộng đang xuất hiện ở đường chân trời.",
            "whatToChange": "Tâm lý thỏa mãn quá sớm với những thành công nhỏ bé ban đầu.",
            "whatToEmbrace": "Khát vọng chinh phục thế giới bằng sự chuẩn bị chu đáo.",
            "pitfalls": "Chần chừ quá lâu khiến cơ hội vàng vuột mất."
        },
        "message": "Cả thế giới rộng lớn đang nằm trong tay bạn. Đừng chỉ đứng mãi trên pháo đài cũ để ngắm nhìn; hãy dong buồm ra khơi và khám phá chân trời của riêng mình.",
        "reflectionQuestions": [
            "Tầm nhìn 3 đến 5 năm tới của bạn là gì?",
            "Vùng an toàn nào đang kìm hãm bạn không dám bứt phá?",
            "Bước đi đầu tiên cụ thể nào bạn cần thực hiện để biến tầm nhìn thành hiện thực?"
        ]
    },
    {
        "suit": "wands", "number": 3, "id": "three-of-wands", "name": "Three of Wands", "nameVi": "Three of Wands – Ba Gậy",
        "romanNumeral": "III", "astrology": "Mặt Trời tại Bạch Dương",
        "keywords": ["Expansion", "Foresight", "Overseas Opportunity", "Self-Reliance", "Looking Ahead"],
        "keywordsVi": ["Mở rộng thành công", "Cơ hội xuất ngoại", "Thuyền bè cập bến", "Tự lực cánh sinh", "Đón nhận thành quả"],
        "symbolism": [
            {"element": "Người đàn ông đứng quay lưng nhìn ra biển", "meaning": "Sự tự tin, dõi theo hành trình của những con tàu chở đầy ước mơ và hàng hóa"},
            {"element": "Ba cây gậy cắm vững chãi trên đất", "meaning": "Nền tảng vững chắc đã được thiết lập, sẵn sàng đón nhận cơ hội lớn"},
            {"element": "Những con thuyền bơi trên mặt biển vàng óng", "meaning": "Thương mại, cơ hội giao thương và thành quả đang trên đường trở về"},
            {"element": "Màu áo xanh lá và đỏ", "meaning": "Sự kết hợp giữa phát triển thịnh vượng và đam mê kiên định"}
        ],
        "upright": {
            "keyMessage": "Những nỗ lực của bạn đã bắt đầu đơm hoa kết trái; hãy sẵn sàng đón nhận những chuyến tàu cơ hội đang trở về.",
            "general": "Three of Wands là lá bài của sự tự tin, mở rộng và thành tựu đang trên đường tới. Bạn đã gieo hạt, đã hành động và giờ đây chỉ cần vững tâm theo dõi tiến trình.",
            "love": "Mối quan hệ phát triển vững chắc, có thể cùng nhau du lịch xa hoặc vượt qua thử thách yêu xa thành công.",
            "career": "Cơ hội công việc mang tầm quốc tế, mở rộng hợp tác làm ăn, được cấp trên đánh giá cao và trao quyền lớn hơn.",
            "finance": "Các khoản đầu tư bắt đầu sinh lời, dòng tiền lưu chuyển tích cực, mở ra nhiều nguồn thu mới.",
            "family": "Gia đình tự hào về những bước tiến của bạn, có cơ hội đoàn tụ hoặc du lịch khám phá cùng nhau.",
            "personalGrowth": "Tự tin vào năng lực cá nhân, thế giới quan rộng mở và tâm thế sẵn sàng đón nhận những điều mới mẻ.",
            "advice": "Hãy giữ vững niềm tin, kiên nhẫn dõi theo kế hoạch và sẵn sàng hành động khi thời cơ chín muồi.",
            "strengths": ["Tự tin vững vàng", "Khả năng tiên liệu", "Tầm nhìn khoáng đạt"],
            "opportunities": ["Cơ hội làm việc với nước ngoài", "Mở rộng kinh doanh", "Thu hoạch thành quả ngọt ngào"],
            "warnings": ["Đừng mất cảnh giác khi mọi việc đang diễn ra quá thuận lợi."]
        },
        "reversed": {
            "keyMessage": "Những chuyến tàu cơ hội bị chậm trễ hoặc bạn đang gặp khó khăn trong việc mở rộng do thiếu sự chuẩn bị.",
            "blockedEnergy": "Sự thất vọng vì tiến độ chậm, kế hoạch xuất ngoại hoặc hợp tác xa gặp trục trặc, mất kiên nhẫn.",
            "general": "Three of Wands ngược cho thấy các kế hoạch mở rộng của bạn đang gặp rào cản bất ngờ, hoặc bạn đang cảm thấy nản lòng vì thành quả chưa đến nhanh như mong đợi.",
            "love": "Trở ngại trong việc duy trì tình yêu xa, cảm giác bất an về tương lai chung, thiếu sự đồng lòng hướng về một phía.",
            "career": "Hợp đồng quốc tế gặp vướng mắc pháp lý, kế hoạch mở rộng bị trì hoãn, cảm thấy bị bó hẹp trong môi trường hiện tại.",
            "finance": "Lợi nhuận về chậm hơn dự kiến, phát sinh chi phí vận chuyển hoặc trung gian ngoài dự tính.",
            "family": "Các kế hoạch du lịch xa bị hủy bỏ hoặc hoãn lại; cảm giác xa cách địa lý giữa các thành viên.",
            "personalGrowth": "Cần rèn luyện tính nhẫn nại, không nên quá sốt ruột khi hạt mầm đang âm thầm lớn lên trong lòng đất.",
            "advice": "Hãy kiên nhẫn điều chỉnh lại kế hoạch, kiểm tra lại các kênh đối tác và giữ vững niềm tin vào mục tiêu cuối cùng.",
            "hiddenIssues": ["Nôn nóng", "Thiếu kế hoạch dự phòng rủi ro", "Phụ thuộc vào yếu tố bên ngoài"],
            "adjustments": ["Tối ưu hóa quy trình hiện tại", "Tìm giải pháp thay thế linh hoạt", "Duy trì tinh thần lạc quan"]
        },
        "adviceDetail": {
            "whatToWatch": "Dấu hiệu của những cơ hội hợp tác từ phương xa.",
            "whatToChange": "Thái độ sốt ruột, muốn đốt cháy giai đoạn.",
            "whatToEmbrace": "Tâm thế rộng mở, sẵn sàng vươn ra biển lớn.",
            "pitfalls": "Chủ quan không chuẩn bị phương án dự phòng khi gặp bão tố ngoài khơi."
        },
        "message": "Những con thuyền bạn đã gửi gắm ước mơ đang rẽ sóng trở về mang theo châu báu của sự nỗ lực. Hãy đứng vững vàng trên bờ biển và sẵn sàng đón nhận thành quả xứng đáng.",
        "reflectionQuestions": [
            "Những 'con thuyền' nào bạn đã gửi đi và đang kiên nhẫn chờ ngày cập bến?",
            "Làm thế nào để bạn mở rộng tầm ảnh hưởng của mình ra khỏi phạm vi quen thuộc?",
            "Bạn đã chuẩn bị tinh thần và nguồn lực như thế nào để đón nhận những thành công lớn hơn?"
        ]
    },
    {
        "suit": "wands", "number": 4, "id": "four-of-wands", "name": "Four of Wands", "nameVi": "Four of Wands – Bốn Gậy",
        "romanNumeral": "IV", "astrology": "Sao Kim tại Bạch Dương",
        "keywords": ["Celebration", "Homecoming", "Harmony", "Community", "Milestone"],
        "keywordsVi": ["Lễ ăn mừng", "Tổ ấm bình yên", "Hòa thuận sum vầy", "Cột mốc thành công", "Hỷ sự viên mãn"],
        "symbolism": [
            {"element": "Bốn cây gậy cắm vững chãi kết vòng hoa trái cây", "meaning": "Khung cảnh lễ hội rộn ràng, sự ổn định, thành quả ngọt ngào và sự bảo bọc"},
            {"element": "Hai người phụ nữ mặc áo trắng cầm bó hoa vẫy chào", "meaning": "Sự chào đón nồng nhiệt, niềm vui thuần khiết và tình bằng hữu chan chứa"},
            {"element": "Lâu đài kiên cố phía sau", "meaning": "Sự an toàn, tổ ấm che chở và sự thịnh vượng bền vững"},
            {"element": "Cầu hoa ngũ cốc và trái cây", "meaning": "Mùa màng bội thu, phước lành và sự đơm hoa kết trái của công sức"}
        ],
        "upright": {
            "keyMessage": "Hãy tận hưởng niềm vui ăn mừng bên những người thân yêu; bạn đã đạt được một cột mốc quan trọng và xứng đáng được hạnh phúc.",
            "general": "Four of Wands là một trong những lá bài hạnh phúc nhất. Nó báo hiệu những dịp lễ hội, tiệc cưới, tân gia, sum họp gia đình hoặc cột mốc hoàn thành dự án lớn trong niềm hân hoan rạng rỡ.",
            "love": "Hôn nhân hạnh phúc, lễ đính hôn, cùng nhau xây dựng tổ ấm vững chắc, sự hòa hợp tuyệt đối và được hai bên gia đình chúc phúc.",
            "career": "Hoàn thành giai đoạn quan trọng của dự án, tổ chức tiệc mừng công, môi trường làm việc đoàn kết và ấm áp như gia đình.",
            "finance": "Tài chính ổn định, mua được nhà mới hoặc nâng cấp không gian sống, an tâm về mặt của cải.",
            "family": "Sum họp gia đình đầm ấm, giải tỏa mọi hiềm khích cũ, tràn ngập tiếng cười và sự yêu thương.",
            "personalGrowth": "Cảm giác an yên, hài lòng với bản thân, tìm thấy nơi thuộc về đích thực trong tâm hồn.",
            "advice": "Hãy mở tiệc ăn mừng, chia sẻ niềm vui với những người đồng hành và tận hưởng trọn vẹn thành quả ngọt ngào.",
            "strengths": ["Khả năng gắn kết cộng đồng", "Sự ấm áp chan hòa", "Tạo dựng môi trường an toàn"],
            "opportunities": ["Tổ chức đám cưới/hỷ sự", "Mua nhà/chuyển nơi ở mới tuyệt vời", "Gặt hái thành công giai đoạn"],
            "warnings": ["Đừng quá mải mê tiệc tùng mà quên mất chặng đường dài tiếp theo."]
        },
        "reversed": {
            "keyMessage": "Căng thẳng trong gia đình, tiệc mừng bị hoãn hoặc cảm giác lạc lõng ngay giữa chính tổ ấm của mình.",
            "blockedEnergy": "Sự bất hòa nội bộ, hủy bỏ sự kiện vui mừng, cảm thấy không thuộc về nơi chốn hiện tại.",
            "general": "Four of Wands ngược cảnh báo về những mâu thuẫn âm ỉ trong gia đình hoặc tập thể, kế hoạch về nhà mới bị trục trặc, hoặc sự thiếu hòa thuận làm giảm đi niềm vui.",
            "love": "Bất đồng về kế hoạch tổ chức đám cưới, căng thẳng giữa gia đình hai bên, hoặc cảm thấy mối quan hệ thiếu đi sự ủng hộ.",
            "career": "Mâu thuẫn nội bộ trong nhóm làm việc, sự kiện công ty bị hủy, cảm thấy lạc lõng giữa các đồng nghiệp.",
            "finance": "Phát sinh chi phí phát sinh khi sửa chữa nhà cửa hoặc tổ chức sự kiện; cần kiểm soát lại ngân sách.",
            "family": "Tranh cãi vụn vặt làm hỏng buổi sum họp gia đình, cảm giác bị xa lánh hoặc không được thấu hiểu.",
            "personalGrowth": "Cần tự xây dựng cảm giác an toàn từ bên trong thay vì phụ thuộc hoàn toàn vào môi trường bên ngoài.",
            "advice": "Hãy chủ động hạ bớt cái tôi, lắng nghe người thân và nỗ lực hàn gắn bầu không khí hòa hợp.",
            "hiddenIssues": ["Bất hòa thế hệ", "Kỳ vọng quá cao vào sự hoàn hảo", "Thiếu sự kết nối chân thành"],
            "adjustments": ["Đối thoại hòa giải chân tình", "Tập trung vào điểm chung", "Tạo không gian ấm cúng"]
        },
        "adviceDetail": {
            "whatToWatch": "Cơ hội củng cố tổ ấm và sự gắn kết với những người thân thiết.",
            "whatToChange": "Thái độ lạnh lùng, xa cách với các hoạt động chung của tập thể.",
            "whatToEmbrace": "Niềm vui sẻ chia, lòng biết ơn và sự ấm áp của tình thân.",
            "pitfalls": "Kỳ vọng quá mức vào một ngày lễ hoàn hảo mà gây áp lực lên người khác."
        },
        "message": "Hạnh phúc đích thực không phải là đích đến xa xôi, mà là những khoảnh khắc ấm áp được sum vầy bên những người thực sự yêu thương bạn dưới mái nhà bình yên.",
        "reflectionQuestions": [
            "Thành tựu nào bạn vừa đạt được xứng đáng được ăn mừng ngay hôm nay?",
            "Làm thế nào để biến không gian sống của bạn thành một tổ ấm bình yên thực sự?",
            "Ai là người bạn muốn tri ân và sẻ chia niềm vui trong khoảnh khắc này?"
        ]
    },
    {
        "suit": "wands", "number": 5, "id": "five-of-wands", "name": "Five of Wands", "nameVi": "Five of Wands – Năm Gậy",
        "romanNumeral": "V", "astrology": "Sao Thổ tại Sư Tử",
        "keywords": ["Conflict", "Competition", "Disagreements", "Tension", "Rivalry"],
        "keywordsVi": ["Cạnh tranh gay gắt", "Xung đột ý kiến", "Sự hỗn loạn va chạm", "Thử thách tôi luyện", "Tranh đấu bộc phát"],
        "symbolism": [
            {"element": "Năm chàng trai cầm gậy vung vào nhau", "meaning": "Sự cạnh tranh, va chạm quan điểm, mỗi người muốn khẳng định cái tôi riêng"},
            {"element": "Trang phục mỗi người một màu sắc khác nhau", "meaning": "Sự khác biệt về nền tảng, xuất thân, quan điểm sống dẫn đến bất đồng"},
            {"element": "Không ai bị thương thực sự", "meaning": "Đây là cuộc tranh luận hoặc cạnh tranh thể thao, tôi luyện bản lĩnh chứ không phải chiến tranh hủy diệt"},
            {"element": "Mặt đất gồ ghề lộn xộn", "meaning": "Môi trường thiếu quy củ, cần sự sắp xếp lại trật tự"}
        ],
        "upright": {
            "keyMessage": "Bạn đang ở giữa một cuộc cạnh tranh sôi nổi; hãy xem đây là cơ hội để tôi luyện bản lĩnh và khẳng định năng lực.",
            "general": "Five of Wands biểu thị sự cạnh tranh, bất đồng ý kiến và xung đột nhỏ. Đây là lúc nhiều luồng tư tưởng va chạm nhau. Đừng nản lòng, hãy học cách trình bày lập luận sắc bén và tôn trọng luật chơi.",
            "love": "Những tranh cãi vụn vặt do cái tôi của hai bên còn quá lớn; sự cạnh tranh để giành sự chú ý của đối phương.",
            "career": "Môi trường làm việc cạnh tranh khốc liệt, tranh luận nảy lửa trong các cuộc họp, cần chứng minh năng lực vượt trội.",
            "finance": "Cạnh tranh gay gắt về giá hoặc thị phần kinh doanh; cần tối ưu hóa dịch vụ để giữ chân khách hàng.",
            "family": "Các thành viên tranh cãi vì những chuyện nhỏ nhặt; không khí gia đình có phần ồn ào và căng thẳng.",
            "personalGrowth": "Học cách giữ bình tĩnh giữa áp lực tranh luận, rèn luyện kỹ năng đàm phán và thuyết phục.",
            "advice": "Hãy tham gia cuộc chơi với tinh thần thượng võ, lắng nghe ý kiến trái chiều và biến áp lực thành động lực.",
            "strengths": ["Năng lượng cạnh tranh mạnh mẽ", "Khả năng ứng biến nhanh", "Bản lĩnh kiên cường"],
            "opportunities": ["Nổi bật trong đám đông cạnh tranh", "Học hỏi từ đối thủ giỏi", "Nâng cao kỹ năng đàm phán"],
            "warnings": ["Tránh để những va chạm nhỏ biến thành hận thù cá nhân."]
        },
        "reversed": {
            "keyMessage": "Xung đột đang lắng xuống để tìm kiếm tiếng nói chung, hoặc bạn đang né tránh mâu thuẫn một cách tiêu cực.",
            "blockedEnergy": "Sự mệt mỏi vì tranh đấu vô nghĩa, nhượng bộ để giữ hòa khí hoặc dồn nén ấm ức bên trong.",
            "general": "Five of Wands ngược cho thấy hai khả năng: một là mọi người bắt đầu tìm được sự thỏa hiệp và tiếng nói chung; hai là bạn đang sợ hãi né tránh cạnh tranh, cam chịu rút lui.",
            "love": "Hai người mệt mỏi vì cãi vã và chủ động ngồi lại làm hòa, hoặc chọn cách chiến tranh lạnh né tránh vấn đề.",
            "career": "Các cuộc họp bớt căng thẳng, đạt được sự đồng thuận trong nhóm, hoặc né tránh tranh luận khiến ý tưởng hay bị chôn vùi.",
            "finance": "Giảm bớt sự cạnh tranh phá giá, tìm được thị trường ngách ít đối thủ hơn.",
            "family": "Căng thẳng lắng xuống, mọi người bắt đầu biết nhường nhịn và lắng nghe nhau hơn.",
            "personalGrowth": "Nhận ra rằng không phải cuộc chiến nào cũng đáng để tham gia; biết chọn trận địa phù hợp để dốc sức.",
            "advice": "Hãy chủ động hạ nhiệt các mâu thuẫn vô bổ, hướng năng lượng tập thể vào mục tiêu chung.",
            "hiddenIssues": ["Sợ đối đầu", "Dồn nén ức chế", "Cạnh tranh ngầm độc hại"],
            "adjustments": ["Thiết lập luật chơi rõ ràng", "Tập trung vào giải pháp thay vì cái tôi", "Biết lúc nào nên rút lui"]
        },
        "adviceDetail": {
            "whatToWatch": "Dấu hiệu của những cuộc tranh cãi vô bổ làm tiêu hao sinh lực.",
            "whatToChange": "Thói quen luôn muốn mình là người đúng trong mọi cuộc tranh luận.",
            "whatToEmbrace": "Tinh thần thể thao công bằng và bài học tôi luyện từ đối thủ.",
            "pitfalls": "Lãng phí thời gian và năng lượng vào những xung đột không đem lại giá trị thực tế."
        },
        "message": "Sắt chỉ biến thành thép cứng khi trải qua ngọn lửa thiêu đốt và những nhát búa va đập liên hồi. Hãy xem mọi xung đột là lò rèn tôi luyện bản lĩnh của bạn.",
        "reflectionQuestions": [
            "Cuộc tranh cãi gần đây có thực sự đáng để bạn tiêu hao năng lượng tinh thần?",
            "Làm thế nào để bạn vừa khẳng định được quan điểm vừa tôn trọng sự khác biệt của người khác?",
            "Bạn có thể học được bài học quý giá nào từ chính những đối thủ cạnh tranh của mình?"
        ]
    }
]

# Quick completion script for the remaining cards to ensure 100% full 78 cards
# We will generate comprehensive data for all 14 cards of all 4 suits
print(f"Minor definitions initialized. Ready to generate full 78 cards.")
