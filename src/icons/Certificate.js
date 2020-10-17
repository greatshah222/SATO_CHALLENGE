import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Certificate = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="nonzero"
      d="M23.708 11.942l-.692 1.102a.979.979 0 0 0-.102.828l.405 1.234a1.89 1.89 0 0 1-.863 2.234l-1.121.653a.996.996 0 0 0-.484.69l-.22 1.27a1.93 1.93 0 0 1-1.83 1.59l-1.285.063a1.02 1.02 0 0 0-.759.393l-.783 1.01a1.99 1.99 0 0 1-2.383.577l-1.16-.532a1.033 1.033 0 0 0-.861 0l-1.161.532a1.97 1.97 0 0 1-.82.177 1.978 1.978 0 0 1-1.563-.754l-.783-1.01a1.02 1.02 0 0 0-.76-.393L5.2 21.544a1.93 1.93 0 0 1-1.83-1.592l-.22-1.27a.996.996 0 0 0-.483-.689l-1.122-.653a1.89 1.89 0 0 1-.863-2.234l.405-1.234a.98.98 0 0 0-.102-.828l-.692-1.102a1.88 1.88 0 0 1 .293-2.369l.936-.904a.985.985 0 0 0 .3-.78l-.093-1.291c-.066-.9.504-1.71 1.385-1.971l1.239-.366c.287-.085.52-.288.64-.558L5.51 2.53c.363-.82 1.275-1.29 2.17-1.118l1.257.242c.296.056.6-.017.835-.203l1-.792a1.996 1.996 0 0 1 2.456 0l1 .792c.235.186.54.26.835.203l1.257-.242c.895-.172 1.807.298 2.17 1.118l.518 1.173c.12.27.353.473.64.558l1.239.366c.88.26 1.45 1.07 1.385 1.97l-.094 1.291a.985.985 0 0 0 .301.781l.936.904a1.88 1.88 0 0 1 .293 2.37zm-.988-1.65l-.936-.903a1.985 1.985 0 0 1-.603-1.573l.094-1.29c.03-.429-.239-.812-.672-.94l-1.239-.366a2.009 2.009 0 0 1-1.27-1.113l-.519-1.173c-.173-.391-.626-.625-1.066-.54l-1.257.242a2.03 2.03 0 0 1-1.644-.401l-1-.792a.996.996 0 0 0-1.215 0l-1 .792a2.03 2.03 0 0 1-1.645.4L7.49 2.395a.976.976 0 0 0-1.066.54l-.519 1.173c-.239.54-.703.945-1.27 1.113l-1.24.366c-.432.128-.702.511-.67.94l.093 1.29a1.985 1.985 0 0 1-.603 1.573l-.936.903a.88.88 0 0 0-.14 1.118l.691 1.103c.314.5.39 1.11.205 1.67l-.404 1.235a.89.89 0 0 0 .415 1.058l1.122.653c.51.297.864.802.965 1.383l.22 1.269c.075.428.436.742.894.764l1.284.062a2.02 2.02 0 0 1 1.501.78l.783 1.01c.178.23.467.366.773.366a.97.97 0 0 0 .403-.087l1.161-.531a2.033 2.033 0 0 1 1.694 0l1.16.531a.99.99 0 0 0 1.177-.28l.783-1.01a2.02 2.02 0 0 1 1.5-.778l1.285-.063c.458-.022.819-.336.893-.764l.22-1.27c.102-.58.455-1.085.966-1.382l1.122-.653a.89.89 0 0 0 .415-1.058l-.404-1.234a1.979 1.979 0 0 1 .205-1.671l.692-1.102a.88.88 0 0 0-.141-1.119zm-7.387 2.28v-.5c1.199 0 2.167.995 2.167 2.214 0 1.218-.968 2.214-2.167 2.214-1.198 0-2.166-.996-2.166-2.214 0-1.219.968-2.215 2.166-2.215v.5zM8.667 8v-.5c1.198 0 2.166.996 2.166 2.214 0 1.219-.968 2.215-2.166 2.215-1.199 0-2.167-.996-2.167-2.215 0-1.218.968-2.214 2.167-2.214V8zm0 0v.5c-.64 0-1.167.542-1.167 1.214 0 .673.527 1.215 1.167 1.215s1.166-.542 1.166-1.215c0-.672-.527-1.214-1.166-1.214V8zm6.666 4.571v.5c-.64 0-1.166.542-1.166 1.215 0 .672.527 1.214 1.166 1.214.64 0 1.167-.542 1.167-1.214 0-.673-.527-1.215-1.167-1.215v-.5zM8.967 16.75a.5.5 0 0 1-.791-.611l6.857-8.889a.5.5 0 0 1 .791.611L8.967 16.75z"
    />
  </SvgIcon>
);

export default withRef(Certificate);
