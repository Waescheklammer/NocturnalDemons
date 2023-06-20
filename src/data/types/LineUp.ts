export interface LineUp {
  headliners: string[];
  stages: Stage[];
}

interface Stage {
  name: string;
  acts: Act[];
}

interface Act {
  name: string;
  time: string;
  genre: string;
  label?: string;
  soundcloudLink?: string;
}
