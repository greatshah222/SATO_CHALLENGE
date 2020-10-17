import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Broadband = props => (
  <SvgIcon {...props} variant="large">
    <path d="M4.074 35.332A2.478 2.478 0 0 1 1.6 32.858v-4.797a2.48 2.48 0 0 1 1.799-2.38v-.094c0-.972.79-1.799 1.761-1.799h2.355v-2.577c0-1.4.6-2.6.6-3.599V7.418c0-1.166.9-1.95 1.799-1.95.9 0 1.8.784 1.8 1.95v10.194c0 1 .599 2.2.599 3.599v2.577h16.91c.972 0 1.761.827 1.761 1.799h.525a2.478 2.478 0 0 1 2.474 2.474v4.797a2.478 2.478 0 0 1-2.474 2.474h-.525v1.05c0 .972-.79 1.798-1.761 1.798h-1.231a.6.6 0 0 1-.606.675h-1.2a.602.602 0 0 1-.654-.675h-15.53a.6.6 0 0 1-.606.675h-1.2a.602.602 0 0 1-.655-.675h-2.38c-.973 0-1.762-.826-1.762-1.799v-1.05h.675zm.524 0v1.05c0 .356.263.599.562.599h24.063c.299 0 .562-.243.562-.6v-1.05H4.598zm6.515-11.544v-2.577c0-1-.598-2.2-.6-3.599V7.418c0-.633-.3-.75-.599-.75-.3 0-.6.117-.6.75v10.194c0 1.4-.6 2.599-.6 3.599v2.577h2.4zm-6.515 1.799h25.187c0-.357-.263-.6-.562-.6H5.16c-.299 0-.562.243-.562.6zM3.286 1l.825.825C2.878 3.06 2.211 5.019 2.2 6.959c-.011 1.94.647 3.837 1.911 5.023l-.825.862C1.712 11.367.988 9.169 1 6.959 1.012 4.75 1.771 2.518 3.286 1zm13.68 0c1.516 1.518 2.275 3.75 2.287 5.96.012 2.209-.712 4.407-2.286 5.884l-.825-.862c1.265-1.186 1.922-3.082 1.912-5.023-.01-1.94-.679-3.9-1.912-5.134L16.967 1zM4.974 2.687l.825.862c-.812.812-1.266 2.11-1.275 3.41-.009 1.3.45 2.563 1.275 3.336l-.825.862c-1.136-1.065-1.66-2.628-1.65-4.198.012-1.57.556-3.178 1.65-4.272zm10.307 0c1.094 1.094 1.638 2.703 1.65 4.272.01 1.57-.514 3.133-1.65 4.198l-.824-.862c.825-.773 1.283-2.035 1.274-3.336-.01-1.3-.5-2.598-1.312-3.41l.862-.862zM6.66 4.373l.862.862c-.389.389-.634 1.06-.637 1.724-.004.664.208 1.282.6 1.65l-.788.862c-.701-.659-1.017-1.616-1.012-2.55.005-.933.304-1.877.975-2.548zm6.934 0c.67.671.969 1.615.974 2.549.005.933-.31 1.89-1.012 2.549l-.825-.863c.392-.367.641-.985.638-1.649-.004-.664-.25-1.335-.638-1.724l.863-.862zm-9.52 22.413c-.715 0-1.275.551-1.275 1.275v4.797c0 .724.56 1.275 1.275 1.275h27.435c.714 0 1.274-.551 1.274-1.275v-4.797c0-.724-.56-1.275-1.274-1.275H4.074zm8.807 3.673a.6.6 0 0 1 .113 0h1.2a.6.6 0 1 1 0 1.2h-1.2a.602.602 0 1 1-.113-1.2zm4.798 0a.6.6 0 0 1 .112 0h1.2a.6.6 0 1 1 0 1.2h-1.2a.602.602 0 1 1-.112-1.2zm3.598 0a.6.6 0 0 1 .112 0h1.2a.6.6 0 1 1 0 1.2h-1.2a.602.602 0 1 1-.112-1.2zm3.598 0a.6.6 0 0 1 .113 0h1.199a.6.6 0 1 1 0 1.2h-1.2a.602.602 0 1 1-.112-1.2zM7.597 28.1a2.408 2.408 0 0 1 2.398 2.398 2.408 2.408 0 0 1-2.398 2.399 2.408 2.408 0 0 1-2.4-2.399 2.408 2.408 0 0 1 2.4-2.399zm0 1.199c-.67 0-1.2.53-1.2 1.199 0 .67.53 1.2 1.2 1.2.67 0 1.199-.53 1.199-1.2 0-.67-.53-1.2-1.2-1.2z" />
  </SvgIcon>
);

export default withRef(Broadband);