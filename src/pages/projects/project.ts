interface IProjectParams {
  name: string;
  image: string;
  datetime: Date;
  tags: string[];
  url: string;
}

class Project {
  name: string;
  image: string;
  datetime: Date;
  tags: string[];
  url: string;

  constructor(parameters: IProjectParams) {
    this.name = parameters.name;
    this.image = parameters.image;
    this.datetime = parameters.datetime;
    this.tags = parameters.tags;
    this.url = parameters.url;
  }
}

export { Project };
