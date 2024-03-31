import UserModels from "../models/User.js";

export const Createuser = async (rq, rs) => {
  try {
    const userData = new UserModels(rq.body);
    if (!userData) {
      return rs.status(404).json({ msg: "User Data not found" });
    }

    const savedata = await userData.save();

    rs.status(200).json(savedata);
  } catch (error) {
    rs.status(500).json({ error: error });
  }
};

export const GetAll = async (rq, rs) => {
  try {
    const userData = await UserModels.find();
    if (!userData) {
      return rs.status(404).json({ msg: "Users Data not found" });
    }
    rs.status(200).json(userData);
  } catch (error) {
    rs.status(500).json({ error: error });
  }
};

export const Getone = async (rq, rs) => {
  try {
    const id = rq.params.id;
    const userExist = await UserModels.findById(id);

    if (!userExist) {
      return rs.status(404).json({ msg: "Users Data not found" });
    }
    rs.status(200).json(userExist);
  } catch (error) {
    rs.status(500).json({ error: error });
  }
};

export const Update = async (rq, rs) => {
  try {
    const id = rq.params.id;
    const userExist = await UserModels.findById(id);

    if (!userExist) {
      return rs.status(404).json({ msg: "Users Data not found" });
    }

    const updatedata = await UserModels.findByIdAndUpdate(id, rq.body, {
      new: true,
    });
    rs.status(200).json(updatedata);
  } catch (error) {
    rs.status(500).json({ error: error });
  }
};

export const Delete = async (rq, rs) => {
  try {
    const id = rq.params.id;
    const userExist = await UserModels.findById(id);

    if (!userExist) {
      return rs.status(404).json({ msg: "Users Data not found" });
    }

    await UserModels.findByIdAndDelete(id);
    rs.status(200).json({ msg: "user deleted" });
  } catch (error) {
    rs.status(500).json({ error: error });
  }
};
