import PubSub from "@googlecloud/pubsub";
export class PubSubService {
  constructor() {
    this.myService = new PubSub(
      process.env.PUBSUB_URI,
      process.env.GOOGLE_PROJECT_ID,
      process.env.PUBSUB_CREDENTIALS
    );
  }

  publishData(data) {
    this.myService.publishData(data);
  }
}
