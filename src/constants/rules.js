import { isEmail } from '../utils/helper';

export const rules = {
  name: {
    maxLength: {
      value: 100,
      message: 'Tên có độ dài tối đa 100 kí tự'
    }
  },
  phone: {
    maxLength: {
      value: 20,
      message: 'Số điện thoại có độ dài tối đa 20 kí tự'
    }
  },
  address: {
    maxLength: {
      value: 100,
      message: 'Địa chỉ có độ dài tối đa 100 kí tự'
    }
  },
  email: {
    require: {
      value: true,
      message: 'Email là bắt buộc nhập'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 5-100 kí tự'
    },
    maxLength: {
      value: 100,
      message: 'Email có độ dài từ 5-100 kí tự '
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng'
    }
  },
  password: {
    require: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự'
    },
    maxLength: {
      value: 100,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự '
    }
  },
  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự'
    },
    maxLength: {
      value: 100,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự '
    }
  }
};
