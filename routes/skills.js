import express from "express";
import DatabaseTool from "../utils/db-tool.js";
import InfoTool from "../utils/info-tool.js";
import GeneralTool from "../utils/general-tool.js";

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  const languagesArray = GeneralTool.splitAmpersandsFromArray(
    InfoTool.getSkillsList("languages")
  );
  res.render("skills", {
    data: {
      languages: GeneralTool.concatenateStringsWithAnd(languagesArray),
    },
  });

  DatabaseTool.insertPageVisit(InfoTool.getPageId("skills"));
});

skillsRouter.get("/more", (req, res) => {
  res.render("skills-info", {
    data: {
      languages: InfoTool.getSkillsList("languages"),
      misc: InfoTool.getSkillsList("misc"),
      technologies: InfoTool.getSkillsList("technologies"),
      concatenateSkills: GeneralTool.concatenateStrings,
    },
  });

  DatabaseTool.insertPageVisit(InfoTool.getPageId("skillsInfo"));
});

export default skillsRouter;
