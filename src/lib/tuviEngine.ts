import {
  TuViChartResult,
  TuViInput,
  TuViPalace,
  TuViStar
} from '@/types/tuvi';
import {
  CHINH_TINH_INFO,
  CUNG_LIST,
  DIA_CHI,
  LUC_THAP_HOA_GIAP,
  PHU_TINH_CAT,
  PHU_TINH_HUNG,
  THIEN_CAN
} from '@/data/tuviData';

/**
 * Helper: Find Can and Chi of Year
 */
function getCanChiNam(nam: number): { can: string; chi: string; full: string; canIndex: number; chiIndex: number } {
  // Can: (nam - 4) % 10
  const canIdx = (nam - 4) % 10;
  const canNorm = canIdx < 0 ? canIdx + 10 : canIdx;
  const can = THIEN_CAN[canNorm];

  // Chi: (nam - 4) % 12
  const chiIdx = (nam - 4) % 12;
  const chiNorm = chiIdx < 0 ? chiIdx + 12 : chiIdx;
  const chi = DIA_CHI[chiNorm];

  return { can, chi, full: `${can} ${chi}`, canIndex: canNorm, chiIndex: chiNorm };
}

/**
 * Determine Ngũ Hành Cục from Year Can & Palace Mệnh Branch
 */
function determineCuc(yearCanIdx: number, menhChiIdx: number): { name: string; number: number } {
  // Traditional formula: Can pairs (Giáp Kỷ: 1, Ất Canh: 2, Bính Tân: 3, Đinh Nhâm: 4, Mậu Quý: 5)
  const canPair = Math.floor(yearCanIdx % 5);
  const chiPair = Math.floor(menhChiIdx / 2) % 3;

  // Matrix of Cục
  const cucMatrix = [
    // Tý/Sửu (0), Dần/Mão (1), Thìn/Tỵ (2)
    [2, 6, 5], // Thủy Nhị Cục (2), Hỏa Lục Cục (6), Thổ Ngũ Cục (5)
    [3, 4, 2], // Mộc Tam Cục (3), Kim Tứ Cục (4), Thủy Nhị Cục (2)
    [4, 2, 6],
    [5, 3, 4],
    [6, 5, 3]
  ];

  const cucNum = cucMatrix[canPair][chiPair] || 2;
  const cucNames: Record<number, string> = {
    2: 'Thủy Nhị Cục',
    3: 'Mộc Tam Cục',
    4: 'Kim Tứ Cục',
    5: 'Thổ Ngũ Cục',
    6: 'Hỏa Lục Cục'
  };

  return { name: cucNames[cucNum] || 'Thủy Nhị Cục', number: cucNum };
}

/**
 * Calculate full Tu Vi Chart and deep detailed interpretations
 */
export function calculateTuViChart(input: TuViInput): TuViChartResult {
  const namSinh = input.namSinh;
  const thangSinh = Math.max(1, Math.min(12, input.thangSinh));
  const ngaySinh = Math.max(1, Math.min(30, input.ngaySinh));
  const namXem = input.namXem || 2026;

  // 1. Can Chi Year
  const namCanChi = getCanChiNam(namSinh);

  // 2. Nap Am of Year
  const napAmInfo = LUC_THAP_HOA_GIAP[namCanChi.full] || {
    menh: 'Hải Trung Kim (Vàng trong biển)',
    element: 'Kim' as const
  };

  // 3. Find Chi index of birth hour
  const gioChiIdx = Math.max(0, DIA_CHI.indexOf(input.gioSinhChi as typeof DIA_CHI[number]));
  const safeGioChiIdx = gioChiIdx >= 0 ? gioChiIdx : 0;

  // 4. Calculate Cung Mệnh & Cung Thân
  // Start from Dần (index 2) count clockwise (tháng - 1), then counter-clockwise (giờ)
  let menhIdx = (2 + (thangSinh - 1) - safeGioChiIdx) % 12;
  if (menhIdx < 0) menhIdx += 12;

  // Cung Thân: Start from Dần count clockwise (tháng - 1), then clockwise (giờ)
  const thanIdx = (2 + (thangSinh - 1) + safeGioChiIdx) % 12;

  // 5. Determine Cục
  const cuc = determineCuc(namCanChi.canIndex, menhIdx);

  // 6. Yin / Yang Nature
  // Dương Can: Giáp, Bính, Mậu, Canh, Nhâm (index 0, 2, 4, 6, 8)
  const isDuongNam = input.gioiTinh === 'nam' && namCanChi.canIndex % 2 === 0;
  const isAmNu = input.gioiTinh === 'nu' && namCanChi.canIndex % 2 === 1;
  const isThuanLy = isDuongNam || isAmNu;
  const amDuongMenh = `${input.gioiTinh === 'nam' ? (namCanChi.canIndex % 2 === 0 ? 'Dương Nam' : 'Âm Nam') : (namCanChi.canIndex % 2 === 0 ? 'Dương Nữ' : 'Âm Nữ')} ${isThuanLy ? 'Thuận Lý (Cuộc đời nhiều thuận cảnh, dễ gặp may)' : 'Nghịch Lý (Đời tôi luyện qua thử thách để thành tài)'}`;

  // 7. Mệnh - Cục tương quan
  const menhEl = napAmInfo.element;
  let menhCucTuongQuan = '';
  if (
    (cuc.number === 2 && menhEl === 'Mộc') ||
    (cuc.number === 3 && menhEl === 'Hỏa') ||
    (cuc.number === 4 && menhEl === 'Thủy') ||
    (cuc.number === 5 && menhEl === 'Kim') ||
    (cuc.number === 6 && menhEl === 'Thổ')
  ) {
    menhCucTuongQuan = 'Cục sinh Mệnh (Đại Cát: Hoàn cảnh thuận lợi nâng đỡ bản thân, dễ thành tựu đại nghiệp)';
  } else if (
    (cuc.number === 2 && menhEl === 'Thủy') ||
    (cuc.number === 3 && menhEl === 'Mộc') ||
    (cuc.number === 4 && menhEl === 'Kim') ||
    (cuc.number === 5 && menhEl === 'Thổ') ||
    (cuc.number === 6 && menhEl === 'Hỏa')
  ) {
    menhCucTuongQuan = 'Mệnh Cục tỷ hòa (Cát: Bản thân hòa hợp với môi trường sống, tự thân nỗ lực gặt hái)';
  } else {
    menhCucTuongQuan = 'Mệnh Cục tương khắc (Thử thách tôi luyện ý chí: Vượt qua gian nan sẽ đạt vinh hiển lâu bền)';
  }

  // 8. Place stars
  // Locate Tử Vi star based on Cục and Day of birth
  const tuViOffset = (ngaySinh % cuc.number) + Math.floor(ngaySinh / cuc.number);
  const tuViPos = (2 + tuViOffset) % 12;

  // 14 Main Stars positions
  // Chòm Tử Vi: Tử Vi (pos), Thiên Cơ (-1), Thái Dương (-3), Vũ Khúc (-4), Thiên Đồng (-5), Liêm Trinh (-8)
  const chinhTinhPositions: Record<string, number> = {
    'Tử Vi': tuViPos,
    'Thiên Cơ': (tuViPos - 1 + 12) % 12,
    'Thái Dương': (tuViPos - 3 + 12) % 12,
    'Vũ Khúc': (tuViPos - 4 + 12) % 12,
    'Thiên Đồng': (tuViPos - 5 + 12) % 12,
    'Liêm Trinh': (tuViPos - 8 + 12) % 12
  };

  // Chòm Thiên Phủ: Thiên Phủ đối xứng Tử Vi qua trục Dần - Thân (4 - tuViPos)
  const thienPhuPos = (4 - tuViPos + 12) % 12;
  chinhTinhPositions['Thiên Phủ'] = thienPhuPos;
  chinhTinhPositions['Thái Âm'] = (thienPhuPos + 1) % 12;
  chinhTinhPositions['Tham Lang'] = (thienPhuPos + 2) % 12;
  chinhTinhPositions['Cự Môn'] = (thienPhuPos + 3) % 12;
  chinhTinhPositions['Thiên Tướng'] = (thienPhuPos + 4) % 12;
  chinhTinhPositions['Thiên Lương'] = (thienPhuPos + 5) % 12;
  chinhTinhPositions['Thất Sát'] = (thienPhuPos + 6) % 12;
  chinhTinhPositions['Phá Quân'] = (thienPhuPos + 10) % 12;

  // 9. Assign 12 Palaces
  // Counter-clockwise from Mệnh: 0: Mệnh, 1: Phụ Mẫu, 2: Phúc Đức, 3: Điền Trạch, 4: Quan Lộc...
  const palaces: TuViPalace[] = CUNG_LIST.map((cungDef, idx) => {
    // Palace branch index (counter-clockwise)
    const palaceChiIdx = (menhIdx - idx + 12) % 12;
    const chiName = DIA_CHI[palaceChiIdx];

    // Palace Can
    const palaceCanIdx = (namCanChi.canIndex * 2 + palaceChiIdx) % 10;
    const canName = THIEN_CAN[palaceCanIdx];

    // Find main stars in this branch
    const starsInThisBranch: TuViStar[] = [];
    Object.entries(chinhTinhPositions).forEach(([starName, branchIdx]) => {
      if (branchIdx === palaceChiIdx) {
        const info = CHINH_TINH_INFO[starName];
        starsInThisBranch.push({
          name: starName,
          type: 'chinh_tinh',
          element: info.element,
          brightness: 'Miếu',
          meaningVi: info.meaning
        });
      }
    });

    // Add Phụ Tinh (selectively distributed for richness)
    const phuTinhList: TuViStar[] = [];
    // Tứ Hóa & Cát tinh placement
    const catOffset = (palaceChiIdx + namCanChi.canIndex) % PHU_TINH_CAT.length;
    const catStar = PHU_TINH_CAT[catOffset];
    phuTinhList.push({
      name: catStar.name,
      type: 'cat_tinh',
      element: catStar.element,
      meaningVi: catStar.meaningVi
    });

    if (idx % 2 === 0) {
      const hungOffset = (palaceChiIdx + safeGioChiIdx) % PHU_TINH_HUNG.length;
      const hungStar = PHU_TINH_HUNG[hungOffset];
      phuTinhList.push({
        name: hungStar.name,
        type: 'hung_tinh',
        element: hungStar.element,
        meaningVi: hungStar.meaningVi
      });
    }

    // Đại vận 10-year step: start from cuc.number
    const daiHanStep = isThuanLy ? (cuc.number + idx * 10) : (cuc.number + (12 - idx) * 10);

    // Rating
    const hasMainStar = starsInThisBranch.length > 0;
    const rating: TuViPalace['rating'] = hasMainStar ? (idx === 0 || idx === 4 || idx === 8 ? 'Đại Cát' : 'Cát') : 'Bình Hòa';

    // Summary & analysis based on palace role & stars
    const mainStarNames = starsInThisBranch.map((s) => s.name).join(', ') || 'Vô Chính Diệu (Mượn ánh sáng từ cung xung chiếu)';
    
    let detailedAnalysis = '';
    let advice = '';

    switch (cungDef.id) {
      case 'menh':
        detailedAnalysis = `Cung Mệnh an tại ${chiName}, ${mainStarNames ? `hội tụ chính tinh ${mainStarNames}` : 'thế Vô Chính Diệu'}. Đây là cung vị nắm giữ linh hồn và định hình phong thái, năng lực cốt lõi của đương số. Với nạp âm ${napAmInfo.menh}, bạn sở hữu tư chất thông tuệ, cốt cách cương nhu hòa hợp. Khi gặp nghịch cảnh, nội lực tiềm ẩn sẽ phát tiết mạnh mẽ giúp bạn vượt qua sóng gió.`;
        advice = 'Hãy giữ vững tâm thế điềm tĩnh, phát huy trí tuệ sâu sắc và sự chính trực; tránh nóng vội đưa ra quyết định khi cảm xúc đang dao động.';
        break;
      case 'quan_loc':
        detailedAnalysis = `Cung Quan Lộc an tại ${chiName}, quản hạt sự nghiệp và đường công danh. Sự hiện diện của ${mainStarNames} mở ra tiềm năng lãnh đạo, quản lý và năng lực chuyên môn vượt trội. Bạn phù hợp với các lĩnh vực đòi hỏi tầm nhìn chiến lược, tư duy sáng tạo hoặc quản lý tài chính, kinh doanh.`;
        advice = 'Tập trung xây dựng uy tín cá nhân và trau dồi chuyên môn sâu thay vì chạy theo những cơ hội ngắn hạn thiếu tính bền vững.';
        break;
      case 'tai_bach':
        detailedAnalysis = `Cung Tài Bạch an tại ${chiName}, phản ánh dòng chảy tiền tài và khả năng tích lũy của cải. Năng lượng tại đây báo hiệu nguồn tài chính ổn định và có xu hướng tăng trưởng mạnh mẽ ở độ tuổi trung niên. Tiền bạc kiếm được từ sự cần mẫn và trí tuệ thực chất.`;
        advice = 'Nên lập kế hoạch chi tiêu và đầu tư đa dạng hóa danh mục; tránh tham gia các kênh đầu tư mạo hiểm không rõ ràng về mặt pháp lý.';
        break;
      case 'phu_the':
        detailedAnalysis = `Cung Phu Thê an tại ${chiName}, chủ về duyên nợ lứa đôi và cuộc sống hôn nhân. Bạn và bạn đời có duyên tiền định sâu sắc, người phối ngẫu là người thông minh, chu đáo và biết vun vén cho tổ ấm gia đình. Đôi lúc có những khác biệt về quan điểm nhưng dễ dung hòa nếu biết lắng nghe.`;
        advice = 'Giao tiếp chân thành và tôn trọng không gian riêng của nhau là chìa khóa vàng gìn giữ ngọn lửa hạnh phúc viên mãn.';
        break;
      case 'phuc_duc':
        detailedAnalysis = `Cung Phúc Đức an tại ${chiName}, phản chiếu phúc ấm tổ tiên và đời sống tinh thần. Cung vị này cho thấy bạn được thừa hưởng phúc trạch từ dòng họ, thường xuyên gặp gỡ quý nhân tương trợ trong những bước ngoặt hiểm nghèo của cuộc đời.`;
        advice = 'Chăm lo mồ mả tổ tiên, hành thiện tích đức và giữ hiếu thảo với cha mẹ sẽ giúp gia tăng phúc khí và bảo trợ cho con cháu đời sau.';
        break;
      case 'thien_di':
        detailedAnalysis = `Cung Thiên Di xung chiếu trực tiếp với Cung Mệnh. Ra ngoài xã hội bạn có phong thái đĩnh đạc, dễ tạo thiện cảm và được đối tác, cấp trên tin cậy. Đi xa quê hương lập nghiệp hoặc xuất ngoại công tác sẽ mở ra nhiều cơ hội tài lộc và danh vọng.`;
        advice = 'Khi xuất hành xa cần chú ý an toàn giao thông và cẩn trọng lời ăn tiếng nói nơi đông người để tránh thị phi không đáng có.';
        break;
      case 'tat_ach':
        detailedAnalysis = `Cung Tật Ách phản ánh sức đề kháng và những chứng bệnh tiềm ẩn. Cần chú ý giữ gìn hệ tiêu hóa, dạ dày và huyết áp; đặc biệt tránh làm việc quá sức dẫn đến căng thẳng thần kinh suy nhược.`;
        advice = 'Duy trì lối sống lành mạnh, ăn uống điều độ, luyện tập thể thao nhẹ nhàng và thăm khám định kỳ để phòng bệnh từ sớm.';
        break;
      case 'dien_trach':
        detailedAnalysis = `Cung Điền Trạch cho thấy hậu vận có đất đai, nhà cửa khang trang. Bạn có duyên với bất động sản và khả năng tạo dựng nơi an cư vững chắc từ hai bàn tay trắng.`;
        advice = 'Khi mua bán nhà đất cần xem xét kỹ pháp lý và phong thủy; nên tích lũy tài sản thực tế thay vì giữ quá nhiều tiền mặt.';
        break;
      default:
        detailedAnalysis = `Cung ${cungDef.nameVi} an tại ${chiName}, hội tụ các nguồn năng lượng hài hòa giúp thúc đẩy vận trình tổng thể của đương số.`;
        advice = 'Giữ tâm thiện lương, đối đãi chân thành với mọi người xung quanh để đón nhận may mắn.';
        break;
    }

    return {
      id: cungDef.id,
      nameVi: cungDef.nameVi,
      chiIndex: palaceChiIdx,
      chiNameVi: chiName,
      canNameVi: canName,
      isMenhCung: idx === 0,
      isThanCung: palaceChiIdx === thanIdx,
      chinhTinh: starsInThisBranch,
      phuTinh: phuTinhList,
      daiHan: daiHanStep,
      tieuHan: `${chiName}`,
      rating,
      summary: `${mainStarNames} tọa thủ tại cung ${cungDef.nameVi}`,
      detailedAnalysis,
      advice
    };
  });

  // 10. Synthesize Full In-Depth Multi-Part Interpretation
  const menhPalace = palaces[0];
  const quanPalace = palaces[4];
  const taiPalace = palaces[8];
  const phuThePalace = palaces[10];
  const phucPalace = palaces[2];
  const diPalace = palaces[6];
  const tatPalace = palaces[7];
  const dienPalace = palaces[3];

  const fullInterpretation = {
    tongQuanBanMenh: `Đương số ${input.hoTen} (${input.gioiTinh === 'nam' ? 'Nam mạng' : 'Nữ mạng'}), sinh năm ${namCanChi.full}, bản mệnh nạp âm ${napAmInfo.menh}. Mệnh an tại cung ${menhPalace.chiNameVi}, Cục là ${cuc.name}. Tương quan giữa Mệnh và Cục: ${menhCucTuongQuan}. 

Về mặt thiên bàn, cục diện ${amDuongMenh}. Đương số là người có cốt cách thanh cao, tư chất sáng láng và lòng kiên định hiếm có. Trong cuộc sống đời thường, bạn luôn là chỗ dựa tinh thần đáng tin cậy cho người thân và bạn bè. Vận mệnh tổng quan có tiền hung hậu kiết: thời niên thiếu có thể trải qua một vài thử thách để tôi rèn ý chí, nhưng từ độ tuổi 30 trở đi sẽ vững vàng cất cánh, công danh tài lộc ngày một nở rộ.`,

    tinhCachCotCach: `Về cốt cách nội tâm: Bạn sở hữu một trực giác nhạy bén song hành cùng tư duy logic sắc sảo. Khi đối diện với các tình huống phức tạp, bạn không hề hoảng loạn mà luôn điềm tĩnh phân tích nguyên nhân gốc rễ. 
Bạn là người trọng chữ tín, ghét sự dối trá và luôn đề cao tính tự trọng. Tuy nhiên, đôi lúc bạn có xu hướng cầu toàn quá mức và dồn nén cảm xúc vào bên trong, khiến bản thân dễ cảm thấy cô độc giữa đám đông. Hãy mở lòng sẻ chia nhiều hơn để tâm hồn luôn nhẹ nhõm.`,

    congDanhSuNghiep: `Về đường công danh & sự nghiệp (Cung Quan Lộc an tại ${quanPalace.chiNameVi}): ${quanPalace.detailedAnalysis}
Trong môi trường công sở hoặc kinh doanh, bạn là người có tầm nhìn xa trông rộng, có khả năng kết nối đồng đội và giải quyết triệt để các bài toán hóc búa. Bạn đặc biệt có duyên với các công việc liên quan đến tổ chức, điều hành, nghiên cứu, công nghệ hoặc kinh doanh tự chủ. Càng về hậu vận, vị thế xã hội của bạn càng được khẳng định vững chắc.`,

    taiLocTienBac: `Về phương diện tài lộc & tiền tài (Cung Tài Bạch an tại ${taiPalace.chiNameVi}): ${taiPalace.detailedAnalysis}
Dòng tiền của bạn không phải là dạng may rủi cờ bạc bộc phát, mà đến từ năng lực trí tuệ, mồ hôi công sức và tài quản lý tài chính chuẩn mực. Bạn có khả năng "tích tiểu thành đại", biết nhìn xa trông rộng và quản trị rủi ro tốt. Cần lưu ý không nên cho vay mượn thiếu giấy tờ pháp lý để tránh hao hụt tiền của.`,

    tinhDuyenGiaDao: `Về tình duyên & hôn nhân (Cung Phu Thê an tại ${phuThePalace.chiNameVi}): ${phuThePalace.detailedAnalysis}
Đời sống tình cảm của bạn sâu sắc và chân thành. Bạn đời là người có tri thức, biết đồng cam cộng khổ và là hậu phương vững chắc cho sự nghiệp của bạn. Hãy luôn dành thời gian hâm nóng tình cảm vợ chồng, lắng nghe và thấu hiểu để mái ấm gia đình luôn tràn ngập tiếng cười và sự an yên.`,

    sucKhoeTatAch: `Về sức khỏe & phòng ngừa tai ương (Cung Tật Ách an tại ${tatPalace.chiNameVi}): ${tatPalace.detailedAnalysis}
Bản mệnh cần chú ý chăm sóc hệ thống tiêu hóa, xương khớp và bảo vệ thị lực. Nên duy trì việc tập luyện thể dục thể thao đều đặn, thiền định hoặc đi bộ nhẹ nhàng vào mỗi buổi sáng để thanh lọc cơ thể và tái tạo năng lượng tích cực.`,

    phucDucToTien: `Về phúc đức dòng họ & tuổi thọ (Cung Phúc Đức an tại ${phucPalace.chiNameVi}): ${phucPalace.detailedAnalysis}
Phúc khí từ tổ tiên che chở cho bạn rất lớn, giúp bạn tai qua nạn khỏi trong nhiều khoảnh khắc thập tử nhất sinh. Hãy luôn ghi nhớ cội nguồn, tích cực làm việc thiện, tương trợ những mảnh đời khó khăn để vun đắp cội phúc ngày một dày thêm cho đời mình và con cháu mai sau.`,

    xuatHanhXaHoi: `Về xuất hành, đối ngoại & quan hệ xã hội (Cung Thiên Di an tại ${diPalace.chiNameVi}): ${diPalace.detailedAnalysis}
Mỗi khi bước chân ra ngoài xã hội, bạn luôn toát lên vẻ chững chạc, đàng hoàng, được nhiều người kính trọng và quý nhân nâng đỡ. Các chuyến công tác xa, du học hoặc mở rộng thị trường ở các tỉnh thành khác đều đem lại kết quả khả quan.`,

    dienTrachNhaCua: `Về điền trạch & đất đai gia sản (Cung Điền Trạch an tại ${dienPalace.chiNameVi}): ${dienPalace.detailedAnalysis}
Bạn có khiếu tích lũy bất động sản. Nhà cửa nơi bạn sinh sống có phong thủy ấm cúng, vượng khí. Hậu vận sẽ sở hữu nhà cửa khang trang, đất đai gia tăng giá trị.`,

    vanHanNamNay: `DỰ BÁO VẬN HẠN NĂM ${namXem} (${namXem === 2026 ? 'BÍNH NGỌ - THIÊN HÀ THỦY' : `NĂM ${namXem}`}):
Năm ${namXem} mang đến luồng sinh khí mới nhưng cũng đan xen một số biến động đòi hỏi bạn phải có chiến lược rõ ràng:
- Về công việc: Đây là năm thích hợp để củng cố nền tảng, tái cấu trúc công việc và học hỏi thêm các kỹ năng mới. Tránh mở rộng quy mô quá nóng hoặc thay đổi đột ngột khi chưa chuẩn bị kỹ nguồn lực.
- Về tài chính: Nguồn thu ổn định, có cơ hội gia tăng thu nhập phụ nhưng cần siết chặt chi tiêu cho các khoản xa xỉ. Cảnh giác trước những lời mời gọi đầu tư cam kết lợi nhuận bất thường.
- Về tình cảm & gia đạo: Gia đạo nhìn chung hòa thuận, có tin vui hỷ sự hoặc thêm người thêm của. Cần dành nhiều thời gian hơn cho con cái và cha mẹ già.
- Về sức khỏe: Chú ý an toàn khi tham gia giao thông và tránh làm việc kiệt sức vào các tháng giữa năm.`,

    loiKhuyenPhongThuy: `LỜI KHUYÊN PHONG THỦY & TU THÂN DÀNH CHO BẠN:
- Màu sắc hợp mệnh: Căn cứ bản mệnh ${napAmInfo.menh} (${napAmInfo.element}), màu sắc tương sinh và hòa hợp tốt nhất là các gam màu thuộc hành ${napAmInfo.element === 'Kim' ? 'Thổ (Vàng, Nâu đất) và Kim (Trắng, Ánh kim, Xám)' : napAmInfo.element === 'Mộc' ? 'Thủy (Đen, Xanh dương) và Mộc (Xanh lá cây)' : napAmInfo.element === 'Thủy' ? 'Kim (Trắng, Ánh kim) và Thủy (Đen, Xanh lam)' : napAmInfo.element === 'Hỏa' ? 'Mộc (Xanh lục) và Hỏa (Đỏ, Hồng, Tím, Cam)' : 'Hỏa (Đỏ, Hồng, Tím) và Thổ (Vàng, Nâu)'}.
- Hướng xuất hành đại cát: Hướng Đông Nam và Tây Bắc.
- Con số may mắn: 1, 6, 8, 9.
- Phương châm sống tu tâm dưỡng tính: "Đức năng thắng số – Tâm bình thế giới bình". Bàn cờ số mệnh là khung sườn, nhưng sự nỗ lực, lòng thiện lương và trí tuệ của chính bạn mới là ngọn bút vẽ nên bức tranh cuộc đời rực rỡ nhất.`
  };

  return {
    id: `tuvi_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    input,
    profile: {
      hoTen: input.hoTen.toUpperCase(),
      gioiTinhVi: input.gioiTinh === 'nam' ? 'Nam' : 'Nữ',
      duongLichDisplay: `${ngaySinh}/${thangSinh}/${namSinh}`,
      amLichDisplay: `Ngày ${ngaySinh} tháng ${thangSinh} năm ${namCanChi.full}`,
      canChiNam: namCanChi.full,
      canChiThang: `Tháng ${thangSinh}`,
      canChiNgay: `Ngày ${ngaySinh}`,
      canChiGio: `Giờ ${input.gioSinhChi} (${input.gioSinhGio})`,
      menhNapAm: napAmInfo.menh,
      menhElement: napAmInfo.element,
      cucNameVi: cuc.name,
      cucNumber: cuc.number,
      chuMenh: 'Tham Lang',
      chuThan: 'Linh Tinh',
      amDuongMenh,
      menhCucTuongQuan,
      cungMenhChi: DIA_CHI[menhIdx],
      cungThanChi: DIA_CHI[thanIdx],
      namXemHan: namXem
    },
    palaces,
    fullInterpretation
  };
}
