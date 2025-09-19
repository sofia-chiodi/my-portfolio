import { ToastContainer } from 'react-toastify'

export const Toast = () => (
  <ToastContainer
    position='bottom-right'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='light'
  />
)
