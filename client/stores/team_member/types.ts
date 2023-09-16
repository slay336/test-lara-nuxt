export type IOccupation = {
  id: number,
  name: string,
};

export type ITeamMember = {
  id: number,
  image: string,
  name: string,
  occupation: IOccupation,
};