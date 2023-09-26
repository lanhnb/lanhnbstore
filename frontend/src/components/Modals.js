import * as React from 'react';
import { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { FaTimes} from "react-icons/fa";

const Modals = () => {
  const [isShown, setIsShown] = useState(false);
  const [hideF, sethideF] = useState(true)
  const navigate = useNavigate();
  
  const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      //  setIsShown(true);
      navigate("/")

      // 👇️ or simply set it to true
     
  };

  return (
    <Wrapper>
       {!isShown ? (
                       <div className="w3-col m11 s11 laModal">
                        <div>
                        <b>Chính sách khách hàng</b>
                        <button className="b111" onClick={handleClick}><FaTimes/></button>
                        </div>
                        
                          
                       <p>
               
                         Cám ơn quý khách đã quan tâm và truy cập vào website. Chúng tôi tôn trọng và cam kết sẽ bảo mật
                         những thông tin mang tính riêng tư của Quý khách.
               
                         Bảo vệ dữ liệu cá nhân và gây dựng được niềm tin tới quý khách là vấn đề rất quan trọng của
                         chúng tôi. Việc dùng tên và các thông tin khác liên quan đến quý khách tuân thủ theo quy định
                         của pháp luật về bảo mật thông tin. Chúng tôi chỉ thu thập những thông tin cần thiết liên quan
                         đến giao dịch mua bán.
               
                         Quý khách có thể truy cập vào website mà không cần phải cung cấp thông tin chi tiết cá nhân. Quý
                         khách truy cập ẩn danh và chúng tôi không thể biết bạn là ai nếu Quý khách không đăng nhập vào
                         tài khoản của mình.</p>
               
                       <b>1. Thu thập thông tin cá nhân</b>
                       <p>
               
                         Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá trình mua hàng và cho những thông
                         báo sau này liên quan đến đơn hàng, và để cung cấp dịch vụ, bao gồm một số thông tin cá nhân:
                         Tên, email, địa chỉ, địa chỉ giao hàng, số điện thoại, chi tiết thanh toán.
               
                         Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn đặt hàng, cung cấp các dịch vụ và
                         thông tin yêu cầu thông qua website và theo yêu cầu của bạn.
               
                         Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý tài khoản của bạn; xác minh và thực
                         hiện giao dịch trực tuyến, nhận diện khách vào web, gửi thông tin bao gồm thông tin sản phẩm và
                         dịch vụ. Nếu quý khách không muốn nhận bất cứ thông tin tiếp thị của chúng tôi thì có thể từ
                         chối bất cứ lúc nào.
               
                         Chúng tôi có thể chuyển tên và địa chỉ cho bên thứ ba để họ giao hàng cho bạn (ví dụ cho bên
                         chuyển phát nhanh hoặc nhà cung cấp).
               
                         Chi tiết đơn đặt hàng của bạn được chúng tôi lưu giữ nhưng vì lí do bảo mật nên chúng tôi không
                         công khai trực tiếp va đã gửi chi tiết tới email.
               
                         Quý khách cam kết bảo mật dữ liệu cá nhân và không tiết lộ cho bên thứ ba. Chúng tôi không chịu
                         bất kỳ trách nhiệm nào cho việc dùng sai mật khẩu nếu đây không phải lỗi của chúng tôi.
               
                         Chúng tôi có thể dùng thông tin cá nhân của bạn để nghiên cứu thị trường. mọi thông tin chi tiết
                         sẽ được ẩn và chỉ được dùng để thống kê. Quý khách có thể từ chối không tham gia bất cứ lúc nào.
                       </p>
                       <b>2. Bảo mật</b>
                       <p>
               
                         Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn truy cập trái phép hoặc
                         trái pháp luật hoặc mất mát hoặc tiêu hủy hoặc thiệt hại cho thông tin của bạn.
               
                         Chúng tôi khuyên quý khách không nên đưa thông tin chi tiết về việc thanh toán với bất kỳ ai
                         bằng e-mail, chúng tôi không chịu trách nhiệm về những mất mát quý khách có thể gánh chịu trong
                         việc trao đổi thông tin của quý khách qua internet hoặc email.
               
                         Quý khách tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can
                         thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ
                         vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống
                         website. Mọi vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần
                         thiết.
               
                         Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, chúng
                         tôi sẽ buộc phải cung cấp những thông tin này cho các cơ quan pháp luật.
               
                         Các điều kiện, điều khoản và nội dung của trang web này được điều chỉnh bởi luật pháp Việt Nam
                         và tòa án Việt Nam có thẩm quyền xem xét.
                       </p>
                       <b>3. Quyền lợi khách hàng</b>
                       <p>
               
                         Quý khách có quyền yêu cầu truy cập vào dữ liệu cá nhân của mình, có quyền yêu cầu chúng tôi sửa
                         lại những sai sót trong dữ liệu của bạn mà không mất phí. Bất cứ lúc nào bạn cũng có quyền yêu
                         cầu chúng tôi ngưng sử dụng dữ liệu cá nhân của bạn cho mục đích tiếp thị.
                       </p>
                       <b>4. Chính sách bảo hành sản phẩm</b>
                       <p> Sản phẩm bán ra tại Website này được bảo hành, đổi trả theo chế độ bảo hành của nhà sản xuất,
                         Nhà cung cấp nhập khẩu,... được gián them tem bảo hành của lanhnb và thực hiện theo cam kết khi
                         quyết định mua bán.</p>
                       <b>5. Cung cấp thông tin khác</b>
                       <p>
                         Chúng tôi tiếp nhận, phân tích tạo nên nguồn thông tin tốt, tư vấn chiến lược cho nhà đầu tư,
                         mua sắm, sử dụng dịch vụ. Các thông tin cung cấp hoàn toàn trung thực, có giá trị và được bảo
                         mật tuyệt đối.
                       </p>
                       <b>6. Hướng dẫn mua hàng qua Lanhnb.store:</b>
                       <p>
                         Quý khách lựa chọn việc đặt mua qua từng món hàng, tới nút Card Bạn chọn Kiểm tra và đi đến
                         trang xác nhận, Bạn nhập thông tin và sẽ thông báo Id việc mua hàng của Bạn. Để xác nhận lại Bạn
                         vào Tracker. Xong các bước trên Lanhnb.store sẽ liên hệ để hoàn tất việc mua bán.
                       </p>
                       <b>7. Bình luận:</b>
                       <p>
                         Tại trang Bất động sản- Bạn đăng nhập để bình luận về sản phẩm của Lanhnb.store.
                         Tại trang Shop, Tư vấn Xuất khẩu lao động. Bạn bình luận về sản phẩm của Lanhnb.store qua tài
                         khoản Facebook của Bạn.
                       </p>
               
                   
               
                     {/* '-- Modal footer -' */}
                     <div className="modal-footer">
                       <b> Lanhnb.store Cảm ơn sự quan tâm của Bạn và mong nhận được sự ủng hộ, giúp đỡ.</b>
                       
                           <button className="b11" onClick=''><FaTimes/></button>
                     </div>
                     </div>
                    ):("")}

     
      

    </Wrapper>
  )
}
export default Modals;
const Wrapper = styled.div`
.laModal{
  margin-left:20px;
  margin-right:20px;
  text-align: justify;
}
button.b11 {
  padding: 5px;
  background-color: #8e4545;
  border: none;
  color: white;
  cursor:pointer;
}
button.b111 {
  padding: 5px;
  background-color: #8e4545;
  border: none;
  color: white;
  float:right;
  margin-bottom:2px;
}

  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 400;
  
  border: '2px solid #000';
  boxShadow: 24;
  font-size:18px;
  color:#8e4545;

`;
