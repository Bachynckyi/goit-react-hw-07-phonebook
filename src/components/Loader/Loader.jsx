import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {

  return (
        <TailSpin
            height="150"
            width="150"
            color="#ff0000"
            ariaLabel="tail-spin-loading"
            radius="5"
            wrapperStyle={{}}
            wrapperClass={css.loader}
            visible={true}
        />
    )
};
