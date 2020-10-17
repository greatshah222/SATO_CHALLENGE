import React from 'react';
import LinkColumn from './LinkColumn';
import Text from '../Text';
import * as designTokens from '../../.generated/styles';

export const middle = {
  title: 'Kotona',
  subtitle: 'Innostu ideoista ja jaa omasi',
  handler: () => null,
};

export const customerService = {
  title: 'Asiakaspalvelu auttaa',
  titleHandler: () => null,
  callRatesLabel: 'Puheluiden hinnat »',
  callRatesHandler: () => null,
  phoneNumber: '020 334 443',
};

export const columns = [
  <LinkColumn header="Test 1" key="1">
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 1
      </a>
    </Text>
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 2
      </a>
    </Text>
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 3
      </a>
    </Text>
  </LinkColumn>,
  <LinkColumn header="Test 2" key="2">
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 4
      </a>
    </Text>
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 5
      </a>
    </Text>
    <Text variant="body2" style={{ marginBottom: designTokens.spacingSmall }}>
      <a href="" style={{ color: designTokens.textWhite }}>
        Test 6
      </a>
    </Text>
  </LinkColumn>,
];
