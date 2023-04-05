import Link from "next/link";
import {
  Link as LinkUI,
  Navbar as Nav,
  Text,
  changeTheme,
  useTheme,
} from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { isDark } = useTheme();

  const onToggleDarkMode = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme);
    changeTheme(nextTheme);
  };

  return (
    <Nav isBordered variant="sticky">
      <Nav.Brand>
        <Link href="/" passHref legacyBehavior>
          <LinkUI>
            <Image
              alt="pokemon_logo"
              height={70}
              priority={true}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              title="ditto"
              width={70}
            />
            <Text h2 css={{ margin: 0 }}>
              P
            </Text>
            <Text h3 css={{ margin: 0 }}>
              okemon
            </Text>
          </LinkUI>
        </Link>
      </Nav.Brand>
      <Nav.Content hideIn="xs">
        <Image
          src={isDark ? "/img/sun.svg" : "/img/moon.svg"}
          alt="ligth/dark-mode"
          onClick={onToggleDarkMode}
          width={20}
          height={20}
        />
        <Link href="/favorites" passHref legacyBehavior>
          <LinkUI>
            <Text css={{ margin: 0 }}>Favorites</Text>
          </LinkUI>
        </Link>
      </Nav.Content>
    </Nav>
  );
};
