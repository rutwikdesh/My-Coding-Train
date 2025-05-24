import { PubSubService } from "../services/PubSubService";

const pubsubservice = new PubSubService();

const ApiController = (req, res) => {
  try {
    const { data } = req.params;
    pubsubservice.publishData(data);
    res.status(200).json({ data: "Data Published Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export default ApiController;
