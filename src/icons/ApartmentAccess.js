import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ApartmentAccess = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="nonzero"
      d="M23.759 29.38h1.656v4.65l5.59.104a.35.35 0 0 1 .343.335c.034.803-.356 1.142-1.022 1.179a123.006 123.006 0 0 1-3.248.023l-1.025-.001a2931.277 2931.277 0 0 1-4.11 0l-.051.583-.112 1.25a.35.35 0 0 1-.348.318c-.125 0-.228.004-.453.014-.527.025-.756.023-1.052-.03a309.11 309.11 0 0 1-3.674-.694c-3.358-.646-4.873-.923-6.739-1.21-.932-.143-1.696-.178-3.434-.197-.87-.01-1.28-.018-1.753-.039a3.578 3.578 0 0 0-.249 0c-.19.004-.278.003-.394-.006-.52-.043-.92-.28-1.236-.816a.35.35 0 0 1 .196-.511c.572-.182 1.152-.254 1.877-.262.228-.002.407 0 .812.01.92.02 1.406.009 1.898-.077V7.849a.35.35 0 0 1 .273-.342A257266.711 257266.711 0 0 0 21.327 4.39a.35.35 0 0 1 .427.321l.136 2.424.042.74c.255.014.352.02.751.04l2.4.13a.35.35 0 0 1 .332.35V12h-1.656V9.638h-1.702v24.365h1.702V29.38zM20.268 6.249L8.948 8.826v25.346l3.495.635 7.825 1.422V6.249zm-2.131 14.067c.953 1.063 1.002 2.176.338 3.76a.35.35 0 0 1-.577.104c-.965-1.02-.992-1.81-.506-3.266.085-.253.112-.338.148-.462a.35.35 0 0 1 .597-.136zM37.9 23.42a1.834 1.834 0 0 1-2.422.92c-.652-.29-.915-.74-1.05-1.468l-.028-.158-.125-.711c-.134 1.008-.45 2.08-.92 3.14-1.164 2.613-2.907 3.2-5.715 1.95-2.809-1.25-3.538-2.938-2.374-5.552.47-1.059 1.057-2.01 1.717-2.785l-.506.317c-.037.022-.07.041-.137.083-.735.451-1.207.578-1.9.27a1.834 1.834 0 0 1-.936-2.415c.181-.408.545-.871.919-1.177 1.194-.975 3.22-1.476 4.27-1.009.504.224.938.925 1.36 1.912a3.447 3.447 0 0 1 2.088.247 3.447 3.447 0 0 1 1.581 1.387c1.016-.347 1.826-.494 2.33-.27 1.05.468 2.033 2.309 2.107 3.85.024.482-.077 1.062-.259 1.47zm-5.283 1.444l-.365-.162c1.39-3.12 1.256-5.914-.563-6.724-1.819-.81-3.984.96-5.374 4.08-.9 2.02-.48 2.968 1.786 3.978 2.267 1.01 3.251.686 4.15-1.334l.366.162zm-3.853-7.638c-.27-.602-.57-1.123-.628-1.149-.51-.227-2.025.153-2.84.82-.214.174-.441.461-.536.673a.46.46 0 0 0 .238.604c.158.07.235.05.614-.183l.146-.09 1.74-1.09a.688.688 0 0 1 1.054.543c.07-.045.141-.087.212-.128zm5.818 2.532a.689.689 0 0 1 .793.56l.38 2.167c.079.462.111.528.28.603a.46.46 0 0 0 .609-.227c.094-.212.156-.573.143-.848-.051-1.053-.783-2.433-1.293-2.66-.057-.025-.645.1-1.274.302.018.08.033.161.047.243a.68.68 0 0 1 .315-.14zm-4.434 5.502a.306.306 0 0 1 .427.048c.105.13.085.32-.045.423-.398.316-.932.093-.991.066-.432-.192-.74-.621-.848-1.087-.417.232-.943.29-1.375.098-.058-.026-.576-.27-.613-.777a.299.299 0 0 1 .28-.32.306.306 0 0 1 .325.28c.009.118.176.232.255.268.324.144.782.02 1.043-.24-.411-.306-.601-.757-.434-1.134.206-.462.855-.606 1.478-.329.624.278.95.857.745 1.319-.168.376-.63.537-1.132.436-.02.369.195.792.52.937.076.033.277.082.365.012zm1.02-2.75c-.23-.102-.284-.481-.122-.845.162-.364.48-.577.71-.475.23.102.285.482.123.846-.162.364-.48.577-.71.475zm-2.5-1.113c-.23-.102-.284-.481-.122-.845.162-.364.48-.577.71-.475.23.102.285.482.123.846-.162.364-.48.577-.71.474z"
    />
  </SvgIcon>
);

export default withRef(ApartmentAccess);
