import { Disease } from "@/types/disease";
import { url } from "inspector/promises";

export const diseases: Disease[] = [
  {
    "slug": "type-2-diabetes",
    "id": "type-2-diabetes",
    "related": [],
    "references": [{
      "title": "WHO Fact sheets:",
      "url": "https://www.who.int/news-room/fact-sheets"
    }, {
      "title": "WHO Health topics:",
      "url": "https://www.who.int/health-topics"
    }, {
      "title": "MedlinePlus:",
      "url": "https://medlineplus.gov/"
    }],
    "name": "Type 2 diabetes",
    "category": "endocrine",
    "image": "#",
    "overview": "Type 2 diabetes is a medical condition in the endocrine category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "type-1-diabetes",
    "id": "type-1-diabetes",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Type 1 diabetes",
    "category": "endocrine",
    "image": "#",
    "overview": "Type 1 diabetes is a medical condition in the endocrine category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hypertension",
    "id": "hypertension",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Hypertension",
    "category": "cardiovascular",
    "image": "#",
    "overview": "Hypertension is a medical condition in the cardiovascular category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "coronary-artery-disease",
    "id": "coronary-artery-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Coronary artery disease",
    "category": "cardiovascular",
    "image": "#",
    "overview": "Coronary artery disease is a medical condition in the cardiovascular category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "heart-failure",
    "id": "heart-failure",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Heart failure",
    "category": "cardiovascular",
    "image": "#",
    "overview": "Heart failure is a medical condition in the cardiovascular category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "atrial-fibrillation",
    "id": "atrial-fibrillation",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Atrial fibrillation",
    "category": "cardiovascular",
    "image": "#",
    "overview": "Atrial fibrillation is a medical condition in the cardiovascular category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "stroke",
    "id": "stroke",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Stroke",
    "category": "neurological",
    "image": "#",
    "overview": "Stroke is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "asthma",
    "id": "asthma",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Asthma",
    "category": "respiratory",
    "image": "#",
    "overview": "Asthma is a medical condition in the respiratory category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "copd",
    "id": "copd",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "COPD",
    "category": "respiratory",
    "image": "#",
    "overview": "COPD is a medical condition in the respiratory category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "pneumonia",
    "id": "pneumonia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Pneumonia",
    "category": "respiratory",
    "image": "#",
    "overview": "Pneumonia is a medical condition in the respiratory category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "tuberculosis",
    "id": "tuberculosis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Tuberculosis",
    "category": "infectious",
    "image": "#",
    "overview": "Tuberculosis is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "malaria",
    "id": "malaria",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Malaria",
    "category": "infectious",
    "image": "#",
    "overview": "Malaria is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "dengue",
    "id": "dengue",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Dengue",
    "category": "infectious",
    "image": "#",
    "overview": "Dengue is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hiv-infection",
    "id": "hiv-infection",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "HIV infection",
    "category": "infectious",
    "image": "#",
    "overview": "HIV infection is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hepatitis-a",
    "id": "hepatitis-a",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Hepatitis A",
    "category": "infectious",
    "image": "#",
    "overview": "Hepatitis A is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hepatitis-b",
    "id": "hepatitis-b",
    "related": [],
    "references": [{
      "title": "WHO Fact sheets:",
      "url": "https://www.who.int/news-room/fact-sheets"
    }, {
      "title": "WHO Health topics:",
      "url": "https://www.who.int/health-topics"
    }, {
      "title": "MedlinePlus:",
      "url": "https://medlineplus.gov/"
    }],
    "name": "Hepatitis B",
    "category": "infectious",
    "image": "#",
    "overview": "Hepatitis B is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hepatitis-c",
    "id": "hepatitis-c",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Hepatitis C",
    "category": "infectious",
    "image": "#",
    "overview": "Hepatitis C is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "covid-19",
    "id": "covid-19",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "COVID-19",
    "category": "infectious",
    "image": "#",
    "overview": "COVID-19 is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "influenza",
    "id": "influenza",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Influenza",
    "category": "infectious",
    "image": "#",
    "overview": "Influenza is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "measles",
    "id": "measles",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Measles",
    "category": "infectious",
    "image": "#",
    "overview": "Measles is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "chickenpox",
    "id": "chickenpox",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Chickenpox",
    "category": "infectious",
    "image": "#",
    "overview": "Chickenpox is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "rabies",
    "id": "rabies",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Rabies",
    "category": "infectious",
    "image": "#",
    "overview": "Rabies is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "tetanus",
    "id": "tetanus",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Tetanus",
    "category": "infectious",
    "image": "#",
    "overview": "Tetanus is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "cholera",
    "id": "cholera",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Cholera",
    "category": "infectious",
    "image": "#",
    "overview": "Cholera is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "typhoid-fever",
    "id": "typhoid-fever",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Typhoid fever",
    "category": "infectious",
    "image": "#",
    "overview": "Typhoid fever is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "chikungunya",
    "id": "chikungunya",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Chikungunya",
    "category": "infectious",
    "image": "#",
    "overview": "Chikungunya is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "zika-virus-disease",
    "id": "zika-virus-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Zika virus disease",
    "category": "infectious",
    "image": "#",
    "overview": "Zika virus disease is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "leptospirosis",
    "id": "leptospirosis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Leptospirosis",
    "category": "infectious",
    "image": "#",
    "overview": "Leptospirosis is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "lyme-disease",
    "id": "lyme-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Lyme disease",
    "category": "infectious",
    "image": "#",
    "overview": "Lyme disease is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "meningitis",
    "id": "meningitis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Meningitis",
    "category": "infectious",
    "image": "#",
    "overview": "Meningitis is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "sepsis",
    "id": "sepsis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Sepsis",
    "category": "critical care",
    "image": "#",
    "overview": "Sepsis is a medical condition in the critical care category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "urinary-tract-infection",
    "id": "urinary-tract-infection",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Urinary tract infection",
    "category": "infectious",
    "image": "#",
    "overview": "Urinary tract infection is a medical condition in the infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "gastroenteritis",
    "id": "gastroenteritis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Gastroenteritis",
    "category": "digestive",
    "image": "#",
    "overview": "Gastroenteritis is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "peptic-ulcer-disease",
    "id": "peptic-ulcer-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Peptic ulcer disease",
    "category": "digestive",
    "image": "#",
    "overview": "Peptic ulcer disease is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "gerd",
    "id": "gerd",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "GERD",
    "category": "digestive",
    "image": "#",
    "overview": "GERD is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "irritable-bowel-syndrome",
    "id": "irritable-bowel-syndrome",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Irritable bowel syndrome",
    "category": "digestive",
    "image": "#",
    "overview": "Irritable bowel syndrome is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "inflammatory-bowel-disease",
    "id": "inflammatory-bowel-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Inflammatory bowel disease",
    "category": "digestive",
    "image": "#",
    "overview": "Inflammatory bowel disease is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "celiac-disease",
    "id": "celiac-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Celiac disease",
    "category": "digestive",
    "image": "#",
    "overview": "Celiac disease is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "gallstones",
    "id": "gallstones",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Gallstones",
    "category": "digestive",
    "image": "#",
    "overview": "Gallstones is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "liver-cirrhosis",
    "id": "liver-cirrhosis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Liver cirrhosis",
    "category": "digestive",
    "image": "#",
    "overview": "Liver cirrhosis is a medical condition in the digestive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "chronic-kidney-disease",
    "id": "chronic-kidney-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Chronic kidney disease",
    "category": "renal",
    "image": "#",
    "overview": "Chronic kidney disease is a medical condition in the renal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "kidney-stones",
    "id": "kidney-stones",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Kidney stones",
    "category": "renal",
    "image": "#",
    "overview": "Kidney stones is a medical condition in the renal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "acute-kidney-injury",
    "id": "acute-kidney-injury",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Acute kidney injury",
    "category": "renal",
    "image": "#",
    "overview": "Acute kidney injury is a medical condition in the renal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "iron-deficiency-anemia",
    "id": "iron-deficiency-anemia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Iron-deficiency anemia",
    "category": "blood",
    "image": "#",
    "overview": "Iron-deficiency anemia is a medical condition in the blood category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "sickle-cell-disease",
    "id": "sickle-cell-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Sickle cell disease",
    "category": "blood",
    "image": "#",
    "overview": "Sickle cell disease is a medical condition in the blood category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "thalassemia",
    "id": "thalassemia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Thalassemia",
    "category": "blood",
    "image": "#",
    "overview": "Thalassemia is a medical condition in the blood category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hemophilia",
    "id": "hemophilia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Hemophilia",
    "category": "blood",
    "image": "#",
    "overview": "Hemophilia is a medical condition in the blood category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "leukemia",
    "id": "leukemia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Leukemia",
    "category": "cancer",
    "image": "#",
    "overview": "Leukemia is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "lung-cancer",
    "id": "lung-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Lung cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Lung cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "breast-cancer",
    "id": "breast-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Breast cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Breast cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "cervical-cancer",
    "id": "cervical-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Cervical cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Cervical cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "colorectal-cancer",
    "id": "colorectal-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Colorectal cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Colorectal cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "prostate-cancer",
    "id": "prostate-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Prostate cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Prostate cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "skin-cancer",
    "id": "skin-cancer",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Skin cancer",
    "category": "cancer",
    "image": "#",
    "overview": "Skin cancer is a medical condition in the cancer category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "osteoarthritis",
    "id": "osteoarthritis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Osteoarthritis",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Osteoarthritis is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "rheumatoid-arthritis",
    "id": "rheumatoid-arthritis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Rheumatoid arthritis",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Rheumatoid arthritis is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "osteoporosis",
    "id": "osteoporosis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Osteoporosis",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Osteoporosis is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "gout",
    "id": "gout",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Gout",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Gout is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "low-back-pain",
    "id": "low-back-pain",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Low back pain",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Low back pain is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "fibromyalgia",
    "id": "fibromyalgia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Fibromyalgia",
    "category": "musculoskeletal",
    "image": "#",
    "overview": "Fibromyalgia is a medical condition in the musculoskeletal category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "migraine",
    "id": "migraine",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Migraine",
    "category": "neurological",
    "image": "#",
    "overview": "Migraine is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "epilepsy",
    "id": "epilepsy",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Epilepsy",
    "category": "neurological",
    "image": "#",
    "overview": "Epilepsy is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "parkinson-disease",
    "id": "parkinson-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Parkinson disease",
    "category": "neurological",
    "image": "#",
    "overview": "Parkinson disease is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "alzheimer-disease",
    "id": "alzheimer-disease",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Alzheimer disease",
    "category": "neurological",
    "image": "#",
    "overview": "Alzheimer disease is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "multiple-sclerosis",
    "id": "multiple-sclerosis",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Multiple sclerosis",
    "category": "neurological",
    "image": "#",
    "overview": "Multiple sclerosis is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "peripheral-neuropathy",
    "id": "peripheral-neuropathy",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Peripheral neuropathy",
    "category": "neurological",
    "image": "#",
    "overview": "Peripheral neuropathy is a medical condition in the neurological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "depression",
    "id": "depression",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Depression",
    "category": "mental health",
    "image": "#",
    "overview": "Depression is a medical condition in the mental health category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "generalized-anxiety-disorder",
    "id": "generalized-anxiety-disorder",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Generalized anxiety disorder",
    "category": "mental health",
    "image": "#",
    "overview": "Generalized anxiety disorder is a medical condition in the mental health category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "bipolar-disorder",
    "id": "bipolar-disorder",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Bipolar disorder",
    "category": "mental health",
    "image": "#",
    "overview": "Bipolar disorder is a medical condition in the mental health category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "schizophrenia",
    "id": "schizophrenia",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Schizophrenia",
    "category": "mental health",
    "image": "#",
    "overview": "Schizophrenia is a medical condition in the mental health category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "autism-spectrum-disorder",
    "id": "autism-spectrum-disorder",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Autism spectrum disorder",
    "category": "neurodevelopmental",
    "image": "#",
    "overview": "Autism spectrum disorder is a medical condition in the neurodevelopmental category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "adhd",
    "id": "adhd",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "ADHD",
    "category": "neurodevelopmental",
    "image": "#",
    "overview": "ADHD is a medical condition in the neurodevelopmental category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "insomnia",
    "id": "insomnia",
    "related": [],
          "references": [{
            title: "WHO Fact sheets:",
            url: "https://www.who.int/news-room/fact-sheets"
          }, {
            title: "WHO Health topics:",
            url: "https://www.who.int/health-topics"
          }, {
            title: "MedlinePlus:",
            url: "https://medlineplus.gov/"
          }],
    "name": "Insomnia",
    "category": "sleep",
    "image": "#",
    "overview": "Insomnia is a medical condition in the sleep category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "obstructive-sleep-apnea",
    "id": "obstructive-sleep-apnea",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Obstructive sleep apnea",
    "category": "sleep",
    "image": "#",
    "overview": "Obstructive sleep apnea is a medical condition in the sleep category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "obesity",
    "id": "obesity",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Obesity",
    "category": "metabolic",
    "image": "#",
    "overview": "Obesity is a medical condition in the metabolic category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hypothyroidism",
    "id": "hypothyroidism",
    "related": [],
    "references": [
      {
        "title": "WHO Fact sheets:",
        "url": "https://www.who.int/news-room/fact-sheets"
      },
      {
        "title": "WHO Health topics:",
        "url": "https://www.who.int/health-topics"
      },
      {
        "title": "MedlinePlus:",
        "url": "https://medlineplus.gov/"
      }
    ],
    "name": "Hypothyroidism",
    "category": "endocrine",
    "image": "#",
    "overview": "Hypothyroidism is a medical condition in the endocrine category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hyperthyroidism",
    "id": "hyperthyroidism",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Hyperthyroidism",
    "category": "endocrine",
    "image": "#",
    "overview": "Hyperthyroidism is a medical condition in the endocrine category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "polycystic-ovary-syndrome",
    "id": "polycystic-ovary-syndrome",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Polycystic ovary syndrome",
    "category": "reproductive",
    "image": "#",
    "overview": "Polycystic ovary syndrome is a medical condition in the reproductive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "endometriosis",
    "id": "endometriosis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Endometriosis",
    "category": "reproductive",
    "image": "#",
    "overview": "Endometriosis is a medical condition in the reproductive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "pelvic-inflammatory-disease",
    "id": "pelvic-inflammatory-disease",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Pelvic inflammatory disease",
    "category": "reproductive",
    "image": "#",
    "overview": "Pelvic inflammatory disease is a medical condition in the reproductive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "ectopic-pregnancy",
    "id": "ectopic-pregnancy",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Ectopic pregnancy",
    "category": "reproductive",
    "image": "#",
    "overview": "Ectopic pregnancy is a medical condition in the reproductive category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "preeclampsia",
    "id": "preeclampsia",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Preeclampsia",
    "category": "pregnancy",
    "image": "#",
    "overview": "Preeclampsia is a medical condition in the pregnancy category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "gestational-diabetes",
    "id": "gestational-diabetes",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Gestational diabetes",
    "category": "pregnancy",
    "image": "#",
    "overview": "Gestational diabetes is a medical condition in the pregnancy category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "benign-prostatic-hyperplasia",
    "id": "benign-prostatic-hyperplasia",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Benign prostatic hyperplasia",
    "category": "urological",
    "image": "#",
    "overview": "Benign prostatic hyperplasia is a medical condition in the urological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "erectile-dysfunction",
    "id": "erectile-dysfunction",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Erectile dysfunction",
    "category": "urological",
    "image": "#",
    "overview": "Erectile dysfunction is a medical condition in the urological category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "glaucoma",
    "id": "glaucoma",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Glaucoma",
    "category": "eye",
    "image": "#",
    "overview": "Glaucoma is a medical condition in the eye category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "cataract",
    "id": "cataract",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Cataract",
    "category": "eye",
    "image": "#",
    "overview": "Cataract is a medical condition in the eye category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "age-related-macular-degeneration",
    "id": "age-related-macular-degeneration",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Age-related macular degeneration",
    "category": "eye",
    "image": "#",
    "overview": "Age-related macular degeneration is a medical condition in the eye category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "conjunctivitis",
    "id": "conjunctivitis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Conjunctivitis",
    "category": "eye",
    "image": "#",
    "overview": "Conjunctivitis is a medical condition in the eye category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "otitis-media",
    "id": "otitis-media",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Otitis media",
    "category": "ear",
    "image": "#",
    "overview": "Otitis media is a medical condition in the ear category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "hearing-loss",
    "id": "hearing-loss",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Hearing loss",
    "category": "ear",
    "image": "#",
    "overview": "Hearing loss is a medical condition in the ear category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "eczema",
    "id": "eczema",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Eczema",
    "category": "skin",
    "image": "#",
    "overview": "Eczema is a medical condition in the skin category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "psoriasis",
    "id": "psoriasis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Psoriasis",
    "category": "skin",
    "image": "#",
    "overview": "Psoriasis is a medical condition in the skin category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "acne",
    "id": "acne",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Acne",
    "category": "skin",
    "image": "#",
    "overview": "Acne is a medical condition in the skin category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "cellulitis",
    "id": "cellulitis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Cellulitis",
    "category": "skin/infectious",
    "image": "#",
    "overview": "Cellulitis is a medical condition in the skin/infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "ringworm",
    "id": "ringworm",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Ringworm",
    "category": "skin/infectious",
    "image": "#",
    "overview": "Ringworm is a medical condition in the skin/infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "scabies",
    "id": "scabies",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Scabies",
    "category": "skin/infectious",
    "image": "#",
    "overview": "Scabies is a medical condition in the skin/infectious category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "anaphylaxis",
    "id": "anaphylaxis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Anaphylaxis",
    "category": "allergy",
    "image": "#",
    "overview": "Anaphylaxis is a medical condition in the allergy category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "allergic-rhinitis",
    "id": "allergic-rhinitis",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Allergic rhinitis",
    "category": "allergy",
    "image": "#",
    "overview": "Allergic rhinitis is a medical condition in the allergy category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        "answer": "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        "question": "Is treatment the same for everyone?",
        "answer": "No. Management is individualized by a qualified clinician."
      },
      {
        "question": "When should I seek medical help?",
        "answer": "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  },
  {
    "slug": "vitamin-d-deficiency",
    "id": "vitamin-d-deficiency",
    "related": [],
    "references": [{
      title: "WHO Fact sheets:",
      url: "https://www.who.int/news-room/fact-sheets"
    }, {
      title: "WHO Health topics:",
      url: "https://www.who.int/health-topics"
    }, {
      title: "MedlinePlus:",
      url: "https://medlineplus.gov/"
    }],
    "name": "Vitamin D deficiency",
    "category": "nutrition",
    "image": "#",
    "overview": "Vitamin D deficiency is a medical condition in the nutrition category. Presentation, severity, causes, and management vary between individuals. This entry is a general educational overview and is not a substitute for clinical evaluation.",
    "updatedAt": "2026-09-22",
    "readTime": "3 min",
    "medicallyReviewed": false,
    "symptoms": [
      "Symptoms vary; some people have no obvious symptoms.",
      "Possible fatigue or reduced usual activity.",
      "Symptoms may develop gradually or suddenly, depending on the condition.",
      "Pain, discomfort, or functional change may occur in some cases.",
      "Other symptoms depend on the organ system involved.",
      "Symptoms alone cannot confirm this diagnosis.",
      "Seek assessment for persistent, worsening, or unexplained symptoms.",
      "New severe symptoms require urgent medical evaluation."
    ],
    "causes": [
      "Underlying mechanisms differ by disease and may include infection, immune dysfunction, genetics, or organ damage.",
      "Some conditions arise from multiple interacting biological and environmental factors.",
      "The cause may be unknown or multifactorial in an individual.",
      "A clinician may investigate likely causes based on history and examination."
    ],
    "riskFactors": [
      "Risk varies with age and individual circumstances.",
      "Family history or inherited factors may contribute for some conditions.",
      "Other illnesses, medicines, or exposures may alter risk.",
      "Lifestyle and environmental factors may contribute, depending on diagnosis.",
      "Risk may differ by pregnancy status, occupation, geography, or immune status.",
      "Risk factors do not mean a person will necessarily develop the condition."
    ],
    "diagnosis": [
      "Clinical history and physical examination guide assessment.",
      "Testing may include laboratory studies, imaging, or other disease-specific investigations.",
      "The clinician interprets results alongside symptoms and medical history.",
      "Further specialist assessment may be needed when findings are uncertain."
    ],
    "treatment": [
      "Treatment depends on the exact diagnosis, severity, age, pregnancy status, and other conditions.",
      "Options may include supportive care, lifestyle measures, medicines, procedures, or specialist treatment.",
      "Use prescription medicines only as directed by a qualified clinician.",
      "Do not start, stop, or share medication based on this educational summary.",
      "Follow-up may be needed to assess response and monitor adverse effects.",
      "A personalized plan should be made with a licensed healthcare professional."
    ],
    "prevention": [
      "Prevention is condition-specific; not every disease is preventable.",
      "Follow recommended vaccination and screening guidance where applicable.",
      "Hand hygiene and safer food/water practices help prevent some infections.",
      "Avoid tobacco and reduce relevant environmental exposures.",
      "Manage established risk factors with professional guidance."
    ],
    "complications": [
      "Complications depend on disease type, severity, and timeliness of care.",
      "Possible complications may involve the affected organ or broader body systems.",
      "Coexisting conditions can increase complication risk.",
      "Early diagnosis and appropriate treatment may reduce some risks.",
      "Long-term monitoring may be needed for chronic conditions.",
      "Not everyone develops complications."
    ],
    "emergencySigns": [
      "Severe difficulty breathing, collapse, or blue/grey lips: call local emergency services.",
      "New chest pressure, fainting, or sudden severe weakness: seek emergency care.",
      "Sudden facial droop, arm weakness, speech difficulty, or confusion: emergency assessment now.",
      "Severe bleeding, rapidly worsening consciousness, or seizure lasting 5 minutes: emergency care.",
      "If pregnant, severe headache, visual changes, heavy bleeding, or severe abdominal pain warrants urgent assessment."
    ],
    "faqs": [
      {
        "question": "Can symptoms alone diagnose this condition?",
        answer: "No. Symptoms overlap across many conditions; diagnosis may require examination and testing."
      },
      {
        question: "Is treatment the same for everyone?",
        answer: "No. Management is individualized by a qualified clinician."
      },
      {
        question: "When should I seek medical help?",
        answer: "Arrange care for persistent or worsening symptoms; seek emergency care for severe or sudden warning signs."
      }
    ]
  }
];