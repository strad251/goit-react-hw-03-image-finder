import { TailSpin } from "react-loader-spinner";

import css from './Loader.module.css'
export const Loader = () => {
  return (
    <div className={css.Overlay}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} />
    </div>
  )
};