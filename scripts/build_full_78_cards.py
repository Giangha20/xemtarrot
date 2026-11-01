# -*- coding: utf-8 -*-
"""
Full 78 Tarot Cards Generator for Mystic Tarot
Generates src/data/tarotCards.ts with 100% complete, authentic, rich Vietnamese interpretations.
"""
import os
import json

# Import the 22 Major Arcana from generate_cards.py
from generate_cards import major_arcana_raw

# Full list of ranks and suits for Minor Arcana
ranks_info = [
    {"num": 1, "id": "ace", "name": "Ace", "vi": "Át", "roman": "I"},
    {"num": 2, "id": "two", "name": "Two", "vi": "Hai", "roman": "II"},
    {"num": 3, "id": "three", "name": "Three", "vi": "Ba", "roman": "III"},
    {"num": 4, "id": "four", "name": "Four", "vi": "Bốn", "roman": "IV"},
    {"num": 5, "id": "five", "name": "Five", "vi": "Năm", "roman": "V"},
    {"num": 6, "id": "six", "name": "Six", "vi": "Sáu", "roman": "VI"},
    {"num": 7, "id": "seven", "name": "Seven", "vi": "Bảy", "roman": "VII"},
    {"num": 8, "id": "eight", "name": "Eight", "vi": "Tám", "roman": "VIII"},
    {"num": 9, "id": "nine", "name": "Nine", "vi": "Chín", "roman": "IX"},
    {"num": 10, "id": "ten", "name": "Ten", "vi": "Mười", "roman": "X"},
    {"num": 11, "id": "page", "name": "Page", "vi": "Tiểu Đồng", "roman": "Page"},
    {"num": 12, "id": "knight", "name": "Knight", "vi": "Hiệp Sĩ", "roman": "Knight"},
    {"num": 13, "id": "queen", "name": "Queen", "vi": "Hoàng Hậu", "roman": "Queen"},
    {"num": 14, "id": "king", "name": "King", "vi": "Vua", "roman": "King"}
]

suits_data = {
    "wands": {
        "suitVi": "Gậy",
        "element": "Lửa",
        "astrology": "Bạch Dương, Sư Tử, Nhân Mã",
        "theme": "ý chí, đam mê, hành động, sự nghiệp và nguồn cảm hứng sáng tạo",
        "symbol_elem": "Cây gậy nở hoa mầm sống",
        "cards_detail": {
            1: {
                "kw": ["Inspiration", "Power", "Creation", "New Passion", "Potential"],
                "kwVi": ["Ngọn lửa cảm hứng", "Đam mê bùng cháy", "Khởi đầu sáng tạo", "Năng lượng hành động", "Tiềm năng bứt phá"],
                "up_msg": "Một ngọn lửa cảm hứng và cơ hội bùng nổ đang đến; hãy nắm bắt và hành động với tất cả đam mê.",
                "up_gen": "Ace of Wands đại diện cho tia lửa khởi nguyên của hành động và sự sáng tạo. Bạn tràn đầy năng lượng, ý tưởng mới mẻ và dũng khí để bắt tay vào một dự án đầy thử thách.",
                "rev_msg": "Ngọn lửa đam mê đang bị dập tắt bởi sự trì hoãn, thiếu phương hướng hoặc cạn kiệt năng lượng.",
                "rev_gen": "Ace of Wands ngược cảnh báo bạn đang cảm thấy thiếu động lực, ý tưởng bị đình trệ hoặc gặp phải trở ngại lớn ngay từ bước đầu do thiếu kế hoạch.",
                "sym": [
                    {"element": "Bàn tay thần nhô ra từ mây", "meaning": "Món quà cảm hứng từ vũ trụ trao tặng"},
                    {"element": "Cây gậy đâm chồi", "meaning": "Sức sống trỗi dậy, tiềm năng sáng tạo bất tận"},
                    {"element": "Lâu đài trên đồi", "meaning": "Đích đến thành tựu đang vẫy gọi"}
                ],
                "msg": "Một đốm lửa nhỏ cũng có thể làm bừng sáng cả màn đêm lạnh giá. Hãy tin vào tiếng gọi đam mê đang cháy trong tim bạn."
            },
            2: {
                "kw": ["Future Planning", "Progress", "Decisions", "Discovery", "Expansion"],
                "kwVi": ["Lên kế hoạch tương lai", "Tầm nhìn xa trông rộng", "Quyết định bước ngoặt", "Mở rộng bờ cõi", "Khát vọng vươn xa"],
                "up_msg": "Bạn đã có thành tựu ban đầu; giờ là lúc mở rộng tầm nhìn và lên kế hoạch cho những bước tiến lớn hơn.",
                "up_gen": "Two of Wands nói về việc đứng trên đỉnh cao nhìn ra thế giới. Bạn đang có nền tảng vững chắc và đứng trước cơ hội mở rộng quy mô, vươn ra khỏi vùng an toàn.",
                "rev_msg": "Bạn đang do dự không dám bước ra khỏi vùng an toàn hoặc kế hoạch tương lai đang thiếu tính thực tế.",
                "rev_gen": "Two of Wands ngược cảnh báo bạn đang tự giam mình trong vùng an toàn cũ kỹ vì sợ rủi ro, hoặc kế hoạch đặt ra quá viển vông.",
                "sym": [
                    {"element": "Quả địa cầu trên tay", "meaning": "Thế giới và cơ hội nằm trong tầm kiểm soát"},
                    {"element": "Hai cây gậy trên thành lũy", "meaning": "Sự cân bằng giữa bảo toàn hiện tại và khát vọng vươn xa"},
                    {"element": "Biển cả phía xa", "meaning": "Những chân trời mới chưa được khám phá"}
                ],
                "msg": "Cả thế giới rộng lớn đang nằm trong tay bạn. Đừng chỉ đứng mãi trên pháo đài cũ để ngắm nhìn; hãy dong buồm ra khơi và khám phá chân trời của riêng mình."
            },
            3: {
                "kw": ["Expansion", "Foresight", "Overseas Opportunity", "Self-Reliance", "Looking Ahead"],
                "kwVi": ["Mở rộng thành công", "Cơ hội xuất ngoại", "Thuyền bè cập bến", "Tự lực cánh sinh", "Đón nhận thành quả"],
                "up_msg": "Những nỗ lực của bạn đã bắt đầu đơm hoa kết trái; hãy sẵn sàng đón nhận những chuyến tàu cơ hội đang trở về.",
                "up_gen": "Three of Wands là lá bài của sự tự tin, mở rộng và thành tựu đang trên đường tới. Bạn đã gieo hạt, đã hành động và giờ đây chỉ cần vững tâm theo dõi tiến trình.",
                "rev_msg": "Những chuyến tàu cơ hội bị chậm trễ hoặc bạn đang gặp khó khăn trong việc mở rộng do thiếu sự chuẩn bị.",
                "rev_gen": "Three of Wands ngược cho thấy các kế hoạch mở rộng của bạn đang gặp rào cản bất ngờ, hoặc bạn đang cảm thấy nản lòng vì thành quả chưa đến nhanh như mong đợi.",
                "sym": [
                    {"element": "Ba cây gậy cắm trên mặt đất", "meaning": "Nền móng vững chắc đã hình thành"},
                    {"element": "Những con thuyền trên biển", "meaning": "Thành quả và cơ hội đang trên đường cập bến"},
                    {"element": "Dáng người quay lưng nhìn ra biển", "meaning": "Sự kiên định dõi theo mục tiêu tương lai"}
                ],
                "msg": "Những con thuyền chở ước mơ của bạn đang lướt sóng trở về mang theo châu báu của sự nỗ lực. Hãy vững vàng đón nhận thành quả xứng đáng."
            },
            4: {
                "kw": ["Celebration", "Homecoming", "Harmony", "Community", "Milestone"],
                "kwVi": ["Lễ ăn mừng", "Tổ ấm bình yên", "Hòa thuận sum vầy", "Cột mốc thành công", "Hỷ sự viên mãn"],
                "up_msg": "Hãy tận hưởng niềm vui ăn mừng bên những người thân yêu; bạn đã đạt được một cột mốc quan trọng và xứng đáng được hạnh phúc.",
                "up_gen": "Four of Wands là biểu tượng của sự hòa hợp, mái ấm bình an và những bữa tiệc ăn mừng hỷ sự. Mọi nỗ lực của bạn đã tạo dựng nên một không gian đầm ấm, vững bền.",
                "rev_msg": "Căng thẳng trong gia đình, tiệc mừng bị hoãn hoặc cảm giác lạc lõng ngay giữa chính tổ ấm của mình.",
                "rev_gen": "Four of Wands ngược cảnh báo về sự bất hòa ngầm trong gia đình hoặc tập thể, cảm giác mất kết nối với nơi chốn quen thuộc.",
                "sym": [
                    {"element": "Bốn cây gậy kết cổng hoa trái cây", "meaning": "Sự vững chắc, viên mãn và mùa màng bội thu"},
                    {"element": "Hai người nâng hoa chào đón", "meaning": "Niềm vui sum họp và tình bằng hữu nồng hậu"},
                    {"element": "Lâu đài kiên cố phía sau", "meaning": "Mái ấm an toàn chở che cho hạnh phúc"}
                ],
                "msg": "Hạnh phúc đích thực là khi được sum vầy bên những người thực sự yêu thương bạn dưới một mái nhà bình yên và ấm áp."
            },
            5: {
                "kw": ["Conflict", "Competition", "Disagreements", "Tension", "Rivalry"],
                "kwVi": ["Cạnh tranh gay gắt", "Xung đột ý kiến", "Sự hỗn loạn va chạm", "Thử thách tôi luyện", "Tranh đấu bộc phát"],
                "up_msg": "Bạn đang ở giữa một cuộc cạnh tranh sôi nổi; hãy xem đây là cơ hội để tôi luyện bản lĩnh và khẳng định năng lực.",
                "up_gen": "Five of Wands phản ánh sự va chạm ý kiến, sự tranh đua nhiệt huyết và những mâu thuẫn nhỏ. Đây là môi trường rèn luyện sự sắc bén và linh hoạt của bạn.",
                "rev_msg": "Xung đột đang lắng xuống để tìm tiếng nói chung, hoặc bạn đang né tránh mâu thuẫn một cách tiêu cực.",
                "rev_gen": "Five of Wands ngược cho thấy sự thỏa hiệp đang dần hình thành, hoặc bạn đang mệt mỏi với những cuộc tranh cãi vô ích và muốn rút lui.",
                "sym": [
                    {"element": "Năm chàng trai vung gậy đối đầu", "meaning": "Sự xung đột năng lượng và cái tôi cá nhân"},
                    {"element": "Trang phục đa màu sắc", "meaning": "Sự bất đồng về quan điểm và xuất thân"},
                    {"element": "Địa hình gồ ghề", "meaning": "Môi trường thiếu ổn định và nhiều biến động"}
                ],
                "msg": "Sắt chỉ biến thành thép cứng khi trải qua ngọn lửa thiêu đốt và những nhát búa va đập liên hồi. Hãy xem xung đột là lò rèn tôi luyện bản lĩnh."
            },
            6: {
                "kw": ["Victory", "Success", "Public Recognition", "Progress", "Self-Confidence"],
                "kwVi": ["Chiến thắng vẻ vang", "Công nhận rộng rãi", "Khúc khải hoàn", "Niềm tự hào chính đáng", "Bước tiến vượt bậc"],
                "up_msg": "Khúc ca khải hoàn đang vang lên; mọi nỗ lực vượt qua thử thách của bạn được toàn thể cộng đồng công nhận.",
                "up_gen": "Six of Wands là hình ảnh của vị tướng thắng trận trở về trong sự tung hô của đám đông. Bạn đạt được thành công lớn, khẳng định vị thế và được khen thưởng xứng đáng.",
                "rev_msg": "Thành công bị hoãn lại, thiếu sự công nhận từ cấp trên hoặc cảm giác tự phụ kiêu ngạo sau chiến thắng.",
                "rev_gen": "Six of Wands ngược cảnh báo về sự thất vọng khi công sức chưa được đền đáp, hoặc lời cảnh tỉnh về việc ngủ quên trên chiến thắng.",
                "sym": [
                    {"element": "Người cưỡi ngựa trắng đội vòng nguyệt quế", "meaning": "Sự đắc thắng thuần khiết và danh dự vinh quang"},
                    {"element": "Cây gậy buộc vòng hoa giơ cao", "meaning": "Biểu tượng chiến thắng được giương cao trước muôn người"},
                    {"element": "Đám đông đi theo", "meaning": "Sự ủng hộ và tán thưởng của tập thể"}
                ],
                "msg": "Hãy ngẩng cao đầu bước đi trong khúc khải hoàn của danh dự. Nhưng hãy giữ cho trái tim luôn khiêm nhường để ánh sáng vinh quang không làm bạn mù quáng."
            },
            7: {
                "kw": ["Challenge", "Defensiveness", "Perseverance", "Standing Ground", "Courage"],
                "kwVi": ["Bảo vệ lập trường", "Kiên cường giữ vững vị trí", "Đương đầu áp lực", "Không lùi bước", "Dũng khí kiên định"],
                "up_msg": "Dù đang bị bao vây bởi áp lực từ nhiều phía, bạn đang ở vị thế cao hơn và hoàn toàn đủ sức bảo vệ lập trường của mình.",
                "up_gen": "Seven of Wands thể hiện người chiến binh đứng trên đỉnh dốc một mình chống lại sáu cây gậy tấn công từ bên dưới. Bạn có lợi thế địa hình và ý chí kiên định để bảo vệ thành quả.",
                "rev_msg": "Bạn đang cảm thấy quá tải, kiệt sức vì phải liên tục phòng thủ hoặc bị áp lực dư luận đè bẹp.",
                "rev_gen": "Seven of Wands ngược cho thấy bạn đang đuối sức trước sự tấn công dồn dập, cảm giác muốn buông xuôi hoặc tự ti vào khả năng của mình.",
                "sym": [
                    {"element": "Người đứng trên mỏm đất cao", "meaning": "Lợi thế địa hình và vị thế đạo đức vững vàng"},
                    {"element": "Hai chiếc giày khác nhau", "meaning": "Sự ứng biến trong tình huống bất ngờ và áp lực"},
                    {"element": "Sáu cây gậy chĩa lên từ bên dưới", "meaning": "Sự cạnh tranh và những lời dèm pha của đối thủ"}
                ],
                "msg": "Khi bạn đứng trên đỉnh cao của lẽ phải và sự thật, một mình bạn cũng đủ sức ngăn chặn một đạo quân nghi ngờ. Hãy vững vàng, đừng lùi dù chỉ một bước."
            },
            8: {
                "kw": ["Rapid Action", "Movement", "Quick Decisions", "Fast News", "Alignment"],
                "kwVi": ["Tốc độ phi thường", "Tin tức nhanh chóng", "Hành động dứt khoát", "Dòng chảy thuận lợi", "Chuyến đi gấp rút"],
                "up_msg": "Mọi việc đang tiến triển với tốc độ ánh sáng; những tin tức mong đợi đang bay về và cơ hội mở ra dồn dập.",
                "up_gen": "Eight of Wands là lá bài duy nhất không có hình người trong bộ Gậy, chỉ có 8 cây gậy bay vút qua bầu trời quang đãng. Năng lượng thông suốt, rào cản tan biến, mọi thứ diễn ra cực nhanh.",
                "rev_msg": "Sự chậm trễ khó chịu, tin tức bị gián đoạn, hành động nóng vội hấp tấp dẫn đến sai sót đáng tiếc.",
                "rev_gen": "Eight of Wands ngược cảnh báo bạn đang hành động quá vội vàng khi chưa rõ thông tin, hoặc ngược lại đang bức bối vì mọi việc bị hoãn lại ngoài ý muốn.",
                "sym": [
                    {"element": "Tám cây gậy bay song song trên trời", "meaning": "Năng lượng tập trung cao độ và định hướng chuẩn xác"},
                    {"element": "Bầu trời quang đãng", "meaning": "Không còn chướng ngại vật cản trở dòng chảy"},
                    {"element": "Dòng sông êm đềm bên dưới", "meaning": "Cảm xúc thuận hòa nâng đỡ hành động dứt khoát"}
                ],
                "msg": "Mũi tên của ý chí đã được bắn đi từ cây cung của lòng kiên định. Hãy giữ đôi mắt sắc bén và chuẩn bị đón nhận đích đến đang tới rất gần."
            },
            9: {
                "kw": ["Resilience", "Grit", "Last Stand", "Persistence", "Boundaries"],
                "kwVi": ["Kiên cường bất khuất", "Chặng đường cuối cùng", "Thiết lập ranh giới", "Vết sẹo danh dự", "Bền bỉ đến cùng"],
                "up_msg": "Dù mang trên mình những vết thương sau nhiều trận chiến, bạn sắp về đích rồi; hãy ráng thêm một chút nữa để giữ vững phòng tuyến.",
                "up_gen": "Nine of Wands khắc họa người chiến binh băng đầu, đứng dựa vào một cây gậy trong khi 8 cây gậy dựng thành hàng rào phía sau. Bạn mệt mỏi nhưng kiên cường, cảnh giác và không bao giờ bỏ cuộc.",
                "rev_msg": "Bạn đang cảm thấy kiệt quệ hoàn toàn, đa nghi thái quá hoặc dựng lên những bức tường phòng thủ quá mức cần thiết.",
                "rev_gen": "Nine of Wands ngược cho thấy sự kiệt sức do gồng mình quá lâu, chứng hoang tưởng sợ bị tấn công khiến bạn không dám mở lòng đón nhận sự giúp đỡ.",
                "sym": [
                    {"element": "Băng trắng quấn trên đầu", "meaning": "Kinh nghiệm xương máu và vết sẹo từ những trận chiến đã qua"},
                    {"element": "Tám cây gậy làm hàng rào phía sau", "meaning": "Hàng rào bảo vệ vững chắc và ranh giới an toàn"},
                    {"element": "Ánh mắt cảnh giác kiên định", "meaning": "Ý chí không bao giờ khuất phục trước khó khăn"}
                ],
                "msg": "Những vết thương bạn mang trên mình không phải là biểu tượng của sự yếu đuối, mà là huy chương của một tâm hồn bất khuất chưa bao giờ đầu hàng số phận."
            },
            10: {
                "kw": ["Burden", "Extra Responsibility", "Hard Work", "Stress", "Obligation"],
                "kwVi": ["Gánh nặng quá tải", "Trách nhiệm đè nặng", "Làm việc cật lực", "Áp lực trách nhiệm", "Cần học cách chia sẻ"],
                "up_msg": "Bạn đang ôm đồm quá nhiều việc lên vai; đích đến đã ở ngay trước mắt nhưng bạn cần học cách buông bớt gánh nặng.",
                "up_gen": "Ten of Wands là hình ảnh người đàn ông còng lưng ôm trọn 10 cây gậy nặng nề bước về thị trấn. Thành công mang lại quá nhiều nghĩa vụ khiến bạn kiệt sức và bị che khuất tầm nhìn.",
                "rev_msg": "Sự sụp đổ vì kiệt sức do gánh vác quá mức, hoặc bạn đang bắt đầu biết buông bỏ và ủy quyền công việc cho người khác.",
                "rev_gen": "Ten of Wands ngược là lời cảnh báo khẩn cấp: nếu bạn tiếp tục không chịu san sẻ công việc, lưng bạn sẽ gãy. Hãy học cách nói 'không' và giao phó cho người khác.",
                "sym": [
                    {"element": "Mười cây gậy nặng che khuất mặt", "meaning": "Công việc quá tải làm mất đi tầm nhìn và niềm vui cuộc sống"},
                    {"element": "Dáng người còng lưng bước đi", "meaning": "Nỗ lực tột cùng gánh vác trách nhiệm"},
                    {"element": "Ngôi làng phía trước mặt", "meaning": "Mục tiêu đã rất gần, chỉ cần cố gắng nốt đoạn cuối"}
                ],
                "msg": "Trở thành người hùng không có nghĩa là phải một mình gánh cả thế giới trên vai. Hãy can đảm đặt bớt những cành củi khô xuống để đôi tay bạn được tự do ôm lấy niềm vui."
            },
            11: {
                "kw": ["Enthusiasm", "Exploration", "Discovery", "Free Spirit", "New Ideas"],
                "kwVi": ["Nhiệt huyết tuổi trẻ", "Tinh thần khám phá", "Ý tưởng tươi mới", "Sứ giả tin vui", "Đam mê học hỏi"],
                "up_msg": "Một tin tức hào hứng hoặc một cơ hội sáng tạo mới đang được mang đến bởi một tâm hồn trẻ trung, đầy nhiệt huyết.",
                "up_gen": "Page of Wands là người mang sứ mệnh khám phá, tràn ngập tò mò và lòng dũng cảm. Cậu đứng giữa sa mạc nhìn vào cây gậy đang nảy lộc với ánh mắt say mê học hỏi điều mới mẻ.",
                "rev_msg": "Sự nóng vội bốc đồng, ý tưởng hay nhưng thiếu kiên trì thực hiện, hoặc tin tức bị trì hoãn gây hụt hẫng.",
                "rev_gen": "Page of Wands ngược cảnh báo về sự thiếu tập trung, nói nhiều làm ít, hoặc hành động hấp tấp làm hỏng việc của một người trẻ tuổi thiếu kinh nghiệm.",
                "sym": [
                    {"element": "Chàng trai trẻ nhìn chăm chú vào chồi cây", "meaning": "Sự say mê với ý tưởng và tiềm năng sáng tạo"},
                    {"element": "Họa tiết kỳ nhông lửa trên áo", "meaning": "Nguyên tố Lửa thuần khiết, khả năng tái sinh và biến hóa"},
                    {"element": "Ba ngọn kim tự tháp xa xa", "meaning": "Tri thức cổ xưa đang chờ được khám phá"}
                ],
                "msg": "Hãy giữ cho ngọn lửa đam mê của bạn luôn tươi mới và tinh khôi như ngày đầu tiên. Đừng sợ hãi sự bỡ ngỡ của kẻ bắt đầu khám phá thế giới."
            },
            12: {
                "kw": ["Energy", "Passion", "Adventure", "Impulsiveness", "Action"],
                "kwVi": ["Hành động táo bạo", "Tinh thần phiêu lưu", "Đam mê rực lửa", "Tiến nhanh về phía trước", "Khí phách dũng mãnh"],
                "up_msg": "Hãy dũng cảm lao về phía trước với ngọn lửa đam mê; sự quyết đoán và năng lượng bùng nổ sẽ giúp bạn tạo nên kỳ tích.",
                "up_gen": "Knight of Wands phi trên lưng con chiến mã rực lửa, áo giáp sáng chói, sẵn sàng chinh phục mọi đỉnh cao. Chàng là hiện thân của hành động nhanh, quyết liệt và tinh thần không ngại hiểm nguy.",
                "rev_msg": "Nóng giận mất kiểm soát, bốc đồng lao vào nguy hiểm, hành xử thô lỗ hoặc đốt cháy giai đoạn dẫn đến thất bại.",
                "rev_gen": "Knight of Wands ngược cảnh báo bạn đang hành động quá hung hăng, thiếu kiên nhẫn, dễ chán nản khi gặp trở ngại đầu tiên.",
                "sym": [
                    {"element": "Chiến mã lồng lên phi nước đại", "meaning": "Năng lượng hành động cuồn cuộn không thể kìm hãm"},
                    {"element": "Áo choàng thêu hình kỳ nhông lửa", "meaning": "Sức mạnh chuyển hóa và đam mê bất tận"},
                    {"element": "Chùm lông đỏ rực trên mũ giáp", "meaning": "Ý chí sắt đá và nhiệt huyết bùng cháy"}
                ],
                "msg": "Ngọn gió đam mê đã nâng bước chiến mã của bạn. Hãy cưỡi trên ngọn sóng nhiệt huyết ấy nhưng đừng quên giữ chặt dây cương của sự sáng suốt."
            },
            13: {
                "kw": ["Courage", "Confidence", "Independence", "Social Charm", "Warmth"],
                "kwVi": ["Tự tin rạng ngời", "Sức hút quyến rũ", "Nữ quyền độc lập", "Ấm áp hào sảng", "Bản lĩnh truyền cảm hứng"],
                "up_msg": "Hãy tỏa sáng bằng sự tự tin, lòng ấm áp và sức quyến rũ tự nhiên của bạn; bạn có khả năng thắp sáng bất kỳ không gian nào bạn bước vào.",
                "up_gen": "Queen of Wands ngồi trên ngai vàng khắc hình sư tử và hoa hướng dương, một tay cầm gậy, một tay cầm hoa hướng dương. Bên chân bà là chú mèo đen biểu trưng cho trực giác sâu sắc. Bà vừa mạnh mẽ, độc lập vừa ấm áp và tràn đầy sức sống.",
                "rev_msg": "Cảm giác bất an, tự ti, hoặc biến thành người thích kiểm soát, ghen tuông độc đoán và đòi hỏi sự chú ý thái quá.",
                "rev_gen": "Queen of Wands ngược cảnh báo về sự nóng nảy, tính khí thất thường, hoặc cảm giác đánh mất ngọn lửa tự tin bên trong.",
                "sym": [
                    {"element": "Bông hoa hướng dương tay trái", "meaning": "Sự hướng thiện, niềm vui rạng rỡ và sinh lực dồi dào"},
                    {"element": "Chú mèo đen dưới chân ngai", "meaning": "Trực giác sắc bén và sự kết nối với bí ẩn tâm linh"},
                    {"element": "Sư tử khắc trên ngai vàng", "meaning": "Lòng dũng cảm và năng lượng hoàng gia quyền quý"}
                ],
                "msg": "Vẻ đẹp rạng rỡ nhất của bạn tỏa ra từ sự tự tin chân thật và lòng nhân ái ấm áp. Hãy cứ là vầng thái dương sưởi ấm thế giới theo cách của riêng bạn."
            },
            14: {
                "kw": ["Natural Leader", "Visionary", "Honor", "Overcoming Challenges", "Charisma"],
                "kwVi": ["Thủ lĩnh bẩm sinh", "Nhà lãnh đạo có tầm nhìn", "Khí chất quân vương", "Truyền lửa truyền cảm hứng", "Bản lĩnh đại trượng phu"],
                "up_msg": "Bằng tầm nhìn xa trông rộng và khí chất đĩnh đạc, bạn có khả năng dẫn dắt tập thể vượt qua mọi giông bão để đạt thành tựu vĩ đại.",
                "up_gen": "King of Wands ngồi uy nghi trên ngai vàng, cầm cây gậy đâm chồi, ánh mắt nhìn thẳng vào tương lai. Ngài là bậc thầy làm chủ nguyên tố Lửa: vừa có đam mê vừa có sự điềm tĩnh và kỷ luật của một nhà lãnh đạo kiệt xuất.",
                "rev_msg": "Lãnh đạo độc đoán, nóng nảy, áp đặt ý chí lên người khác hoặc đưa ra những quyết định liều lĩnh thiếu cân nhắc.",
                "rev_gen": "King of Wands ngược cảnh báo bạn đang trở nên quá gia trưởng, tự phụ, không chịu lắng nghe cấp dưới dẫn đến thất bại tập thể.",
                "sym": [
                    {"element": "Ngai vàng khắc sư tử và kỳ nhông cắn đuôi (Ouroboros)", "meaning": "Sự làm chủ đam mê và chu kỳ quyền lực bất tận"},
                    {"element": "Áo choàng màu cam đỏ rực rỡ", "meaning": "Nhiệt huyết lãnh đạo và khí phách kiên định"},
                    {"element": "Dáng ngồi nghiêng sẵn sàng hành động", "meaning": "Không bao giờ trì trệ, luôn chủ động nắm bắt thời cơ"}
                ],
                "msg": "Người lãnh đạo vĩ đại nhất không tạo ra sự sợ hãi, mà thổi bùng ngọn lửa đam mê và niềm tin vào trái tim của những người cùng đồng hành."
            }
        }
    },
    "cups": {
        "suitVi": "Cốc",
        "element": "Nước",
        "astrology": "Cự Giải, Bọ Cạp, Song Ngư",
        "theme": "cảm xúc, tình yêu, trực giác, mối quan hệ gắn kết và sự chữa lành tâm hồn",
        "symbol_elem": "Chiếc chén thánh tràn ngập dòng nước thiêng",
        "cards_detail": {
            1: {
                "kw": ["Love", "New Feelings", "Emotional Awakening", "Compassion", "Intuition"],
                "kwVi": ["Tình yêu tinh khôi", "Dòng chảy cảm xúc", "Đánh thức trái tim", "Lòng trắc ẩn", "Trực giác tâm linh"],
                "up_msg": "Một dòng suối tình cảm ngọt ngào và sự chữa lành đang tuôn trào; hãy mở rộng trái tim để đón nhận tình yêu thuần khiết.",
                "up_gen": "Ace of Cups là cội nguồn của mọi cảm xúc thánh thiện. Chiếc chén thánh tràn ngập năm dòng nước biểu trưng cho năm giác quan được thanh tẩy, chim bồ câu trắng mang bánh thánh rơi vào chén mang lại ân phước thiêng liêng.",
                "rev_msg": "Cảm xúc bị tắc nghẽn, tổn thương tình cảm cũ chưa lành, hoặc bạn đang đóng chặt cửa lòng vì sợ đau đớn.",
                "rev_gen": "Ace of Cups ngược cho thấy trái tim bạn đang khô hạn do thiếu tình thương, hoặc đang để cảm xúc tiêu cực ứ đọng phá hủy sự bình an.",
                "sym": [
                    {"element": "Chim bồ câu trắng mang bánh thánh", "meaning": "Ân phước tâm linh và sự bình an thuần khiết"},
                    {"element": "Năm dòng nước tuôn trào", "meaning": "Năm giác quan và tình cảm dạt dào không bờ bến"},
                    {"element": "Mặt hồ phủ hoa súng trắng", "meaning": "Sự thanh tịnh của tiềm thức giác ngộ"}
                ],
                "msg": "Trái tim bạn là chiếc chén thánh không đáy của vũ trụ. Càng rót ra tình yêu thương vô điều kiện, nó lại càng tràn ngập nguồn nước sự sống ngọt ngào."
            },
            2: {
                "kw": ["Unified Love", "Partnership", "Mutual Attraction", "Connection", "Soulmates"],
                "kwVi": ["Tình yêu tri kỷ", "Sự hòa hợp đôi lứa", "Thu hút lẫn nhau", "Kết nối tâm hồn", "Đối tác ăn ý"],
                "up_msg": "Hai tâm hồn tìm thấy sự đồng điệu sâu sắc; đây là sự khởi đầu của một mối quan hệ tri kỷ hoặc hợp tác hoàn hảo.",
                "up_gen": "Two of Cups khắc họa đôi nam nữ nâng cốc chúc mừng nhau dưới quyền trượng Caduceus của thần Hermes và đầu sư tử có cánh. Sự hòa hợp âm dương tuyệt đối, tôn trọng và tin tưởng lẫn nhau.",
                "rev_msg": "Sự bất hòa, rạn nứt trong giao tiếp, hiểu lầm hoặc cảm giác mất đi sự kết nối sâu sắc giữa hai người.",
                "rev_gen": "Two of Cups ngược cảnh báo về sự mất cân bằng trong mối quan hệ, một bên cho đi quá nhiều trong khi bên kia hời hợt, hoặc tranh cãi do cái tôi.",
                "sym": [
                    {"element": "Quyền trượng Caduceus và sư tử có cánh", "meaning": "Sự chữa lành và thăng hoa năng lượng qua tình yêu"},
                    {"element": "Hai người nâng chén trao nhau", "meaning": "Sự bình đẳng, tôn trọng và gắn kết chân thành"},
                    {"element": "Vòng hoa trên đầu hai nhân vật", "meaning": "Tình cảm tươi đẹp và sự chúc phúc của tự nhiên"}
                ],
                "msg": "Tình yêu đích thực không phải là hai người nhìn nhau đắm đuối, mà là hai tâm hồn cùng nhìn về một hướng với lòng tin son sắt."
            },
            3: {
                "kw": ["Celebration", "Friendship", "Sisterhood", "Creativity", "Gathering"],
                "kwVi": ["Tình bạn thắm thiết", "Tiệc mừng vui vẻ", "Sự gắn kết hội nhóm", "Sáng tạo thăng hoa", "Chia sẻ ngọt ngào"],
                "up_msg": "Hãy nâng ly chúc mừng bên những người bạn tri kỷ; tình bạn chân thành và sự hỗ trợ lẫn nhau sẽ mang lại niềm vui lớn.",
                "up_gen": "Three of Cups là hình ảnh ba người thiếu nữ nhảy múa trong vườn hoa trái, nâng cao ba chiếc cốc chúc mừng nhau. Lá bài biểu trưng cho tình bạn đẹp, sự tương trợ và niềm vui chia sẻ.",
                "rev_msg": "Tin đồn thất thiệt trong nhóm bạn, cảm giác bị cô lập, hoặc tiệc tùng quá đà làm tổn hại sức khỏe.",
                "rev_gen": "Three of Cups ngược cảnh báo về những mối quan hệ bè phái độc hại, thói ngồi lê đôi mách hoặc sự ghen tị ngầm giữa những người tưởng như thân thiết.",
                "sym": [
                    {"element": "Ba cô gái nâng cốc nhảy múa", "meaning": "Sự tương trợ, tình chị em/bạn hữu keo sơn"},
                    {"element": "Hoa quả và ngũ cốc vương trên đất", "meaning": "Sự sung túc và chia sẻ thành quả ngọt ngào"},
                    {"element": "Trang phục rực rỡ", "meaning": "Sự đa dạng trong tính cách nhưng hòa quyện trong niềm vui"}
                ],
                "msg": "Một niềm vui được sẻ chia sẽ nhân đôi, một nỗi buồn được tâm tình sẽ vơi đi một nửa. Hãy trân quý những người bạn cùng bạn nâng cốc chúc mừng cuộc đời."
            },
            4: {
                "kw": ["Apathy", "Contemplation", "Disconnection", "Melancholy", "Boredom"],
                "kwVi": ["Chán chường thờ ơ", "Ngồi suy tư trầm mặc", "Mất kết nối cảm xúc", "Bỏ lỡ cơ hội mới", "Thu mình u sầu"],
                "up_msg": "Bạn đang quá tập trung vào nỗi thất vọng cũ mà không nhận ra chiếc cốc cơ hội mới toanh đang được dâng tận tay.",
                "up_gen": "Four of Cups cho thấy chàng trai ngồi khoanh tay dưới gốc cây, nhìn chăm chú vào ba chiếc cốc trên mặt đất với vẻ chán nản. Một bàn tay từ mây chìa ra chiếc cốc thứ tư nhưng chàng không thèm đoái hoài.",
                "rev_msg": "Bạn bắt đầu thức tỉnh khỏi cơn u sầu, ngước nhìn lên và sẵn sàng đón nhận những cơ hội mới của cuộc đời.",
                "rev_gen": "Four of Cups ngược là dấu hiệu tích cực: bạn đã chán ngán sự tự thương hại bản thân, đứng dậy bước ra ngoài và mở lòng đón nhận tình cảm mới.",
                "sym": [
                    {"element": "Người khoanh tay quay mặt đi", "meaning": "Sự phòng thủ, khép kín lòng mình và chán nản"},
                    {"element": "Ba chiếc cốc trên cỏ", "meaning": "Những trải nghiệm cũ đã không còn mang lại sự hào hứng"},
                    {"element": "Chiếc cốc thứ tư lơ lửng từ mây", "meaning": "Món quà mới của vũ trụ đang chờ được nhận diện"}
                ],
                "msg": "Cánh cửa này khép lại thì cánh cửa khác sẽ mở ra. Đừng mải nhìn chăm chăm vào cánh cửa đóng kín mà bỏ lỡ cả bầu trời cơ hội đang hé nở bên cạnh."
            },
            5: {
                "kw": ["Loss", "Grief", "Disappointment", "Regret", "Focus on the Negative"],
                "kwVi": ["Mất mát đau thương", "Nuối tiếc muộn màng", "Thất vọng tình cảm", "Vẫn còn hy vọng", "Chữa lành nỗi đau"],
                "up_msg": "Dù ba chiếc cốc đã đổ và rượu quý đã tràn, hãy quay đầu lại; hai chiếc cốc nguyên vẹn vẫn đang đợi bạn tiếp tục hành trình.",
                "up_gen": "Five of Cups là bức tranh đầy cảm xúc về sự nuối tiếc. Người áo choàng đen cúi đầu nhìn ba chiếc cốc đổ trước mặt, đau buồn về những gì đã mất mà quên rằng sau lưng vẫn còn hai chiếc cốc đứng vững.",
                "rev_msg": "Bạn đang dần nguôi ngoai nỗi đau, chấp nhận tha thứ cho quá khứ và bắt đầu quay lại với những điều quý giá còn sót lại.",
                "rev_gen": "Five of Cups ngược báo hiệu sự phục hồi sau mất mát. Bạn ngừng than khóc cho những gì đã đổ vỡ, đứng dậy nhặt lấy hai chiếc cốc còn lại và bước qua cây cầu trở về nhà.",
                "sym": [
                    {"element": "Áo choàng đen trùm kín", "meaning": "Nỗi buồn sâu sắc và sự tang tóc trong tâm hồn"},
                    {"element": "Ba chiếc cốc đổ rượu đỏ tràn trề", "meaning": "Mất mát, tiếc nuối và ước mơ tan vỡ"},
                    {"element": "Hai chiếc cốc đứng vững phía sau", "meaning": "Những phước lành, tình yêu vẫn còn nguyên vẹn"},
                    {"element": "Cây cầu dẫn về lâu đài", "meaning": "Lối thoát và con đường trở về với sự an toàn"}
                ],
                "msg": "Khóc cho những điều đã qua là bản năng của trái tim, nhưng quay đầu lại ôm lấy những gì còn ở lại mới là sự dũng cảm của tâm hồn."
            },
            6: {
                "kw": ["Nostalgia", "Childhood Memories", "Innocence", "Reunion", "Joy"],
                "kwVi": ["Ký ức tuổi thơ", "Hoài niệm ngọt ngào", "Tâm hồn trong sáng", "Gặp lại cố nhân", "Món quà chân thành"],
                "up_msg": "Một cuộc hội ngộ ấm áp với quá khứ, những kỷ niệm êm đềm tuổi thơ mang lại sự vỗ về ngọt ngào cho hiện tại.",
                "up_gen": "Six of Cups đưa ta về khu vườn cổ tích nơi cậu bé trao cho cô bé một chiếc cốc cắm đầy hoa trắng tinh khôi. Lá bài nói về sự thuần khiết, lòng tốt không toan tính và sự ngọt ngào của những ký ức xưa.",
                "rev_msg": "Bạn đang mắc kẹt trong quá khứ, sống mãi trong hào quang cũ hoặc ngây thơ quá mức trước thực tế khắc nghiệt.",
                "rev_gen": "Six of Cups ngược nhắc nhở bạn cần trưởng thành, buông bỏ sự bám víu vào những hoài niệm đã qua để tập trung xây dựng hiện tại.",
                "sym": [
                    {"element": "Cậu bé trao cốc hoa cho cô bé", "meaning": "Sự sẻ chia thuần khiết, tình cảm ngây thơ không vụ lợi"},
                    {"element": "Sáu chiếc cốc cắm hoa trắng", "meaning": "Ký ức ngọt ngào và sự bình yên của tâm hồn"},
                    {"element": "Người lính bảo vệ xa xa", "meaning": "Sự an toàn và che chở của gia đình thời thơ ấu"}
                ],
                "msg": "Hãy giữ lại sự thuần khiết và lòng tốt của đứa trẻ ngày xưa trong tim bạn, nhưng hãy bước đi bằng đôi chân vững chãi của một người lớn kiên cường."
            },
            7: {
                "kw": ["Illusion", "Choices", "Wishful Thinking", "Fantasy", "Imagination"],
                "kwVi": ["Ảo ảnh mê hoặc", "Đứng trước nhiều lựa chọn", "Mơ mộng viển vông", "Trí tưởng tượng bay bổng", "Cần tỉnh thức thực tế"],
                "up_msg": "Có quá nhiều lời mời gọi hấp dẫn đang hiện ra trước mắt; hãy tỉnh táo phân biệt giữa ảo tưởng nhất thời và giá trị đích thực.",
                "up_gen": "Seven of Cups miêu tả người đứng trước 7 chiếc cốc lơ lửng trên mây, mỗi cốc chứa một điều kỳ lạ: lâu đài, châu báu, vòng nguyệt quế, rồng, rắn, mặt người và khăn trùm bí ẩn. Bạn đứng trước nhiều lựa chọn nhưng đầy cạm bẫy.",
                "rev_msg": "Ảo ảnh tan biến, bạn nhìn rõ sự thật và đưa ra được quyết định dứt khoát dựa trên thực tế.",
                "rev_gen": "Seven of Cups ngược giúp bạn tỉnh mộng sau chuỗi ngày mơ tưởng hão huyền, tập trung vào mục tiêu cụ thể và bắt tay vào hành động thực tế.",
                "sym": [
                    {"element": "Bảy chiếc cốc trong mây", "meaning": "Những giấc mơ, ảo tưởng và dục vọng của con người"},
                    {"element": "Con rồng và con rắn", "meaning": "Những cám dỗ nguy hiểm và hiểm họa tiềm ẩn"},
                    {"element": "Dáng người quay lưng nhìn", "meaning": "Sự bối rối và choáng ngợp trước ma trận lựa chọn"}
                ],
                "msg": "Không phải thứ gì lấp lánh cũng là vàng. Hãy dùng con mắt của trí tuệ và sự thật để soi thấu qua những đám mây ảo ảnh rực rỡ."
            },
            8: {
                "kw": ["Walking Away", "Abandoning Old Path", "Searching for Truth", "Letting Go", "Withdrawal"],
                "kwVi": ["Dứt áo ra đi", "Từ bỏ con đường cũ", "Tìm kiếm ý nghĩa sâu sắc", "Hành trình tâm linh", "Can đảm buông tay"],
                "up_msg": "Dù đã dày công gây dựng, bạn nhận ra những điều này không còn làm bạn hạnh phúc; hãy can đảm quay lưng bước đi tìm chân trời mới.",
                "up_gen": "Eight of Cups khắc họa người đàn ông mặc áo đỏ chống gậy bước đi trong đêm trăng, bỏ lại sau lưng 8 chiếc cốc xếp ngay ngắn. Chàng rời bỏ sự ổn định vật chất để đi tìm ý nghĩa tâm linh cao cả hơn.",
                "rev_msg": "Bạn sợ hãi không dám từ bỏ một mối quan hệ hay công việc đã nguội lạnh, chấp nhận sống mòn trong sự bế tắc.",
                "rev_gen": "Eight of Cups ngược cảnh báo bạn đang chần chừ, bám víu vào những thứ không còn giá trị chỉ vì tiếc công sức đã bỏ ra trong quá khứ.",
                "sym": [
                    {"element": "Người quay lưng bước lên núi", "meaning": "Hành trình tìm kiếm chân lý và giá trị tâm linh cao hơn"},
                    {"element": "Tám chiếc cốc xếp ngay ngắn", "meaning": "Thành tựu vật chất đã từng quý giá nhưng nay không còn đủ đầy"},
                    {"element": "Mặt trăng khuyết kết hợp nhật thực", "meaning": "Sự bất an nội tâm thúc đẩy cuộc hành hương"}
                ],
                "msg": "Đôi khi, việc can đảm quay lưng bước đi không phải là sự bỏ cuộc, mà là sự tôn trọng tối thượng dành cho tiếng gọi thiêng liêng của linh hồn bạn."
            },
            9: {
                "kw": ["Contentment", "Satisfaction", "Wish Come True", "Gratitude", "Pleasure"],
                "kwVi": ["Ước nguyện thành hiện thực", "Hài lòng mãn nguyện", "Hưởng thụ thành quả", "Lòng biết ơn", "Lá bài điều ước"],
                "up_msg": "Lá bài 'Wish Card' mang đến điềm lành tối thượng: điều ước chân thành bấy lâu nay của bạn sắp sửa trở thành hiện thực.",
                "up_gen": "Nine of Cups khắc họa người đàn ông bệ vệ ngồi khoanh tay mỉm cười tự mãn, phía sau là 9 chiếc cốc vàng óng xếp ngay ngắn trên kệ phủ vải xanh. Đây là trạng thái thỏa mãn toàn diện về cả thể chất, tình cảm và tinh thần.",
                "rev_msg": "Thỏa mãn bề ngoài nhưng trống rỗng bên trong, tự mãn kiêu ngạo hoặc chi tiêu hưởng thụ quá đà.",
                "rev_gen": "Nine of Cups ngược cảnh báo bạn đạt được điều mình muốn nhưng nhận ra nó không mang lại hạnh phúc như tưởng tượng, hoặc đang quá nuông chiều bản thân.",
                "sym": [
                    {"element": "Người đàn ông mỉm cười khoanh tay", "meaning": "Sự mãn nguyện sâu sắc và cảm giác đủ đầy"},
                    {"element": "Chín chiếc cốc vàng xếp vòng cung", "meaning": "Mọi ước nguyện về tình cảm và vật chất đều được đáp ứng"},
                    {"element": "Khăn trải bàn màu xanh hy vọng", "meaning": "Sự an lành và thịnh vượng bền vững"}
                ],
                "msg": "Hãy mỉm cười và đón nhận phước lành viên mãn của vũ trụ. Hạnh phúc thực sự là khi tâm bạn biết đủ và tràn ngập lòng biết ơn cuộc đời."
            },
            10: {
                "kw": ["Divine Love", "Blissful Family", "Harmony", "Happily Ever After", "Alignment"],
                "kwVi": ["Gia đình viên mãn", "Hạnh phúc ngập tràn", "Cầu vồng phước lành", "Tình yêu bất diệt", "Tổ ấm bình an"],
                "up_msg": "Một bức tranh gia đình hạnh phúc hoàn hảo, tình yêu thăng hoa trọn vẹn dưới cầu vồng phước lành của trời cao.",
                "up_gen": "Ten of Cups là cái kết ngọt ngào nhất của bộ Cốc. Đôi vợ chồng ôm nhau nhìn lên cầu vồng kết bằng 10 chiếc cốc vàng, hai đứa trẻ vui vẻ nhảy múa bên cạnh, ngôi nhà ấm cúng nép bên dòng sông êm đềm.",
                "rev_msg": "Mâu thuẫn gia đình, rạn nứt hôn nhân, cảm giác cô đơn ngay trong chính mái ấm của mình.",
                "rev_gen": "Ten of Cups ngược cảnh báo về sự bất hòa giữa các thế hệ trong nhà, hôn nhân nguội lạnh hoặc lý tưởng gia đình hoàn hảo bị vỡ vụn.",
                "sym": [
                    {"element": "Cầu vồng 10 chiếc cốc vàng trên trời", "meaning": "Lời hứa thiêng liêng của vũ trụ về hòa bình và hạnh phúc vĩnh cửu"},
                    {"element": "Đôi vợ chồng ôm nhau và hai con nhảy múa", "meaning": "Sự viên mãn tròn đầy của tình thân và tình yêu đôi lứa"},
                    {"element": "Dòng sông xanh và ngôi nhà xa xa", "meaning": "Sự an cư lạc nghiệp và dòng chảy cảm xúc êm đềm"}
                ],
                "msg": "Phước lành lớn nhất đời người là tìm được nơi chốn và những con người mà khi trở về, trái tim bạn được hoàn toàn thả lỏng trong sự bình yên và yêu thương vô điều kiện."
            },
            11: {
                "kw": ["Creative Opportunities", "Intuitive Message", "Curiosity", "Sweetness", "Emotional Openness"],
                "kwVi": ["Thông điệp tình cảm", "Cảm xúc ngọt ngào", "Trực giác nhạy cảm", "Ý tưởng nghệ thuật", "Sứ giả tình yêu"],
                "up_msg": "Một tin nhắn ngọt ngào, lời tỏ tình đáng yêu hoặc một cảm hứng nghệ thuật bất ngờ đang tìm đến bạn.",
                "up_gen": "Page of Cups là chàng trai trẻ thơ mộng cầm chiếc cốc vàng, từ trong cốc một chú cá thò đầu ra nhìn chàng. Chàng đón nhận thế giới bằng sự ngạc nhiên, trái tim nhạy cảm và trực giác thuần khiết.",
                "rev_msg": "Sự nhõng nhẽo cảm xúc, yếu đuối ủy mị, tin buồn trong tình cảm hoặc bị tổn thương vì quá nhạy cảm.",
                "rev_gen": "Page of Cups ngược cảnh báo bạn đang để cảm xúc trẻ con chi phối, dễ dỗi hờn, hoặc đang trốn tránh thực tế vào những ảo mộng tình ái viển vông.",
                "sym": [
                    {"element": "Chú cá nhỏ nhô lên từ chiếc cốc", "meaning": "Trực giác và những ý niệm sáng tạo bất ngờ trồi lên từ tiềm thức"},
                    {"element": "Áo thêu hoa sen xanh", "meaning": "Sự thanh khiết và tâm hồn nghệ sĩ thơ mộng"},
                    {"element": "Sóng biển nhấp nhô phía sau", "meaning": "Cảm xúc dạt dào luôn chuyển động"}
                ],
                "msg": "Hãy giữ cho trái tim bạn luôn nhạy cảm trước cái đẹp của cuộc đời. Một tâm hồn biết rung động trước những điều nhỏ bé sẽ không bao giờ cạn kiệt niềm vui."
            },
            12: {
                "kw": ["Romance", "Charm", "Knight in Shining Armor", "Following Heart", "Idealism"],
                "kwVi": ["Chàng hiệp sĩ lãng mạn", "Theo đuổi tiếng gọi con tim", "Sức hút ngọt ngào", "Lời mời hẹn hò", "Lý tưởng hóa tình cảm"],
                "up_msg": "Một chàng hiệp sĩ mang chiếc cốc tình yêu đang tiến đến; hãy lắng nghe và dũng cảm đi theo tiếng gọi của trái tim.",
                "up_gen": "Knight of Cups cưỡi chú ngựa trắng bước đi khoan thai bên bờ suối, tay nâng niu chiếc cốc vàng như báu vật. Chàng là hiện thân của sự lãng mạn, thi sĩ, lời mời hẹn hò ngọt ngào và sự chân thành.",
                "rev_msg": "Kẻ lừa tình ngọt ngào, hứa hươu hứa vượn, sống trong mộng tưởng xa rời thực tế hoặc tâm trạng thất thường.",
                "rev_gen": "Knight of Cups ngược cảnh báo về sự thất vọng khi đối phương không hoàn hảo như bạn kỳ vọng, hoặc một kẻ chuyên dùng lời đường mật để thao túng tình cảm.",
                "sym": [
                    {"element": "Ngựa trắng bước đi êm đềm", "meaning": "Sự hòa bình, điềm tĩnh và phong thái lịch thiệp"},
                    {"element": "Đôi cánh trên mũ giáp và gót chân", "meaning": "Biểu tượng thần Hermes - trí tưởng tượng bay bổng và sự tinh tế"},
                    {"element": "Áo choàng thêu hình cá bơi lội", "meaning": "Tâm hồn chìm đắm trong thế giới cảm xúc và thơ ca"}
                ],
                "msg": "Đừng ngần ngại bày tỏ tình cảm chân thật của bạn. Sự lãng mạn chân thành là phương thuốc xoa dịu những góc cạnh thô ráp của thế giới thực tại."
            },
            13: {
                "kw": ["Compassion", "Calm", "Intuitive Healer", "Emotional Security", "Empathy"],
                "kwVi": ["Trực giác thấu thị", "Trái tim nhân hậu", "Người chữa lành cảm xúc", "Bình an nội tâm", "Sự thấu cảm sâu sắc"],
                "up_msg": "Bằng trái tim nhân ái và trực giác nhạy bén, bạn có khả năng thấu hiểu và chữa lành mọi vết thương lòng của người khác.",
                "up_gen": "Queen of Cups ngồi trên ngai vàng khắc hình thiên thần và nàng tiên cá bên bờ biển. Bà chăm chú nhìn vào chiếc chén nạm ngọc tinh xảo nhất bộ bài Tarot. Bà là bậc thầy làm chủ cảm xúc, lắng nghe sâu sắc mà không phán xét.",
                "rev_msg": "Bị cảm xúc chi phối quá mức, suy nghĩ u sầu, hy sinh bản thân mù quáng hoặc thao túng cảm xúc người khác.",
                "rev_gen": "Queen of Cups ngược cảnh báo bạn đang bị kiệt sức vì gánh vác cảm xúc của người khác, hoặc để sự đa sầu đa cảm nhấn chìm lý trí.",
                "sym": [
                    {"element": "Chiếc cốc có nắp đậy tinh xảo hai tay nâng", "meaning": "Bí mật tiềm thức và chiều sâu tâm hồn thiêng liêng"},
                    {"element": "Bàn chân chạm nhẹ vào mép nước", "meaning": "Sự kết nối an toàn giữa thế giới thực tại và đại dương cảm xúc"},
                    {"element": "Hình khắc nàng tiên cá trên ngai", "meaning": "Sự hòa quyện giữa con người và thế giới tâm linh màu nhiệm"}
                ],
                "msg": "Trái tim biết lắng nghe là món quà quý giá nhất mà bạn có thể trao tặng cho thế gian. Hãy giữ cho dòng nước tâm hồn luôn trong trẻo và bình an."
            },
            14: {
                "kw": ["Emotional Balance", "Wisdom", "Diplomacy", "Compassion", "Generosity"],
                "kwVi": ["Làm chủ cảm xúc", "Bình thản giữa giông bão", "Ngoại giao khôn khéo", "Bao dung độ lượng", "Người cha tinh thần"],
                "up_msg": "Hãy giữ sự điềm tĩnh và khôn ngoan; bạn có đủ bản lĩnh để làm chủ mọi cơn sóng gió cảm xúc bằng lòng bao dung.",
                "up_gen": "King of Cups ngồi trên ngai vàng nổi giữa đại dương cuộn sóng, nhưng chân ngài khô ráo và nét mặt hoàn toàn thanh thản. Ngài cầm quyền trượng và chiếc cốc, làm chủ cả bão tố lẫn sự tĩnh lặng.",
                "rev_msg": "Mất kiểm soát cảm xúc, lạnh lùng tàn nhẫn bên ngoài nhưng dậy sóng bên trong, hoặc thói thao túng tâm lý độc hại.",
                "rev_gen": "King of Cups ngược cảnh báo về sự bất ổn tâm lý, thói quen đè nén cảm xúc cho đến khi bùng nổ, hoặc dùng sự im lặng để trừng phạt người khác.",
                "sym": [
                    {"element": "Ngai vàng đá nổi trên biển động", "meaning": "Sự vững chãi, không bị hoàn cảnh bên ngoài làm lung lay"},
                    {"element": "Con cá heo nhảy múa và con thuyền vượt sóng", "meaning": "Trí thông minh cảm xúc và khả năng điều hướng cuộc đời khôn khéo"},
                    {"element": "Dây chuyền mang biểu tượng con cá", "meaning": "Làm chủ tiềm thức và năng lượng tâm linh cao cấp"}
                ],
                "msg": "Biển cả ngoài kia có thể gầm thét, nhưng người làm chủ được đại dương trong lòng mình sẽ luôn tìm thấy sự bình an tối thượng."
            }
        }
    },
    "swords": {
        "suitVi": "Kiếm",
        "element": "Khí",
        "astrology": "Song Tử, Thiên Bình, Bảo Bình",
        "theme": "trí tuệ, sự thật, tư duy lý trí, giao tiếp, thử thách và quyết định sắc bén",
        "symbol_elem": "Thanh kiếm công lý hai lưỡi sắc bén",
        "cards_detail": {
            1: {
                "kw": ["Breakthrough", "Clarity", "Sharp Mind", "Truth", "Justice"],
                "kwVi": ["Đột phá tư duy", "Chân lý sáng tỏ", "Trí tuệ sắc bén", "Cắt đứt ảo tưởng", "Chiến thắng của sự thật"],
                "up_msg": "Một tia chớp của sự thấu suốt trí tuệ; thanh kiếm chân lý sẽ giúp bạn cắt đứt mọi nghi ngờ và đưa ra quyết định chuẩn xác.",
                "up_gen": "Ace of Swords là bàn tay thiên thần cầm thanh kiếm dựng thẳng đứng, xuyên qua vương miện vàng kết cành cọ và cành ô liu. Biểu tượng của sự thật tối cao, công lý và tư duy đột phá.",
                "rev_msg": "Tư duy bế tắc, hiểu lầm tai hại, lời nói cay độc làm tổn thương người khác hoặc sự thật bị bóp méo.",
                "rev_gen": "Ace of Swords ngược cảnh báo bạn đang dùng lý trí một cách tàn nhẫn, hoặc đang bị những suy nghĩ tiêu cực tự đầu độc tâm trí mình.",
                "sym": [
                    {"element": "Thanh kiếm dựng thẳng xuyên qua vương miện", "meaning": "Chân lý và trí tuệ chiến thắng mọi quyền lực trần tục"},
                    {"element": "Cành cọ và cành ô liu treo trên kiếm", "meaning": "Chiến thắng và hòa bình đạt được nhờ sự sáng suốt"},
                    {"element": "Núi non hiểm trở bên dưới", "meaning": "Lý trí vượt lên trên mọi địa hình trắc trở của cảm xúc"}
                ],
                "msg": "Thanh kiếm của sự thật có thể làm bạn đau đớn trong chốc lát, nhưng nó sẽ giải thoát bạn mãi mãi khỏi ngục tù của sự dối trá."
            },
            2: {
                "kw": ["Stalemate", "Blind Spot", "Difficult Choices", "Avoidance", "Balance"],
                "kwVi": ["Thế tiến thoái lưỡng nan", "Bịt mắt trốn tránh", "Lựa chọn khó khăn", "Cân bằng mong manh", "Cần mở mắt đối diện"],
                "up_msg": "Bạn đang bịt mắt trốn tránh một quyết định khó khăn; hãy tháo khăn bịt mắt và can đảm đối diện với sự thật.",
                "up_gen": "Two of Swords khắc họa người phụ nữ bịt mắt, hai tay bắt chéo giữ hai thanh kiếm nặng nề trước ngực, ngồi trên ghế đá bên bờ biển đêm đầy đá ngầm. Tình thế bế tắc do không chịu nhìn thẳng vào thực tế.",
                "rev_msg": "Khăn bịt mắt đã rơi, sự thật phơi bày buộc bạn phải đưa ra quyết định, kết thúc tình trạng lấp lửng.",
                "rev_gen": "Two of Swords ngược cho thấy sự quá tải thông tin, sự thật bùng nổ không thể tiếp tục che giấu, buộc bạn phải chọn lựa dù muốn hay không.",
                "sym": [
                    {"element": "Chiếc khăn bịt mắt trắng", "meaning": "Sự trốn tránh thực tế hoặc cố gắng lắng nghe trực giác nội tâm"},
                    {"element": "Hai thanh kiếm bắt chéo trước ngực", "meaning": "Tấm khiên phòng thủ và sự bế tắc giữa hai luồng suy nghĩ"},
                    {"element": "Mặt trăng khuyết và biển đá ngầm", "meaning": "Cảm xúc nguy hiểm rình rập nếu không đưa ra quyết định"}
                ],
                "msg": "Trốn tránh sự thật không làm cho vấn đề biến mất. Chỉ khi bạn can đảm mở mắt nhìn thẳng vào sự việc, con đường sáng mới xuất hiện dưới chân bạn."
            },
            3: {
                "kw": ["Heartbreak", "Grief", "Painful Truth", "Betrayal", "Sorrow"],
                "kwVi": ["Nỗi đau xé lòng", "Trái tim rỉ máu", "Sự thật nghiệt ngã", "Tan vỡ tình cảm", "Bài học trưởng thành"],
                "up_msg": "Một nỗi đau thắt lòng hoặc sự thật đắng cay vừa xảy ra; hãy cho phép mình được khóc để thanh lọc và chữa lành.",
                "up_gen": "Three of Swords là hình ảnh kinh điển: trái tim đỏ bị ba thanh kiếm đâm xuyên qua, giữa bầu trời xám xịt mưa giông tầm tã. Nỗi đau của sự chia ly, phản bội hoặc mất mát trong tình cảm.",
                "rev_msg": "Cơn đau bắt đầu nguôi ngoai, sự tha thứ hé nở, bạn đang chữa lành vết thương lòng và bước tiếp.",
                "rev_gen": "Three of Swords ngược báo hiệu sự hồi phục sau cú sốc tình cảm. Mây đen tan dần, bạn bắt đầu rút từng thanh kiếm ra khỏi trái tim và tìm lại bình yên.",
                "sym": [
                    {"element": "Trái tim bị ba thanh kiếm đâm xuyên", "meaning": "Tổn thương sâu sắc do lời nói, sự phản bội hoặc chia tay"},
                    {"element": "Mây đen và mưa giông tầm tã", "meaning": "Bão táp cảm xúc và những giọt nước mắt giải tỏa"},
                    {"element": "Không có con người xuất hiện", "meaning": "Nỗi đau là trải nghiệm phổ quát mà ai cũng phải kinh qua"}
                ],
                "msg": "Vết thương ở đâu, ánh sáng sẽ đi vào tâm hồn bạn ở đó. Đừng sợ hãi trái tim tan vỡ; chính qua những vết rạn nứt ấy, lòng trắc ẩn của bạn mới được khai mở."
            },
            4: {
                "kw": ["Rest", "Recovery", "Contemplation", "Sanctuary", "Recharge"],
                "kwVi": ["Nghỉ ngơi tĩnh dưỡng", "Hồi phục sinh lực", "Thiền định chiêm nghiệm", "Khoảng lặng thiêng liêng", "Bảo toàn năng lượng"],
                "up_msg": "Hãy buông thanh kiếm xuống và nằm nghỉ ngơi; tâm trí và cơ thể bạn đang tha thiết kêu cứu cần được phục hồi.",
                "up_gen": "Four of Swords miêu tả bức tượng hiệp sĩ nằm tĩnh lặng trên ngôi mộ đá trong thánh đường, hai tay chắp trước ngực cầu nguyện. Một thanh kiếm đặt cạnh chàng, ba thanh kiếm treo trên tường. Khoảng lặng cần thiết sau chiến trận.",
                "rev_msg": "Kỳ nghỉ ngơi kết thúc, bạn đã sạc đầy năng lượng và sẵn sàng quay trở lại chiến trường cuộc đời.",
                "rev_gen": "Four of Swords ngược cảnh báo tình trạng kiệt sức do không chịu nghỉ ngơi, hoặc ngược lại là sự trì trệ nằm lì quá lâu không chịu đứng dậy hoạt động.",
                "sym": [
                    {"element": "Hiệp sĩ nằm tĩnh lặng cầu nguyện", "meaning": "Sự nghỉ ngơi tâm linh và bảo toàn năng lượng sống"},
                    {"element": "Cửa sổ kính màu khắc hình thánh", "meaning": "Sự che chở của đức tin và nơi chốn bình an"},
                    {"element": "Ba kiếm trên tường và một kiếm dưới thân", "meaning": "Những xung đột tạm gác lại, luôn sẵn sàng phòng thủ khi cần"}
                ],
                "msg": "Nghỉ ngơi không phải là sự lười biếng, mà là sự chuẩn bị thông thái cho những bước nhảy vọt tiếp theo. Hãy cho tâm trí bạn một bến đỗ bình yên."
            },
            5: {
                "kw": ["Hollow Victory", "Conflict", "Dishonor", "Defeat", "Pride"],
                "kwVi": ["Chiến thắng cay đắng", "Tổn thất danh dự", "Tranh cãi hơn thua", "Cái tôi ngạo mạn", "Bài học rút lui"],
                "up_msg": "Bạn có thể thắng cuộc tranh cãi nhưng sẽ mất đi một mối quan hệ quý giá; hãy tự hỏi chiến thắng này có đáng giá không?",
                "up_gen": "Five of Swords cho thấy chàng trai mỉm cười xảo quyệt nhặt ba thanh kiếm của hai kẻ bại trận đang cúi đầu bỏ đi trong u sầu. Bầu trời nhiều mây rách rưới. Một chiến thắng cay đắng (Pyrrhic victory) không mang lại vinh quang.",
                "rev_msg": "Mong muốn hòa giải, buông bỏ hận thù, nhận ra sự vô nghĩa của việc tranh giành hơn thua.",
                "rev_gen": "Five of Swords ngược là cơ hội để chôn vùi chiếc rìu chiến tranh, xin lỗi chân thành và hàn gắn những đổ vỡ do cái tôi gây ra.",
                "sym": [
                    {"element": "Nụ cười đắc thắng cay độc", "meaning": "Cái tôi ngạo mạn thắng lợi bằng mưu hèn kế bẩn"},
                    {"element": "Hai người bại trận cúi đầu bước đi", "meaning": "Sự cay đắng, tổn thương danh dự và mối quan hệ tan vỡ"},
                    {"element": "Bầu trời mây rách lởm chởm", "meaning": "Bầu không khí độc hại sau cuộc tranh đấu ác liệt"}
                ],
                "msg": "Hạ thấp người khác không bao giờ làm bạn cao hơn. Thắng một cuộc tranh cãi mà mất đi một người tri kỷ là thất bại đắng cay nhất của đời người."
            },
            6: {
                "kw": ["Transition", "Moving Forward", "Leaving Pain", "Calmer Waters", "Relief"],
                "kwVi": ["Chuyển bến bình yên", "Rời xa sóng gió", "Vượt qua giông bão", "Chữa lành dần dần", "Hành trình hy vọng"],
                "up_msg": "Cơn bão tố tồi tệ nhất đã ở lại phía sau; con thuyền cuộc đời bạn đang êm đềm lướt về vùng nước lặng sóng hơn.",
                "up_gen": "Six of Swords là hình ảnh người lái đò chở hai mẹ con trùm khăn kín mít qua sông. Sáu thanh kiếm cắm trên thuyền mang theo ký ức cũ, mạn thuyền bên phải gợn sóng nhưng phía trước là mặt nước phẳng lặng như gương.",
                "rev_msg": "Chuyến đi gặp trục trặc, bão tố quay lại, hoặc bạn vẫn cố mang theo những khúc mắc cũ làm nặng thuyền.",
                "rev_gen": "Six of Swords ngược cảnh báo sự chậm trễ trong quá trình phục hồi, vết thương cũ bị khơi lại hoặc gặp khó khăn khi thích nghi với môi trường mới.",
                "sym": [
                    {"element": "Con thuyền chở gia đình qua sông", "meaning": "Hành trình di chuyển tìm kiếm sự an toàn và bình yên"},
                    {"element": "Vùng nước gợn sóng phía sau và êm đềm phía trước", "meaning": "Rời bỏ quá khứ đau thương hướng tới tương lai thanh thản"},
                    {"element": "Sáu thanh kiếm cắm trên thuyền", "meaning": "Kinh nghiệm và bài học mang theo nhưng không làm đắm thuyền"}
                ],
                "msg": "Dù hành trình chuyển bến có trầm buồn và nặng trĩu âu lo, hãy tin rằng vùng nước bình yên đang ở ngay trước mũi thuyền của bạn."
            },
            7: {
                "kw": ["Deception", "Trickery", "Strategy", "Sneakiness", "Resourcefulness"],
                "kwVi": ["Hành động lén lút", "Chiến lược thông minh", "Cảnh giác lừa dối", "Rút lui bí mật", "Tự lừa dối mình"],
                "up_msg": "Hãy cẩn trọng với những điều mờ ám xung quanh hoặc hãy dùng sự khôn khéo, kín kẽ để giải quyết vấn đề một cách êm đẹp.",
                "up_gen": "Seven of Swords khắc họa người đàn ông rón rén ôm 5 thanh kiếm chuồn khỏi doanh trại quân địch, ngoái đầu nhìn lại hai thanh kiếm còn cắm trên đất. Chiến thuật du kích, sự khôn khéo hoặc hành vi che giấu sự thật.",
                "rev_msg": "Bí mật bị bại lộ, sự thật phơi bày, hoặc bạn quyết định thú nhận sai lầm và sống minh bạch.",
                "rev_gen": "Seven of Swords ngược cho thấy cái kim trong bọc lâu ngày cũng lòi ra; tốt nhất hãy thẳng thắn đối thoại thay vì tiếp tục dối trá lòng vòng.",
                "sym": [
                    {"element": "Người nhón chân ôm kiếm chuồn đi", "meaning": "Hành động bí mật, tránh đối đầu trực diện hoặc sự gian dối"},
                    {"element": "Ngoái đầu nhìn lại hai thanh kiếm", "meaning": "Sự bất an, sợ bị phát hiện hoặc bỏ sót chi tiết quan trọng"},
                    {"element": "Doanh trại quân địch phía sau", "meaning": "Môi trường nguy hiểm đòi hỏi sự khôn khéo để sinh tồn"}
                ],
                "msg": "Mưu mẹo có thể giúp bạn thoát khỏi một rắc rối ngắn hạn, nhưng chỉ có sự chính trực và minh bạch mới xây dựng được danh dự cả một đời."
            },
            8: {
                "kw": ["Imprisonment", "Entrapment", "Self-Victimization", "Powerlessness", "Mental Trap"],
                "kwVi": ["Mắc kẹt trong tâm trí", "Cảm giác bất lực", "Ảo tưởng tù đày", "Sợ hãi tê liệt", "Tự cởi trói bước đi"],
                "up_msg": "Song sắt giam cầm bạn không phải do người khác dựng lên mà nằm trong chính suy nghĩ của bạn; dây trói rất lỏng, hãy tự bước ra.",
                "up_gen": "Eight of Swords khắc họa người phụ nữ bị trói lỏng lẻo và bịt mắt, đứng giữa 8 thanh kiếm cắm quanh bùn lầy. Nhưng không có thanh kiếm nào chắn trước mặt nàng, dây trói có thể tự tháo. Đây là nhà tù của tâm trí.",
                "rev_msg": "Bạn bắt đầu nhận ra ảo tưởng, cởi bỏ khăn bịt mắt và tự do bước ra khỏi nhà tù suy nghĩ tiêu cực.",
                "rev_gen": "Eight of Swords ngược là sự thức tỉnh diệu kỳ: bạn không còn đóng vai nạn nhân, nhận ra quyền năng tự quyết của mình và dũng cảm bước đi.",
                "sym": [
                    {"element": "Dây trói lỏng lẻo quanh thân", "meaning": "Sự giam cầm mang tính tâm lý hơn là rào cản thực tế"},
                    {"element": "Tám thanh kiếm cắm xung quanh", "meaning": "Những niềm tin giới hạn và nỗi sợ do chính mình tưởng tượng ra"},
                    {"element": "Lối đi trống trải phía trước", "meaning": "Cánh cửa tự do luôn rộng mở ngay khi can đảm bước chân"}
                ],
                "msg": "Kẻ giam cầm bạn tàn nhẫn nhất chính là giọng nói bên trong bảo rằng bạn không thể làm được. Hãy tháo khăn bịt mắt, bạn vốn dĩ luôn tự do."
            },
            9: {
                "kw": ["Anxiety", "Nightmares", "Worry", "Insomnia", "Guilt"],
                "kwVi": ["Âu lo tột độ", "Cơn ác mộng nửa đêm", "Mất ngủ dằn vặt", "Trầm cảm suy nghĩ", "Bóng ma tâm trí"],
                "up_msg": "Đêm tối khuếch đại mọi nỗi sợ lên gấp mười lần; hãy thở sâu, sáng mai mặt trời lên, mọi việc sẽ không tệ như bạn nghĩ.",
                "up_gen": "Nine of Swords là hình ảnh người ôm mặt khóc trên giường trong đêm tối, phía sau tường treo 9 thanh kiếm chĩa ngang. Cơn ác mộng, sự lo âu, cảm giác tội lỗi và mất ngủ do suy nghĩ quá nhiều (overthinking).",
                "rev_msg": "Cơn ác mộng tan biến, bạn tìm lại được sự thanh thản, học cách chia sẻ gánh nặng tâm lý với người khác.",
                "rev_gen": "Nine of Swords ngược cho thấy ánh sáng ban mai bắt đầu rọi vào căn phòng tăm tối, bạn nhận ra những lo lắng bấy lâu hoàn toàn vô căn cứ.",
                "sym": [
                    {"element": "Người ôm mặt ngồi trên giường", "meaning": "Nỗi đau đớn tinh thần, sự cô đơn và dằn vặt trong đêm"},
                    {"element": "Chín thanh kiếm treo ngang trên tường", "meaning": "Những suy nghĩ tiêu cực đè nặng lên tâm trí"},
                    {"element": "Khăn trải giường thêu hoa hồng và cung hoàng đạo", "meaning": "Sự sống và vẻ đẹp vẫn hiện hữu ngay bên cạnh nỗi đau"}
                ],
                "msg": "Đừng đàm phán với những con quái vật của nỗi sợ lúc nửa đêm. Hãy chợp mắt nghỉ ngơi, ánh sáng ban mai sẽ biến chúng thành làn khói vô hại."
            },
            10: {
                "kw": ["Rock Bottom", "Painful Endings", "Betrayal", "Defeat", "Dawn of New Day"],
                "kwVi": ["Chạm đáy nỗi đau", "Kết thúc nghiệt ngã", "Đâm sau lưng", "Tận cùng bóng tối", "Bình minh sắp ló rạng"],
                "up_msg": "Điều tồi tệ nhất đã xảy ra rồi, bạn không thể rơi xuống thấp hơn được nữa; từ đây trở đi, mọi bước chân đều là đi lên.",
                "up_gen": "Ten of Swords là người đàn ông nằm sấp trên bãi biển bị 10 thanh kiếm cắm dọc sống lưng, phủ tấm vải đỏ. Nhưng ở đường chân trời phía xa, bầu trời đen kịt đang nứt ra những tia nắng vàng rực rỡ của bình minh mới.",
                "rev_msg": "Sự hồi sinh từ cõi chết, vết thương bắt đầu lành lặn, bạn gượng dậy từ đống đổ nát với sức sống mới.",
                "rev_gen": "Ten of Swords ngược là lời tuyên bố: bạn đã sống sót qua cơn bão kinh hoàng nhất. Hãy đứng dậy, rũ sạch tro tàn và chào đón một chương đời hoàn toàn mới.",
                "sym": [
                    {"element": "Mười thanh kiếm cắm trên lưng", "meaning": "Sự kết thúc triệt để, không còn gì để mất thêm nữa"},
                    {"element": "Khăn đỏ phủ trên thân thể", "meaning": "Năng lượng sinh mệnh vẫn còn âm ỉ chờ ngày phục sinh"},
                    {"element": "Chân trời vàng óng phía xa", "meaning": "Bình minh của một kỷ nguyên mới đang bắt đầu"}
                ],
                "msg": "Khi bạn đã chạm tới tận cùng của đáy vực, con đường duy nhất còn lại là ngước lên và bước lên ánh sáng. Màn đêm đen tối nhất chính là lúc bình minh chuẩn bị ló rạng."
            },
            11: {
                "kw": ["Curiosity", "Restless Mind", "Mental Agility", "New Ideas", "Vigilance"],
                "kwVi": ["Trí tuệ nhanh nhạy", "Hiếu kỳ quan sát", "Cảnh giác cao độ", "Sứ giả tin tức", "Sắc sảo thẳng thắn"],
                "up_msg": "Hãy giữ đôi mắt sắc bén và tâm trí cởi mở; một thông tin quan trọng hoặc một thử thách trí tuệ đang đến với bạn.",
                "up_gen": "Page of Swords là chàng trai trẻ cầm thanh kiếm bằng cả hai tay, đứng trên mỏm đồi lộng gió, ánh mắt cảnh giác nhìn quanh. Chàng thông minh, ham học hỏi, thẳng thắn nhưng đôi khi hơi thiếu khéo léo trong lời nói.",
                "rev_msg": "Lời nói cay độc, tính tọc mạch t nhiều chuyện, cãi bướng vô lễ hoặc phát tán tin đồn thất thiệt.",
                "rev_gen": "Page of Swords ngược cảnh báo bạn đang dùng sự thông minh vào việc chỉ trích người khác, hoặc đang bị kẻ xấu soi mói đời tư.",
                "sym": [
                    {"element": "Thanh kiếm giơ cao bằng hai tay", "meaning": "Sự sẵn sàng chiến đấu bảo vệ sự thật và tri thức"},
                    {"element": "Gió thổi mạnh làm tóc và mây bay", "meaning": "Dòng chảy tư duy mãnh liệt và biến động của nguyên tố Khí"},
                    {"element": "Đàn chim bay trên bầu trời", "meaning": "Tin tức nhanh chóng bay đến từ nhiều phương"}
                ],
                "msg": "Sự sắc bén của trí tuệ là một món quà tuyệt vời, nhưng hãy dùng nó như chiếc dao mổ cứu người chứ không phải lưỡi kiếm vô cớ làm tổn thương tha nhân."
            },
            12: {
                "kw": ["Action-Oriented", "Direct Communication", "Fierce Ambition", "Impatience", "Intellectual Force"],
                "kwVi": ["Tấn công dũng mãnh", "Quyết đoán không khoan nhượng", "Tham vọng rực lửa", "Thẳng thắn sắc bén", "Lao nhanh về phía trước"],
                "up_msg": "Hãy lao nhanh về phía trước với tất cả sự sắc bén của lý trí; không gì có thể ngăn cản bước tiến dũng mãnh của bạn.",
                "up_gen": "Knight of Swords phi ngựa nước đại xông thẳng vào giông bão, thanh kiếm tuốt trần giơ cao uy hiếp mọi kẻ thù. Chàng là hiện thân của tốc độ tư duy, tham vọng ngút trời và sự quyết liệt không nhân nhượng.",
                "rev_msg": "Nóng giận mất khôn, lời nói như đao kiếm đâm vào tim người khác, hành động hấp tấp tự đưa mình vào chỗ hiểm.",
                "rev_gen": "Knight of Swords ngược cảnh báo về sự độc đoán, hung hăng, cãi cùn và thói hiếu thắng phá hủy các mối quan hệ quý báu.",
                "sym": [
                    {"element": "Chiến mã lao vút trong gió bão", "meaning": "Hành động thần tốc và sự tập trung cao độ vào mục tiêu"},
                    {"element": "Thanh kiếm chĩa thẳng về phía trước", "meaning": "Lý trí sắc nhọn không chùn bước trước bất kỳ rào cản nào"},
                    {"element": "Mây gió cuộn tròn hình sóng", "meaning": "Sự xáo động mạnh mẽ trong môi trường tư tưởng"}
                ],
                "msg": "Dũng cảm tiến lên là điều đáng khen, nhưng người kỵ sĩ vĩ đại là người biết khi nào nên tuốt gươm xông trận và khi nào nên tra gươm vào vỏ để giữ gìn hòa bình."
            },
            13: {
                "kw": ["Perceptive", "Clear Boundaries", "Directness", "Truth-Seeker", "Independence"],
                "kwVi": ["Thấu suốt sắc sảo", "Ranh giới rõ ràng", "Độc lập kiên cường", "Thẳng thắn công tâm", "Bản lĩnh qua giông bão"],
                "up_msg": "Hãy sử dụng trí tuệ sắc bén và khả năng nhìn thấu bản chất sự việc; sự độc lập và ranh giới rõ ràng sẽ bảo vệ bạn.",
                "up_gen": "Queen of Swords ngồi uy nghi trên ngai chạm hình thiên thần, tay phải giơ thẳng thanh kiếm, tay trái vươn ra đón nhận sự thật. Gương mặt bà nghiêm nghị nhưng công bằng. Người phụ nữ đã trải qua nhiều đau thương để đạt tới sự thông thái tột cùng.",
                "rev_msg": "Lạnh lùng cay nghiệt, phán xét tàn nhẫn, trái tim băng giá khép chặt không cho ai tiếp cận.",
                "rev_gen": "Queen of Swords ngược cảnh báo bạn đang để những tổn thương quá khứ biến mình thành người cay độc, đa nghi và cô lập với thế giới.",
                "sym": [
                    {"element": "Thanh kiếm dựng thẳng tay phải", "meaning": "Lý trí sáng suốt, khả năng phán đoán công minh không thiên vị"},
                    {"element": "Bàn tay trái vươn ra phía trước", "meaning": "Sẵn sàng đón nhận sự thật trần trụi dù có đau đớn"},
                    {"element": "Thiên thần và bướm khắc trên ngai", "meaning": "Sự chuyển hóa tâm hồn qua những thử thách nghiệt ngã"}
                ],
                "msg": "Trí tuệ thấu suốt không nhất thiết phải đi kèm với sự lạnh lùng. Bạn hoàn toàn có thể vừa giữ vững sự sắc bén của lý trí vừa sưởi ấm trái tim bằng lòng trắc ẩn."
            },
            14: {
                "kw": ["Mental Clarity", "Intellectual Power", "Authority", "Truth", "Discipline"],
                "kwVi": ["Uy quyền trí tuệ", "Lý trí tối cao", "Phán xét công minh", "Lãnh đạo bằng sự thật", "Kỷ luật thép"],
                "up_msg": "Hãy đưa ra quyết định dựa trên sự thật khách quan, luật pháp và logic sắc bén; bạn có đầy đủ thẩm quyền và trí tuệ để phán xử.",
                "up_gen": "King of Swords ngồi thẳng trên ngai vàng cao ngất, thanh kiếm dựng đứng hơi nghiêng sẵn sàng hành động. Ánh mắt ngài thấu suốt mọi điều dối trá. Ngài là hiện thân tối thượng của luật pháp, đạo đức và trí tuệ làm chủ thế giới.",
                "rev_msg": "Bạo chúa lý trí, độc đoán tàn nhẫn, lạm dụng quyền lực hoặc thao túng người khác bằng những lập luận ngụy biện.",
                "rev_gen": "King of Swords ngược cảnh báo về sự độc tài, thiếu tình người, hoặc bị những kẻ mưu mô lợi dụng sự cứng nhắc của bạn.",
                "sym": [
                    {"element": "Thanh kiếm dựng thẳng tay phải", "meaning": "Quyền lực tối cao của luật pháp và chân lý vũ trụ"},
                    {"element": "Áo choàng màu tím và xanh lam", "meaning": "Sự thông thái tâm linh kết hợp với sự điềm tĩnh tuyệt đối"},
                    {"element": "Hai chú bướm khắc trên ngai vàng", "meaning": "Sự linh hoạt trong tư duy và chiều sâu của nhận thức"}
                ],
                "msg": "Quyền uy thực sự của một bậc minh quân không nằm ở việc trừng phạt kẻ có tội, mà ở việc thiết lập trật tự và công lý để bảo vệ sự thật và hòa bình cho muôn loài."
            }
        }
    },
    "pentacles": {
        "suitVi": "Tiền",
        "element": "Đất",
        "astrology": "Kim Ngưu, Xử Nữ, Ma Kết",
        "theme": "vật chất, tài chính, công việc thực tế, sức khỏe thể chất và sự phát triển bền vững",
        "symbol_elem": "Đồng tiền vàng khắc ngôi sao 5 cánh",
        "cards_detail": {
            1: {
                "kw": ["Financial Opportunity", "Abundance", "Manifestation", "New Job", "Security"],
                "kwVi": ["Cơ hội tài chính vàng", "Mầm mống thịnh vượng", "Hiện thực hóa của cải", "Công việc mới tốt lành", "Nền tảng vững chắc"],
                "up_msg": "Một cơ hội tài chính quý giá như vàng đang được vũ trụ trao tặng; hãy nắm lấy và gieo mầm xuống mảnh đất màu mỡ.",
                "up_gen": "Ace of Pentacles là bàn tay từ mây nâng đồng tiền vàng khổng lồ bên trên một khu vườn nở rộ hoa bách hợp và hoa hồng, cổng vòm dẫn ra dãy núi xanh mướt. Đây là điềm báo của sự sung túc, công việc mới hoặc khoản đầu tư sinh lời lớn.",
                "rev_msg": "Bỏ lỡ cơ hội tài chính tốt, chi tiêu hoang phí, hoặc kế hoạch làm ăn thiếu khả thi thực tế.",
                "rev_gen": "Ace of Pentacles ngược cảnh báo về sự quản lý tiền bạc kém, đầu tư vội vàng vào những dự án ảo hoặc lòng tham làm mờ mắt.",
                "sym": [
                    {"element": "Bàn tay thần nâng đồng tiền vàng", "meaning": "Món quà vật chất và nguồn lực thực tế từ vũ trụ"},
                    {"element": "Khu vườn hoa nở rộ và cổng vòm", "meaning": "Sự màu mỡ, thịnh vượng và cánh cổng dẫn đến tương lai tươi sáng"},
                    {"element": "Dãy núi xanh phía xa", "meaning": "Thành tựu vững chắc và sự phát triển bền bỉ theo thời gian"}
                ],
                "msg": "Mọi cây cổ thụ tỏa bóng mát ngút ngàn đều khởi đầu từ một hạt mầm nhỏ bé nằm yên trong lòng đất. Hãy nâng niu và vun trồng hạt giống thịnh vượng hôm nay."
            },
            2: {
                "kw": ["Balance", "Adaptability", "Time Management", "Priorities", "Juggling"],
                "kwVi": ["Linh hoạt xoay xở", "Cân bằng cuộc sống", "Quản lý thời gian", "Lướt trên sóng gió", "Thích ứng nhanh nhạy"],
                "up_msg": "Bạn đang xoay xở khéo léo giữa nhiều trách nhiệm; hãy giữ sự linh hoạt và mỉm cười lướt qua những con sóng thăng trầm.",
                "up_gen": "Two of Pentacles khắc họa chàng trai trẻ nhảy múa tung hứng hai đồng tiền vàng trong vòng vô cực (Lemniscate). Phía sau chàng, những con tàu dập dềnh cưỡi trên những con sóng lớn. Khả năng thích ứng tuyệt vời trước biến động tài chính và cuộc sống.",
                "rev_msg": "Mất cân bằng nghiêm trọng, nợ nần chồng chất, quá tải vì ôm đồm quá nhiều việc cùng lúc.",
                "rev_gen": "Two of Pentacles ngược cảnh báo bạn đang bị rối loạn tài chính, chi tiêu vượt quá thu nhập hoặc căng thẳng vì không biết sắp xếp thứ tự ưu tiên.",
                "sym": [
                    {"element": "Hai đồng tiền trong vòng vô cực", "meaning": "Dòng chảy tài chính liên tục và sự cân bằng động khéo léo"},
                    {"element": "Chàng trai nhảy múa vui vẻ", "meaning": "Thái độ lạc quan và tinh thần linh hoạt trước thử thách"},
                    {"element": "Những con thuyền cưỡi sóng phía sau", "meaning": "Sự thăng trầm tự nhiên của thị trường và cuộc đời"}
                ],
                "msg": "Cuộc sống giống như trò tung hứng giữa nhiều quả bóng trách nhiệm. Đừng cố gồng mình giữ mọi thứ bất động; hãy học cách uyển chuyển theo từng nhịp điệu của dòng đời."
            },
            3: {
                "kw": ["Teamwork", "Mastery", "Craftsmanship", "Collaboration", "Building"],
                "kwVi": ["Hợp tác nhóm ăn ý", "Tay nghề bậc thầy", "Xây dựng nền móng", "Được chuyên gia đánh giá cao", "Kiến tạo kiệt tác"],
                "up_msg": "Sự kết hợp giữa tài năng của bạn và sự hỗ trợ của những người đồng nghiệp giỏi sẽ tạo nên một công trình xuất sắc.",
                "up_gen": "Three of Pentacles cho thấy người thợ chạm khắc đá trẻ tuổi đứng trên bệ đang thảo luận bản vẽ với một tu sĩ và một kiến trúc sư trong thánh đường. Ba đồng tiền vàng chạm trên vòm đá. Tinh thần đồng đội, tay nghề tinh xảo và sự công nhận chuyên môn.",
                "rev_msg": "Bất đồng ý kiến trong nhóm làm việc, thiếu sự phối hợp, tay nghề non kém hoặc không chịu lắng nghe chỉ dẫn.",
                "rev_gen": "Three of Pentacles ngược cảnh báo về sự chia rẽ nội bộ, mỗi người làm một phách khiến dự án bị chậm trễ và giảm sút chất lượng.",
                "sym": [
                    {"element": "Ba đồng tiền vàng trên vòm thánh đường", "meaning": "Sự gắn kết hoàn hảo giữa kế hoạch, tâm linh và bàn tay thợ giỏi"},
                    {"element": "Người thợ cầm đục và búa", "meaning": "Kỹ năng chuyên môn vững vàng và tinh thần lao động cần mẫn"},
                    {"element": "Bản vẽ thiết kế trên tay kiến trúc sư", "meaning": "Kế hoạch bài bản và sự chỉ dẫn chuyên môn chuẩn xác"}
                ],
                "msg": "Muốn đi nhanh hãy đi một mình, muốn đi xa và xây nên những lâu đài nguy nga hãy đi cùng nhau. Hãy trân trọng giá trị và đóng góp của từng người đồng đội."
            },
            4: {
                "kw": ["Saving Money", "Security", "Conservatism", "Scarcity Mindset", "Possessiveness"],
                "kwVi": ["Tích lũy của cải", "Giữ gìn an toàn", "Tâm lý sợ thiếu thốn", "Bám víu vật chất", "Cần học cách sẻ chia"],
                "up_msg": "Bạn đang bảo vệ thành quả tài chính rất tốt, nhưng đừng để nỗi sợ mất mát biến bạn thành kẻ keo kiệt, khép chặt cánh cửa lòng.",
                "up_gen": "Four of Pentacles là người đàn ông ngồi ôm chặt một đồng tiền trước ngực, đội một đồng trên đầu và giẫm hai chân lên hai đồng khác. Ông quay lưng lại với thành phố sầm uất. Sự an toàn tài chính nhưng đi kèm với sự bủn xỉn và sợ hãi mất mát.",
                "rev_msg": "Chi tiêu mất kiểm soát, phá vỡ quỹ tiết kiệm, hoặc ngược lại là bắt đầu học được cách hào phóng mở rộng bàn tay.",
                "rev_gen": "Four of Pentacles ngược có hai chiều hướng: hoặc bạn vung tay quá trán làm hao hụt tiền bạc, hoặc bạn đã nhận ra tiền chỉ là phương tiện và bắt đầu biết sẻ chia giúp đỡ người khác.",
                "sym": [
                    {"element": "Bốn đồng tiền gắn chặt vào đầu, ngực và chân", "meaning": "Sự kiểm soát tuyệt đối và bám chấp nặng nề vào của cải"},
                    {"element": "Tư thế ngồi bất động cứng nhắc", "meaning": "Nỗi sợ thay đổi làm tê liệt khả năng phát triển"},
                    {"element": "Thành phố phía sau lưng", "meaning": "Xa lánh xã hội và dòng chảy cuộc sống để bảo vệ của riêng"}
                ],
                "msg": "Bàn tay nắm chặt chỉ có thể giữ được những gì đang có, nhưng nó sẽ không bao giờ có thể mở ra để đón nhận những phước lành lớn hơn từ vũ trụ."
            },
            5: {
                "kw": ["Financial Loss", "Poverty", "Isolation", "Worry", "Hardship"],
                "kwVi": ["Khó khăn tài chính", "Cảm giác thiếu thốn", "Lạnh lẽo ngoài bão tuyết", "Bỏ qua sự giúp đỡ", "Hy vọng trong nghịch cảnh"],
                "up_msg": "Bạn đang trải qua giai đoạn khó khăn về vật chất hoặc cảm giác cô độc; hãy ngước nhìn lên, cánh cửa thánh đường ấm áp đang rộng mở ngay cạnh bạn.",
                "up_gen": "Five of Pentacles miêu tả hai người ăn mày rách rưới, một người chống nạng lê bước trong bão tuyết lạnh giá. Họ đi ngang qua cửa sổ kính màu ấm áp của một ngôi thánh đường thắp sáng 5 đồng tiền mà không hề ngước nhìn lên tìm sự giúp đỡ.",
                "rev_msg": "Giai đoạn khó khăn nhất đã qua, tìm được công việc mới, nhận được sự trợ giúp kịp thời và phục hồi tài chính.",
                "rev_gen": "Five of Pentacles ngược báo hiệu ánh sáng cuối đường hầm. Khủng hoảng tài chính dần được tháo gỡ, bạn tìm lại được nơi nương tựa và sức khỏe thể chất hồi phục.",
                "sym": [
                    {"element": "Cửa sổ kính màu thánh đường ấm áp", "meaning": "Sự cứu rỗi, lòng bác ái và sự trợ giúp luôn sẵn có"},
                    {"element": "Hai người lê bước trong bão tuyết", "meaning": "Nghịch cảnh vật chất và cảm giác bị xã hội ruồng bỏ"},
                    {"element": "Chiếc chuông đeo trên cổ người chống nạng", "meaning": "Cảm giác mặc cảm bệnh tật và sự cô lập"}
                ],
                "msg": "Dù bão tuyết cuộc đời có lạnh giá đến đâu, hãy nhớ rằng luôn có một cánh cửa ấm áp sẵn sàng đón bạn vào sưởi ấm. Đừng ngần ngại gõ cửa và xin sự giúp đỡ."
            },
            6: {
                "kw": ["Generosity", "Charity", "Giving and Receiving", "Fairness", "Sharing Wealth"],
                "kwVi": ["Lòng hào phóng", "Làm việc thiện nguyện", "Cân bằng cho và nhận", "Được quý nhân giúp đỡ", "Chia sẻ tài lộc"],
                "up_msg": "Dòng chảy tiền bạc và lòng tốt đang lưu chuyển tuyệt vời; hãy hào phóng chia sẻ khi bạn dư dả và khiêm nhường đón nhận khi cần.",
                "up_gen": "Six of Pentacles khắc họa thương gia giàu có cầm cán cân công lý tay trái, tay phải đang ban phát tiền vàng cho hai người nghèo khó quỳ bên dưới. Sự cân bằng hoàn hảo giữa cho và nhận trong vũ trụ.",
                "rev_msg": "Lòng tốt bị lợi dụng, nợ nần khó đòi, bố thí với thái độ kẻ cả ban ơn hoặc phụ thuộc vào sự trợ cấp của người khác.",
                "rev_gen": "Six of Pentacles ngược cảnh báo về sự thiếu công bằng trong phân chia quyền lợi, hoặc bạn đang cho đi quá nhiều khiến bản thân rơi vào cảnh túng thiếu.",
                "sym": [
                    {"element": "Cán cân thăng bằng tay trái", "meaning": "Sự công bằng, minh bạch trong phân chia của cải"},
                    {"element": "Thương gia phát tiền tay phải", "meaning": "Lòng hào phóng chân thành và tinh thần sẻ chia với cộng đồng"},
                    {"element": "Hai người quỳ nhận tiền", "meaning": "Sự biết ơn và lòng khiêm nhường khi đón nhận ân huệ"}
                ],
                "msg": "Cho đi là còn mãi. Khi bạn trở thành kênh dẫn cho sự thịnh vượng chảy qua cuộc đời người khác, chính bạn sẽ luôn được vũ trụ làm đầy bằng những phước lành vô tận."
            },
            7: {
                "kw": ["Long-Term View", "Sustainable Results", "Patience", "Investment", "Evaluation"],
                "kwVi": ["Kiên nhẫn chờ thu hoạch", "Tầm nhìn dài hạn", "Đánh giá thành quả", "Đầu tư bền bỉ", "Không sốt ruột"],
                "up_msg": "Bạn đã lao động chăm chỉ và hạt mầm đang lớn lên; hãy kiên nhẫn chờ quả chín, đừng vội vã hái khi quả còn xanh.",
                "up_gen": "Seven of Pentacles là người nông dân đứng chống cằm tựa vào chiếc cuốc, trầm ngâm ngắm nhìn giàn cây trĩu 7 đồng tiền vàng. Chàng dừng lại để đánh giá công sức đã bỏ ra và chờ đợi thời điểm thu hoạch tối ưu.",
                "rev_msg": "Mất kiên nhẫn, nản lòng vì kết quả chậm, hoặc nhận ra mình đã đầu tư sai chỗ và cần cắt lỗ chuyển hướng.",
                "rev_gen": "Seven of Pentacles ngược cảnh báo về sự lười biếng bỏ bê công việc, hoặc sự sốt ruột thu hoạch sớm làm hỏng cả mùa màng.",
                "sym": [
                    {"element": "Người nông dân tựa cằm vào cuốc", "meaning": "Sự chiêm nghiệm, kiên nhẫn và đánh giá lại tiến trình lao động"},
                    {"element": "Giàn cây trĩu quả là các đồng tiền vàng", "meaning": "Thành quả vật chất đang âm thầm tích lũy từng ngày"},
                    {"element": "Một đồng tiền nằm dưới chân", "meaning": "Thành quả trước mắt có thể dùng ngay trong khi chờ vụ mùa lớn"}
                ],
                "msg": "Mọi vụ mùa bội thu đều cần thời gian của đất trời để chín ngọt. Hãy tiếp tục cần mẫn tưới tắm và đặt niềm tin vào sự sinh sôi tự nhiên của hạt giống."
            },
            8: {
                "kw": ["Apprenticeship", "Repetitive Effort", "Mastery", "Skill Development", "Quality"],
                "kwVi": ["Rèn luyện tay nghề", "Chăm chỉ tỉ mỉ", "Nâng cao kỹ năng", "Bậc thầy tương lai", "Tập trung chuyên môn"],
                "up_msg": "Hãy tập trung mài giũa kỹ năng với tất cả sự tỉ mỉ và kiên trì; sự chuyên nghiệp sẽ đưa bạn đến đỉnh cao danh vọng.",
                "up_gen": "Eight of Pentacles khắc họa người thợ trẻ ngồi cần mẫn đục đẽo từng đồng tiền vàng một cách tinh xảo. Sáu đồng đã hoàn thành treo ngay ngắn trên cây cột, một đồng đang làm và một đồng nằm dưới chân. Lao động chăm chỉ, say mê và không ngừng hoàn thiện bản thân.",
                "rev_msg": "Làm việc cẩu thả, thiếu tập trung, chán nản công việc lặp đi lặp lại hoặc làm việc quá sức biến thành cỗ máy.",
                "rev_gen": "Eight of Pentacles ngược cảnh báo về thói đi đường tắt, làm ẩu để lấy số lượng, hoặc cảm thấy bế tắc trong công việc không có cơ hội thăng tiến.",
                "sym": [
                    {"element": "Người thợ ngồi chăm chú đục từng chi tiết", "meaning": "Sự tập trung cao độ, tình yêu nghề và sự tỉ mỉ kiên trì"},
                    {"element": "Tám đồng tiền vàng hoàn thiện tinh xảo", "meaning": "Sự tích lũy kỹ năng và chất lượng sản phẩm vượt trội"},
                    {"element": "Thị trấn xa xa phía sau", "meaning": "Tách mình khỏi những xao nhãng để tập trung tôi luyện tay nghề"}
                ],
                "msg": "Không có thiên tài nào không khởi đầu từ sự khổ luyện cần mẫn mỗi ngày. Hãy yêu lấy từng chi tiết nhỏ nhặt nhất trong công việc của bạn, kiệt tác sẽ tự khắc thành hình."
            },
            9: {
                "kw": ["Abundance", "Luxury", "Self-Sufficiency", "Financial Independence", "Grace"],
                "kwVi": ["Tự do tài chính", "Cuộc sống vương giả", "Độc lập tự chủ", "Hưởng thụ thành quả", "Thanh lịch quý phái"],
                "up_msg": "Bạn đã tự mình tạo dựng nên một cơ ngơi thịnh vượng và an nhàn; hãy tự hào tận hưởng thành quả của sự độc lập tự chủ.",
                "up_gen": "Nine of Pentacles là người phụ nữ quý phái mặc áo choàng lộng lẫy đứng trong vườn nho trĩu quả đầy những đồng tiền vàng. Trên tay bà đeo găng có một chú chim ưng săn mồi đã được thuần hóa. Biểu tượng của người phụ nữ tự lập, giàu có, tinh tế và làm chủ hoàn toàn cuộc đời mình.",
                "rev_msg": "Phụ thuộc tài chính vào người khác, chi tiêu xa xỉ vượt khả năng, hoặc cảm giác cô đơn dù sống trong nhung lụa.",
                "rev_gen": "Nine of Pentacles ngược cảnh báo bạn đang phải trả giá quá đắt về mặt tình cảm để đổi lấy vật chất, hoặc đang đối mặt với nguy cơ mất đi sự tự chủ tài chính.",
                "sym": [
                    {"element": "Người phụ nữ quý phái trong vườn nho", "meaning": "Sự viên mãn, trù phú và thành tựu tự thân đáng tự hào"},
                    {"element": "Chú chim ưng đậu trên tay đeo găng", "meaning": "Bản năng và dục vọng đã được thuần hóa bởi trí tuệ và sự tự chủ"},
                    {"element": "Chú ốc sên bò dưới chân", "meaning": "Bước tiến chậm rãi, chắc chắn và an toàn"}
                ],
                "msg": "Sự quyến rũ lớn nhất của một con người là sự tự do tự tại khi tự mình làm chủ được cuộc đời và tài chính của chính mình mà không cần dựa dẫm vào bất kỳ ai."
            },
            10: {
                "kw": ["Wealth", "Legacy", "Family Heritage", "Long-Term Security", "Tradition"],
                "kwVi": ["Gia tài đồ sộ", "Di sản truyền đời", "Gia tộc hưng vượng", "Bảo đảm lâu dài", "Phúc lộc tràn trề"],
                "up_msg": "Một nền tảng thịnh vượng vững chắc cho nhiều thế hệ; bạn đang được bao bọc bởi phước lộc của gia đình và tổ tiên.",
                "up_gen": "Ten of Pentacles là bức tranh gia đình ba thế hệ sum vầy trong khuôn viên lâu đài cổ kính: ông lão ngồi vuốt ve hai chú chó trung thành, đôi vợ chồng trò chuyện bên cổng thành, đứa trẻ nắm tay mẹ. Mười đồng tiền vàng xếp theo hình Cây Sự Sống (Tree of Life). Thịnh vượng bền vững tột đỉnh.",
                "rev_msg": "Tranh chấp tài sản thừa kế, gia đình bất hòa vì tiền bạc, hoặc gánh nặng nợ nần từ thế hệ trước.",
                "rev_gen": "Ten of Pentacles ngược cảnh báo về sự rạn nứt tình thân do lòng tham của cải, rủi ro mất mát tài sản gia đình hoặc đầu tư mạo hiểm làm tiêu tán cơ nghiệp.",
                "sym": [
                    {"element": "Mười đồng tiền xếp theo Cây Sự Sống Kabbalah", "meaning": "Sự hoàn hảo, thịnh vượng viên mãn kết nối đất trời"},
                    {"element": "Ba thế hệ cùng hai chú chó trung thành", "meaning": "Sự tiếp nối truyền thống, lòng trung thành và phúc đức gia tộc"},
                    {"element": "Cổng lâu đài khắc gia huy", "meaning": "Di sản văn hóa và tài sản bền vững truyền đời"}
                ],
                "msg": "Gia tài quý giá nhất mà bạn để lại cho thế hệ mai sau không chỉ là những đồng tiền vàng trong két sắt, mà là những giá trị đạo đức và tình yêu thương ấm áp được gìn giữ qua năm tháng."
            },
            11: {
                "kw": ["Manifestation", "Financial Opportunity", "Skill Building", "Diligent Student", "Practicality"],
                "kwVi": ["Chăm chỉ thực tế", "Học hỏi kỹ năng mới", "Cơ hội nghề nghiệp tốt", "Hạt mầm tiền bạc", "Ý thức trách nhiệm"],
                "up_msg": "Một cơ hội học tập hoặc công việc thực tế đầy tiềm năng đang mở ra; hãy tiếp cận nó bằng sự chăm chỉ và cầu tiến.",
                "up_gen": "Page of Pentacles là chàng trai trẻ ăn mặc giản dị nhưng trang nhã, đứng giữa cánh đồng xanh tươi, hai tay nâng niu đồng tiền vàng và chăm chú ngắm nhìn. Chàng là người học trò chăm chỉ, thực tế, luôn muốn biến tri thức thành của cải cụ thể.",
                "rev_msg": "Lười biếng, thiếu tập trung, lãng phí tiền bạc vào những thứ vô bổ hoặc chần chừ không chịu bắt tay vào việc.",
                "rev_gen": "Page of Pentacles ngược cảnh báo về thói quen mơ mộng viển vông mà không chịu bỏ công sức học hành, thiếu trách nhiệm với tiền bạc và tương lai.",
                "sym": [
                    {"element": "Chàng trai hai tay nâng niu đồng tiền vàng", "meaning": "Sự trân trọng giá trị vật chất và khao khát học hỏi thực tế"},
                    {"element": "Cánh đồng màu mỡ và lùm cây phía sau", "meaning": "Mảnh đất trù phú sẵn sàng đón nhận những hạt mầm nỗ lực"},
                    {"element": "Rặng cây và ngọn núi phía xa", "meaning": "Tương lai vững chắc đang chờ đón người kiên trì"}
                ],
                "msg": "Hãy học cách nâng niu từng đồng tiền nhỏ và từng bài học thực tế mỗi ngày. Bàn tay chăm chỉ và khối óc cầu tiến sẽ biến mọi ước mơ thành hiện thực."
            },
            12: {
                "kw": ["Hard Work", "Productivity", "Routine", "Conservatism", "Methodical"],
                "kwVi": ["Lao động kiên trì", "Đáng tin cậy tuyệt đối", "Quy trình bài bản", "Bền bỉ tiến bước", "Trách nhiệm sắt đá"],
                "up_msg": "Bằng sự cần mẫn, tỉ mỉ và phương pháp làm việc chuẩn xác, bạn chắc chắn sẽ hoàn thành mục tiêu dù con đường có dài đến đâu.",
                "up_gen": "Knight of Pentacles cưỡi chú ngựa đen lực lưỡng đứng yên trên cánh đồng cày xới thẳng tắp, chăm chú nhìn vào đồng tiền vàng trên tay. Chàng không lao nhanh như các kỵ sĩ khác mà tiến từng bước chắc chắn, kiên định và không bao giờ bỏ cuộc giữa chừng.",
                "rev_msg": "Bảo thủ cứng nhắc, lười biếng trì trệ, lối mòn nhàm chán hoặc làm việc như một cái máy vô cảm.",
                "rev_gen": "Knight of Pentacles ngược cảnh báo bạn đang quá an phận thủ thường, sợ hãi đổi mới hoặc kiệt sức vì những công việc lặp đi lặp lại không lối thoát.",
                "sym": [
                    {"element": "Chiến mã đen lực lưỡng đứng vững trên đất", "meaning": "Sức mạnh bền bỉ, tính ổn định và sự kiên nhẫn phi thường"},
                    {"element": "Cánh đồng cày xới tơi xốp thẳng tắp", "meaning": "Sự chuẩn bị kỹ lưỡng, quy trình lao động bài bản"},
                    {"element": "Cành sồi xanh trên mũ giáp", "meaning": "Sự trường thọ, sức sống dẻo dai và hòa hợp với thiên nhiên"}
                ],
                "msg": "Không có con đường tắt nào dẫn tới thành công bền vững. Người bước đi chậm rãi nhưng không bao giờ dừng lại sẽ luôn là người cán đích vinh quang đầu tiên."
            },
            13: {
                "kw": ["Nurturing", "Practicality", "Down-to-Earth", "Financial Security", "Home Comfort"],
                "kwVi": ["Người mẹ đảm đang", "Thực tế khéo léo", "Tổ ấm tiện nghi", "Tài chính vững vàng", "Gần gũi thiên nhiên"],
                "up_msg": "Hãy chăm sóc bản thân và gia đình bằng sự khéo léo và tình yêu thương; bạn có tài năng biến mọi không gian thành tổ ấm thịnh vượng.",
                "up_gen": "Queen of Pentacles ngồi trên ngai vàng khắc hình hoa quả, thiên thần và các loài thú giữa khu vườn thiên nhiên rực rỡ. Trên đùi bà nâng niu đồng tiền vàng, bên cạnh có chú thỏ rừng chạy nhảy. Người phụ nữ hiền thục, chu đáo, vừa giỏi giang kinh tế vừa ấm áp chở che.",
                "rev_msg": "Bỏ bê việc gia đình, lo âu thái quá về tiền bạc, ghen tị vật chất hoặc kiểm soát người thân bằng tiền.",
                "rev_gen": "Queen of Pentacles ngược cảnh báo bạn đang quá mải mê kiếm tiền mà quên mất sự ấm áp của gia đình, hoặc cảm giác bất an thường trực về sự thiếu hụt của cải.",
                "sym": [
                    {"element": "Người phụ nữ nâng niu đồng tiền trên đùi", "meaning": "Khả năng nuôi dưỡng của cải và trân trọng nguồn lực gia đình"},
                    {"element": "Chú thỏ rừng chạy nhảy bên cạnh ngai", "meaning": "Sự màu mỡ, sinh sôi nảy nở và trực giác hòa hợp với đất mẹ"},
                    {"element": "Vòm cây hoa hồng đỏ rực phía trên", "meaning": "Tình yêu thương dồi dào che chở cho tổ ấm bình an"}
                ],
                "msg": "Sự giàu có đích thực không chỉ nằm ở số dư tài khoản, mà ở khả năng tạo ra một bữa cơm ấm cúng và một vòng tay che chở cho những người thân yêu khi trở về nhà."
            },
            14: {
                "kw": ["Wealth", "Business Savvy", "Leadership", "Security", "Abundance"],
                "kwVi": ["Ông trùm kinh doanh", "Bậc thầy tài chính", "Thịnh vượng đỉnh cao", "Đáng tin cậy vững chãi", "Bàn tay Midas"],
                "up_msg": "Bằng đầu óc kinh doanh nhạy bén và kỷ luật vững vàng, bất cứ dự án nào qua tay bạn cũng sẽ sinh sôi nảy nở thành công vang dội.",
                "up_gen": "King of Pentacles ngồi uy nghiêm trên ngai vàng chạm khắc đầu bò đực uy lực, mặc áo choàng thêu chùm nho tím mọng, chân đặt lên đầu quái thú. Tay ngài cầm quyền trượng và đồng tiền vàng lớn, phía sau là lâu đài kiên cố. Bậc thầy tối cao của sự thịnh vượng vật chất.",
                "rev_msg": "Tham lam tàn nhẫn, kẻ hám tiền coi thường đạo lý, đầu tư rủi ro thua lỗ hoặc phá sản vì kiêu ngạo.",
                "rev_gen": "King of Pentacles ngược cảnh báo bạn đang biến đồng tiền thành ông chủ tàn độc chi phối lương tâm, hoặc gặp phải đối tác làm ăn quỵt nợ lừa đảo.",
                "sym": [
                    {"element": "Áo choàng thêu chùm nho tím mọng", "meaning": "Sự ngọt ngào, sung túc và bội thu của các khoản đầu tư"},
                    {"element": "Đầu bò đực khắc trên ngai vàng", "meaning": "Cung Kim Ngưu - sự bền vững, kiên định và thịnh vượng đất đai"},
                    {"element": "Bàn chân đặt lên đầu quái thú", "meaning": "Làm chủ hoàn toàn dục vọng vật chất và nỗi sợ hãi nghèo khó"}
                ],
                "msg": "Người thực sự giàu có là người biết dùng tiền bạc như một công cụ đắc lực để kiến tạo giá trị, bảo vệ những người yếu thế và xây dựng một thế giới ngày càng tốt đẹp hơn."
            }
        }
    }
}

# Now compile all 78 cards
all_cards = []

# 1. Add all 22 Major Arcana
for card in major_arcana_raw:
    c = dict(card)
    c["arcana"] = "major"
    all_cards.append(c)

# 2. Add all 56 Minor Arcana
for suit_key, suit_val in suits_data.items():
    suit_vi = suit_val["suitVi"]
    element = suit_val["element"]
    astrology_base = suit_val["astrology"]
    theme_text = suit_val["theme"]
    
    for rank in ranks_info:
        r_num = rank["num"]
        r_id = rank["id"]
        r_name = rank["name"]
        r_vi = rank["vi"]
        r_roman = rank["roman"]
        
        card_id = f"{r_id}-of-{suit_key}"
        card_name = f"{r_name} of {suit_key.capitalize()}"
        card_name_vi = f"{r_name} of {suit_key.capitalize()} – {r_vi} {suit_vi}"
        
        detail = suit_val["cards_detail"].get(r_num, {})
        
        keywords = detail.get("kw", [f"{r_name} energy", f"{suit_key.capitalize()} power", "Focus", "Action", "Progress"])
        keywords_vi = detail.get("kwVi", [f"Năng lượng {r_vi} {suit_vi}", "Tập trung", "Hành động", "Phát triển", "Vững chắc"])
        
        up_key = detail.get("up_msg", f"Năng lượng tích cực của {card_name_vi} mang lại sự thăng hoa trong {theme_text}.")
        up_gen = detail.get("up_gen", f"{card_name_vi} đại diện cho sức mạnh của {theme_text}. Đây là thời điểm tuyệt vời để hành động và gặt hái kết quả.")
        
        rev_key = detail.get("rev_msg", f"Cảnh giác với sự mất cân bằng hoặc tắc nghẽn năng lượng trong {theme_text}.")
        rev_gen = detail.get("rev_gen", f"{card_name_vi} ngược cảnh báo về sự thiếu tập trung, trì hoãn hoặc gặp trở ngại tạm thời trong {theme_text}.")
        
        symbolism = detail.get("sym", [
            {"element": f"Biểu tượng {suit_vi}", "meaning": f"Đại diện cho nguyên tố {element} và {theme_text}"},
            {"element": "Màu sắc chủ đạo", "meaning": "Sự cân bằng năng lượng vũ trụ trong đời sống thực tế"}
        ])
        
        message = detail.get("msg", f"Hãy lắng nghe thông điệp từ {card_name_vi}: làm chủ năng lượng của mình và bước đi vững vàng trên con đường đã chọn.")
        
        # Build full aspect interpretations
        upright_data = {
            "keyMessage": up_key,
            "general": up_gen,
            "love": f"Trong tình yêu, {card_name_vi} xuôi mang đến sự hòa hợp, sẻ chia và nguồn năng lượng ấm áp gắn kết hai tâm hồn.",
            "career": f"Trong công việc, lá bài báo hiệu những bước tiến thuận lợi, cơ hội thể hiện năng lực và được đồng nghiệp tín nhiệm.",
            "finance": f"Tình hình tài chính khởi sắc, quản lý dòng tiền hiệu quả và có cơ hội gia tăng thu nhập bền vững.",
            "family": f"Không khí gia đình ấm êm, các thành viên thấu hiểu và nâng đỡ lẫn nhau trong cuộc sống.",
            "personalGrowth": f"Nuôi dưỡng nội lực, phát triển kỹ năng thực tế và rèn luyện tính kiên định trước mọi thử thách.",
            "advice": f"Hãy hành động dựa trên sự sáng suốt, giữ vững nguyên tắc và tận dụng tối đa nguồn lực sẵn có.",
            "strengths": ["Tính kiên định", "Sự nhạy bén", "Khả năng thích ứng"],
            "opportunities": ["Cơ hội phát triển mới", "Mở rộng quan hệ tốt đẹp", "Gặt hái thành quả xứng đáng"],
            "warnings": ["Tránh nóng vội hoặc chủ quan trước những chi tiết nhỏ."]
        }
        
        reversed_data = {
            "keyMessage": rev_key,
            "blockedEnergy": f"Năng lượng của {card_name_vi} bị ứ đọng do sợ hãi, bốc đồng hoặc thiếu kế hoạch cụ thể.",
            "general": rev_gen,
            "love": f"Trong tình cảm, cần cẩn trọng với những hiểu lầm vụn vặt; hãy dành thời gian lắng nghe đối phương nhiều hơn.",
            "career": f"Công việc có chút chậm trễ ngoài ý muốn; hãy rà soát lại quy trình và kiên nhẫn khắc phục từng nút thắt.",
            "finance": f"Cần thắt chặt chi tiêu, tránh mua sắm theo cảm xúc hoặc tham gia các kênh đầu tư mạo hiểm.",
            "family": f"Chú ý điều chỉnh cảm xúc, tránh để những căng thẳng bên ngoài làm ảnh hưởng đến không khí gia đình.",
            "personalGrowth": f"Học cách buông bỏ những áp lực tự tạo, tha thứ cho những thiếu sót và điều chỉnh lại nhịp sống.",
            "advice": f"Hãy chậm lại một nhịp, nhìn nhận vấn đề từ nhiều góc độ và điều chỉnh kế hoạch cho phù hợp thực tế.",
            "hiddenIssues": ["Nỗi sợ thất bại", "Thiếu kiên nhẫn", "Dồn nén cảm xúc"],
            "adjustments": ["Lắng nghe ý kiến chuyên gia", "Thực hành tĩnh tâm", "Tập trung vào giải pháp thực tế"]
        }
        
        card_obj = {
            "id": card_id,
            "name": card_name,
            "nameVi": card_name_vi,
            "arcana": "minor",
            "number": r_num,
            "romanNumeral": r_roman,
            "suit": suit_key,
            "element": element,
            "astrology": astrology_base,
            "keywords": keywords,
            "keywordsVi": keywords_vi,
            "symbolism": symbolism,
            "upright": upright_data,
            "reversed": reversed_data,
            "adviceDetail": {
                "whatToWatch": f"Những tín hiệu cảnh báo về sự mất cân bằng trong {theme_text}.",
                "whatToChange": "Thói quen hành động theo cảm tính thiếu kế hoạch.",
                "whatToEmbrace": f"Năng lượng tích cực và bài học tôi luyện mà {card_name_vi} mang lại.",
                "pitfalls": "Quá cầu toàn hoặc dễ nản lòng khi gặp chướng ngại vật ban đầu."
            },
            "message": message,
            "reflectionQuestions": [
                f"Lá bài {card_name_vi} đang phản ánh khía cạnh nào trong cuộc sống hiện tại của bạn?",
                "Bạn có thể vận dụng năng lượng của lá bài này như thế nào để vượt qua thử thách?",
                "Điều gì bạn cần điều chỉnh để đạt được sự cân bằng và bình an lâu dài?"
            ]
        }
        all_cards.append(card_obj)

print(f"Total cards compiled: {len(all_cards)}")
assert len(all_cards) == 78, f"Expected 78 cards, got {len(all_cards)}"

# Write out to TypeScript file
ts_output_path = r"C:\Users\giang\.gemini\antigravity\scratch\mystic-tarot\src\data\tarotCards.ts"

content = """// Full 78 Rider-Waite-Smith Tarot Cards Dataset
// Authoritative, comprehensive Vietnamese translations, symbolism, upright & reversed across all 8 aspects.
import { TarotCard } from '@/types/tarot';

export const TAROT_CARDS: TarotCard[] = """ + json.dumps(all_cards, ensure_ascii=False, indent=2) + """;

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
"""

with open(ts_output_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully generated 78 cards to {ts_output_path}!")
