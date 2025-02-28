import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Box, chakra, Flex, Grid, Image, Text, useMediaQuery,
} from '@chakra-ui/react';
import ScrollContext from '../../../context/scroll/ScrollContext';
// import classes from './Footer.module.css';

const Footer = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);

  const scrollCtx = useContext(ScrollContext);

  const ref = useRef<HTMLDivElement>(null);
  const handleScrollToContacts = () => {
    if (ref.current !== null) {
      if (isSmallScreen) {
        setPreviewOffsetTop(ref.current.offsetTop);
        let offsetTop: number;
        if (ref.current.offsetTop < previewOffsetTop) {
          offsetTop = -(previewOffsetTop - ref.current.offsetTop);
        } else {
          offsetTop = ref.current.offsetTop - previewOffsetTop;
        }
        window.scrollBy(0, offsetTop);
      } else {
        ref.current.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    scrollCtx.handleUpdateScrollToContact(handleScrollToContacts);
  }, []);

  return (
    <Flex
      w="full"
      bg="#fff"
      pt="4em"
      flexDir="column"
      alignItems="center"
      ref={ref}
    >
      <chakra.h3
        fontWeight="bold"
        color="#6b5f00"
        px="1em"
        pb="1em"
        fontSize={{ base: '2em', md: '3em', xl: '3.5em' }}
        w="full"
        textAlign="center"
      >
        Somos
        {' '}
        <span style={{ fontWeight: '800', color: '#5b7300' }}>Apaixonados</span>
        {' '}
        por Chá
      </chakra.h3>

      <Grid
        templateColumns={{ base: '', xl: '300px repeat(2, 1fr)' }}
        bg="#5b7300"
        w="full"
        h="full"
        py="4em"
        px="3em"
      >
        <Flex
          h="full"
          justifyContent={{ base: 'center', xl: 'flex-start' }}
        >
          <Image
            src="/logo/footer-logo.svg"
            w="200px"
            h="200px"
            alt="Atelier do Chá logo"
          />
          <Box
            width="3px"
            height="75%"
            my="auto"
            p="auto"
            bg="#fff"
            display={{ base: 'none', xl: 'block' }}
          />
        </Flex>
        <Flex
          flexDir="column"
          gap={8}
          justifyContent="center"
        >
          <Text
            fontSize={{ base: '1.2em', xl: '1.5em' }}
            color="#fff"
            textAlign={{ base: 'center', xl: 'left' }}
            mt={{ base: '1.5em', md: '0' }}
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com.br/maps/place/Atelier+do+Ch%C3%A1/@-20.3073248,-40.314686,17z/data=!3m1!4b1!4m5!3m4!1s0xb83d6334503a8b:0xa520f339df5b2c39!8m2!3d-20.3073298!4d-40.3124973"
          >
            Rua Joaquim Leopodilno Lopes, nº 370
            <br />
            Bairro Consolação - Vitória - ES
            <br />
            Cep: 29045-580
          </Text>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5527988689325&text=Ol%C3%A1%2C%20gostaria%20saber%20mais%20dos%20seus%20produtos."
          >
            <Flex
              justifyContent={{ base: 'flex-start', md: 'center', xl: 'flex-start' }}
              gap={6}
              mb={{ base: '1.8em', xl: '0' }}
            >
              <Image
                src="/images/svgs/whatsapp-2.svg"
                w={{ base: '40px', xl: '50px' }}
                h={{ base: '40px', xl: '50px' }}
                alt="Whatsapp logo"
              />

              <Text
                fontSize={{ base: '1.5em', xl: '2em' }}
                color="#fff"
                fontWeight="700"
              >

                (27) 98868-9325

              </Text>
            </Flex>
          </a>
        </Flex>

        <Flex
          flexDir="column"
          gap={4}
          ml={{ base: '0', md: '2em' }}
        >
          <a
            href="mailto:sac@atelierdocha.com"
            rel="noopener noreferrer"
            target="_blank"
          >

            <Flex
              alignItems="center"
              gap={6}
              justifyContent={{ base: 'flex-start', md: 'center', xl: 'flex-start' }}
            >
              <Image
                src="/images/svgs/email.svg"
                w={{ base: '40px', xl: '50px' }}
                h={{ base: '40px', xl: '50px' }}
                alt="Email logo"
              />

              <Text
                fontSize={{ base: '1.5em', xl: '2em' }}
                color="#fff"
                fontWeight="700"
              >

                sac@atelierdocha.com

              </Text>
            </Flex>
          </a>

          <a
            href="https://www.instagram.com/atelierdocha/"
            rel="noopener noreferrer"
            target="_blank"
          >

            <Flex
              alignItems="center"
              gap={6}
              justifyContent={{ base: 'flex-start', md: 'center', xl: 'flex-start' }}
            >
              <Image
                src="/images/svgs/instagram.svg"
                w={{ base: '40px', xl: '50px' }}
                h={{ base: '40px', xl: '50px' }}
                alt="Whatsapp logo"
              />

              <Text
                fontSize={{ base: '1.5em', xl: '2em' }}
                color="#fff"
                fontWeight="700"
              >

                @atelierdocha

              </Text>
            </Flex>
          </a>
          <a
            href="https://pt-br.facebook.com/atelierdochabr/"
            rel="noopener noreferrer"
            target="_blank"
          >

            <Flex
              alignItems="center"
              gap={6}
              justifyContent={{ base: 'flex-start', md: 'center', xl: 'flex-start' }}
            >
              <Image
                src="/images/svgs/facebook.svg"
                w={{ base: '40px', xl: '50px' }}
                h={{ base: '40px', xl: '50px' }}
                alt="Facebook logo"
              />

              <Text
                fontSize={{ base: '1.5em', xl: '2em' }}
                color="#fff"
                fontWeight="700"
              >

                atelierdocha

              </Text>
            </Flex>
          </a>
        </Flex>
      </Grid>
      <Flex
        bg="#6b5f00"
        py="1.2em"
        alignItems="center"
        w="full"
      >
        <Text color="#fff" textAlign="center" w="100%">
          2022 - Atelier do Chá. Todos os direitos reservados. Desenvolvido por
          {' '}
          <a
            href="https://www.artcom.com.br/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
            Artcom Comnunicações.
          </a>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
