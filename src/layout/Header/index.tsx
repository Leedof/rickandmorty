import { Container, SvgIcon } from '@mui/material';
import { flex } from 'components';

const Header = () => {
  return (
    <Container maxWidth="xl" sx={Object.assign({ height: '60px' }, flex.rowBase, flex.alignCenter, flex.justifyStart)}>
      <SvgIcon sx={{ fontSize: 40 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_108_3202)">
            <path
              d="M10.6009 0.0770483C7.87316 0.435247 5.50123 1.56954 3.60369 3.42942C1.96615 5.03212 0.866847 6.96547 0.314916 9.21571C0.0777226 10.1847 -0.00438258 10.9286 0.000178828 12.017C0.00474024 13.9917 0.39246 15.6174 1.28194 17.4083C2.17141 19.1901 3.57633 20.7836 5.29143 21.9409C7.58127 23.4839 10.4869 24.2279 13.1097 23.9386C16.1202 23.6033 18.5241 22.469 20.5493 20.4163C23.2862 17.638 24.4357 14.0468 23.8518 10.0423C23.5143 7.69108 22.1686 5.101 20.4216 3.42483C18.7704 1.84508 16.7862 0.770486 14.615 0.283701C13.3697 0.00816409 11.7686 -0.0790893 10.6009 0.0770483ZM13.4792 1.5925C16.7679 2.07469 19.6735 4.20092 21.1788 7.22726C21.635 8.14569 21.9634 9.18355 22.1276 10.203C22.2416 10.9102 22.2416 12.8069 22.1276 13.4636C21.822 15.1994 21.2016 16.669 20.1616 18.0788C19.9883 18.3176 19.5367 18.8228 19.1627 19.1993L18.483 19.879L18.5104 20.2326L18.5378 20.5816L18.4055 20.0765C18.2504 19.4749 18.1135 19.1397 17.9128 18.8733C17.8308 18.763 17.7623 18.6483 17.7623 18.6161C17.7669 18.5886 17.8809 18.4784 18.0223 18.3773C18.2777 18.1936 18.629 17.8216 18.8206 17.5277C18.889 17.4313 18.9848 17.3532 19.0806 17.3257C19.3086 17.2614 19.5686 16.9905 19.6279 16.7562C19.6918 16.5312 19.669 16.4256 19.5139 16.1914L19.3999 16.026L19.5002 15.5714C19.6006 15.1214 19.6006 15.1122 19.523 14.405C19.482 14.0146 19.45 13.6381 19.45 13.5738C19.45 13.4131 19.0988 12.7058 18.8206 12.3155C18.3553 11.6542 18.182 11.4981 17.5069 11.1674C16.7223 10.7771 16.435 10.7128 15.6412 10.7449C14.9479 10.7725 14.3641 10.9056 13.8304 11.1628C13.2921 11.42 12.6809 12.0308 12.0925 12.9079C11.8918 13.2018 11.8781 13.2385 11.8781 13.5233C11.8781 13.7437 11.8325 13.9595 11.7139 14.3315C11.5132 14.9606 11.5223 15.1076 11.8097 15.599C11.9237 15.7918 12.0149 15.9755 12.0149 15.9985C12.0149 16.026 11.9557 16.1133 11.8781 16.196C11.6364 16.4577 11.6409 16.8619 11.8918 17.1328C12.0332 17.2844 12.3798 17.4267 12.4665 17.367C12.4893 17.3532 12.4711 17.2384 12.4209 17.1144C12.2841 16.7517 12.3205 16.7379 12.4893 17.0915C12.8223 17.7987 13.2739 18.2533 13.9992 18.6115C14.5465 18.8779 15.0163 18.9973 15.6869 19.0294C15.9879 19.0432 16.1932 19.0707 16.143 19.0891C15.8693 19.1855 14.6104 19.0065 14.0311 18.786L13.73 18.6712L13.6525 18.7768C13.4837 18.9973 13.1507 19.7275 13.0686 20.0535C13.023 20.2418 12.9591 20.6229 12.9272 20.8985C12.836 21.7572 12.7995 21.8353 12.7037 21.3301C12.5441 20.4944 11.4721 16.5358 11.3399 16.297C11.3216 16.2603 11.0342 16.1638 10.7013 16.0812C10.3683 15.9939 10.0033 15.8929 9.8893 15.8469C9.77986 15.8056 9.67493 15.7827 9.66125 15.7965C9.64757 15.8102 9.72509 15.9434 9.83458 16.0904C9.94407 16.2373 10.0992 16.4623 10.1812 16.5863C10.3957 16.9307 10.8928 18.0053 11.0388 18.4324C11.1985 18.8871 11.1848 18.9192 10.7058 19.3279C10.5234 19.484 10.3729 19.6448 10.3729 19.6861C10.3729 19.7228 10.5827 19.9525 10.8381 20.1913C11.2805 20.6092 11.2988 20.6367 11.2623 20.7653L11.2213 20.9031L11.203 20.7607C11.1939 20.6505 11.0844 20.5265 10.7149 20.1729C10.4504 19.9295 10.236 19.6999 10.236 19.6631C10.236 19.631 10.4002 19.4611 10.5963 19.2866C11.0981 18.8549 11.1026 18.8274 10.8974 18.2992C10.5507 17.4129 9.80722 16.0444 9.53352 15.7872C9.44688 15.7046 9.41492 15.6265 9.41492 15.5025C9.41492 15.3142 9.456 15.2683 9.68861 15.1903C9.92583 15.1122 10.1584 14.9331 10.3181 14.7081C10.4458 14.529 10.5005 14.4968 10.8518 14.3866C11.0662 14.3177 11.2395 14.2442 11.2395 14.2259C11.2395 14.2029 11.1574 14.0835 11.057 13.9641C10.8609 13.7253 10.8244 13.5554 10.9567 13.5141C10.9978 13.5003 11.1574 13.4773 11.3079 13.459C11.4585 13.4452 11.5953 13.4222 11.6136 13.4085C11.6318 13.3993 11.5861 13.2248 11.5132 13.0227C11.4356 12.8206 11.3763 12.6278 11.3763 12.6002C11.3763 12.5681 11.4949 12.5084 11.6409 12.4579C11.9648 12.3522 12.5167 12.0767 12.5167 12.0216C12.5167 11.9986 12.3479 11.8884 12.1472 11.7782C11.7504 11.5669 11.349 11.2455 11.4083 11.1904C11.4265 11.172 11.5907 11.1077 11.764 11.0526C12.2019 10.9056 12.6672 10.6898 13.0321 10.4556C13.2009 10.35 13.3378 10.2536 13.3286 10.249C13.3104 10.2352 12.0743 9.70247 11.9557 9.66114C11.9009 9.6382 11.8872 9.61065 11.91 9.56932C11.9283 9.53255 12.2294 9.23865 12.576 8.91719C12.9181 8.59113 13.2009 8.311 13.2009 8.29267C13.2009 8.2559 12.9181 8.2054 12.0834 8.08598C11.7823 8.04009 11.5177 7.99415 11.4995 7.97577C11.4767 7.95743 11.6865 7.55327 11.9648 7.08028C12.4164 6.30417 12.503 6.13886 12.4574 6.13886C12.4483 6.13886 12.0742 6.27206 11.6272 6.43737C10.9749 6.67617 10.797 6.72211 10.7514 6.67617C10.6511 6.57513 10.5553 5.8174 10.5553 5.13772V4.48105L10.1858 4.67852C9.7525 4.91275 9.17319 5.36736 8.90405 5.68425C8.80368 5.80824 8.6988 5.90928 8.68056 5.90928C8.65772 5.90928 8.48439 5.69803 8.28826 5.43624C7.95072 4.98619 7.38053 4.34787 7.31669 4.34787C7.29845 4.34787 7.26192 4.54994 7.23456 4.79332C7.15248 5.48217 6.91071 6.32256 6.7921 6.32256C6.76018 6.32256 6.54125 6.23073 6.3086 6.12048C5.93458 5.946 5.36439 5.77147 5.15458 5.77147C5.09986 5.77147 5.12722 5.85412 5.25951 6.12508C5.46019 6.5338 5.64264 7.17215 5.61984 7.39257L5.60616 7.5395L5.19562 7.57166C4.00054 7.66353 3.43948 7.71863 3.43948 7.74158C3.43948 7.75996 3.64019 7.97577 3.8865 8.22835C4.3472 8.69678 4.68475 9.19732 4.66194 9.37185C4.65282 9.43612 4.42019 9.62899 3.94124 9.96426C3.55352 10.2352 3.22966 10.4786 3.22054 10.5015C3.21141 10.5245 3.26159 10.5566 3.33457 10.575C3.82264 10.6806 4.03247 10.7495 4.2058 10.8505C4.44299 10.9929 4.68931 11.2042 4.81248 11.3787L4.90368 11.5073L4.39282 12.017C3.96404 12.4486 3.89106 12.5359 3.9458 12.5865C3.98229 12.6186 4.25597 12.7242 4.55703 12.816C4.85808 12.9079 5.12266 13.0043 5.14546 13.0273C5.16826 13.0503 5.13178 13.2845 5.04509 13.6059C4.96757 13.9044 4.91736 14.1662 4.93104 14.1891C4.95389 14.2305 5.70648 14.1937 5.82965 14.1478C5.9437 14.1065 5.9893 14.2167 6.02127 14.5795C6.03951 14.7908 6.06687 14.9698 6.08511 14.979C6.12159 15.002 6.63245 14.7815 6.63245 14.7448C6.63245 14.731 6.57317 14.6346 6.50021 14.529C6.19459 14.0789 5.98474 13.5141 5.82053 12.6829C5.71109 12.1547 5.66088 11.6496 5.71565 11.6496C5.73389 11.6496 5.76581 11.7966 5.78405 11.9757C5.8753 12.9997 6.34512 14.2994 6.77386 14.731C6.88335 14.8413 7.12056 14.9974 7.34861 15.103L7.7318 15.2821L7.71807 15.452L7.70439 15.6219L6.69178 15.9618L5.67912 16.3016L5.58792 16.5817C5.53771 16.7379 5.32791 17.4497 5.12722 18.1707C4.75317 19.4794 4.63914 19.8101 4.69387 19.4198C4.71668 19.2269 4.70755 19.2085 4.47492 18.9513C3.01984 17.3716 2.12124 15.5209 1.77001 13.3717C1.63773 12.5865 1.65141 10.9056 1.79282 10.1341C2.18966 7.9666 3.06545 6.19857 4.49773 4.6877C6.83319 2.23083 10.1037 1.10113 13.4792 1.5925ZM7.30757 16.4348C6.97916 17.119 6.39528 18.7585 6.44544 18.8457C6.46824 18.8871 6.66442 19.0753 6.88335 19.2682C7.10684 19.4611 7.29389 19.6402 7.30301 19.6724C7.31669 19.7045 7.24824 19.8055 7.15248 19.9019C7.05212 20.0076 7.01564 20.0305 7.06124 19.9616C7.23912 19.6815 7.2528 19.7182 6.7921 19.2912C6.48192 19.0018 6.3588 18.8595 6.3588 18.7814C6.3588 18.5426 7.26192 16.2419 7.35773 16.2419C7.38053 16.2419 7.35773 16.3292 7.30757 16.4348Z"
              fill="#333333"
            />
          </g>
        </svg>
      </SvgIcon>
    </Container>
  );
};

export default Header;
