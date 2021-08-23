import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { path } from '../../constants/path';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import usePopover from '../../hooks/usePopover';
import { logout } from '../../pages/Auth/auth.slice';
import Popover from '../Popover/Popover';
import * as S from './navbar.style';
export default function Navbar() {
  const authenticated = useAuthenticated();
  const profile = useSelector(state => state.auth.profile);
  const { activePopover, showPopover, hidePopover } = usePopover();
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              {activePopover && (
                <Popover active={activePopover}>
                  <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                  <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                  <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
                </Popover>
              )}
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng kí</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  );
}
