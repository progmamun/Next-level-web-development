type NoobDeveloper = {
  name: string;
};
type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};
// union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Al Mamun Khan",
  expertise: "T3 Stack Development",
  experience: 4,
};

// intersection
type JuniorDeveloperr = {
  name: string;
};
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloperr & {
  expertise: string;
  experience: number;
  leadershipExperience: number;
  level: Level;
};

const newDeveloperr: NextLevelDeveloper = {
  name: "Al Mamun Khan",
  expertise: "T3 Stack Development",
  experience: 4,
  leadershipExperience: 1,
  level: Level.mid,
};
