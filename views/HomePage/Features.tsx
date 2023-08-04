import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Blockchain-Powered Security',
    description:
      'Your financial security is our top priority. crest leverages cutting-edge blockchain technology to provide unparalleled protection for your transactions, ensuring that your sensitive data remains safe from any unauthorized access.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Cost-Effective Transactions',
    description:
      'Say goodbye to high transfer and withdrawal fees. With crest blockchain integration, we offer significantly reduced transaction costs, allowing you to make the most of your money without unnecessary expenses.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Non-Custodial Wallet',
    description:
      'Take control of your funds like never before. crest provides a non-custodial wallet solution, empowering you to manage your assets directly without the need for intermediaries, giving you complete ownership and control over your finances.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Decentralized 24/7 Wallet App',
    description:
      'Enjoy uninterrupted access to your wallet, thanks to crest decentralized architecture. Our wallet app stays operational 24/7, providing you with constant access to your funds, no matter the time or location.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Seamless UI/UX',
    description:
      'Banking made simple. crest boasts a user-friendly interface and smooth user experience, making managing your finances a breeze. Whether you are a seasoned pro or new to digital banking, our platform is designed to be intuitive and accessible for all.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lightning-Fast Transactions',
    description:
      'No more waiting around. crest blockchain-backed technology ensures lightning-fast transactions, reducing processing times and allowing you to complete your payments and transfers in record time.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Smart Contract Capabilities',
    description:
      'Empower your financial decisions with smart contracts. crest enables the use of smart contracts for automated and secure agreements, offering increased transparency and efficiency for your business dealings.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Multi-Currency Support',
    description:
      'Embrace global opportunities with cCrest multi-currency support. Access a diverse range of currencies within your wallet, simplifying international transactions and expanding your financial reach.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Carbon-Free Emission',
    description:
      'Embrace sustainability with Crest commitment to the environment. As a carbon-free emission company, we take pride in minimizing our ecological footprint.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
