import { TuViStar } from '@/types/tuvi';

export const DIA_CHI = [
  'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
  'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
] as const;

export const THIEN_CAN = [
  'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu',
  'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'
] as const;

export const GIO_SINH_LIST = [
  { chi: 'Tý', range: '23h00 - 00h59', desc: 'Canh một, đêm sâu tĩnh mịch, trực giác nhạy bén' },
  { chi: 'Sửu', range: '01h00 - 02h59', desc: 'Canh hai, trâu nhai lại, tính tình kiên trì, chịu khó' },
  { chi: 'Dần', range: '03h00 - 04h59', desc: 'Canh ba, hổ thức giấc, chí khí bừng khởi, uy phong' },
  { chi: 'Mão', range: '05h00 - 06h59', desc: 'Bình minh hé rạng, ôn hòa, thông minh, tinh tế' },
  { chi: 'Thìn', range: '07h00 - 08h59', desc: 'Rồng phun mưa, chí lớn vùng vẫy, nhiều tham vọng' },
  { chi: 'Tỵ', range: '09h00 - 10h59', desc: 'Rắn ẩn mình, tư duy sắc sảo, cơ mưu thâm thúy' },
  { chi: 'Ngọ', range: '11h00 - 12h59', desc: 'Mặt trời đỉnh núi, nhiệt huyết bừng sáng, chính trực' },
  { chi: 'Mùi', range: '13h00 - 14h59', desc: 'Dê gặm cỏ, tính tình hòa nhã, nhân hậu, nghệ thuật' },
  { chi: 'Thân', range: '15h00 - 16h59', desc: 'Khỉ chuyền cành, linh hoạt, đa tài, giao tiếp giỏi' },
  { chi: 'Dậu', range: '17h00 - 18h59', desc: 'Hoàng hôn buông, cẩn trọng, ngăn nắp, có duyên ngầm' },
  { chi: 'Tuất', range: '19h00 - 20h59', desc: 'Chó giữ nhà, trung thành, trọng chữ tín, bảo vệ người thân' },
  { chi: 'Hợi', range: '21h00 - 22h59', desc: 'Đêm về yên tĩnh, phúc hậu, an nhàn, có chiều sâu' }
];

export const LUC_THAP_HOA_GIAP: Record<string, { menh: string; element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ' }> = {
  'Giáp Tý': { menh: 'Hải Trung Kim (Vàng trong biển)', element: 'Kim' },
  'Ất Sửu': { menh: 'Hải Trung Kim (Vàng trong biển)', element: 'Kim' },
  'Bính Dần': { menh: 'Lư Trung Hỏa (Lửa trong lò)', element: 'Hỏa' },
  'Đinh Mão': { menh: 'Lư Trung Hỏa (Lửa trong lò)', element: 'Hỏa' },
  'Mậu Thìn': { menh: 'Đại Lâm Mộc (Cây rừng lớn)', element: 'Mộc' },
  'Kỷ Tỵ': { menh: 'Đại Lâm Mộc (Cây rừng lớn)', element: 'Mộc' },
  'Canh Ngọ': { menh: 'Lộ Bàng Thổ (Đất ven đường)', element: 'Thổ' },
  'Tân Mùi': { menh: 'Lộ Bàng Thổ (Đất ven đường)', element: 'Thổ' },
  'Nhâm Thân': { menh: 'Kiếm Phong Kim (Vàng mũi kiếm)', element: 'Kim' },
  'Quý Dậu': { menh: 'Kiếm Phong Kim (Vàng mũi kiếm)', element: 'Kim' },
  'Giáp Tuất': { menh: 'Sơn Đầu Hỏa (Lửa trên núi)', element: 'Hỏa' },
  'Ất Hợi': { menh: 'Sơn Đầu Hỏa (Lửa trên núi)', element: 'Hỏa' },
  'Bính Tý': { menh: 'Giản Hạ Thủy (Nước dưới khe)', element: 'Thủy' },
  'Đinh Sửu': { menh: 'Giản Hạ Thủy (Nước dưới khe)', element: 'Thủy' },
  'Mậu Dần': { menh: 'Thành Đầu Thổ (Đất trên thành)', element: 'Thổ' },
  'Kỷ Mão': { menh: 'Thành Đầu Thổ (Đất trên thành)', element: 'Thổ' },
  'Canh Thìn': { menh: 'Bạch Lạp Kim (Vàng sáp ong)', element: 'Kim' },
  'Tân Tỵ': { menh: 'Bạch Lạp Kim (Vàng sáp ong)', element: 'Kim' },
  'Nhâm Ngọ': { menh: 'Dương Liễu Mộc (Gỗ cây liễu)', element: 'Mộc' },
  'Quý Mùi': { menh: 'Dương Liễu Mộc (Gỗ cây liễu)', element: 'Mộc' },
  'Giáp Thân': { menh: 'Tuyền Trung Thủy (Nước trong suối)', element: 'Thủy' },
  'Ất Dậu': { menh: 'Tuyền Trung Thủy (Nước trong suối)', element: 'Thủy' },
  'Bính Tuất': { menh: 'Ốc Thượng Thổ (Đất trên mái nhà)', element: 'Thổ' },
  'Đinh Hợi': { menh: 'Ốc Thượng Thổ (Đất trên mái nhà)', element: 'Thổ' },
  'Mậu Tý': { menh: 'Tích Lịch Hỏa (Lửa sấm sét)', element: 'Hỏa' },
  'Kỷ Sửu': { menh: 'Tích Lịch Hỏa (Lửa sấm sét)', element: 'Hỏa' },
  'Canh Dần': { menh: 'Tùng Bách Mộc (Gỗ cây tùng)', element: 'Mộc' },
  'Tân Mão': { menh: 'Tùng Bách Mộc (Gỗ cây tùng)', element: 'Mộc' },
  'Nhâm Thìn': { menh: 'Trường Lưu Thủy (Nước sông dài)', element: 'Thủy' },
  'Quý Tỵ': { menh: 'Trường Lưu Thủy (Nước sông dài)', element: 'Thủy' },
  'Giáp Ngọ': { menh: 'Sa Trung Kim (Vàng trong cát)', element: 'Kim' },
  'Ất Mùi': { menh: 'Sa Trung Kim (Vàng trong cát)', element: 'Kim' },
  'Bính Thân': { menh: 'Sơn Hạ Hỏa (Lửa dưới núi)', element: 'Hỏa' },
  'Đinh Dậu': { menh: 'Sơn Hạ Hỏa (Lửa dưới núi)', element: 'Hỏa' },
  'Mậu Tuất': { menh: 'Bình Địa Mộc (Cây đồng bằng)', element: 'Mộc' },
  'Kỷ Hợi': { menh: 'Bình Địa Mộc (Cây đồng bằng)', element: 'Mộc' },
  'Canh Tý': { menh: 'Bích Thượng Thổ (Đất trên vách)', element: 'Thổ' },
  'Tân Sửu': { menh: 'Bích Thượng Thổ (Đất trên vách)', element: 'Thổ' },
  'Nhâm Dần': { menh: 'Kim Bạch Kim (Vàng trắng)', element: 'Kim' },
  'Quý Mão': { menh: 'Kim Bạch Kim (Vàng trắng)', element: 'Kim' },
  'Giáp Thìn': { menh: 'Phúc Đăng Hỏa (Lửa ngọn đèn)', element: 'Hỏa' },
  'Ất Tỵ': { menh: 'Phúc Đăng Hỏa (Lửa ngọn đèn)', element: 'Hỏa' },
  'Bính Ngọ': { menh: 'Thiên Hà Thủy (Nước trên trời)', element: 'Thủy' },
  'Đinh Mùi': { menh: 'Thiên Hà Thủy (Nước trên trời)', element: 'Thủy' },
  'Mậu Thân': { menh: 'Đại Trạch Thổ (Đất đầm lầy)', element: 'Thổ' },
  'Kỷ Dậu': { menh: 'Đại Trạch Thổ (Đất đầm lầy)', element: 'Thổ' },
  'Canh Tuất': { menh: 'Thoa Xuyến Kim (Vàng trang sức)', element: 'Kim' },
  'Tân Hợi': { menh: 'Thoa Xuyến Kim (Vàng trang sức)', element: 'Kim' },
  'Nhâm Tý': { menh: 'Tang Đố Mộc (Gỗ cây dâu)', element: 'Mộc' },
  'Quý Sửu': { menh: 'Tang Đố Mộc (Gỗ cây dâu)', element: 'Mộc' },
  'Giáp Dần': { menh: 'Đại Khê Thủy (Nước khe lớn)', element: 'Thủy' },
  'Ất Mão': { menh: 'Đại Khê Thủy (Nước khe lớn)', element: 'Thủy' },
  'Bính Thìn': { menh: 'Sa Trung Thổ (Đất trong cát)', element: 'Thổ' },
  'Đinh Tỵ': { menh: 'Sa Trung Thổ (Đất trong cát)', element: 'Thổ' },
  'Mậu Ngọ': { menh: 'Thiên Thượng Hỏa (Lửa trên trời)', element: 'Hỏa' },
  'Kỷ Mùi': { menh: 'Thiên Thượng Hỏa (Lửa trên trời)', element: 'Hỏa' },
  'Canh Thân': { menh: 'Thạch Lựu Mộc (Gỗ cây lựu đá)', element: 'Mộc' },
  'Tân Dậu': { menh: 'Thạch Lựu Mộc (Gỗ cây lựu đá)', element: 'Mộc' },
  'Nhâm Tuất': { menh: 'Đại Hải Thủy (Nước biển lớn)', element: 'Thủy' },
  'Quý Hợi': { menh: 'Đại Hải Thủy (Nước biển lớn)', element: 'Thủy' }
};

export const CUNG_LIST = [
  { id: 'menh', nameVi: 'Mệnh', role: 'Bản thân, dung mạo, tài năng, tính cách cốt lõi, thọ yểu' },
  { id: 'phu_mau', nameVi: 'Phụ Mẫu', role: 'Cha mẹ, dòng dõi tiền nhân, sự bảo bọc gia đình lúc nhỏ' },
  { id: 'phuc_duc', nameVi: 'Phúc Đức', role: 'Phúc ấm tổ tiên, dòng họ, may mắn, tuổi thọ, tâm tính' },
  { id: 'dien_trach', nameVi: 'Điền Trạch', role: 'Nhà cửa, đất đai, bất động sản, gia sản tích lũy' },
  { id: 'quan_loc', nameVi: 'Quan Lộc', role: 'Công danh, sự nghiệp, học vị, chức vụ, đường thăng tiến' },
  { id: 'no_boc', nameVi: 'Nô Bộc', role: 'Bạn bè, đồng nghiệp, cấp dưới, người trợ giúp trong đời' },
  { id: 'thien_di', nameVi: 'Thiên Di', role: 'Ra ngoài xã hội, xuất ngoại, giao tiếp, môi trường xung quanh' },
  { id: 'tat_ach', nameVi: 'Tật Ách', role: 'Sức khỏe, bệnh tật, tai ách, họa nạn và khả năng hóa giải' },
  { id: 'tai_bach', nameVi: 'Tài Bạch', role: 'Tiền bạc, cách kiếm tiền, quản lý tài chính, đại phú hay bình ổn' },
  { id: 'tu_tuc', nameVi: 'Tử Tức', role: 'Con cái, số lượng, hậu vận con cháu, sự hiếu thuận' },
  { id: 'phu_the', nameVi: 'Phu Thê', role: 'Hôn nhân, vợ/chồng, duyên phận, hạnh phúc gia đạo' },
  { id: 'huynh_de', nameVi: 'Huynh Đệ', role: 'Anh chị em ruột, mối quan hệ hòa thuận hay tương khắc' }
];

export const CHINH_TINH_INFO: Record<string, { element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'; trait: string; meaning: string }> = {
  'Tử Vi': {
    element: 'Thổ',
    trait: 'Đế Tinh – Vua của các vì sao',
    meaning: 'Chủ về quyền uy, phúc lộc, phẩm cách cao quý, có tư chất lãnh đạo thiên bẩm, đức độ bao dung.'
  },
  'Thiên Cơ': {
    element: 'Mộc',
    trait: 'Thiện Tinh – Trí tuệ & Mưu lược',
    meaning: 'Chủ về trí tuệ mẫn tiệp, linh hoạt, khéo léo tính toán, nhân hậu, thích nghiên cứu huyền học, công nghệ.'
  },
  'Thái Dương': {
    element: 'Hỏa',
    trait: 'Quang Minh Tinh – Mặt Trời rực rỡ',
    meaning: 'Chủ về quang minh chính đại, hào phóng, danh tiếng lẫy lừng, quan tâm che chở cộng đồng.'
  },
  'Vũ Khúc': {
    element: 'Kim',
    trait: 'Tài Tinh – Của cải & Quyết đoán',
    meaning: 'Chủ về tài lộc thực chất, óc kinh doanh nhạy bén, tính cách quả cảm, dứt khoát, kỷ luật cao.'
  },
  'Thiên Đồng': {
    element: 'Thủy',
    trait: 'Phúc Tinh – Hồn nhiên & Phúc thọ',
    meaning: 'Chủ về tâm hồn trong sáng, dễ thích nghi, có duyên may được quý nhân phò trợ, thích an nhàn.'
  },
  'Liêm Trinh': {
    element: 'Hỏa',
    trait: 'Tù Tinh & Đào Hoa – Trực cảm mãnh liệt',
    meaning: 'Chủ về ý chí kiên định, lòng tự tôn cao, yêu ghét phân minh, có sức hút cá nhân bí ẩn.'
  },
  'Thiên Phủ': {
    element: 'Thổ',
    trait: 'Lệnh Tinh – Kho trời cất giữ của cải',
    meaning: 'Chủ về quản lý tài chính chu đáo, điềm đạm, khoan dung, gia đạo vững bền, phú quý trường tồn.'
  },
  'Thái Âm': {
    element: 'Thủy',
    trait: 'Phú Tinh – Mặt trăng dịu dàng',
    meaning: 'Chủ về điền sản, giàu có sâu lắng, tình cảm tinh tế, khiếu nghệ thuật, vượng đường nhân duyên.'
  },
  'Tham Lang': {
    element: 'Thủy',
    trait: 'Dục Tinh – Tài hoa & Khát vọng',
    meaning: 'Chủ về giao tế xuất sắc, đa tài đa nghệ, nhiều tham vọng khám phá cuộc sống, biến hóa linh hoạt.'
  },
  'Cự Môn': {
    element: 'Thủy',
    trait: 'Ám Tinh – Khẩu tài & Phản biện',
    meaning: 'Chủ về hùng biện, ngôn ngữ sắc sảo, tư duy phản biện sâu sắc, thích mổ xẻ tận gốc vấn đề.'
  },
  'Thiên Tướng': {
    element: 'Thủy',
    trait: 'Ấn Tinh – Tướng soái trung nghĩa',
    meaning: 'Chủ về lòng trượng nghĩa, chu đáo, có nguyên tắc, uy phong danh dự, thích làm việc thiện phò đời.'
  },
  'Thiên Lương': {
    element: 'Mộc',
    trait: 'Ấm Tinh & Thọ Tinh – Cây cao bóng cả',
    meaning: 'Chủ về tính tình nhân từ, phúc thọ diên niên, thích che chở cứu giúp người khác, học vấn uyên bác.'
  },
  'Thất Sát': {
    element: 'Kim',
    trait: 'Tướng Tinh – Quyết liệt & Đột phá',
    meaning: 'Chủ về chí dũng song toàn, thích xông pha nơi đầu sóng ngọn gió, độc lập tự cường, dám nghĩ dám làm.'
  },
  'Phá Quân': {
    element: 'Thủy',
    trait: 'Hao Tinh – Tiên phong đổi mới',
    meaning: 'Chủ về tinh thần cách tân, dẹp bỏ cái cũ kiến tạo cái mới, can đảm đối diện biến động.'
  }
};

export const PHU_TINH_CAT = [
  { name: 'Hóa Lộc', element: 'Mộc' as const, meaningVi: 'Tài lộc dồi dào, duyên may kiếm tiền, hanh thông tài chính' },
  { name: 'Hóa Quyền', element: 'Hỏa' as const, meaningVi: 'Nắm giữ quyền lực, uy thế, khả năng chỉ huy lãnh đạo' },
  { name: 'Hóa Khoa', element: 'Thủy' as const, meaningVi: 'Học hàm học vị, đệ nhất giải ách, thông tuệ danh tiếng' },
  { name: 'Lộc Tồn', element: 'Thổ' as const, meaningVi: 'Kho lộc trời ban, của nả tích lũy, điềm đạm trường tồn' },
  { name: 'Tả Phù', element: 'Thổ' as const, meaningVi: 'Quý nhân phò trợ bên tả, bạn bè giúp đỡ tận tâm' },
  { name: 'Hữu Bật', element: 'Thủy' as const, meaningVi: 'Người trợ lực bên hữu, mưu sự có người đồng lòng' },
  { name: 'Văn Xương', element: 'Kim' as const, meaningVi: 'Học vấn xuất chúng, văn chương lỗi lạc, thi cử đỗ đạt' },
  { name: 'Văn Khúc', element: 'Thủy' as const, meaningVi: 'Tài năng nghệ thuật, khiếu hùng biện, tài hoa tao nhã' },
  { name: 'Thiên Khôi', element: 'Hỏa' as const, meaningVi: 'Đầu đàn, dẫn đầu, gặp gỡ quý nhân chức trọng' },
  { name: 'Thiên Việt', element: 'Hỏa' as const, meaningVi: 'Được nâng đỡ ngầm, quý nhân che chở trong lúc ngặt nghèo' },
  { name: 'Đào Hoa', element: 'Mộc' as const, meaningVi: 'Duyên dáng, có sức hút quyến rũ, thành công sớm' },
  { name: 'Hồng Loan', element: 'Thủy' as const, meaningVi: 'Tình duyên thắm đượm, vẻ đẹp thanh tao, hỷ sự tốt lành' },
  { name: 'Thiên Mã', element: 'Hỏa' as const, meaningVi: 'Bôn ba nhanh nhẹn, chí tiến thủ mạnh, phát đạt ở phương xa' }
];

export const PHU_TINH_HUNG = [
  { name: 'Hóa Kỵ', element: 'Thủy' as const, meaningVi: 'Thị phi, ghen ghét, trở ngại tâm lý, bài học thức tỉnh' },
  { name: 'Kình Dương', element: 'Kim' as const, meaningVi: 'Cương cường, xốc vác, dễ va chạm, mũi nhọn xung phong' },
  { name: 'Đà La', element: 'Kim' as const, meaningVi: 'Trầm trệ, vướng bận, cần kiên nhẫn vượt qua thử thách' },
  { name: 'Hỏa Tinh', element: 'Hỏa' as const, meaningVi: 'Nóng nảy, bộc phát nhanh, cần kiềm chế cơn giận dữ' },
  { name: 'Linh Tinh', element: 'Hỏa' as const, meaningVi: 'Âm ỉ, thâm trầm, dễ dồn nén cảm xúc, cần mở lòng' },
  { name: 'Địa Không', element: 'Hỏa' as const, meaningVi: 'Khát khao vượt khuôn khổ, dễ thăng trầm, có duyên với tâm linh' },
  { name: 'Địa Kiếp', element: 'Hỏa' as const, meaningVi: 'Sóng gió tôi luyện bản lĩnh, biến cố giúp ngộ ra chân lý' }
];
