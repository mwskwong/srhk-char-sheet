import { Tooltip, Typography } from "@heroui/react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { characters, races } from "@/lib/characters";

export const generateStaticParams = () => [{ character: "mc" }];

const CharacterPage = async ({ params }: PageProps<"/[character]">) => {
  const { character: characterId } = await params;
  const character = characters.find((c) => c.id === characterId);

  if (!character) notFound();

  const name =
    character.firstName && character.lastName && character.streetName
      ? `${character.firstName} "${character.streetName}" ${character.lastName}`
      : character.streetName;
  return (
    <main className="mx-auto grid min-h-dvh max-w-7xl grid-cols-1 gap-8 px-4 pt-20 pb-32 lg:grid-cols-3">
      <section className="flex flex-col items-center gap-6">
        <Typography align="center" type="h3">
          {name}
        </Typography>
        <Image
          alt={`portrait of ${name}`}
          className="rounded-xl outline-4 outline-offset-4 outline-accent"
          src={character.portrait}
          width={296}
        />
        <div>
          <Typography align="center" className="text-xl">
            {character.archetype}
          </Typography>
          <div className="grid grid-cols-2 gap-2">
            <Tooltip delay={0}>
              <Tooltip.Trigger>
                <Typography className="text-xl">
                  <span className="text-accent">Race: </span>
                  {races[character.race].name}
                </Typography>
              </Tooltip.Trigger>
              <Tooltip.Content placement="bottom">
                <Typography className="mb-3" type="body-sm">
                  {races[character.race].description}
                </Typography>
                {races[character.race].bonuses.map((bonus) => (
                  <Typography
                    key={bonus}
                    className="text-success"
                    type="body-sm"
                  >
                    {bonus}
                  </Typography>
                ))}
              </Tooltip.Content>
            </Tooltip>
            <Typography className="text-xl">
              <span className="text-accent">Gender: </span>
              {character.gender}
            </Typography>
          </div>
        </div>
        {character.etiquettes && character.etiquettes.length > 0 && (
          <Typography className="text-xl">
            <span className="text-accent">Etiquettes: </span>
            {character.etiquettes.join(", ")}
          </Typography>
        )}
        {character.description && (
          <Typography className="text-xl">{character.description}</Typography>
        )}
      </section>
    </main>
  );
};

export default CharacterPage;
