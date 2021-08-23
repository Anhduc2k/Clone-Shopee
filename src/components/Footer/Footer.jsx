import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './footer.style';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => i18n.changeLanguage(lng);

  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 MyShop. Tất cả các quyền được bảo lưu</div>
          <S.Language>
            {t('footer.language')}:
            <span onClick={() => changeLanguage('en')} className={classNames({ active: i18n.language === 'en' })}>
              Tiếng Anh
            </span>
            <span onClick={() => changeLanguage('vi')} className={classNames({ active: i18n.language === 'vi' })}>
              Tiếng Việt
            </span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH MyShop</div>
          <div>
            Địa chỉ: Thị Trấn Rừng Thông, Đông Sơn, Thanh Hóa. Tổng đài hỗ trợ: 19001000 - Email: duclapulga@gmail.com
          </div>
          <div>Mã số doanh nghiệp: 363636363636 do Sở Kế hoạch & Đầu tư TP Thanh Hóa cấp lần đầu ngày 20/8/2021</div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH EngGer</div>
        </S.Footer2>
      </div>
    </S.Footer>
  );
}
