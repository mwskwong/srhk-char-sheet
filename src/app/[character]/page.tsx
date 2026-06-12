export const generateStaticParams = () => [{ character: "mc" }];

const CharacterPage = async ({ params }: PageProps<"/[character]">) => {
  const { character } = await params;
  return <div>{character}</div>;
};

export default CharacterPage;
