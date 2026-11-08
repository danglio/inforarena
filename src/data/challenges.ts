import { Challenge } from '../types/arena';

export const INITIAL_CHALLENGES: Challenge[] = [
  // ==========================================
  // KHỐI 1: Y TẾ & SỨC KHỎE HỌC ĐƯỜNG (10 CÂU)
  // ==========================================
  {
    id: 'ch-hs-01',
    title: 'Học Sinh Cấp 3 Ngủ 5 Tiếng Mỗi Đêm Vào Mùa Thi Để Tối Ưu Năng Suất',
    statement: 'Trợ lý AI tổng hợp mẹo ôn thi kết luận: Học sinh THPT trong giai đoạn ôn thi nước rút chỉ cần ngủ 4-5 tiếng mỗi đêm kết hợp uống nước tăng lực là đủ tái tạo năng lượng và giúp não bộ ghi nhớ kiến thức tốt nhất.',
    category: 'health',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI EdTech Ôn Thi Pro',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Thanh thiếu niên 15-18 tuổi đang phát triển thể chất và não bộ, cần ngủ đủ 8-10 tiếng. Ngủ dưới 6 tiếng làm gián đoạn chu kỳ giấc ngủ REM - giai đoạn củng cố trí nhớ dài hạn ở hồi hải mã. Uống nước tăng lực chỉ che giấu tạm thời cảm giác mệt mỏi nhưng làm tim đập nhanh và suy giảm khả năng tư duy logic.',
    psychologicalDebunk: 'Tâm lý nôn nóng ôn thi và trào lưu "thức khuya học bài để thành công" khiến học sinh dễ tin vào các mẹo phản khoa học do AI đưa ra.',
    verifiedSources: [
      { name: 'Bộ Y tế Việt Nam', url: 'https://moh.gov.vn', domain: 'moh.gov.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống (Cơ quan ngôn luận Bộ Y tế)', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bộ Y tế Việt Nam & Viện Sức khỏe Tâm thần (Bệnh viện Bạch Mai)',
      sourceDomain: 'moh.gov.vn',
      sourceUrl: 'https://moh.gov.vn',
      factQuote: 'Khuyến cáo sức khỏe học đường của Bộ Y tế và Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai chỉ rõ: Lứa tuổi học sinh THPT bắt buộc phải ngủ từ 8 đến 9 tiếng mỗi đêm. Cắt giảm giấc ngủ xuống 4-5 tiếng mùa thi làm suy giảm 40% khả năng tập trung, tăng nguy cơ rối loạn lo âu và suy giảm trí nhớ nghiêm trọng trong phòng thi.',
      coreConclusion: 'Học sinh cấp 3 cần ngủ đủ 8-9 tiếng; thức khuya ôn thi chỉ ngủ 4-5 tiếng làm giảm trí nhớ và phản tác dụng thi cử.'
    },
    keyFlawOrProof: 'Khung giờ sinh học của Bộ Y tế: 8-9 tiếng/ngày là điều kiện bắt buộc để chuyển đổi trí nhớ ngắn hạn sang dài hạn.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-02',
    title: 'Hút Thuốc Lá Điện Tử (Pod / Vape) Hoàn Toàn Vô Hại Vì Chỉ Là Tinh Dầu Trái Cây',
    statement: 'Nhiều video trên mạng xã hội quảng cáo: Thuốc lá điện tử thế hệ mới không chứa nicotine, chỉ là hơi nước và tinh dầu hoa quả tạo mùi thơm nên hoàn toàn không gây nghiện và không ảnh hưởng đến phổi của học sinh.',
    category: 'health',
    labelType: 'human_false',
    labelAuthor: 'Kênh TikToker Review Pod Chill Giới Trẻ',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Các mẫu tinh dầu thuốc lá điện tử trôi nổi trên thị trường hầu hết đều chứa nicotine nồng độ cao và dung môi sinh ra formaldehyde khi nung nóng. Nguy hiểm hơn, cơ quan chức năng Việt Nam đã phát hiện nhiều loại pod chill bị trộn lẫn ma túy tổng hợp mới (cần sa tổng hợp, ketamine) gây tổn thương não bộ cấp tính.',
    psychologicalDebunk: 'Học sinh cấp 3 dễ bị dụ dỗ bởi mùi hương trái cây thời thượng và bao bì bắt mắt, tin rằng đây là trò chơi vô hại để khẳng định cá tính.',
    verifiedSources: [
      { name: 'Cục Quản lý Khám, Chữa Bệnh - Bộ Y tế', url: 'https://kcb.vn', domain: 'kcb.vn' },
      { name: 'Bệnh viện Bạch Mai (Trung tâm Chống độc)', url: 'https://bachmai.gov.vn', domain: 'bachmai.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Cục Quản lý Khám, Chữa Bệnh (Bộ Y tế) & Trung tâm Chống độc Bệnh viện Bạch Mai',
      sourceDomain: 'kcb.vn',
      sourceUrl: 'https://kcb.vn',
      factQuote: 'Bộ Y tế Việt Nam cảnh báo khẩn cấp: 100% thuốc lá điện tử đều chứa các chất độc hại đối với hệ hô hấp và tim mạch của lứa tuổi học đường. Trung tâm Chống độc Bệnh viện Bạch Mai đã tiếp nhận hàng loạt học sinh cấp 3 nhập viện cấp cứu trong tình trạng hôn mê, co giật, tổn thương phổi cấp (EVALI) và ngộ độc ma túy tổng hợp pha trộn trong pod.',
      coreConclusion: 'Thuốc lá điện tử cực kỳ độc hại và gây nghiện; tuyên bố "chỉ là tinh dầu trái cây vô hại" là lời lừa đảo nguy hiểm.'
    },
    keyFlawOrProof: 'Kết quả xét nghiệm mẫu pod của Viện Pháp y Quốc gia phát hiện chất độc nicotine và ma túy tổng hợp ADB-Butinaca.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-03',
    title: 'Ăn Mì Tôm Thường Xuyên Sẽ Khiến Dạ Dày Mất Hàng Tháng Mới Tiêu Hóa Hết',
    statement: 'Bài viết chia sẻ trên nhóm phụ huynh học sinh khẳng định: Sợi mì ăn liền được phủ một lớp sáp nến chống dính, khi nuốt vào bụng dạ dày phải mất từ 3 đến 6 tháng mới có thể tiêu hóa và đào thải được một gói mì.',
    category: 'health',
    labelType: 'none',
    labelAuthor: 'Hội Phụ Huynh Học Sinh THPT',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Mì ăn liền làm từ bột mì chiên qua dầu cọ hoặc sấy khô, hoàn toàn không có sáp nến. Cơ thể tiêu hóa sợi mì như tinh bột bình thường trong vòng 2-4 giờ. Mì tôm thiếu chất xơ và thừa muối nhưng không có chuyện đọng lại trong dạ dày nhiều tháng.',
    psychologicalDebunk: 'Nỗi lo lắng của cha mẹ khi thấy con ăn nhiều đồ ăn nhanh khiến những câu chuyện phóng đại rùng rợn dễ dàng lan truyền chóng mặt.',
    verifiedSources: [
      { name: 'Viện Dinh Dưỡng Quốc Gia Việt Nam', url: 'https://viendinhduong.vn', domain: 'viendinhduong.vn' },
      { name: 'Cục An Toàn Thực Phẩm - Bộ Y tế', url: 'https://vfa.gov.vn', domain: 'vfa.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Dinh Dưỡng Quốc Gia & Cục An Toàn Thực Phẩm (Bộ Y tế)',
      sourceDomain: 'viendinhduong.vn',
      sourceUrl: 'https://viendinhduong.vn',
      factQuote: 'Chuyên gia Viện Dinh dưỡng Quốc gia khẳng định: Tin đồn mì tôm chứa sáp nến khó tiêu là hoàn toàn bịa đặt. Tinh bột và chất béo trong mì ăn liền được dịch tụy và enzym dạ dày phân giải hoàn toàn sau 2 đến 4 tiếng tương tự cơm hay bún. Tuy nhiên học sinh không nên ăn mì trừ bữa vì thiếu hụt vitamin và đạm.',
      coreConclusion: 'Mì tôm không chứa sáp nến và được tiêu hóa bình thường sau vài giờ; lời đồn đọng lại nhiều tháng là sai sự thật.'
    },
    keyFlawOrProof: 'Thực nghiệm sinh học: Enzyme amylase và lipase trong hệ tiêu hóa phân giải tinh bột và chất béo chỉ trong 2-4 giờ.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-04',
    title: 'Nặn Mụn Trứng Cá Ở Vùng Tam Giác Trên Mặt Có Thể Gây Nhiễm Trùng Não Tử Vong',
    statement: 'Khu vực từ sống mũi xuống hai khóe miệng (tam giác tử thần) có mạng lưới tĩnh mạch nối thẳng vào xoang hang trong sọ não, việc tự ý nặn mụn viêm bọc tại đây có thể đưa vi khuẩn vào não gây viêm màng não đe dọa tính mạng.',
    category: 'health',
    labelType: 'human_true',
    labelAuthor: 'BS. CKII Nguyễn Thị Thanh - Bệnh viện Da liễu Trung ương',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Tĩnh mạch mặt ở vùng tam giác này không có van một chiều. Khi nặn mụn nhiễm trùng, áp lực có thể đẩy vi khuẩn tụ cầu vàng ngược dòng vào xoang tĩnh mạch hang ở đáy não, gây huyết khối xoang hang và nhiễm trùng màng não cấp tính.',
    psychologicalDebunk: 'Nhiều học sinh cấp 3 nghĩ mụn chỉ là vấn đề thẩm mỹ tuổi dậy thì và thường xuyên dùng tay bẩn nặn mụn mà không biết nguy cơ nhiễm trùng máu nghiêm trọng.',
    verifiedSources: [
      { name: 'Bệnh viện Da liễu Trung ương', url: 'https://dalieu.vn', domain: 'dalieu.vn' },
      { name: 'Báo Tuổi Trẻ (Mục Sức Khỏe)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Da liễu Trung ương & Bệnh viện Bệnh Nhiệt đới Trung ương',
      sourceDomain: 'dalieu.vn',
      sourceUrl: 'https://dalieu.vn',
      factQuote: 'Bệnh viện Da liễu Trung ương cảnh báo học sinh tuổi dậy thì: Khu vực tam giác từ gốc mũi đến hai bên khóe miệng chứa các mạch máu thông trực tiếp với xoang hang nội sọ. Tự ý nặn mụn mủ tại đây có thể gây biến chứng nhiễm khuẩn huyết, viêm tắc tĩnh mạch xoang hang dẫn đến mù mắt hoặc tử vong.',
      coreConclusion: 'Nặn mụn bọc vùng tam giác mặt thực sự có nguy cơ lây lan nhiễm trùng vào não bộ cực kỳ nguy hiểm.'
    },
    keyFlawOrProof: 'Cấu tạo giải phẫu tĩnh mạch mặt không có van ngăn dòng chảy ngược về xoang tĩnh mạch hang trong hộp sọ.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-05',
    title: 'Nhịn Ăn Sáng Kết Hợp Uống Giấm Táo Giúp Học Sinh Giảm Cân Cấp Tốc 5kg Mỗi Tuần',
    statement: 'Nhóm bí quyết làm đẹp học đường chia sẻ: Nữ sinh cấp 3 muốn giảm cân nhanh chỉ cần bỏ bữa sáng, uống một cốc giấm táo nguyên chất pha loãng để đốt cháy toàn bộ mỡ thừa mà không bị mệt mỏi.',
    category: 'health',
    labelType: 'ai_false',
    labelAuthor: 'Mô hình AI Sắc Đẹp & Dinh Dưỡng Tuổi Teen',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Uống giấm khi bụng đói phá hủy lớp nhầy bảo vệ niêm mạc dạ dày, gây viêm loét dạ dày tá tràng cấp. Nhịn ăn sáng làm tụt đường huyết, chóng mặt, ngất xỉu trong giờ học và khiến cơ thể mất cơ bắp chứ không giảm được mỡ bền vững.',
    psychologicalDebunk: 'Áp lực về ngoại hình (Body Shaming) ở lứa tuổi học sinh cấp 3 khiến các em dễ làm theo các mẹo giảm cân cực đoan gây hại dạ dày.',
    verifiedSources: [
      { name: 'Viện Dinh Dưỡng Quốc Gia Việt Nam', url: 'https://viendinhduong.vn', domain: 'viendinhduong.vn' },
      { name: 'Báo Dân Trí (Mục Sức Khỏe Học Đường)', url: 'https://dantri.com.vn', domain: 'dantri.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Dinh Dưỡng Quốc Gia Việt Nam & Bệnh viện Đại học Y Hà Nội',
      sourceDomain: 'viendinhduong.vn',
      sourceUrl: 'https://viendinhduong.vn',
      factQuote: 'Các chuyên gia Viện Dinh Dưỡng Quốc Gia nhấn mạnh: Bữa sáng cung cấp 30% năng lượng hoạt động học tập cho não bộ. Nhịn ăn sáng uống giấm làm tăng axit dạ dày, bào mòn niêm mạc dẫn đến xuất huyết dạ dày và hạ đường huyết. Giảm cân an toàn đòi hỏi cân đối calo và tập thể dục, không có phương pháp nào giảm 5kg/tuần mà an toàn.',
      coreConclusion: 'Uống giấm nhịn ăn sáng gây viêm loét dạ dày và suy nhược; đây là phương pháp ngụy khoa học cực kỳ nguy hại.'
    },
    keyFlawOrProof: 'Axit axetic trong giấm làm tổn thương tế bào biểu mô dạ dày khi dạ dày rỗng không có thức ăn đệm.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-06',
    title: 'Uống Thuốc Bổ Não "Tăng Cường Trí Nhớ" Bán Tràn Lan Giúp Đạt Điểm Cao Mùa Thi',
    statement: 'Nhiều bài quảng cáo trên mạng cam kết: Các loại viên uống bổ não tăng tuần hoàn nhập khẩu có thể kích hoạt nơ-ron giúp học sinh học thuộc lòng cả cuốn sách giáo khoa chỉ trong vài tiếng trước ngày thi.',
    category: 'health',
    labelType: 'human_false',
    labelAuthor: 'Trang Facebook Bán Thuốc Ôn Thi Cấp Tốc',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Không có loại thuốc nào giúp "thông minh đột xuất" hay học vẹt bài thi trong chốc lát. Việc tự ý uống các loại thuốc kích thích thần kinh (như Modafinil, Ritalin hoặc hoạt huyết quá liều) có thể gây ảo giác, tăng huyết áp, mất ngủ kinh niên và rối loạn tâm thần.',
    psychologicalDebunk: 'Nỗi lo thi trượt đại học của học sinh và kỳ vọng lớn từ cha mẹ tạo nên thị trường béo bở cho các sản phẩm thuốc bổ não thổi phồng công dụng.',
    verifiedSources: [
      { name: 'Bệnh viện Bạch Mai (Viện Sức khỏe Tâm thần)', url: 'https://bachmai.gov.vn', domain: 'bachmai.gov.vn' },
      { name: 'Báo Thanh Niên (Mục Giáo Dục & Sức Khỏe)', url: 'https://thanhnien.vn', domain: 'thanhnien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai & Bộ Y tế Việt Nam',
      sourceDomain: 'bachmai.gov.vn',
      sourceUrl: 'https://bachmai.gov.vn',
      factQuote: 'Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai khẳng định: Không có loại thần dược nào giúp tăng trí nhớ siêu tốc để thi cử. Việc lạm dụng thuốc an thần hoặc chất kích thích thần kinh trước kỳ thi khiến nhiều học sinh bị loạn thần, tim đập nhanh và suy kiệt khi vào phòng thi. Trí nhớ chỉ được xây dựng qua quá trình ôn tập tích lũy có phương pháp.',
      coreConclusion: 'Không có thuốc nào giúp học siêu tốc; lạm dụng thuốc bổ não trôi nổi làm tăng nguy cơ rối loạn tâm thần.'
    },
    keyFlawOrProof: 'Bộ Y tế chưa từng cấp phép lưu hành cho bất kỳ loại thuốc nào có công dụng "học thuộc bài nhanh" hay tăng trí thông minh.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-07',
    title: 'Đeo Kính Cận Sai Độ Hoặc Dùng Điện Thoại Trong Tối Gây Tăng Độ Cận Thị Cực Nhanh',
    statement: 'Thói quen trùm chăn lướt điện thoại ban đêm khiến mắt học sinh phải điều tiết cực độ trong điều kiện ánh sáng xanh chênh lệch, làm trục nhãn cầu dài ra nhanh chóng và thúc đẩy độ cận thị tăng vọt.',
    category: 'health',
    labelType: 'human_true',
    labelAuthor: 'BS. CKII Hoàng Cương - Bệnh viện Mắt Trung ương',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Khi nhìn gần trong bóng tối, đồng tử giãn to để đón sáng khiến lượng ánh sáng xanh năng lượng cao lọt vào đáy mắt nhiều hơn. Cơ mi mắt co quắp liên tục không được nghỉ ngơi làm tăng độ cận thị học đường và khô mỏi mắt nghiêm trọng.',
    psychologicalDebunk: 'Nhiều học sinh cấp 3 biết rõ hại mắt nhưng thói quen xem phim, lướt mạng xã hội trước khi ngủ đã trở thành phản xạ khó bỏ.',
    verifiedSources: [
      { name: 'Bệnh viện Mắt Trung ương', url: 'https://vnio.vn', domain: 'vnio.vn' },
      { name: 'Báo VnExpress (Chuyên mục Sức Khỏe)', url: 'https://vnexpress.net', domain: 'vnexpress.net' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Mắt Trung ương & Báo VnExpress',
      sourceDomain: 'vnio.vn',
      sourceUrl: 'https://vnio.vn',
      factQuote: 'Bác sĩ chuyên khoa Bệnh viện Mắt Trung ương cho biết: Sử dụng điện thoại trong môi trường tối hoàn toàn buộc mắt phải điều tiết quá mức, là nguyên nhân hàng đầu khiến học sinh THPT tăng từ 1 đến 2 độ cận mỗi năm. Ánh sáng xanh từ màn hình trong bóng tối còn ức chế tiết melatonin gây mất ngủ và thoái hóa sớm tế bào võng mạc.',
      coreConclusion: 'Dùng điện thoại trong bóng tối làm tăng nhanh độ cận thị và tổn hại thị lực học sinh; đây là cảnh báo chính xác.'
    },
    keyFlawOrProof: 'Khảo sát nhãn khoa của Bệnh viện Mắt Trung ương: Tỷ lệ học sinh tăng độ cận cao rõ rệt ở nhóm dùng điện thoại đêm.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-08',
    title: 'Bấm Huyệt Hoặc Nhỏ Nước Chanh Vào Mắt Có Thể Chữa Khỏi Hoàn Toàn Tật Cận Thị',
    statement: 'Một số bài đăng trên Facebook hướng dẫn học sinh cấp 3 tự chữa cận thị tại nhà không cần phẫu thuật bằng cách nhỏ vài giọt nước cốt chanh vào mắt kết hợp bấm huyệt quanh hốc mắt 15 phút mỗi ngày.',
    category: 'health',
    labelType: 'ai_false',
    labelAuthor: 'Trang Fanpage Thảo Dược Sáng Mắt Dân Gian',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Cận thị là tật khúc xạ do trục nhãn cầu quá dài hoặc giác mạc quá cong. Axit xitric trong nước chanh có tính axit mạnh sẽ gây bỏng rát, loét giác mạc và có thể làm mù mắt vĩnh viễn. Không có phương pháp bấm huyệt hay nhỏ chanh nào thay đổi được chiều dài trục nhãn cầu.',
    psychologicalDebunk: 'Tâm lý ngại đeo kính vướng víu và sợ phẫu thuật khiến nhiều bạn trẻ tin vào các phương pháp dân gian nguy hại.',
    verifiedSources: [
      { name: 'Bệnh viện Mắt TP.HCM', url: 'https://bvmattphcm.vn', domain: 'bvmattphcm.vn' },
      { name: 'Báo Tuổi Trẻ (Mục Cảnh Báo Sức Khỏe)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Mắt TP.HCM & Cục Quản lý Khám Chữa Bệnh (Bộ Y tế)',
      sourceDomain: 'bvmattphcm.vn',
      sourceUrl: 'https://bvmattphcm.vn',
      factQuote: 'Bệnh viện Mắt TP.HCM khuyến cáo khẩn cấp: Tật cận thị thực thể xuất phát từ cấu trúc trục nhãn cầu dài hơn bình thường, không thể biến mất bằng bấm huyệt hay thảo dược. Việc nhỏ nước chanh vào mắt là hành vi hủy hoại giác mạc, đã có học sinh bị sẹo giác mạc vĩnh viễn và suy giảm thị lực nặng sau khi làm theo bài thuốc trên mạng.',
      coreConclusion: 'Nhỏ nước chanh vào mắt chữa cận thị là thông tin ngụy khoa học cực kỳ nguy hiểm có thể làm mù mắt.'
    },
    keyFlawOrProof: 'Độ pH của nước cốt chanh khoảng 2.0 (axit rất mạnh), gây hoại tử tế bào biểu mô giác mạc mắt ngay khi tiếp xúc.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-09',
    title: 'Uống Trà Sữa Thường Xuyên Kết Hợp Ít Uống Nước Lọc Dễ Dẫn Đến Sỏi Thận Ở Tuổi Học Đường',
    statement: 'Hàm lượng oxalate cao trong trà đậm đặc kết hợp với canxi trong sữa béo và thói quen lười uống nước lọc ở học sinh tạo điều kiện cho các tinh thể canxi oxalat kết tụ nhanh chóng thành sỏi thận.',
    category: 'health',
    labelType: 'human_true',
    labelAuthor: 'Bác sĩ Khoa Thận Tiết Niệu - Bệnh viện Chợ Rẫy TP.HCM',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Trà sữa chứa lượng đường fructose rất cao và hàm lượng oxalate đậm đặc. Khi học sinh uống trà sữa thay nước lọc cả ngày, nước tiểu bị cô đặc, canxi và oxalate bão hòa kết tủa tạo thành sỏi thận sớm ngay ở tuổi 16-18.',
    psychologicalDebunk: 'Trà sữa là thức uống yêu thích hàng ngày của học sinh, nên nhiều bạn thường tặc lưỡi xem nhẹ cảnh báo của các bác sĩ.',
    verifiedSources: [
      { name: 'Bệnh viện Chợ Rẫy TP.HCM', url: 'https://choray.vn', domain: 'choray.vn' },
      { name: 'Báo Thanh Niên (Mục Y Tế)', url: 'https://thanhnien.vn', domain: 'thanhnien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Chợ Rẫy & Bệnh viện Nhi Đồng 1 TP.HCM',
      sourceDomain: 'choray.vn',
      sourceUrl: 'https://choray.vn',
      factQuote: 'Các bác sĩ Khoa Tiết niệu Bệnh viện Chợ Rẫy ghi nhận số lượng thanh thiếu niên 15-18 tuổi mắc sỏi thận tăng nhanh trong những năm gần đây. Thói quen uống 1-2 ly trà sữa mỗi ngày nhưng không uống đủ nước lọc khiến nồng độ canxi oxalate trong nước tiểu tăng vọt, hình thành sỏi niệu quản gây đau thắt lưng dữ dội.',
      coreConclusion: 'Uống trà sữa nhiều thay nước lọc thực sự làm tăng nguy cơ lắng đọng sỏi thận ở lứa tuổi học sinh.'
    },
    keyFlawOrProof: 'Phân tích thành phần sỏi niệu học sinh tại Bệnh viện Chợ Rẫy: Hơn 70% là sỏi canxi oxalat kết tinh do chế độ ăn.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-10',
    title: 'Luyện Tập Thể Dục 30 Phút Mỗi Ngày Giúp Tăng Khả Năng Tập Trung Và Tiếp Thu Bài Học',
    statement: 'Vận động thể thao nhịp điệu (chạy bộ, bóng rổ, cầu lông) kích thích máu lưu thông lên não và giải phóng endorphin cùng yếu tố BDNF, giúp học sinh cấp 3 giảm stress ôn thi và nâng cao tốc độ giải quyết bài tập.',
    category: 'health',
    labelType: 'human_true',
    labelAuthor: 'Viện Khoa Học Thể Dục Thể Thao Việt Nam',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Vận động thể chất vừa phải không làm mất thời gian học mà ngược lại giúp giải tỏa ức chế thần kinh, tăng độ nhạy bén của các khớp nối synapse thần kinh và cải thiện tâm trạng học tập.',
    psychologicalDebunk: 'Nhiều bạn học sinh và phụ huynh có định kiến sai lầm rằng "thời gian ôn thi quý như vàng, tập thể dục chỉ tổ phí sức và mệt mỏi".',
    verifiedSources: [
      { name: 'Bộ Giáo dục và Đào tạo (Vụ Giáo dục Thể chất)', url: 'https://moet.gov.vn', domain: 'moet.gov.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bộ Giáo dục và Đào tạo & Viện Y học Ứng dụng Việt Nam',
      sourceDomain: 'moet.gov.vn',
      sourceUrl: 'https://moet.gov.vn',
      factQuote: 'Nghiên cứu của Viện Y học Ứng dụng Việt Nam phối hợp ngành Giáo dục chỉ ra: Học sinh THPT dành từ 30 đến 45 phút rèn luyện thể thao mỗi ngày có chỉ số chú ý và trí nhớ ngắn hạn cao hơn 25% so với nhóm chỉ ngồi một chỗ học cả ngày, đồng thời giảm 50% nguy cơ mắc hội chứng trầm cảm học đường.',
      coreConclusion: 'Rèn luyện thể thao hàng ngày giúp học sinh cấp 3 tiếp thu bài học hiệu quả hơn và giảm căng thẳng ôn thi.'
    },
    keyFlawOrProof: 'Dữ liệu đo điện não đồ và thang đo tâm lý nhận thức DASS-21 ở học sinh sau vận động thể thao.',
    difficulty: 'easy'
  },

  // ==========================================
  // KHỐI 2: KHOA HỌC TỰ NHIÊN & SINH - LÝ - HÓA (10 CÂU)
  // ==========================================
  {
    id: 'ch-hs-11',
    title: 'Đốt Than Hoặc Bật Bếp Cồn Sưởi Ấm Trong Phòng Trọ Kín Gây Ngạt Khí CO Chết Người',
    statement: 'Vào những đợt rét đậm mùa đông, học sinh và sinh viên đốt than tổ ong hoặc bếp cồn trong phòng ngủ đóng kín cửa để giữ ấm có thể bị hôn mê và ngạt thở chỉ sau vài giờ do thiếu khí O2 và nhiễm độc khí CO.',
    category: 'science',
    labelType: 'human_true',
    labelAuthor: 'Cục Cảnh sát PCCC & CNCH - Bộ Công an',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Khi đốt nhiên liệu trong phòng kín, oxy bị tiêu hao tạo ra quá trình cháy không hoàn toàn sinh ra khí carbon monoxide (CO). Khí CO không màu, không mùi, gắn kết với hemoglobin trong hồng cầu mạnh gấp 250 lần oxy, khiến não và tim chết ngạt trong lúc ngủ mà không hề hay biết.',
    psychologicalDebunk: 'Do khí CO không mùi và nạn nhân lịm dần khi đang ngủ nên nhiều người chủ quan không nhận ra nguy hiểm chết người của thói quen sưởi ấm này.',
    verifiedSources: [
      { name: 'Cục Cảnh sát PCCC & CNCH (Bộ Công an)', url: 'https://canhsatpccc.gov.vn', domain: 'canhsatpccc.gov.vn' },
      { name: 'Báo VnExpress (Mục Đời Sống & Khoa Học)', url: 'https://vnexpress.net', domain: 'vnexpress.net' }
    ],
    verifiedFact: {
      sourceName: 'Cục Cảnh sát PCCC & CNCH (Bộ Công an) & Trung tâm Chống độc Bạch Mai',
      sourceDomain: 'canhsatpccc.gov.vn',
      sourceUrl: 'https://canhsatpccc.gov.vn',
      factQuote: 'Cục Cảnh sát PCCC và Trung tâm Chống độc Bệnh viện Bạch Mai liên tục phát đi cảnh báo đỏ: Tuyệt đối không đốt than, củi hoặc bếp sưởi trong phòng đóng kín cửa. Hàng năm đều có các vụ việc đau lòng học sinh, sinh viên tử vong thương tâm trong giấc ngủ do hít phải khí độc CO tích tụ.',
      coreConclusion: 'Đốt than trong phòng kín sinh ra khí độc CO gây tử vong nhanh chóng; tuyệt đối không thực hiện.'
    },
    keyFlawOrProof: 'Phương trình Hóa học 11: 2C + O2 (thiếu khí) ➔ 2CO (khí độc liên kết chặt với Hemoglobin máu).',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-12',
    title: 'Trú Mưa Dưới Cây To Hoặc Dùng Điện Thoại Khi Đi Qua Cánh Đồng Dễ Bị Sét Đánh',
    statement: 'Vào mùa mưa giông ở Việt Nam, đứng trú dưới tán cây cổ thụ cao vút giữa cánh đồng trống là nơi an toàn nhất vì thân cây gỗ có tác dụng cản phá dòng điện của sấm sét.',
    category: 'science',
    labelType: 'none',
    labelAuthor: 'Mẹo Dân Gian Khi Đi Đồng',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Cây cao là vật thể nhô lên cao nhất trên mặt đất, tạo ra con đường có điện trở thấp thu hút tia sét đánh xuống. Khi sét đánh trúng cây, dòng điện khổng lồ phóng lan ra xung quanh qua rễ và hiện tượng phóng điện bên (side flash) sẽ đánh thẳng sang người đứng gần gây bỏng nặng hoặc tử vong tức thì.',
    psychologicalDebunk: 'Phản xạ bản năng thấy mưa là chạy vào dưới tán cây che chắn khiến nhiều bạn học sinh gặp nạn trong mùa mưa bão.',
    verifiedSources: [
      { name: 'Viện Vật lý Địa cầu (Viện Hàn lâm KH&CN Việt Nam VAST)', url: 'https://igp-vast.vn', domain: 'igp-vast.vn' },
      { name: 'Báo Tiền Phong (Chuyên đề Khoa Học)', url: 'https://tienphong.vn', domain: 'tienphong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Vật lý Địa cầu (Viện Hàn lâm KH&CN Việt Nam) & Hội Khí tượng Thủy văn',
      sourceDomain: 'igp-vast.vn',
      sourceUrl: 'https://igp-vast.vn',
      factQuote: 'Các chuyên gia nghiên cứu sấm sét tại Viện Vật lý Địa cầu khẳng định: Trú mưa dưới gốc cây to giữa bãi đất trống là sai lầm chết người. Hơn 60% các vụ tai nạn sét đánh tại nông thôn Việt Nam xảy ra khi người dân đứng dưới gốc cây to hoặc làm việc giữa đồng ruộng trống mà không kịp tìm nơi ẩn nấp an toàn.',
      coreConclusion: 'Trú dưới cây to khi có giông sét cực kỳ nguy hiểm vì cây thu hút tia sét; nhận định an toàn là hoàn toàn sai.'
    },
    keyFlawOrProof: 'Vật lý 11: Hiện tượng phóng điện trong chất khí ưu tiên các điểm nhọn có điện trường cục bộ lớn nhất.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-13',
    title: 'Bị Kiến Ba Khoang Đốt Dùng Nước Xà Phòng Rửa Sạch Giúp Trung Hòa Độc Tố',
    statement: 'Chất pederin trong dịch cơ thể kiến ba khoang có độc tính gấp 12 lần nọc rắn hổ mang. Khi lỡ tay đập dập kiến trên da, việc dùng xà phòng có tính kiềm nhẹ rửa ngay dưới vòi nước chảy sẽ giảm bớt tổn thương phỏng rát.',
    category: 'science',
    labelType: 'human_true',
    labelAuthor: 'BS. Lê Đức Thọ - Khoa Côn trùng Viện Sốt rét - Ký sinh trùng Trung ương',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Độc tố pederin không phải do kiến chích mà giải phóng khi kiến bị miết nát trên da. Rửa nhanh bằng xà phòng và nhiều nước giúp rửa trôi độc tố cơ học và trung hòa một phần dịch tiết, ngăn chặn độc tố thấm sâu tạo thành vệt viêm mủ dài.',
    psychologicalDebunk: 'Nhiều học sinh theo thói quen lấy tay đập và miết kiến ba khoang khi thấy nó bò trên người, vô tình làm nọc độc loang rộng khắp cánh tay và cổ.',
    verifiedSources: [
      { name: 'Cục Y tế Dự phòng - Bộ Y tế', url: 'https://vncdc.gov.vn', domain: 'vncdc.gov.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Cục Y tế Dự phòng (Bộ Y tế) & Viện Sốt rét - Ký sinh trùng Trung ương',
      sourceDomain: 'vncdc.gov.vn',
      sourceUrl: 'https://vncdc.gov.vn',
      factQuote: 'Hướng dẫn xử trí của Cục Y tế Dự phòng chỉ rõ: Khi tiếp xúc với kiến ba khoang, tuyệt đối không dùng tay đập nát kiến. Nếu dính dịch độc pederin, phải dùng xà phòng dịu nhẹ rửa sạch nhẹ nhàng dưới dòng nước chảy liên tục để loại bỏ độc chất, sau đó bôi cồn 70 độ hoặc thuốc mỡ làm dịu da.',
      coreConclusion: 'Rửa ngay bằng xà phòng dưới nước chảy giúp rửa trôi độc tố kiến ba khoang; đây là hướng dẫn y tế chuẩn xác.'
    },
    keyFlawOrProof: 'Đặc tính hóa học độc tố Pederin tan trong nước và bị rửa trôi nhanh chóng bởi dung dịch xà phòng.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-14',
    title: 'Sóng Lò Vi Sóng Làm Thức Ăn Bị Nhiễm Phóng Xạ Độc Hại Gây Ung Thư',
    statement: 'Diễn đàn khoa học mạng cảnh báo học sinh: Lò vi sóng hâm nóng thức ăn bằng tia phóng xạ hạt nhân, việc ăn thức ăn quay lò vi sóng thường xuyên sẽ đưa chất phóng xạ vào cơ thể gây biến đổi tế bào.',
    category: 'science',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Đời Sống An Toàn Gia Đình',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Lò vi sóng sử dụng sóng điện từ tần số 2.45 GHz (tương tự sóng Wi-Fi). Sóng này làm các phân tử nước trong thức ăn dao động ma sát tạo ra nhiệt để làm chín thức ăn. Đây là bức xạ không ion hóa, hoàn toàn không phải phóng xạ hạt nhân và biến mất ngay khi tắt lò.',
    psychologicalDebunk: 'Từ ngữ "bức xạ sóng" khiến nhiều người liên tưởng sai lầm sang bụi phóng xạ hạt nhân trong các vụ nổ nguyên tử.',
    verifiedSources: [
      { name: 'Viện Năng Lượng Nguyên Tử Việt Nam (VinAtom)', url: 'https://vinatom.gov.vn', domain: 'vinatom.gov.vn' },
      { name: 'Tạp chí Tia Sáng (Bộ Khoa học và Công nghệ)', url: 'https://tiasang.com.vn', domain: 'tiasang.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Năng Lượng Nguyên Tử Việt Nam & Viện Dinh Dưỡng Quốc Gia',
      sourceDomain: 'vinatom.gov.vn',
      sourceUrl: 'https://vinatom.gov.vn',
      factQuote: 'Các chuyên gia Vật lý hạt nhân tại Viện Năng lượng Nguyên tử Việt Nam khẳng định: Sóng vi ba trong lò vi sóng là sóng vô tuyến không ion hóa, năng lượng photon cực thấp chỉ đủ kích thích phân tử nước quay ma sát sinh nhiệt. Thức ăn hâm bằng lò vi sóng hoàn toàn không bị nhiễm phóng xạ hay biến đổi thành chất độc hại.',
      coreConclusion: 'Lò vi sóng không dùng bức xạ hạt nhân; thức ăn nấu bằng lò vi sóng hoàn toàn an toàn và không nhiễm phóng xạ.'
    },
    keyFlawOrProof: 'Vật lý 12: Phổ sóng điện từ - Sóng vi ba có bước sóng ~12cm, năng lượng photon thấp hơn hàng triệu lần so với tia Gamma phóng xạ.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-15',
    title: 'Kim Cương Bị Bốc Cháy Hoàn Toàn Thành Khí CO2 Khi Đốt Ở Nhiệt Độ Cao',
    statement: 'Mặc dù kim cương là chất rắn cứng nhất trong tự nhiên, bản chất hóa học của nó là cacbon nguyên chất. Khi nung trong oxy trên 850°C, kim cương sẽ bốc cháy thành khí CO2 mà không để lại bất kỳ hạt tro nào.',
    category: 'science',
    labelType: 'human_true',
    labelAuthor: 'GS. Nguyễn Văn Giáp - Khoa Hóa học Đại học Khoa học Tự nhiên',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Kim cương là dạng thù hình của nguyên tố cacbon tương tự than chì. Độ cứng cơ học bắt nguồn từ mạng tinh thể tứ diện cộng hóa trị bền vững, nhưng về mặt nhiệt động học nó vẫn phản ứng cháy với oxy tạo thành khí cacbonic CO2.',
    psychologicalDebunk: 'Định kiến "kim cương là vĩnh cửu" trong các chiến dịch quảng cáo trang sức khiến đại chúng nghĩ rằng kim cương không thể bị phá hủy bởi lửa.',
    verifiedSources: [
      { name: 'Viện Khoa học Vật liệu (Viện Hàn lâm KH&CN Việt Nam VAST)', url: 'https://ims.vast.ac.vn', domain: 'vast.ac.vn' },
      { name: 'Báo Khoa học & Phát triển', url: 'https://khoahocphattrien.vn', domain: 'khoahocphattrien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Khoa học Vật liệu (Viện Hàn lâm KH&CN Việt Nam) & ĐHKHTN',
      sourceDomain: 'ims.vast.ac.vn',
      sourceUrl: 'https://ims.vast.ac.vn',
      factQuote: 'Tài liệu giảng dạy Hóa học vô cơ nâng cao xác nhận: Ở nhiệt độ khoảng 800°C - 900°C trong dòng khí oxy nguyên chất, các liên kết C-C trong tinh thể kim cương bị bẻ gãy, kim cương cháy sáng với ngọn lửa màu xanh nhạt và chuyển hóa 100% thành khí carbon dioxide (CO2).',
      coreConclusion: 'Kim cương thực sự bị đốt cháy hoàn toàn thành khí CO2; độ cứng cơ học không đồng nghĩa với tính trơ trước nhiệt độ cao.'
    },
    keyFlawOrProof: 'Hóa học 11 bài Cacbon: C (kim cương) + O2 (nhiệt độ) ➔ CO2.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-16',
    title: 'Đom Đóm Phát Sáng Nhờ Phản Ứng Sinh Hóa "Ánh Sáng Lạnh" Gần Như Không Tỏa Nhiệt',
    statement: 'Cơ quan phát quang ở đuôi đom đóm thực hiện phản ứng giữa enzym luciferase và hợp chất luciferin với oxy, chuyển hóa gần 100% năng lượng thành ánh sáng vàng xanh mà hầu như không bị thất thoát thành nhiệt lượng.',
    category: 'science',
    labelType: 'ai_true',
    labelAuthor: 'Trợ lý AI Sinh Học Côn Trùng',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Khác với bóng đèn dây tóc tỏa nhiệt bỏng tay (90% năng lượng chuyển thành nhiệt), hiện tượng phát quang sinh học của đom đóm có hiệu suất lượng tử quang học xấp xỉ 90-100%, là nguồn phát quang hiệu quả nhất được con người học hỏi để chế tạo đèn LED.',
    psychologicalDebunk: 'Trực giác học sinh thường nghĩ rằng nguồn phát ra ánh sáng thì bao giờ cũng phải nóng như ngọn nến hay bóng đèn xe máy.',
    verifiedSources: [
      { name: 'Viện Sinh thái và Tài nguyên sinh vật (VAST)', url: 'https://iebr.ac.vn', domain: 'iebr.ac.vn' },
      { name: 'Tạp chí Tia Sáng (Bộ Khoa học và Công nghệ)', url: 'https://tiasang.com.vn', domain: 'tiasang.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Sinh thái và Tài nguyên sinh vật (Viện Hàn lâm KH&CN Việt Nam)',
      sourceDomain: 'iebr.ac.vn',
      sourceUrl: 'https://iebr.ac.vn',
      factQuote: 'Các nghiên cứu quang sinh học côn trùng của Viện Sinh thái xác nhận: Phản ứng oxy hóa luciferin có xúc tác luciferase trong cơ thể đom đóm đạt hiệu suất quang lượng tử cực hạn. Toàn bộ năng lượng phản ứng giải phóng dưới dạng photon ánh sáng nhìn thấy mà không sinh ra nhiệt lượng làm tổn thương mô côn trùng.',
      coreConclusion: 'Đom đóm phát ra "ánh sáng lạnh" với hiệu suất gần như tuyệt đối không tỏa nhiệt; đây là kiến thức chuẩn xác.'
    },
    keyFlawOrProof: 'Sinh học 11: Hiện tượng phát quang sinh học (bioluminescence) có hiệu suất chuyển đổi năng lượng vượt trội.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-17',
    title: 'Nước Cất Siêu Tinh Khiết 100% Không Dẫn Dòng Điện Ở Điều Kiện Chuẩn',
    statement: 'Nước cất qua lọc ion nhiều lần (nước H2O tuyệt đối không hòa tan khoáng chất) là một chất cách điện hoàn hảo vì không hề có các ion tự do dịch chuyển để dẫn dòng điện.',
    category: 'science',
    labelType: 'ai_true',
    labelAuthor: 'Trợ lý AI Vật Lý & Hóa Lý',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Nước thông thường dẫn điện là nhờ các ion khoáng hòa tan (Na+, Cl-, Ca2+, Mg2+). Bản thân phân tử H2O liên kết cộng hóa trị bền vững và có độ phân ly cực kỳ nhỏ, nên nước siêu tinh khiết có điện trở suất rất cao và cách điện tốt.',
    psychologicalDebunk: 'Lời dặn quen thuộc "không cắm điện khi tay dính nước" khiến học sinh lầm tưởng rằng phân tử nước bản chất tự nó là chất dẫn điện mạnh.',
    verifiedSources: [
      { name: 'Viện Khoa học và Công nghệ Việt Nam (VAST)', url: 'https://vast.gov.vn', domain: 'vast.gov.vn' },
      { name: 'Báo Giáo Dục & Thời Đại', url: 'https://giaoducthoidai.vn', domain: 'giaoducthoidai.vn' }
    ],
    verifiedFact: {
      sourceName: 'Khoa Hóa học Đại học Sư phạm Hà Nội & Tạp chí Hóa học Việt Nam',
      sourceDomain: 'vast.gov.vn',
      sourceUrl: 'https://vast.gov.vn',
      factQuote: 'Thí nghiệm tính dẫn điện dung dịch Hóa học lớp 11 chứng minh: Nước cất khử ion siêu tinh khiết không làm sáng bóng đèn thử nghiệm do nồng độ ion H+ và OH- tự do ở 25°C là cực nhỏ (10^-7 mol/l). Dòng điện trong đời sống chỉ truyền qua nước khi có muối khoáng hòa tan đóng vai trò hạt tải điện.',
      coreConclusion: 'Nước tinh khiết tuyệt đối là chất cách điện; chỉ khi hòa tan muối khoáng thì nước mới dẫn điện.'
    },
    keyFlawOrProof: 'Hóa học 11 bài Sự điện phân: Nước cất không phải là chất điện giải mạnh dẫn điện.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-18',
    title: 'Để Cây Xanh Trong Phòng Học Kín Ban Đêm Có Thể Hút Hết Oxy Khiến Học Sinh Ngạt Thở',
    statement: 'Vào ban đêm cây xanh ngừng quang hợp và chuyển sang hô hấp tế bào thải khí CO2, một vài chậu cây cảnh để trong phòng trọ học sinh có thể hút cạn toàn bộ khí oxy gây ngạt thở nguy kịch.',
    category: 'science',
    labelType: 'none',
    labelAuthor: 'Nhóm Thảo Luận Mẹo Phòng Trọ Học Sinh',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Ban đêm cây xanh có hô hấp lấy O2 và thải CO2, nhưng lượng khí CO2 mà một vài chậu cây cảnh trong nhà thải ra chỉ tương đương một con mèo nhỏ hoặc một phần rất nhỏ so với một người ngủ cùng phòng, hoàn toàn không thể làm cạn kiệt oxy.',
    psychologicalDebunk: 'Học sinh học bài Quang hợp và Hô hấp trong SGK Sinh học thấy cây lấy O2 ban đêm liền phóng đại nguy cơ lên gấp trăm lần.',
    verifiedSources: [
      { name: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam (VAST)', url: 'https://vast.gov.vn', domain: 'vast.gov.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên mục Khoa Học Thường Thức)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Sinh thái và Tài nguyên sinh vật (VAST) & Báo Tuổi Trẻ',
      sourceDomain: 'vast.gov.vn',
      sourceUrl: 'https://vast.gov.vn',
      factQuote: 'Các chuyên gia sinh lý thực vật Viện Hàn lâm KH&CN Việt Nam khẳng định: Lượng oxy một chậu cây cảnh tiêu thụ ban đêm chỉ bằng khoảng 1/15 so với một người trưởng thành thở ra cùng thời gian. Một vài chậu cây cảnh trong phòng ngủ không thể làm giảm đáng kể nồng độ oxy hay gây ngạt thở cho học sinh.',
      coreConclusion: 'Cây cảnh trong phòng ngủ thải lượng CO2 cực nhỏ, hoàn toàn an toàn và không gây ngạt thở.'
    },
    keyFlawOrProof: 'Đo lường thể tích trao đổi khí sinh học: 1 chậu cây xanh trong nhà chỉ hô hấp tiêu thụ ~0.5 lít O2/đêm.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-19',
    title: 'Bị Ong Đốt Hoặc Kiến Lửa Cắn Dùng Nước Vôi Hoặc Xà Phòng Bôi Lên Giúp Làm Dịu Vết Cắn',
    statement: 'Nọc độc của kiến và ong có chứa thành phần axit fomic (HCOOH). Việc bôi ngay nước vôi tôi hoặc bọt xà phòng kiềm nhẹ lên vết chích sẽ diễn ra phản ứng trung hòa axit-bazơ giúp giảm đau rát tức thì.',
    category: 'science',
    labelType: 'human_true',
    labelAuthor: 'Thầy Giáo Dạy Hóa Học THPT Chuyên',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Đây là ứng dụng thực tế kinh điển của bài học Axit cacboxylic trong chương trình Hóa học THPT: HCOOH tác động kích ứng đầu mút thần kinh gây rát buốt; dung dịch kiềm nhẹ (bọt xà phòng, baking soda, nước vôi trong) trung hòa lượng axit còn đọng trên bề mặt da.',
    psychologicalDebunk: 'Nhiều người nghĩ mẹo dân gian là thiếu khoa học, nhưng mẹo này hoàn toàn dựa trên phương trình phản ứng hóa học chính xác.',
    verifiedSources: [
      { name: 'Cục Quản lý Khám, Chữa Bệnh - Bộ Y tế', url: 'https://kcb.vn', domain: 'kcb.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bộ Y tế Việt Nam & Hội Hóa học Việt Nam',
      sourceDomain: 'kcb.vn',
      sourceUrl: 'https://kcb.vn',
      factQuote: 'Hướng dẫn sơ cứu côn trùng cắn của ngành Y tế xác nhận: Nọc độc của kiến và ong có tính axit (chủ yếu là axit fomic). Rửa sạch vết cắn bằng xà phòng hoặc dung dịch kiềm nhẹ giúp trung hòa một phần axit trên bề mặt da, làm dịu nhanh cơn đau buốt và ngăn chặn phù nề cục bộ.',
      coreConclusion: 'Dùng kiềm nhẹ như xà phòng trung hòa axit nọc côn trùng là giải pháp sơ cứu khoa học và chính xác.'
    },
    keyFlawOrProof: 'Phương trình Hóa học 11: 2HCOOH + Ca(OH)2 ➔ (HCOO)2Ca + 2H2O.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-20',
    title: 'Uống Nước Nóng Đóng Băng Nhanh Hơn Nước Nguội Trong Tủ Lạnh (Hiệu Ứng Mpemba)',
    statement: 'Trong các điều kiện đối lưu nhiệt và bay hơi xác định, một cốc nước ấm ở 60°C có thể kết tinh thành đá nhanh hơn một cốc nước nguội ở 20°C cùng thể tích khi đặt chung vào ngăn đá tủ lạnh.',
    category: 'science',
    labelType: 'none',
    labelAuthor: 'Bài Đố Vui Câu Lạc Bộ Vật Lý THPT',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Nghịch lý Mpemba là hiện tượng vật lý nhiệt động lực học có thật: Sự bay hơi nhanh làm giảm khối lượng nước thực tế, gradient nhiệt tạo dòng đối lưu mạnh hơn và độ linh động của liên kết hydro trong nước nóng đẩy nhanh quá trình kết tinh hạt đá.',
    psychologicalDebunk: 'Trực giác logic bề nổi cho rằng "nước nóng phải mất thêm thời gian hạ nhiệt về 20°C rồi mới đông" khiến học sinh dễ phán đoán sai.',
    verifiedSources: [
      { name: 'Viện Khoa học Vật liệu (Viện Hàn lâm KH&CN Việt Nam)', url: 'https://ims.vast.ac.vn', domain: 'vast.ac.vn' },
      { name: 'Tạp chí Tia Sáng (Bộ Khoa học và Công nghệ)', url: 'https://tiasang.com.vn', domain: 'tiasang.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Hội Vật lý Việt Nam & Tạp chí Tia Sáng (Bộ KH&CN)',
      sourceDomain: 'tiasang.com.vn',
      sourceUrl: 'https://tiasang.com.vn',
      factQuote: 'Các nhà vật lý thực nghiệm xác nhận: Hiệu ứng Mpemba là hiện tượng có thật trong nhiều điều kiện thí nghiệm. Nước nóng bốc hơi làm giảm thể tích thực tế, tạo dòng đối lưu mạnh thúc đẩy tản nhiệt ra môi trường ngăn đông nhanh hơn nước nguội ban đầu.',
      coreConclusion: 'Nước nóng trong điều kiện thích hợp thực sự có thể đóng băng trước nước nguội; đây là hiện tượng vật lý Mpemba có thật.'
    },
    keyFlawOrProof: 'Bài báo nghiên cứu thực nghiệm nhiệt động lực học trên Tạp chí Tia Sáng về hiệu ứng Mpemba.',
    difficulty: 'hard'
  },

  // ==========================================
  // KHỐI 3: AI & AN TOÀN KHÔNG GIAN MẠNG HỌC SINH (10 CÂU)
  // ==========================================
  {
    id: 'ch-hs-21',
    title: 'Mô Hình Trí Tuệ Nhân Tạo (ChatGPT) Đã Có Khả Năng Hiểu Và Cảm Thụ Ý Thơ Văn Học',
    statement: 'Khi yêu cầu AI phân tích bài thơ "Tây Tiến" của Quang Dũng, AI thực sự thấu hiểu được nỗi đau, tình đồng chí và tâm tư sâu kín của nhà thơ như một con người thực thụ chứ không đơn thuần chỉ là ghép chữ.',
    category: 'ai_tech',
    labelType: 'human_false',
    labelAuthor: 'Học Sinh Viết Văn Bằng ChatGPT Trong Nhóm Ôn Thi Văn THPT',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Mô hình ngôn ngữ lớn (LLM) là thuật toán toán học dự đoán từ tiếp theo (next-token prediction) dựa trên xác suất thống kê từ kho văn mẫu khổng lồ. AI không có hệ thần kinh sinh học, không có trải nghiệm cuộc sống và hoàn toàn không có cảm xúc hay sự thấu cảm văn học.',
    psychologicalDebunk: 'Khi thấy AI sinh ra những câu văn hoa mỹ giàu hình ảnh, học sinh dễ bị đánh lừa bởi ảo giác nhân cách hóa (Anthropomorphism).',
    verifiedSources: [
      { name: 'Viện Công nghệ Thông tin (Viện Hàn lâm KH&CN Việt Nam VAST)', url: 'https://ioit.ac.vn', domain: 'ioit.ac.vn' },
      { name: 'Báo Giáo Dục & Thời Đại', url: 'https://giaoducthoidai.vn', domain: 'giaoducthoidai.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Công nghệ Thông tin (Viện Hàn lâm KH&CN Việt Nam) & ĐHQGHN',
      sourceDomain: 'ioit.ac.vn',
      sourceUrl: 'https://ioit.ac.vn',
      factQuote: 'Các chuyên gia AI tại Viện Công nghệ Thông tin khẳng định: Các mô hình ngôn ngữ như ChatGPT là hệ thống xử lý ma trận xác suất từ ngữ. Chúng tái hiện cấu trúc câu từ dữ liệu huấn luyện chứ hoàn toàn không có nhận thức, cảm xúc hay sự thấu cảm nghệ thuật. Bài văn của AI chỉ là mô phỏng ngữ pháp bề nổi.',
      coreConclusion: 'AI không có cảm xúc hay khả năng thấu cảm bài thơ; nó chỉ tính toán xác suất ghép nối từ ngữ.'
    },
    keyFlawOrProof: 'Bản chất thuật toán Transformer: Tính toán phân bố xác suất vector từ ngữ, hoàn toàn không có tâm lý cảm xúc.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-22',
    title: 'Tin Nhắn "Con Đang Cấp Cứu Ở Bệnh Viện Chuyển Tiền Gấp" Do Deepfake Tạo Giọng Nói Mạo Danh',
    statement: 'Kẻ lừa đảo sử dụng đoạn ghi âm giọng nói học sinh trên Facebook/TikTok để AI nhân bản giọng nói (voice clone) gọi điện cho cha mẹ báo tin tai nạn nhằm lừa đảo chuyển tiền khẩn cấp.',
    category: 'ai_tech',
    labelType: 'human_true',
    labelAuthor: 'Cục An Toàn Thông Tin - Bộ Thông Tin và Truyền Thông',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Công nghệ AI Deepfake hiện nay chỉ cần đoạn âm thanh mẫu từ 3 đến 5 giây là có thể sao chép ngữ điệu và giọng nói của học sinh. Kẻ gian lợi dụng tâm lý hoảng loạn của phụ huynh để thúc giục chuyển tiền trước khi kịp kiểm chứng với nhà trường.',
    psychologicalDebunk: 'Tình huống tâm lý đe dọa trực tiếp đến tính mạng con cái khiến phụ huynh rơi vào trạng thái hoảng loạn cực độ, mất khả năng tư duy phản biện.',
    verifiedSources: [
      { name: 'Trung tâm Giám sát An toàn Không gian mạng Quốc gia (NCSC)', url: 'https://khonggianmang.vn', domain: 'khonggianmang.vn' },
      { name: 'Cục An Toàn Thông Tin (Bộ TT&TT)', url: 'https://ais.gov.vn', domain: 'ais.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Trung tâm Giám sát An toàn Không gian mạng Quốc gia (NCSC) & Bộ Công An',
      sourceDomain: 'khonggianmang.vn',
      sourceUrl: 'https://khonggianmang.vn',
      factQuote: 'Trung tâm NCSC và Cục An toàn Thông tin liên tục cảnh báo thủ đoạn lừa đảo nguy hiểm: Kẻ gian dùng AI giả giọng nói và video call Deepfake học sinh thông báo bị tai nạn cấp cứu tại bệnh viện. Bộ Công an khuyến cáo phụ huynh và học sinh phải thiết lập mật khẩu gia đình hoặc bình tĩnh gọi điện trực tiếp cho giáo viên chủ nhiệm để xác minh.',
      coreConclusion: 'Thủ đoạn lừa đảo mạo danh học sinh cấp cứu bằng AI là có thật và đang diễn biến phức tạp tại Việt Nam.'
    },
    keyFlawOrProof: 'Các vụ án lừa đảo Deepfake "con đang cấp cứu" đã được Bộ Công an triệt phá và phát cảnh báo trên VTV1.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-23',
    title: 'Quét Mã QR Nhận Quà Tặng / Vé Xem Phim Miễn Phí Trên Mạng Không Thể Bị Mất Tài Khoản',
    statement: 'Mã QR chỉ là hình ảnh chứa ký tự chữ số đơn thuần, quét mã QR trúng quà trên mạng xã hội không có khả năng dẫn đến việc bị chiếm đoạt tài khoản Zalo, Facebook hay tài khoản ngân hàng.',
    category: 'ai_tech',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Hướng Dẫn Nhận Quà Khuyến Mãi',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Mã QR độc hại (Quishing) có thể điều hướng nạn nhân tới trang web giả mạo giao diện đăng nhập (phishing) hoặc tự động tải tệp mã độc APK về điện thoại để đánh cắp mã OTP, quyền trợ năng và chiếm quyền điều khiển tài khoản.',
    psychologicalDebunk: 'Tâm lý thích nhận quà miễn phí và sự tiện lợi của mã QR khiến nhiều bạn trẻ quét mã bừa bãi mà không kiểm tra tên miền liên kết.',
    verifiedSources: [
      { name: 'Trung tâm Giám sát An toàn Không gian mạng Quốc gia (NCSC)', url: 'https://khonggianmang.vn', domain: 'khonggianmang.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên trang Nhịp Sống Số)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Cục An Toàn Thông Tin (Bộ TT&TT) & Trung tâm NCSC',
      sourceDomain: 'ais.gov.vn',
      sourceUrl: 'https://ais.gov.vn',
      factQuote: 'Cục An toàn Thông tin phát đi cảnh báo đỏ về hình thức tấn công lừa đảo qua mã QR (QR Phishing): Kẻ xấu dán đè mã QR độc hại tại cổng trường, quán trà sữa hoặc gửi quà tặng ảo. Khi học sinh quét mã, liên kết sẽ dẫn đến website giả mạo đánh cắp mật khẩu và quyền kiểm soát thiết bị.',
      coreConclusion: 'Quét mã QR lạ hoàn toàn có thể bị đánh cắp tài khoản và tiền bạc; nhận định an toàn là sai lầm.'
    },
    keyFlawOrProof: 'Cơ chế tấn công QR Phishing được NCSC ghi nhận trong Cẩm nang nhận diện lừa đảo trực tuyến.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-24',
    title: 'Cửa Sổ Ẩn Danh (Incognito) Giúp Học Sinh Ẩn Mình 100% Khỏi Nhà Trường Và Nhà Mạng Viễn Thông',
    statement: 'Khi bật chế độ ẩn danh trên trình duyệt Chrome hay Cốc Cốc, toàn bộ địa chỉ IP và lịch sử truy cập trang web của học sinh sẽ bị mã hóa vô hình, nhà trường và nhà mạng không thể nào biết được bạn đã xem nội dung gì.',
    category: 'ai_tech',
    labelType: 'none',
    labelAuthor: 'Nhóm Mẹo Công Nghệ Học Sinh',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Chế độ ẩn danh chỉ đơn giản là không lưu lịch sử duyệt web và cookie trên chiếc máy đó sau khi đóng tab. Nhà mạng viễn thông (Viettel, VNPT, FPT), người quản trị mạng Wi-Fi trường học và máy chủ website vẫn ghi nhận rõ ràng địa chỉ IP và danh sách trang web bạn đã truy cập.',
    psychologicalDebunk: 'Biểu tượng thám tử đội mũ đeo kính của tab ẩn danh tạo cảm giác an toàn ảo tưởng cho học sinh khi lướt web.',
    verifiedSources: [
      { name: 'Trung tâm Giám sát An toàn Không gian mạng Quốc gia (NCSC)', url: 'https://khonggianmang.vn', domain: 'khonggianmang.vn' },
      { name: 'Báo Thanh Niên (Công Nghệ)', url: 'https://thanhnien.vn', domain: 'thanhnien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Trung tâm Giám sát An toàn Không gian mạng Quốc gia (NCSC)',
      sourceDomain: 'khonggianmang.vn',
      sourceUrl: 'https://khonggianmang.vn',
      factQuote: 'Chuyên gia NCSC cảnh báo: Tab ẩn danh không phải là công cụ tàng hình trên Internet. Nó chỉ ngăn người khác dùng chung máy tính xem lại lịch sử. Quản trị viên mạng Wi-Fi trường học và nhà cung cấp dịch vụ mạng vẫn theo dõi và lưu giữ toàn bộ nhật ký kết nối mạng (DNS log) từ thiết bị của bạn.',
      coreConclusion: 'Chế độ ẩn danh không che giấu hành vi trước nhà mạng hay trường học; bạn không hề vô hình trên mạng.'
    },
    keyFlawOrProof: 'Giao thức mạng TCP/IP: Mọi gói tin truyền qua cổng router Wi-Fi đều ghi nhận địa chỉ MAC và IP nguồn.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-25',
    title: 'Bẫy Việc Làm Online "Xem Video TikTok / Đánh Giá Sản Phẩm Kiếm 500k/Ngày" Dụ Học Sinh Nạp Tiền',
    statement: 'Các nhóm tuyển dụng việc nhẹ lương cao dành cho học sinh cấp 3 ban đầu trả thưởng vài chục nghìn đồng để tạo niềm tin, sau đó yêu cầu nạp tiền làm nhiệm vụ lớn hơn rồi khóa tài khoản chiếm đoạt toàn bộ tiền.',
    category: 'ai_tech',
    labelType: 'human_true',
    labelAuthor: 'Trung Tâm Xử Lý Tin Giả Việt Nam (VAFC - Bộ TT&TT)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Đây là cái bẫy tâm lý lừa đảo Ponzi kinh điển trên mạng: Kẻ lừa đảo thả mồi nhử số tiền nhỏ ban đầu để kích hoạt lòng tham, sau đó yêu cầu học sinh chuyển tiền cọc "nâng cấp đơn hàng" hàng triệu đồng rồi cắt đứt liên lạc.',
    psychologicalDebunk: 'Học sinh cấp 3 muốn kiếm tiền tiêu vặt hoặc đỡ đần cha mẹ nhưng thiếu kinh nghiệm thực tế rất dễ sập bẫy các chiêu trò này.',
    verifiedSources: [
      { name: 'Trung tâm Xử lý Tin giả Việt Nam (VAFC)', url: 'https://tingia.gov.vn', domain: 'tingia.gov.vn' },
      { name: 'Cổng Thông tin Điện tử Bộ Công An', url: 'https://mps.gov.vn', domain: 'mps.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Trung tâm Xử lý Tin giả Việt Nam (VAFC) & Cổng Thông tin Bộ Công An',
      sourceDomain: 'tingia.gov.vn',
      sourceUrl: 'https://tingia.gov.vn',
      factQuote: 'Bộ Công an và Trung tâm VAFC liên tục phát cảnh báo về bẫy việc làm online cộng tác viên xem video nhận hoa hồng. Hàng ngàn học sinh và sinh viên đã bị lừa mất từ vài triệu đến hàng chục triệu đồng tiền học phí khi tham gia nạp tiền làm nhiệm vụ giật đơn hàng ảo.',
      coreConclusion: 'Bẫy làm nhiệm vụ xem video kiếm tiền online là thủ đoạn lừa đảo chiếm đoạt tài sản có thật và rất phổ biến.'
    },
    keyFlawOrProof: 'Cảnh báo 24 hình thức lừa đảo trực tuyến phổ biến do Cục An toàn Thông tin công bố.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-26',
    title: 'Vừa Sạc Pin Vừa Chơi Game Bằng Cáp Sạc Kém Chất Lượng Có Nguy Cơ Cháy Nổ Gây Thương Tích',
    statement: 'Nhiều trường hợp học sinh cấp 3 bị dập nát bàn tay hoặc bỏng nặng do sử dụng củ cáp sạc trôi nổi không rõ nguồn gốc, khiến dòng điện rò rỉ làm nổ pin lithium-ion ngay khi đang cầm điện thoại trên tay.',
    category: 'ai_tech',
    labelType: 'human_true',
    labelAuthor: 'Bác sĩ Khoa Cấp Cứu - Bệnh viện Việt Đức Hà Nội',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Vừa chơi game đồ họa nặng vừa sạc khiến pin sinh nhiệt lượng khổng lồ. Củ sạc giá rẻ không có mạch bảo vệ ngắt quá nhiệt và cách ly cao áp, dễ dẫn đến hiện tượng thoát nhiệt (thermal runaway) làm nổ tung khối pin lithium ngay trên tay người dùng.',
    psychologicalDebunk: 'Nhiều bạn học sinh nghiện game không thể rời máy khi pin yếu nên thường xuyên cắm sạc dự phòng hoặc sạc tường chơi liên tục.',
    verifiedSources: [
      { name: 'Bệnh viện Hữu nghị Việt Đức', url: 'https://benhvienvietduc.org', domain: 'benhvienvietduc.org' },
      { name: 'Báo Tuổi Trẻ (Mục Đời Sống & Sức Khỏe)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Hữu nghị Việt Đức & Báo Tuổi Trẻ',
      sourceDomain: 'benhvienvietduc.org',
      sourceUrl: 'https://benhvienvietduc.org',
      factQuote: 'Bệnh viện Hữu nghị Việt Đức đã tiếp nhận và phẫu thuật cấp cứu cho nhiều học sinh bị nát bàn tay và chấn thương mắt do điện thoại phát nổ khi vừa sạc vừa dùng. Các bác sĩ khuyến cáo tuyệt đối không sử dụng điện thoại khi đang cắm sạc trực tiếp, đặc biệt với phụ kiện sạc trôi nổi không đạt chuẩn.',
      coreConclusion: 'Vừa sạc vừa dùng điện thoại bằng phụ kiện trôi nổi thực sự có nguy cơ nổ pin gây tàn phế bàn tay.'
    },
    keyFlawOrProof: 'Hồ sơ bệnh án cấp cứu chấn thương do nổ pin điện thoại tại Bệnh viện Việt Đức.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-27',
    title: 'Sóng Phát Từ Trạm Viễn Thông 5G Làm Teo Tế Bào Não Học Sinh Sống Gần Đó',
    statement: 'Nhóm mạng xã hội chia sẻ: Các cột ăng-ten 5G lắp đặt gần trường học phát ra bức xạ điện từ cực mạnh làm suy giảm chỉ số IQ và gây thoái hóa tế bào não học sinh theo thời gian.',
    category: 'ai_tech',
    labelType: 'human_false',
    labelAuthor: 'Nhóm Thuyết Âm Mưu Công Nghệ Trên Mạng',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Sóng 5G là sóng vô tuyến bức xạ không ion hóa, mức công suất phát tại các trạm viễn thông ở Việt Nam đều phải tuân thủ quy chuẩn kỹ thuật quốc gia QCVN của Bộ Thông tin và Truyền thông, thấp hơn hàng trăm lần so với ngưỡng có thể gây tác động nhiệt sinh học.',
    psychologicalDebunk: 'Nỗi sợ hãi công nghệ mới và việc gán ghép vô căn cứ giữa sóng vô tuyến với các bệnh lý thần kinh tạo nên tâm lý hoang mang.',
    verifiedSources: [
      { name: 'Cục Tần số Vô tuyến điện (Bộ TT&TT)', url: 'https://rfd.gov.vn', domain: 'rfd.gov.vn' },
      { name: 'Viện Sức khỏe Nghề nghiệp và Môi trường (Bộ Y tế)', url: 'https://nioeh.org.vn', domain: 'nioeh.org.vn' }
    ],
    verifiedFact: {
      sourceName: 'Cục Tần số Vô tuyến điện (Bộ TT&TT) & Viện Sức khỏe Nghề nghiệp (Bộ Y tế)',
      sourceDomain: 'rfd.gov.vn',
      sourceUrl: 'https://rfd.gov.vn',
      factQuote: 'Cục Tần số Vô tuyến điện khẳng định: Mọi trạm phát sóng 5G tại Việt Nam trước khi đưa vào vận hành đều phải đo kiểm bức xạ điện từ và cấp chứng nhận hợp quy theo tiêu chuẩn an toàn của WHO và ICNIRP. Sóng 5G không ion hóa, không đủ năng lượng làm tổn thương cấu trúc tế bào não người.',
      coreConclusion: 'Trạm phát sóng 5G an toàn theo quy chuẩn y tế; tin đồn làm teo tế bào não là sai sự thật.'
    },
    keyFlawOrProof: 'Quy chuẩn kỹ thuật quốc gia QCVN 8:2022/BTTTT về phơi nhiễm trường điện từ của trạm gốc viễn thông.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-28',
    title: 'Học Sinh Đăng Ảnh Căn Cước Công Dân Lên Mạng Có Nguy Cơ Bị Kẻ Gian Lấy Mở Tài Khoản Vay Tiền Ảo',
    statement: 'Nhiều bạn học sinh cấp 3 khi làm xong Căn cước công dân (CCCD) đã chụp ảnh khoe lên Facebook không che số và mã QR, tạo cơ hội cho kẻ xấu lấy cắp thông tin để đăng ký SIM rác và vay tiền qua ứng dụng tín dụng đen.',
    category: 'ai_tech',
    labelType: 'human_true',
    labelAuthor: 'Cục Cảnh Sát QLHC Về Trật Tự Xã Hội (C06 - Bộ Công An)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Mã QR và thông tin trên thẻ CCCD gắn chip chứa dữ liệu định danh cá nhân nhạy cảm. Kẻ gian có thể dùng ảnh thẻ này để vượt qua bước xác thực danh tính điện tử (eKYC) của các ví điện tử hoặc công ty tài chính lừa đảo.',
    psychologicalDebunk: 'Tâm lý thích khoe thành quả tuổi 18 hoặc giấy tờ cá nhân lên mạng xã hội khiến học sinh mất cảnh giác về bảo mật danh tính.',
    verifiedSources: [
      { name: 'Cục Cảnh sát QLHC về TTXH (C06 - Bộ Công An)', url: 'https://canhsatquanlycuoitruong.gov.vn', domain: 'gov.vn' },
      { name: 'Báo Tuổi Trẻ (Mục Pháp Luật & Đời Sống)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Cục C06 (Bộ Công An) & Cục An Toàn Thông Tin',
      sourceDomain: 'ais.gov.vn',
      sourceUrl: 'https://ais.gov.vn',
      factQuote: 'Bộ Công an cảnh báo khẩn thiết: Người dân, đặc biệt là học sinh sinh viên tuyệt đối không chụp ảnh thẻ CCCD/CMND đăng tải lên mạng xã hội. Việc để lộ số CCCD và mã QR tạo kẽ hở cho tội phạm công nghệ cao mở tài khoản ngân hàng ảo rửa tiền, đăng ký kinh doanh trái phép và vay nợ tín dụng đen.',
      coreConclusion: 'Đăng ảnh CCCD lên mạng tiềm ẩn rủi ro bị mạo danh vay nợ và lừa đảo; cảnh báo này hoàn toàn chính xác.'
    },
    keyFlawOrProof: 'Công văn cảnh báo tội phạm thu thập thông tin CCCD của Cục C06 - Bộ Công an.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-29',
    title: 'Trí Tuệ Nhân Tạo Sinh Ảnh (Midjourney) Có Thể Tự Động Sáng Tạo Nghệ Thuật Không Cần Dữ Liệu Con Người',
    statement: 'Các mô hình AI tạo ảnh nghệ thuật hiện nay đã đạt tới cấp độ tự sáng tạo từ con số không (ex nihilo) mà không cần nạp vào bất kỳ bức tranh hay dữ liệu hình ảnh nào do các họa sĩ con người từng vẽ trước đó.',
    category: 'ai_tech',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Đồ Họa Số Sáng Tạo',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Mô hình khuếch tán (Diffusion Model) tạo ảnh bằng cách học hàng tỷ cặp hình ảnh - văn bản do con người tạo ra để học cách khử nhiễu (denoising). Nếu không có dữ liệu khổng lồ từ các họa sĩ thật, AI không thể tự sinh ra bất kỳ hình ảnh có ý nghĩa nào.',
    psychologicalDebunk: 'Sự kỳ diệu của các bức tranh vẽ trong vài giây khiến người xem lầm tưởng AI có linh hồn và tài năng sáng tạo độc lập.',
    verifiedSources: [
      { name: 'Viện Công nghệ Thông tin (Viện Hàn lâm KH&CN Việt Nam)', url: 'https://ioit.ac.vn', domain: 'ioit.ac.vn' },
      { name: 'Tạp chí Tia Sáng (Bộ Khoa học và Công nghệ)', url: 'https://tiasang.com.vn', domain: 'tiasang.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Công nghệ Thông tin (VAST) & Tạp chí Tia Sáng',
      sourceDomain: 'ioit.ac.vn',
      sourceUrl: 'https://ioit.ac.vn',
      factQuote: 'Các nhà nghiên cứu thị giác máy tính giải thích: AI tạo sinh hoạt động dựa trên cơ chế học sâu thống kê (Deep Learning). Nó tổng hợp và ngoại suy từ tập dữ liệu huấn luyện hàng tỷ bức tranh do con người vẽ. Tuyên bố AI tự sáng tạo độc lập không cần dữ liệu tranh vẽ của loài người là ngụy tạo bản chất thuật toán.',
      coreConclusion: 'AI tạo ảnh phụ thuộc hoàn toàn vào kho dữ liệu tranh vẽ của con người; không thể tự sáng tạo từ hư không.'
    },
    keyFlawOrProof: 'Nguyên lý mô hình khuếch tán (Diffusion): Quá trình đảo ngược của việc thêm nhiễu Gauss vào dữ liệu ảnh thực tế.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-30',
    title: 'Giao Diện Não - Máy Tính Đã Giúp Người Bị Liệt Hoàn Toàn Gõ Văn Bản Bằng Suy Nghĩ',
    statement: 'Các vi điện cực cấy ghép vào vỏ não vận động đã dịch mã tín hiệu điện thần kinh thành ký tự chữ viết trên màn hình, giúp bệnh nhân tổn thương tủy sống có thể chat và điều khiển chuột máy tính chỉ bằng suy nghĩ.',
    category: 'ai_tech',
    labelType: 'ai_true',
    labelAuthor: 'Trợ lý AI Y Tế Công Nghệ Thần Kinh',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Công nghệ BCI (Brain-Computer Interface) đã đạt cột mốc thực tế lớn: Chip cấy ghép ghi lại tín hiệu điện thế hoạt động của tế bào thần kinh khi người bệnh tưởng tượng hành động gõ chữ và thuật toán AI giải mã thành văn bản trên máy tính.',
    psychologicalDebunk: 'Nhiều người nghĩ "điều khiển máy tính bằng ý nghĩ" chỉ có trong truyện tranh viễn tưởng, không ngờ khoa học thần kinh hiện đại đã ứng dụng thực tế thành công.',
    verifiedSources: [
      { name: 'Tạp chí Khoa học & Công nghệ Việt Nam (Bộ KH&CN)', url: 'https://vjst.vn', domain: 'vjst.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên mục Khoa Học Đột Phá)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Tạp chí Khoa học & Công nghệ Việt Nam & Báo Tuổi Trẻ',
      sourceDomain: 'vjst.vn',
      sourceUrl: 'https://vjst.vn',
      factQuote: 'Báo cáo công nghệ y sinh trên Tạp chí KH&CN Việt Nam công nhận: Giao diện não - máy tính (BCI) kết hợp thuật toán AI giải mã tín hiệu điện não đã giúp bệnh nhân liệt tứ chi đạt tốc độ gõ văn bản lên tới 60-90 ký tự/phút chỉ bằng suy nghĩ cử động bàn tay, mở ra kỷ nguyên phục hồi chức năng thần kinh đột phá.',
      coreConclusion: 'Công nghệ gõ văn bản bằng suy nghĩ qua giao diện não - máy tính là thành tựu có thật đã được kiểm chứng.'
    },
    keyFlawOrProof: 'Thử nghiệm lâm sàng có kiểm chứng công bố trên tạp chí khoa học quốc tế Nature và được VJST trích dẫn.',
    difficulty: 'hard'
  },

  // ==========================================
  // KHỐI 4: VŨ TRỤ & MÔI TRƯỜNG VIỆT NAM (10 CÂU)
  // ==========================================
  {
    id: 'ch-hs-31',
    title: 'Mùa Hè Ở Việt Nam Nóng Hơn Mùa Đông Vì Trái Đất Đến Gần Mặt Trời Hơn Vào Tháng 6',
    statement: 'Sở dĩ mùa hè ở các tỉnh miền Bắc và miền Nam nắng nóng gay gắt là vì quỹ đạo Trái Đất chuyển động đến vị trí gần Mặt Trời nhất trong năm vào khoảng tháng 6 và tháng 7.',
    category: 'space_environment',
    labelType: 'human_false',
    labelAuthor: 'Tài Liệu Mẹo Thường Thức Địa Lý',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Thực tế Trái Đất ở xa Mặt Trời nhất (điểm viễn nhật, ~152 triệu km) vào đầu tháng 7 - khi Bắc bán cầu đang là đỉnh điểm mùa hè. Các mùa diễn ra là do trục tự quay của Trái Đất nghiêng 23.5 độ, khiến Bắc bán cầu ngả về phía Mặt Trời nhận góc chiếu tia nắng thẳng đứng và thời gian chiếu sáng dài hơn.',
    psychologicalDebunk: 'Cảm giác trực quan "đến gần nguồn nhiệt thì thấy nóng" khiến học sinh dễ suy luận sai về quỹ đạo thiên văn học.',
    verifiedSources: [
      { name: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)', url: 'https://vaca.org.vn', domain: 'vaca.org.vn' },
      { name: 'Báo Khoa học & Phát triển', url: 'https://khoahocphattrien.vn', domain: 'khoahocphattrien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)',
      sourceDomain: 'vaca.org.vn',
      sourceUrl: 'https://vaca.org.vn',
      factQuote: 'Chuyên gia Đặng Vũ Tuấn Sơn (Chủ tịch VACA) giải thích: Khoảng cách giữa Trái Đất và Mặt Trời hoàn toàn không phải là nguyên nhân sinh ra các mùa. Vào mùa hè của Việt Nam (tháng 6-7), Trái Đất thực tế đang ở vị trí xa Mặt Trời nhất trong cả năm. Mùa hè nóng là do trục Trái Đất nghiêng tạo góc chiếu tia sáng Mặt Trời vuông góc với mặt đất.',
      coreConclusion: 'Mùa hè do độ nghiêng trục Trái Đất tạo nên, không phải do Trái Đất ở gần Mặt Trời hơn.'
    },
    keyFlawOrProof: 'Địa lý 10 bài Hệ quả chuyển động quanh Mặt Trời: Trục Trái Đất nghiêng 23 độ 27 phút.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-32',
    title: 'Vạn Lý Trường Thành Là Công Trình Duy Nhất Có Thể Thấy Bằng Mắt Thường Từ Mặt Trăng',
    statement: 'Tài liệu hướng dẫn du lịch truyền tai nhau: Các phi hành gia khi đứng trên Mặt Trăng nhìn về Trái Đất có thể nhận ra rõ ràng dải tường thành Vạn Lý Trường Thành vắt ngang qua lục địa châu Á bằng mắt thường.',
    category: 'space_environment',
    labelType: 'none',
    labelAuthor: 'Lời Kể Hướng Dẫn Viên Du Lịch',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Mặt Trăng cách Trái Đất 384.000 km. Vạn Lý Trường Thành chỉ rộng trung bình 5-6 mét và làm từ đất đá cùng màu với địa hình đồi núi xung quanh. Nhìn từ Mặt Trăng, Trái Đất chỉ nhỏ như một quả bóng tennis; mắt người không có độ phân giải quang học để thấy một vật thể rộng vài mét từ khoảng cách đó.',
    psychologicalDebunk: 'Niềm tự hào về công trình vĩ đại của nhân loại được sách báo cũ ca ngợi tạo nên huyền thoại bền bỉ suốt nhiều thập kỷ.',
    verifiedSources: [
      { name: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)', url: 'https://vaca.org.vn', domain: 'vaca.org.vn' },
      { name: 'Báo VnExpress (Khoa Học Vũ Trụ)', url: 'https://vnexpress.net', domain: 'vnexpress.net' }
    ],
    verifiedFact: {
      sourceName: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA) & Viện Vật lý Địa cầu',
      sourceDomain: 'vaca.org.vn',
      sourceUrl: 'https://vaca.org.vn',
      factQuote: 'VACA khẳng định: Không thể nhìn thấy Vạn Lý Trường Thành từ Mặt Trăng bằng mắt thường. Từ khoảng cách gần 400.000 km, con người chỉ nhìn thấy các mảng lục địa xanh lam, mây trắng và đại dương. Ngay cả từ trạm vũ trụ ISS ở quỹ đạo thấp (400 km), nếu không có ống kính phóng đại chuyên dụng cũng không thể nhận ra công trình này.',
      coreConclusion: 'Vạn Lý Trường Thành không thể nhìn thấy từ Mặt Trăng; đây là lời đồn dân gian từ thế kỷ trước.'
    },
    keyFlawOrProof: 'Vật lý 11 quang hình học: Năng suất phân li của mắt người là 1 phút góc, không thể phân biệt góc mở 10^-8 radian từ Mặt Trăng.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-33',
    title: 'Hiện Tượng Nguyệt Thực "Mặt Trăng Máu" Là Điềm Báo Thảm Họa Thiên Tai',
    statement: 'Khi xảy ra nguyệt thực toàn phần, Mặt Trăng chuyển sang màu đỏ như máu do sự phản chiếu điềm gở của các biến đổi địa chất báo trước động đất hoặc đại dịch.',
    category: 'space_environment',
    labelType: 'human_false',
    labelAuthor: 'Trang Mạng Tử Vi & Chiêm Tinh Học',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Mặt Trăng có màu đỏ đồng là do hiện tượng tán xạ Rayleigh trong khí quyển Trái Đất: Ánh sáng Mặt Trời đi qua rìa khí quyển bị lọc bỏ các bước sóng ngắn (xanh lam), chỉ có các bước sóng dài (đỏ, cam) bị bẻ cong khúc xạ vào vùng bóng tối chiếu lên bề mặt Mặt Trăng.',
    psychologicalDebunk: 'Màu đỏ máu kích thích nỗi sợ hãi tâm linh nguyên thủy của con người từ thời cổ đại.',
    verifiedSources: [
      { name: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)', url: 'https://vaca.org.vn', domain: 'vaca.org.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên trang Khoa Học)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)',
      sourceDomain: 'vaca.org.vn',
      sourceUrl: 'https://vaca.org.vn',
      factQuote: 'VACA giải thích bản chất quang học: Nguyệt thực toàn phần xuất hiện màu đỏ hoàn toàn do hiện tượng tán xạ Rayleigh trong bầu khí quyển Trái Đất (tương tự lý do tại sao hoàng hôn có màu đỏ rực). Đây là hiện tượng thiên văn quang học định kỳ bình thường, hoàn toàn không liên quan đến điềm báo thảm họa.',
      coreConclusion: 'Mặt Trăng đỏ trong nguyệt thực là hiện tượng khúc xạ ánh sáng khí quyển thuần túy, không có yếu tố tâm linh.'
    },
    keyFlawOrProof: 'Vật lý 12 bài Tán sắc và Tán xạ ánh sáng: Ánh sáng đỏ có bước sóng dài ít bị tán xạ nhất khi đi qua khí quyển.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-34',
    title: 'Biến Đổi Khí Hậu Khiến Đồng Bằng Sông Cửu Long Bị Xâm Nhập Mặn Sâu Hơn Hàng Chục Km',
    statement: 'Sự kết hợp giữa nước biển dâng, sụt lún nền đất và các đập thủy điện thượng nguồn giữ nước đã khiến ranh mặn 4 gam/lít lấn sâu vào các nhánh sông Tiền và sông Hậu có nơi lên tới hơn 60-70km vào mùa khô.',
    category: 'space_environment',
    labelType: 'human_true',
    labelAuthor: 'Viện Khoa Học Thủy Lợi Miền Nam (Bộ NN&PTNT)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Đây là thách thức môi trường cấp bách nhất của Việt Nam: Lưu lượng nước ngọt mùa khô đổ về đồng bằng giảm mạnh kết hợp triều cường đẩy nước mặn vào sâu nội đồng, làm thiếu nước sinh hoạt và hủy hoại các vườn cây ăn trái ở Bến Tre, Tiền Giang, Sóc Trăng.',
    psychologicalDebunk: 'Nhiều học sinh ở các thành phố lớn thường nghĩ biến đổi khí hậu là điều gì đó xa xôi ở Bắc Cực, không nhận ra hậu quả hiện hữu ngay tại vựa lúa Việt Nam.',
    verifiedSources: [
      { name: 'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia', url: 'https://nchmf.gov.vn', domain: 'nchmf.gov.vn' },
      { name: 'Viện Khoa học Khí tượng Thủy văn và Biến đổi khí hậu', url: 'https://ktvt.gov.vn', domain: 'ktvt.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Khoa học Khí tượng Thủy văn & Trung tâm Dự báo Khí tượng Thủy văn Quốc gia',
      sourceDomain: 'nchmf.gov.vn',
      sourceUrl: 'https://nchmf.gov.vn',
      factQuote: 'Bản tin cảnh báo xâm nhập mặn của Trung tâm Dự báo Khí tượng Thủy văn Quốc gia xác nhận: Trong các đợt hạn mặn lịch sử, ranh mặn 4g/lít đã xâm nhập sâu từ 65 đến 75km trên các cửa sông Cửu Long, đe dọa trực tiếp nguồn nước ngọt của hàng triệu người dân ĐBSCL do tác động kép của biến đổi khí hậu và can thiệp thượng nguồn.',
      coreConclusion: 'Đồng bằng sông Cửu Long thực tế đang bị xâm nhập mặn lấn sâu trên 60km do biến đổi khí hậu.'
    },
    keyFlawOrProof: 'Dữ liệu đo độ mặn định kỳ tại các trạm quan trắc thủy văn Bến Tre, Trà Vinh, Tiền Giang.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-35',
    title: 'Hạt Vi Nhựa Nhân Tạo Đã Bị Phát Hiện Hiện Diện Trong Muối Ăn Và Hải Sản Tại Việt Nam',
    statement: 'Khảo sát môi trường biển của các viện hải dương học phát hiện các mảnh sợi vi nhựa tổng hợp từ rác thải sinh hoạt phân rã đã xâm nhập vào chuỗi thức ăn, có mặt trong các mẫu cá biển và muối biển thương mại.',
    category: 'space_environment',
    labelType: 'human_true',
    labelAuthor: 'TS. Nguyễn Lê Tuấn - Viện Hải dương học Nha Trang',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Rác nhựa túi nilon, chai nhựa thải ra biển dưới tác động của sóng và tia UV phân rã thành các hạt vi nhựa (<5mm). Động vật phù du và cá ăn nhầm vi nhựa, sau đó tích lũy sinh học trong hải sản và đi vào bữa ăn của con người.',
    psychologicalDebunk: 'Nhiều người nghĩ đại dương bao la có thể tự hòa tan rác thải nhựa, không ngờ các hạt vi nhựa quay trở lại cơ thể con người qua đĩa thức ăn hàng ngày.',
    verifiedSources: [
      { name: 'Viện Hải dương học Nha Trang (VAST)', url: 'https://vnio.org.vn', domain: 'vnio.org.vn' },
      { name: 'Báo Điện Tử Chính Phủ', url: 'https://baochinhphu.vn', domain: 'baochinhphu.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Hải dương học Nha Trang (Viện Hàn lâm KH&CN Việt Nam)',
      sourceDomain: 'vnio.org.vn',
      sourceUrl: 'https://vnio.org.vn',
      factQuote: 'Công trình nghiên cứu công bố của Viện Hải dương học Nha Trang và các nhà khoa học Việt Nam xác nhận: Phân tích các mẫu cá biển tầng nổi và trầm tích đáy ven bờ biển miền Trung ghi nhận sự hiện diện của các sợi vi nhựa polyethylene và polypropylene. Đây là bằng chứng báo động về ô nhiễm rác thải nhựa đại dương tại Việt Nam.',
      coreConclusion: 'Hạt vi nhựa thực sự đã xâm nhập vào hải sản và môi trường biển Việt Nam; cần cấp bách giảm rác nhựa dùng một lần.'
    },
    keyFlawOrProof: 'Phân tích quang phổ hồng ngoại FTIR xác định cấu trúc polyme nhân tạo trong mẫu sinh vật biển.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-36',
    title: 'Bão Nhiệt Đới Ở Bờ Biển Việt Nam Luôn Xoáy Theo Chiều Kim Đồng Hồ Do Lực Coriolis',
    statement: 'Do Trái Đất tự quay quanh trục sinh ra lực Coriolis làm lệch hướng gió, các cơn bão hình thành trên Biển Đông đổ bộ vào Việt Nam luôn xoáy tròn theo chiều kim đồng hồ.',
    category: 'space_environment',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Khí Tượng Thủy Văn',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Ở Bắc bán cầu (nơi có Việt Nam), lực Coriolis làm lệch hướng chuyển động sang bên phải. Khi các luồng gió thổi dồn vào tâm áp thấp nhiệt đới, hướng lệch này khiến các cơn bão ở Bắc bán cầu luôn luôn xoáy ngược chiều kim đồng hồ (Counter-clockwise). Ở Nam bán cầu bão mới xoáy theo chiều kim đồng hồ.',
    psychologicalDebunk: 'Học sinh nhớ mang máng có lực Coriolis nhưng hay bị lẫn lộn giữa quy tắc xoáy ở Bắc bán cầu và Nam bán cầu.',
    verifiedSources: [
      { name: 'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia', url: 'https://nchmf.gov.vn', domain: 'nchmf.gov.vn' },
      { name: 'Hội Khí tượng Thủy văn Việt Nam', url: 'https://nchmf.gov.vn', domain: 'nchmf.gov.vn' }
    ],
    verifiedFact: {
      sourceName: 'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia & Tổng cục Khí tượng Thủy văn',
      sourceDomain: 'nchmf.gov.vn',
      sourceUrl: 'https://nchmf.gov.vn',
      factQuote: 'Sách giáo khoa Địa lý 10 và Tổng cục Khí tượng Thủy văn khẳng định: Ở Bắc bán cầu, lực Coriolis làm các luồng không khí thổi vào tâm áp thấp bị lệch sang phải, tạo thành hoàn lưu xoáy ngược chiều kim đồng hồ. 100% các cơn bão hình thành trên Biển Đông đổ bộ vào đất liền Việt Nam đều xoáy ngược chiều kim đồng hồ.',
      coreConclusion: 'Bão ở Việt Nam luôn xoáy ngược chiều kim đồng hồ; nhận định xoáy thuận chiều kim đồng hồ là sai kiến thức Địa lý.'
    },
    keyFlawOrProof: 'Địa lý 10 bài Quy luật hoàn lưu khí quyển: Tâm áp thấp Bắc bán cầu có hướng xoáy ngược chiều kim đồng hồ.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-37',
    title: 'Mưa Sao Băng Là Hiện Tượng Các Ngôi Sao Trên Bầu Trời Bị Rơi Xuống Đất',
    statement: 'Khi ngắm mưa sao băng Perseids hay Geminids, học sinh đang chứng kiến những ngôi sao khổng lồ ngoài vũ trụ cạn kiệt năng lượng và rơi rụng vào bầu khí quyển Trái Đất.',
    category: 'space_environment',
    labelType: 'none',
    labelAuthor: 'Truyền Thuyết Ngắm Sao Băng Ước Nguyện',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Sao băng hoàn toàn không phải là những ngôi sao rơi. Chúng chỉ là những hạt bụi, mảnh vụn đá nhỏ (kích thước từ hạt cát đến viên sỏi) do sao chổi hoặc tiểu hành tinh để lại trên quỹ đạo. Khi Trái Đất đi qua đám bụi này, các hạt đá lao vào khí quyển với vận tốc hàng chục km/s bị ma sát nén khí bốc cháy tạo thành vệt sáng.',
    psychologicalDebunk: 'Tên gọi lãng mạn "sao băng" trong thơ ca và tập tục ước nguyện tạo ra hiểu lầm rằng đó là một ngôi sao thực sự.',
    verifiedSources: [
      { name: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)', url: 'https://vaca.org.vn', domain: 'vaca.org.vn' },
      { name: 'Hội Thiên văn Nghiệp dư Hà Nội (HAS)', url: 'https://thienvanhanoi.org', domain: 'thienvanhanoi.org' }
    ],
    verifiedFact: {
      sourceName: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)',
      sourceDomain: 'vaca.org.vn',
      sourceUrl: 'https://vaca.org.vn',
      factQuote: 'Chủ tịch VACA Đặng Vũ Tuấn Sơn giải thích: Các ngôi sao trên bầu trời là những quả cầu plasma khổng lồ như Mặt Trời, cách xa hàng triệu năm ánh sáng. Sao băng thực chất là thiên thạch nhỏ có kích cỡ vài milimet cọ xát với tầng khí quyển bốc cháy phát sáng ở độ cao 80-100km. Hoàn toàn không có chuyện ngôi sao rơi xuống đất.',
      coreConclusion: 'Sao băng chỉ là hạt bụi thiên thạch bốc cháy trong khí quyển; không phải ngôi sao rơi rụng.'
    },
    keyFlawOrProof: 'Vật lý thiên văn: Kích thước vật thể tạo vệt sao băng thông thường chỉ tương đương hạt đậu nành.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-38',
    title: 'Khí Mê-tan Phát Thải Từ Ruộng Lúa Nước Ngập Là Tác Nhân Gây Hiệu Ứng Nhà Kính Đáng Kể Tại Việt Nam',
    statement: 'Quá trình vi khuẩn yếm khí phân giải chất hữu cơ trong đất bùn ruộng lúa ngập nước sinh ra lượng khí mê-tan (CH4) lớn, có khả năng giữ nhiệt mạnh gấp 28 lần khí CO2 trong chu kỳ 100 năm.',
    category: 'space_environment',
    labelType: 'human_true',
    labelAuthor: 'Viện Lúa Đồng Bằng Sông Cửu Long (Bộ NN&PTNT)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Nông nghiệp trồng lúa nước là nét văn hóa truyền thống nhưng ruộng ngập nước lâu ngày tạo môi trường thiếu khí cho vi sinh vật sinh khí mê-tan. Hiện nay Việt Nam đang triển khai đề án 1 triệu hecta lúa chất lượng cao áp dụng kỹ thuật "ngập - khô xen kẽ" (AWD) để giảm thiểu phát thải khí mê-tan.',
    psychologicalDebunk: 'Mọi người thường chỉ nghĩ khói xe máy hay nhà máy điện than mới gây biến đổi khí hậu, ít ai biết phương thức canh tác lúa ngập nước truyền thống cũng phát thải khí nhà kính mạnh.',
    verifiedSources: [
      { name: 'Viện Khoa học Nông nghiệp Việt Nam (VAAS)', url: 'https://vaas.vn', domain: 'vaas.vn' },
      { name: 'Báo Nông Nghiệp Việt Nam', url: 'https://nongnghiep.vn', domain: 'nongnghiep.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Lúa ĐBSCL & Viện Môi trường Nông nghiệp (VAAS)',
      sourceDomain: 'vaas.vn',
      sourceUrl: 'https://vaas.vn',
      factQuote: 'Báo cáo kiểm kê khí nhà kính của Bộ Tài nguyên & Môi trường chỉ rõ: Canh tác lúa nước phát thải khoảng 50% tổng lượng khí nhà kính trong ngành nông nghiệp Việt Nam, chủ yếu là khí mê-tan (CH4). Việc chuyển đổi sang phương pháp tưới ngập khô xen kẽ giúp giảm tới 30-40% lượng phát thải CH4 mà vẫn đảm bảo năng suất lúa.',
      coreConclusion: 'Ruộng lúa ngập nước thực sự phát thải nhiều khí mê-tan; áp dụng kỹ thuật canh tác mới là giải pháp xanh bảo vệ môi trường.'
    },
    keyFlawOrProof: 'Hồ sơ cam kết phát thải ròng bằng 0 (Net Zero 2050) của Việt Nam tại hội nghị thượng đỉnh COP26.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-39',
    title: 'Vệ Tinh Quan Sát Trái Đất VNREDSat-1 Của Việt Nam Có Thể Nhìn Thấy Rõ Biển Số Xe Máy Trên Đường',
    statement: 'Vệ tinh viễn thám đầu tiên của Việt Nam VNREDSat-1 bay ở độ cao 680km có camera siêu phân giải cho phép zoom cận cảnh đọc được rõ ràng từng chữ số trên biển kiểm soát xe máy đang lưu thông tại Hà Nội.',
    category: 'space_environment',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Công Nghệ Vũ Trụ Việt Nam',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Vệ tinh viễn thám VNREDSat-1 có độ phân giải không gian quang học là 2.5 mét (chế độ toàn sắc) và 10 mét (đa phổ). Độ phân giải này dùng để theo dõi cháy rừng, bão lũ, bản đồ tài nguyên, hoàn toàn không thể nhận diện được các chi tiết nhỏ cỡ vài centimet như biển số xe máy.',
    psychologicalDebunk: 'Phim hành động Hollywood thường phóng đại khả năng của vệ tinh do thám có thể đọc từng chữ trên tờ báo, gây ảo tưởng về công nghệ vệ tinh dân dụng.',
    verifiedSources: [
      { name: 'Viện Công nghệ Vũ trụ (Viện Hàn lâm KH&CN Việt Nam VAST)', url: 'https://sti.vast.ac.vn', domain: 'vast.ac.vn' },
      { name: 'Báo Tiền Phong (Chuyên đề Không Gian)', url: 'https://tienphong.vn', domain: 'tienphong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Công nghệ Vũ trụ (Viện Hàn lâm KH&CN Việt Nam VAST)',
      sourceDomain: 'sti.vast.ac.vn',
      sourceUrl: 'https://sti.vast.ac.vn',
      factQuote: 'Trung tâm Vệ tinh Quốc gia và Viện Công nghệ Vũ trụ nêu rõ thông số kỹ thuật: Vệ tinh VNREDSat-1 cung cấp ảnh quang học có độ phân giải mặt đất 2.5m, cho phép phân biệt các công trình xây dựng, đường giao thông, tàu thuyền lớn và vùng rừng ngập mặn. Nó hoàn toàn không có khả năng đọc biển số xe hay nhận diện khuôn mặt người dân.',
      coreConclusion: 'Vệ tinh VNREDSat-1 có độ phân giải 2.5m phục vụ giám sát tài nguyên thiên tai; không thể đọc được biển số xe máy.'
    },
    keyFlawOrProof: 'Thông số kỹ thuật chính thức của VNREDSat-1: Độ phân giải quang học mặt đất là 2.5 mét/pixel.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-40',
    title: 'Mặt Trăng Luôn Quay Một Mặt Về Phía Trái Đất Do Hiện Tượng Khóa Thủy Triều',
    statement: 'Thời gian Mặt Trăng tự quay quanh trục của nó bằng đúng thời gian nó quay một vòng quanh Trái Đất (khoảng 27.3 ngày), khiến người đứng từ Trái Đất suốt hàng triệu năm chỉ luôn nhìn thấy cùng một nửa bán cầu Mặt Trăng.',
    category: 'space_environment',
    labelType: 'human_true',
    labelAuthor: 'Hội Thiên Văn Nghiệp Dư Hà Nội (HAS)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Lực hấp dẫn thủy triều của Trái Đất qua hàng tỷ năm đã làm chậm dần chuyển động tự quay của Mặt Trăng đến trạng thái cộng hưởng đồng bộ (Tidal Locking). Nửa còn lại là "Mặt xa" (Far side), con người chỉ chụp ảnh được khi phóng tàu thăm dò bay vòng ra phía sau.',
    psychologicalDebunk: 'Nhiều người nghĩ Mặt Trăng đứng yên không tự quay, nhưng thực tế nó tự quay rất chuẩn xác đồng bộ với chu kỳ quay quanh Trái Đất.',
    verifiedSources: [
      { name: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)', url: 'https://vaca.org.vn', domain: 'vaca.org.vn' },
      { name: 'Báo VnExpress (Chuyên mục Khoa Học)', url: 'https://vnexpress.net', domain: 'vnexpress.net' }
    ],
    verifiedFact: {
      sourceName: 'Hội Thiên văn và Vũ trụ học Việt Nam (VACA)',
      sourceDomain: 'vaca.org.vn',
      sourceUrl: 'https://vaca.org.vn',
      factQuote: 'VACA giải thích hiện tượng thiên văn học: Hiện tượng khóa thủy triều khiến chu kỳ tự quay của Mặt Trăng quanh trục bằng chính xác chu kỳ quỹ đạo quanh Trái Đất. Do đó từ bất kỳ vị trí nào trên Trái Đất, con người luôn nhìn thấy cùng một nửa bán cầu quen thuộc với các vết thỏ ngọc và chị Hằng.',
      coreConclusion: 'Mặt Trăng luôn hướng một mặt về Trái Đất do hiện tượng khóa thủy triều đồng bộ; đây là thực tế thiên văn học.'
    },
    keyFlawOrProof: 'Vật lý thiên văn: Hiện tượng tự quay đồng bộ (Synchronous rotation) với chu kỳ 27.3 ngày.',
    difficulty: 'medium'
  },

  // ==========================================
  // KHỐI 5: ĐỜI SỐNG HỌC ĐƯỜNG & TÂM LÝ NHẬN THỨC (10 CÂU)
  // ==========================================
  {
    id: 'ch-hs-41',
    title: 'Hiện Tượng Déjà Vu Trong Phòng Thi Là Dấu Hiệu Bạn Đã Từng Mơ Thấy Đề Thi Trước Đó',
    statement: 'Cảm giác quen thuộc kỳ lạ như "mình đã từng ngồi làm câu hỏi này ở đâu đó trong quá khứ" (Déjà vu) chứng minh con người có năng lực giác quan thứ sáu thấy trước tương lai trong giấc chiêm bao.',
    category: 'general',
    labelType: 'human_false',
    labelAuthor: 'Tài Liệu Chiêm Tinh Học Học Đường',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Déjà vu là hiện tượng não bộ bị chậm trễ truyền dẫn vi mô vài mili-giây giữa vùng tiếp nhận thông tin giác quan tức thời và hồi hải mã (vùng ký ức), khiến não bộ gắn nhầm nhãn "ký ức cũ" cho một sự việc vừa xảy ra trong thực tại.',
    psychologicalDebunk: 'Sự bí ẩn của cảm xúc khiến học sinh dễ gắn ghép với các hiện tượng huyền bí như linh cảm tương lai hay điềm báo tâm linh.',
    verifiedSources: [
      { name: 'Bệnh viện Tâm thần Trung ương 1', url: 'https://bvtttw1.gov.vn', domain: 'bvtttw1.gov.vn' },
      { name: 'Báo Dân Trí (Mục Tâm Lý Nhận Thức)', url: 'https://dantri.com.vn', domain: 'dantri.com.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Tâm thần Trung ương & Khoa Tâm lý học ĐHQGHN',
      sourceDomain: 'bvtttw1.gov.vn',
      sourceUrl: 'https://bvtttw1.gov.vn',
      factQuote: 'Các bác sĩ thần kinh học khẳng định: Déjà vu là một hiện tượng lệch pha xử lý thông tin bình thường của não bộ khi cơ thể mệt mỏi hoặc căng thẳng thi cử. Não bộ vô tình chuyển thẳng thông tin vào bộ nhớ dài hạn trước khi qua bộ nhớ ngắn hạn, tạo cảm giác quen thuộc giả tạo. Hoàn toàn không có bằng chứng giác quan thứ sáu hay mơ thấy trước đề thi.',
      coreConclusion: 'Déjà vu là sự chậm trễ vi mô trong việc xử lý tín hiệu thần kinh của não; không phải giác quan thứ sáu.'
    },
    keyFlawOrProof: 'Ảnh chụp cộng hưởng từ chức năng fMRI ghi nhận hoạt động xung đột tín hiệu tại thùy thái dương khi có Déjà vu.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-42',
    title: 'Lướt Video Ngắn (TikTok / Reels) Quá 2 Tiếng Mỗi Ngày Làm Suy Giảm Khả Năng Tập Trung Sâu',
    statement: 'Cơ chế phát video ngắn với âm thanh và hình ảnh kích thích dopamine dồn dập sau mỗi vài giây khiến não bộ học sinh quen với sự thỏa mãn tức thì, dẫn đến mất kiên nhẫn khi phải đọc tài liệu dài hoặc giải bài toán khó.',
    category: 'general',
    labelType: 'human_true',
    labelAuthor: 'TS. Nguyễn Hoàng Oanh - Khoa Tâm lý Giáo dục ĐH Sư phạm Hà Nội',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Thuật toán video ngắn tạo ra chu kỳ "kích thích - phần thưởng dopamine nhanh". Não bộ dần tái cấu trúc mạng lưới nơ-ron theo hướng thích ứng với kích thích ngắn hạn, làm teo giảm khả năng duy trì sự tập trung có chủ ý (sustained attention) khi đọc sách.',
    psychologicalDebunk: 'Nhiều bạn học sinh nghĩ lướt video ngắn chỉ để giải trí xả stress, không nhận ra mình đang bị nghiện dopamine thụ động khiến kết quả học tập sa sút.',
    verifiedSources: [
      { name: 'Viện Sức khỏe Tâm thần (Bệnh viện Bạch Mai)', url: 'https://bachmai.gov.vn', domain: 'bachmai.gov.vn' },
      { name: 'Báo Tuổi Trẻ (Mục Giáo Dục)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai & ĐH Sư phạm Hà Nội',
      sourceDomain: 'bachmai.gov.vn',
      sourceUrl: 'https://bachmai.gov.vn',
      factQuote: 'Nghiên cứu tâm lý học đường của Viện Sức khỏe Tâm thần cảnh báo hội chứng "Não cá vàng công nghệ" (Popcorn Brain): Thanh thiếu niên dành trên 2 tiếng mỗi ngày lướt video ngắn có khả năng tập trung làm bài thi thấp hơn 40% so với học sinh đọc sách giấy. Bộ não bị phân mảnh khiến việc ghi nhớ kiến thức logic gặp khó khăn lớn.',
      coreConclusion: 'Lướt video ngắn liên tục thực sự làm suy giảm khả năng tập trung sâu và tư duy logic của học sinh.'
    },
    keyFlawOrProof: 'Khảo sát thời lượng chú ý (attention span) ở học sinh THPT giảm từ 12 giây xuống còn dưới 8 giây do tiếp xúc video ngắn.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-43',
    title: 'Hội Chứng "Tự Tin Thái Quá" (Hiệu Ứng Dunning-Kruger) Phổ Biến Ở Người Mới Tiếp Cận Kiến Thức',
    statement: 'Học sinh khi mới học qua loa một chuyên đề thường có xu hướng tự đánh giá mình đã nắm vững 100% kiến thức, trong khi các học sinh giỏi thực sự lại thường cảm thấy bản thân còn nhiều lỗ hổng cần học hỏi thêm.',
    category: 'general',
    labelType: 'human_true',
    labelAuthor: 'Tạp Chí Tâm Lý Học Việt Nam (Viện Hàn lâm KHXH Việt Nam)',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Hiệu ứng Dunning-Kruger chỉ ra rằng: Năng lực cần có để giải đúng một bài tập cũng chính là năng lực cần có để nhận biết mình làm sai. Người có kiến thức non nớt thiếu năng lực siêu nhận thức (metacognition) nên không thể thấy hết độ phức tạp của vấn đề, dẫn đến sự ảo tưởng năng lực.',
    psychologicalDebunk: 'Trong tranh luận học đường, những người hiểu biết nông cạn nhất thường là những người phát biểu to nhất và tự tin nhất.',
    verifiedSources: [
      { name: 'Tạp chí Tâm lý học Việt Nam (Viện Hàn lâm KHXH Việt Nam)', url: 'https://vass.gov.vn', domain: 'vass.gov.vn' },
      { name: 'Báo Giáo Dục & Thời Đại', url: 'https://giaoducthoidai.vn', domain: 'giaoducthoidai.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Hàn lâm Khoa học Xã hội Việt Nam (VASS)',
      sourceDomain: 'vass.gov.vn',
      sourceUrl: 'https://vass.gov.vn',
      factQuote: 'Các nhà tâm lý học giáo dục Việt Nam phân tích: Hiệu ứng Dunning-Kruger là hiện tượng tâm lý nhận thức phổ biến ở lứa tuổi học sinh THPT. Người có kiến thức sơ sài thường tự chấm điểm bản thân thuộc top giỏi, trong khi học sinh có trình độ chuyên sâu lại thận trọng vì nhận thức được biển kiến thức bao la phía trước.',
      coreConclusion: 'Hiệu ứng Dunning-Kruger là hiện tượng tâm lý có thật; người biết ít thường tự tin thái quá nhất.'
    },
    keyFlawOrProof: 'Thực nghiệm tâm lý học nhận thức đo lường sai số tự đánh giá năng lực ở các kỳ thi thử THPT.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-44',
    title: 'Áp Lực Đồng Trang Lứa (Peer Pressure) Và Nỗi Sợ Bị Bỏ Rơi (FOMO) Thao Túng Hành Vi Học Sinh',
    statement: 'Nhiều bạn học sinh cấp 3 sẵn sàng bắt chước mua giày đắt tiền, uống đồ uống thịnh hành hoặc tham gia các trào lưu nguy hiểm trên TikTok dù bản thân không thích, chỉ để không bị bạn bè trong lớp cô lập.',
    category: 'general',
    labelType: 'human_true',
    labelAuthor: 'ThS. Tâm Lý Đỗ Thị Trang - Trung tâm Tư vấn Tâm lý Học đường',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Lứa tuổi vị thành niên có nhu cầu khẳng định vị thế xã hội và thuộc về một nhóm bạn (belongingness) cực kỳ mãnh liệt. Vùng não chịu trách nhiệm cảm xúc phát triển trước vùng não kiểm soát lý trí, khiến học sinh dễ bị áp lực đám đông dẫn dắt hành vi.',
    psychologicalDebunk: 'Nhiều bạn nghĩ mình hoàn toàn độc lập và cá tính, nhưng thực chất đang vô thức chạy theo số đông để tránh cảm giác bị tẩy chay.',
    verifiedSources: [
      { name: 'Hội Tâm Lý Giáo Dục Học Việt Nam', url: 'https://moet.gov.vn', domain: 'moet.gov.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên mục Nhịp Sống Trẻ)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Hội Tâm Lý Giáo Dục Học Việt Nam & Báo Tuổi Trẻ',
      sourceDomain: 'tuoitre.vn',
      sourceUrl: 'https://tuoitre.vn',
      factQuote: 'Khảo sát của Hội Tâm lý Giáo dục Việt Nam tại các trường THPT cho thấy: Hơn 70% học sinh từng chịu áp lực đồng trang lứa và hội chứng FOMO (sợ bỏ lỡ). Áp lực hòa nhập khiến nhiều em đưa ra quyết định sai lầm về chi tiêu, chọn ngành học theo bạn bè hoặc tham gia các trào lưu độc hại trên mạng xã hội.',
      coreConclusion: 'Áp lực đồng trang lứa và FOMO là hiện tượng tâm lý thực tế chi phối mạnh mẽ học sinh cấp 3.'
    },
    keyFlawOrProof: 'Báo cáo khảo sát thực nghiệm tâm lý học đường của Trung tâm Nghiên cứu Tâm lý trẻ em.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-45',
    title: 'Học Bằng Cách Đọc Đi Đọc Lại (Rereading) Và Gạch Dòng Đậm Là Phương Pháp Ôn Thi Hiệu Quả Nhất',
    statement: 'Nghiên cứu giáo dục chỉ ra rằng học sinh cấp 3 chỉ cần đọc đi đọc lại cuốn tài liệu nhiều lần và dùng bút nhớ dòng gạch kín trang sách là cách ghi nhớ kiến thức bền vững nhất cho kỳ thi tốt nghiệp.',
    category: 'general',
    labelType: 'ai_false',
    labelAuthor: 'Trợ lý AI Mẹo Ôn Thi Thủ Khoa',
    isActuallyTrue: false,
    trapType: 'ai_hallucination',
    trapExplanation: 'Đọc đi đọc lại nhiều lần tạo ra "ảo tưởng thông thạo" (Illusion of Competence) - mắt nhìn thấy quen chữ nên tưởng mình đã nhớ. Khoa học thần kinh chứng minh phương pháp truy hồi chủ động (Active Recall) bằng cách tự gấp sách trả lời câu hỏi và lặp lại ngắt quãng (Spaced Repetition) hiệu quả hơn gấp nhiều lần.',
    psychologicalDebunk: 'Hành động dùng bút nhớ gạch màu sặc sỡ tạo cảm giác mình đã học rất chăm chỉ, nhưng thực chất não bộ xử lý thông tin rất thụ động.',
    verifiedSources: [
      { name: 'Trường Đại học Sư phạm Hà Nội', url: 'https://hnue.edu.vn', domain: 'hnue.edu.vn' },
      { name: 'Tạp chí Khoa học Giáo dục Việt Nam', url: 'https://vnies.edu.vn', domain: 'vnies.edu.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Khoa học Giáo dục Việt Nam & ĐH Sư phạm Hà Nội',
      sourceDomain: 'vnies.edu.vn',
      sourceUrl: 'https://vnies.edu.vn',
      factQuote: 'Các chuyên gia phương pháp giảng dạy tại ĐH Sư phạm Hà Nội khẳng định: Đọc lại thụ động và tô màu bút dạ quang là một trong những phương pháp ôn thi kém hiệu quả nhất. Để nhớ sâu và ứng dụng tốt trong phòng thi, học sinh cần áp dụng phương pháp tự kiểm tra chủ động (Active Recall), giải bài tập thực hành và giảng lại kiến thức cho bạn bè.',
      coreConclusion: 'Đọc lại thụ động tạo ảo tưởng nhớ bài; phương pháp truy hồi chủ động mới là cách ôn thi khoa học.'
    },
    keyFlawOrProof: 'Thực nghiệm đối chứng phương pháp học tập của Viện Khoa học Giáo dục Việt Nam.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-46',
    title: 'Nước Ngọt Có Gas Gây Tăng Động Mất Kiểm Soát Ở Học Sinh (Sugar Rush)',
    statement: 'Chất đường saccarozo trong các loại nước ngọt đóng chai hấp thụ trực tiếp vào máu kích hoạt tuyến thượng thận tiết adrenaline làm học sinh hưng phấn quá đà và tăng động hành vi dữ dội.',
    category: 'general',
    labelType: 'none',
    labelAuthor: 'Quan Niệm Của Các Bậc Phụ Huynh',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Các thử nghiệm mù đôi có đối chứng giả dược nghiêm ngặt chứng minh lượng đường trong nước giải khát không làm thay đổi hành vi tăng động của thanh thiếu niên. Sự phấn khích thực chất do không khí vui chơi tiệc tùng hoặc lượng caffein trong một số loại nước ngọt có gas kích thích tỉnh táo.',
    psychologicalDebunk: 'Hiện tượng thiên kiến xác nhận của cha mẹ: Thấy con hiếu động trong tiệc liên hoan có nước ngọt liền lập tức quy kết nguyên nhân do đường.',
    verifiedSources: [
      { name: 'Viện Dinh Dưỡng Quốc Gia Việt Nam', url: 'https://viendinhduong.vn', domain: 'viendinhduong.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Dinh Dưỡng Quốc Gia Việt Nam & Báo Sức Khỏe & Đời Sống',
      sourceDomain: 'viendinhduong.vn',
      sourceUrl: 'https://viendinhduong.vn',
      factQuote: 'Chuyên gia Viện Dinh Dưỡng Quốc Gia giải thích: Không có bằng chứng y học xác nhận hiện tượng "say đường" (sugar rush) gây tăng động hành vi ở lứa tuổi thanh thiếu niên. Việc uống nước ngọt nhiều gây thừa cân, béo phì và sâu răng, nhưng sự phấn khích chạy nhảy trong các buổi tiệc là do tâm lý hào hứng của bối cảnh đông vui.',
      coreConclusion: 'Đường trong nước ngọt không trực tiếp gây tăng động; hiện tượng Sugar Rush là ngộ nhận tâm lý phổ biến.'
    },
    keyFlawOrProof: 'Thử nghiệm mù đôi: Nước ngọt ăn kiêng và nước có đường không tạo ra sự khác biệt về mức độ tăng động.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-47',
    title: 'Học Sinh Lớp 12 Thức Trắng Đêm Trước Ngày Thi Sẽ Giúp Ôn Lại Trọn Vẹn Kiến Thức Nhất',
    statement: 'Đêm trước ngày thi tốt nghiệp THPT, học sinh thức trắng đêm đến 5 giờ sáng để rà soát toàn bộ đề cương sẽ giúp kiến thức còn tươi mới trong đầu khi nhận đề thi vào buổi sáng.',
    category: 'general',
    labelType: 'human_false',
    labelAuthor: 'Học Sinh Lớp 12 Chia Sẻ Kinh Nghiệm Ôn Thi Vội',
    isActuallyTrue: false,
    trapType: 'human_bias',
    trapExplanation: 'Thức trắng đêm gây cạn kiệt glucose ở thùy trán, làm giảm nghiêm trọng khả năng nhớ lại (retrieval) và tư duy logic. Học sinh rất dễ rơi vào trạng thái "đầu óc trống rỗng" (mind blanking) khi nhận đề thi vào sáng hôm sau.',
    psychologicalDebunk: 'Nỗi bất an "đi ngủ thì cảm thấy có lỗi và sợ quên kiến thức" thôi thúc học sinh thức đến sáng để tự trấn an tâm lý.',
    verifiedSources: [
      { name: 'Bệnh viện Bạch Mai (Viện Sức khỏe Tâm thần)', url: 'https://bachmai.gov.vn', domain: 'bachmai.gov.vn' },
      { name: 'Báo Tuổi Trẻ (Chuyên trang Tiếp Sức Mùa Thi)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' }
    ],
    verifiedFact: {
      sourceName: 'Viện Sức khỏe Tâm thần - Bệnh viện Bạch Mai & Báo Tuổi Trẻ',
      sourceDomain: 'bachmai.gov.vn',
      sourceUrl: 'https://bachmai.gov.vn',
      factQuote: 'Bác sĩ Viện Sức khỏe Tâm thần Bệnh viện Bạch Mai khuyến cáo các sĩ tử: Thức trắng đêm trước ngày thi là sai lầm nguy hại nhất. Não bộ thiếu ngủ bị ngộ độc sản phẩm phụ trao đổi chất adenosine, khiến tốc độ xử lý thông tin chậm lại gấp 3 lần và dễ bị hoảng loạn quên sạch công thức khi vào phòng thi. Đêm trước thi cần ngủ đủ 7-8 tiếng.',
      coreConclusion: 'Thức trắng đêm trước ngày thi làm liệt khả năng tư duy và dễ bị trắng não; cần ngủ đủ giấc trước giờ thi.'
    },
    keyFlawOrProof: 'Nghiên cứu giấc ngủ mùa thi: Học sinh ngủ đủ giấc trước đêm thi đạt điểm trung bình cao hơn 15% so với nhóm thức trắng đêm.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-48',
    title: 'Não Trái Đại Diện Cho Tư Duy Logic Học Khối Tự Nhiên, Não Phải Đại Diện Khối Xã Hội Và Sáng Tạo',
    statement: 'Các bài trắc nghiệm tính cách học đường khẳng định: Học sinh giỏi Toán - Lý - Hóa chỉ dùng bán cầu não trái để suy nghĩ, trong khi học sinh giỏi Văn - Nghệ thuật chỉ hoạt động bán cầu não phải.',
    category: 'general',
    labelType: 'none',
    labelAuthor: 'Trắc Nghiệm Tính Cách Học Sinh Mạng Xã Hội',
    isActuallyTrue: false,
    trapType: 'none',
    trapExplanation: 'Đây là một huyền thoại ngụy khoa học thần kinh (Neuromyth). Kỹ thuật chụp fMRI chứng minh mọi hoạt động phức tạp như giải toán hay sáng tạo nghệ thuật đều đòi hỏi sự phối hợp nhịp nhàng liên tục của cả hai bán cầu não qua thể chai (corpus callosum).',
    psychologicalDebunk: 'Con người thích phân loại bản thân vào các nhãn dán đơn giản gọn gàng (khối Tự nhiên vs khối Xã hội) để tự định vị bản thân.',
    verifiedSources: [
      { name: 'Khoa Tâm lý học (Đại học Khoa học Xã hội và Nhân văn Hà Nội)', url: 'https://ussh.vnu.edu.vn', domain: 'ussh.vnu.edu.vn' },
      { name: 'Báo Khoa học & Phát triển', url: 'https://khoahocphattrien.vn', domain: 'khoahocphattrien.vn' }
    ],
    verifiedFact: {
      sourceName: 'Khoa Tâm lý học (ĐHKHXH&NV - ĐHQGHN) & Tạp chí Tia Sáng',
      sourceDomain: 'ussh.vnu.edu.vn',
      sourceUrl: 'https://ussh.vnu.edu.vn',
      factQuote: 'Các nhà khoa học thần kinh học giải thích: Khái niệm "người não trái logic, người não phải nghệ thuật" là hiểu lầm phổ biến. Khi một học sinh giải một bài toán hình học hay viết một bài văn nghị luận, cả hai bán cầu não đều trao đổi hàng tỷ xung thần kinh qua thể chai. Không có học sinh nào chỉ thiên vị sử dụng một nửa bán cầu não.',
      coreConclusion: 'Cả hai bán cầu não luôn hoạt động phối hợp cùng nhau; phân chia rạch ròi não trái - não phải là ngụy khoa học.'
    },
    keyFlawOrProof: 'Ảnh chụp cộng hưởng từ chức năng fMRI quét toàn bộ mạng lưới nơ-ron liên kết giữa hai bán cầu não.',
    difficulty: 'medium'
  },
  {
    id: 'ch-hs-49',
    title: 'Chia Nhỏ Thời Gian Học Theo Kỹ Thuật Pomodoro (Học 25 Phút Nghỉ 5 Phút) Giúp Duy Trì Năng Suất',
    statement: 'Kỹ thuật quả cà chua Pomodoro giúp học sinh vượt qua thói quen trì hoãn bằng cách cam kết tập trung tối đa trong 25 phút không xao nhãng, sau đó giải lao ngắn 5 phút để não bộ phục hồi năng lượng.',
    category: 'general',
    labelType: 'human_true',
    labelAuthor: 'Thủ Khoa Khối A Toàn Quốc - ĐH Bách Khoa Hà Nội',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Não bộ có giới hạn chu kỳ chú ý ngắn hạn. Việc chia nhỏ buổi học thành các khoảng thời gian rõ ràng giúp giảm áp lực tâm lý đối mặt với khối lượng bài tập khổng lồ, ngăn chặn kiệt sức nhận thức.',
    psychologicalDebunk: 'Nhiều bạn học sinh khi thấy bài tập nhiều thường nản lòng không muốn bắt đầu, Pomodoro giúp vượt qua ngưỡng cản tâm lý khởi động.',
    verifiedSources: [
      { name: 'Báo Tuổi Trẻ (Chuyên đề Tiếp Sức Mùa Thi)', url: 'https://tuoitre.vn', domain: 'tuoitre.vn' },
      { name: 'Đại học Quốc gia Hà Nội', url: 'https://vnu.edu.vn', domain: 'vnu.edu.vn' }
    ],
    verifiedFact: {
      sourceName: 'Đại học Quốc gia Hà Nội & Báo Tuổi Trẻ',
      sourceDomain: 'vnu.edu.vn',
      sourceUrl: 'https://vnu.edu.vn',
      factQuote: 'Các chuyên gia tâm lý học giáo dục ĐHQGHN đánh giá: Kỹ thuật Pomodoro đã được kiểm chứng khoa học giúp tối ưu hóa nhịp sinh học tập trung của học sinh THPT. Việc đặt mục tiêu ngắn 25 phút triệt tiêu xu hướng trì hoãn và các khoảng nghỉ ngắn 5 phút giúp não bộ kịp chuyển hóa thông tin vào vùng nhớ đệm.',
      coreConclusion: 'Kỹ thuật Pomodoro thực sự giúp học sinh cấp 3 duy trì khả năng tập trung và chống trì hoãn ôn thi.'
    },
    keyFlawOrProof: 'Khảo sát hiệu suất học tập của học sinh chuyên áp dụng phương pháp quản lý thời gian Pomodoro.',
    difficulty: 'easy'
  },
  {
    id: 'ch-hs-50',
    title: 'Đọc Sách Trong Điều Kiện Thiếu Sáng Chỉ Gây Mỏi Mắt Tạm Thời, Không Làm Hỏng Giác Mạc Vĩnh Viễn',
    statement: 'Đọc sách giáo khoa trong điều kiện ánh sáng yếu khiến cơ điều tiết của mắt phải làm việc căng thẳng gây mỏi mắt và khô mắt, nhưng các triệu chứng này sẽ hồi phục sau khi mắt nghỉ ngơi chứ không làm biến dạng giác mạc vĩnh viễn.',
    category: 'general',
    labelType: 'human_true',
    labelAuthor: 'Bác sĩ Nhãn Khoa Bệnh Viện Mắt Trung Ương',
    isActuallyTrue: true,
    trapType: 'none',
    trapExplanation: 'Đọc trong bóng tối không làm thay đổi giải phẫu mắt hay gây teo dây thần kinh thị giác. Tuy nhiên thói quen này gây mệt mỏi điều tiết mạn tính và thúc đẩy cận thị tiến triển ở thanh thiếu niên nếu lặp lại thường xuyên.',
    psychologicalDebunk: 'Lời răn đe "đọc sách trong tối sẽ mù mắt" của người lớn khiến học sinh lo sợ quá mức, dù thực tế mắt chỉ bị mỏi cơ điều tiết.',
    verifiedSources: [
      { name: 'Bệnh viện Mắt Trung ương', url: 'https://vnio.vn', domain: 'vnio.vn' },
      { name: 'Báo Sức Khỏe & Đời Sống (Bộ Y tế)', url: 'https://suckhoedoisong.vn', domain: 'suckhoedoisong.vn' }
    ],
    verifiedFact: {
      sourceName: 'Bệnh viện Mắt Trung ương & Báo Sức Khỏe & Đời Sống',
      sourceDomain: 'vnio.vn',
      sourceUrl: 'https://vnio.vn',
      factQuote: 'Bác sĩ chuyên khoa Bệnh viện Mắt Trung ương khẳng định: Đọc sách trong điều kiện thiếu sáng không gây tổn thương mô mắt vĩnh viễn hay làm mù mắt. Mắt chỉ bị mỏi do cơ thể giảm tần suất chớp mắt gây khô giác mạc tạm thời. Dù vậy, học sinh vẫn cần đảm bảo đủ ánh sáng tiêu chuẩn để bảo vệ thị lực học đường.',
      coreConclusion: 'Đọc sách thiếu sáng không làm hỏng mắt vĩnh viễn; đó chỉ là phản ứng mệt mỏi cơ điều tiết tạm thời.'
    },
    keyFlawOrProof: 'Khảo sát nhãn khoa Bệnh viện Mắt Trung ương: Không có tổn thương cấu trúc đáy mắt do đọc sách thiếu sáng ngắn hạn.',
    difficulty: 'easy'
  }
];
