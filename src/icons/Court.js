import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Court = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="nonzero"
      d="M17 28.017c-.007.332.042.664.15.983H3.48A.486.486 0 0 1 3 28.515v-1.019a1.179 1.179 0 0 1 1.21-1.147h1.46v-.265c.002-.53.332-1 .822-1.173v-9.576a1.243 1.243 0 0 1-.821-1.173v-.593H3.809a.81.81 0 0 1-.803-.82v-1.018c.001-.062.009-.124.023-.184a.495.495 0 0 1 .215-.485l12.5-7.987c.155-.1.353-.1.51 0l12.486 7.987a.495.495 0 0 1 .221.485c.015.06.022.122.023.184v1.019a.81.81 0 0 1-.803.819H26.32v.593c-.002.53-.332 1-.822 1.173v1.706a3.05 3.05 0 0 0-.963-.005V15.41h-1.358v2.201a2.915 2.915 0 0 0-.712.787l-.25.407v-3.47a1.243 1.243 0 0 1-.822-1.173v-.593h-2.931v.593c-.002.53-.331 1-.822 1.173v9.576c.228.08.421.223.563.407l-.774 1.257c-.146.238-.255.49-.327.75H4.21c-.141 0-.247.086-.247.165l-.006.527H17zm-6.399-1.674l2.921.006v-.265c.002-.53.331-1 .822-1.173v-9.576a1.243 1.243 0 0 1-.822-1.173v-.593h-2.93v.593c-.002.53-.332 1-.822 1.173v9.576c.492.169.825.637.831 1.167v.265zm-3.149-1.514h1.355v-9.42H7.452v9.42zm7.864 0h1.364v-9.42h-1.364v9.42zm2.186-10.667v-.593h-3.01v.593c0 .146.116.265.26.265h2.49c.144 0 .26-.119.26-.265zm-3.01 11.916v.265h3.01v-.265a.263.263 0 0 0-.26-.266h-2.49a.263.263 0 0 0-.26.266zm10.874-11.916l-.006-.593h-3.01v.593c0 .146.116.265.26.265h2.496c.144 0 .26-.119.26-.265zM15.996 4.07l-10.7 6.84h21.403l-10.702-6.84zM3.964 11.894v.692h24.074v-.692H3.963zm5.675 1.675H6.621v.593c0 .146.116.265.26.265h2.497c.144 0 .26-.119.26-.265v-.593zm-3.01 12.509v.265h3.01v-.265a.263.263 0 0 0-.26-.266h-2.49a.263.263 0 0 0-.26.266zm19.63-6.892l5.036 8.176a1.372 1.372 0 0 1 0 1.447 1.44 1.44 0 0 1-1.212.691H19.919a1.438 1.438 0 0 1-1.212-.69c-.276-.447-.276-1.002 0-1.448l5.034-8.176A1.467 1.467 0 0 1 25 18.5c.516 0 .992.254 1.259.686zm-1.665.525l-5.035 8.175a.372.372 0 0 0 0 .398c.08.13.222.216.36.216h10.164c.138 0 .28-.087.36-.216a.372.372 0 0 0 0-.398l-5.034-8.175A.47.47 0 0 0 25 19.5a.47.47 0 0 0-.407.21zM25 22c.276 0 .5.138.5.308v3.384c0 .17-.224.308-.5.308s-.5-.138-.5-.308v-3.384c0-.17.224-.308.5-.308zm0 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
    />
  </SvgIcon>
);

export default withRef(Court);