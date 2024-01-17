export type DataType = {
  SprintInfo: {
    Type: "SCRUM" | "Kanban";
    Number: string;
    Date: string;
  };
  PBIs: [
    {
      Type: "bug" | "pbi";
      Number: string;
      Title: string;
      Env: "prod" | "dev" | "local";
      Stack: "back" | "front" | "full";
      Url: string | null;
      Slides: [
        {
          type: "normal" | "image";
          header: string;
          content: {
            text: [string];
            list: [string];
            image: string | null;
          };
        }
      ];
    }
  ];
};
