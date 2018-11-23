const infoKeyToInfoDetails = {
  "acesulfame K": {
    category: "Vegan",
    definition: "A low-calorie sweetener."
  },
  "acetic acid": {
    category: "Vegan",
    definition:
      "Common preservative and flavoring agent which is the principal ingredient of vinegar."
  },
  "acid casein": {
    category: "Vegetarian",
    definition: "Principal protein in milk which has been treated with an acid."
  },
  acidulant: {
    category: "Typically Vegetarian",
    definition:
      "Acids used in processed foods as flavor enhancers or acidity regulators."
  },
  "acrylic acid": {
    category: "Vegan",
    definition: "A petroleum-derived chemical used mainly to make plastics."
  },
  "activated carbon": {
    category: "May be Non-Vegetarian",
    definition:
      "Carbon which can decolorize sugar and absorb impurities from the air and water."
  },
  "adipic acid": {
    category: "May be Non-Vegetarian",
    definition: "An additive used in foods to impart a tart taste."
  },
  agar: {
    category: "Vegan",
    definition:
      "A vegetable gum obtained from seaweeds and used to thicken foods."
  },
  alanine: {
    category: "Typically Vegetarian",
    definition:
      "An amino acid needed by humans which can be produced by the body."
  },
  albumen: {
    category: "Vegetarian",
    definition:
      "The spelling for the form of albumin (a protein) which is present in commercial egg white."
  },
  albumin: {
    category: "Typically Vegetarian",
    definition:
      "General term for a group of proteins which acts as binders in foods."
  },
  algin: {
    category: "Vegan",
    definition:
      "The name for a class of vegetable gums obtained from seaweed and used to provide thickening in foods. Sodium alginate is the most common."
  },
  "alginic acid": {
    category: "Vegan",
    definition:
      "A derivative of seaweed used in many foods for its jelling and thickening properties."
  },
  alum: {
    category: "Vegan",
    definition: "A general term for ingredients which contain aluminum."
  },
  "amino acid": {
    category: "Typically Vegetarian",
    definition: "The building blocks of proteins."
  },
  amylase: {
    category: "Typically Vegan",
    definition: "An enzyme which breaks down starch into a simpler form."
  },
  annatto: {
    category: "Vegan",
    definition:
      "A natural yellow-orange food coloring derived from a tree seed."
  },
  "anticaking agent": {
    category: "Vegan",
    definition:
      "As a general class of ingredients, there are many anti-caking agents mostly of mineral or synthetic (i.e., petrochemical) origin. They keep food ingredients free-flowing."
  },
  antioxidant: {
    category: "Typically Vegetarian",
    definition:
      "A class of additives which prevents fats and oils from going bad. A second class of antioxidants prevents cut fruit and vegetables from turning brown."
  },
  arabic: {
    category: "Vegan",
    definition: "A vegetable gum with many functions such as thickening foods."
  },
  arginine: {
    category: "Typically Vegetarian",
    definition:
      "An amino acid needed by humans which can be produced by the body."
  },
  "artificial coloring": {
    category: "Typically Vegan",
    definition:
      "An additive, not duplicated in nature, which gives color to foods."
  },
  "artificial flavor": {
    category: "Typically Vegetarian",
    definition:
      "The most common type of food additive which is used to replace or supplement real, more expensive flavors.  They contain all or some substances which are not found naturally in the food or beverage to which it is added."
  },
  aspartame: {
    category: "Vegan",
    definition: "An artificial sweetener."
  },
  "aspartic acid": {
    category: "Typically Vegetarian",
    definition:
      "An amino acid needed by humans which can be produced by the body."
  },
  "autolyzed yeast extract": {
    category: "Vegan",
    definition:
      "An extract from yeast which provides a “meaty” flavor to foods."
  },
  "baking powder": {
    category: "Vegan",
    definition: "A powder used as a yeast substitute in baking."
  },
  beeswax: {
    category: "Vegetarian",
    definition:
      "A bee secretion used to form the beehive and used as a sweetener."
  },
  bentonite: {
    category: "Vegan",
    definition: "A type of clay used as a filter to make liquids clear."
  },
  "benzoyl peroxide": {
    category: "Vegan",
    definition:
      "A food additive with several non-food uses as well (in fiberglass, cosmetics)."
  },
  "beta-carotene": {
    category: "Typically Vegetarian",
    definition:
      "A common food colorant which prevents oxygen from changing a food's color or flavor."
  },
  bioflavinoids: {
    category: "Vegan",
    definition:
      "Natural substances which help maintain cardiovascular health and are commonly found in citrus fruits."
  },
  biotin: {
    category: "Typically Vegetarian",
    definition: "B vitamin which is necessary for human health."
  },
  "Brewer's yeast": {
    category: "Vegan",
    definition:
      "A yeast product which is rich in vitamins, especially B vitamins."
  },
  bromelain: {
    category: "Vegan",
    definition: "An enzyme extracted from pineapple."
  },
  "butylated hydroxyanisole": {
    category: "Vegan",
    definition:
      "A common food additive which prevents foods from changing their color or flavor."
  },
  "butylated hydroxytoluene": {
    category: "Vegan",
    definition:
      "A common food additive which keeps food from changing their color or flavor."
  },
  "butyric acid": {
    category: "Vegan",
    definition:
      "A preservative which is commonly used as a starting material in the manufacture of other food ingredients."
  },
  "calcium carbonate": {
    category: "Vegan",
    definition:
      "A substance which is used to make acidic foods less acidic. May be used as a source of calcium or a mild abrasive."
  },
  "calcium caseinate": {
    category: "Vegetarian",
    definition:
      "An additive which is used as a source of protein and as a replacement for sodium caseinate in low-sodium foods."
  },
  "calcium chloride": {
    category: "Vegan",
    definition:
      "Besides several major industrial uses (deicing roads, oil/gas well\ndrilling) calcium chloride is most often used in foods to keep them\nfirm or in beverages to establish mineral balance."
  },
  "calcium phosphates": {
    category: "Vegan",
    definition:
      "The calcium phosphates include several forms with various functions in foods and beverages especially keeping dry goods free-flowing and making breads and other baked goods rise."
  },
  "calcium propionate": {
    category: "Vegan",
    definition:
      "A preservative which is effective against mold, slightly effective against bacteria, but not effective against yeast."
  },
  "calcium stearate": {
    category: "Typically Vegan",
    definition:
      "Calcium stearate formed from a reaction between a calcium-containing compound and either a stearate-containing compound or stearic acid is often used as an anti-caking agent in food or as a release agent or lubricant in pharmaceuticals and confections. Many non-food industries such as personal care, construction and paper also use calcium stearate."
  },
  "calcium sulfate": {
    category: "Vegan",
    definition:
      "A common food additive with many purposes such as acting as a firming or jelling agent."
  },
  "candelilla wax": {
    category: "Vegan",
    definition:
      "A wax derived from certain plants and used as a produce coating."
  },
  "cane sugar": {
    category: "May be Non-Vegetarian",
    definition:
      "A natural sugar stored in the cane stalk and used as a sweetening agent, flavor enhancer, or preservative."
  },
  "capric acid": {
    category: "May be Non-Vegetarian",
    definition: "A component of some fats used to make synthetic flavorings."
  },
  "caproic acid": {
    category: "Typically Vegetarian",
    definition:
      "A component of some fats which is used to make synthetic flavorings."
  },
  "caprylic acid": {
    category: "Typically Vegetarian",
    definition:
      "A component of some fats used as a food additive, especially as a preservative."
  },
  "caramel color": {
    category: "Vegan",
    definition:
      "A common food coloring and flavoring which is usually derived from corn."
  },
  carbohydrate: {
    category: "Vegetarian",
    definition: "An important class of nutrients and a basic source of energy."
  },
  carmine: {
    category: "Non-Vegetarian",
    definition:
      "A food coloring derived from the dried bodies of female beetles."
  },
  "carnauba wax": {
    category: "Vegan",
    definition:
      "A common produce coating which is derived from a South American plant."
  },
  carotenoid: {
    category: "Typically Vegetarian",
    definition:
      "A general term for a large class of compounds used as food coloring."
  },
  carrageenan: {
    category: "Vegan",
    definition: "A seaweed product which is a common jelling agent."
  },
  casein: {
    category: "Vegetarian",
    definition: "The principal protein in milk."
  },
  "cellulose gum": {
    category: "Vegan",
    definition:
      "A chemically modified form of cellulose (the principal component of plant cells) used to prevent ice crystallization in foods."
  },
  charcoal: {
    category: "Vegan",
    definition:
      "A porous material made from coal or wood which is used to relieve diarrhea and intestinal discomfort as well as to counteract poisons."
  },
  "citric acid": {
    category: "Vegan",
    definition:
      "A common food additive used as a flavoring or preservative, among many other uses."
  },
  "clarifying agent": {
    category: "May be Non-Vegetarian",
    definition:
      "A substance used to filter small particles out of liquids in order to make the liquids clear."
  },
  cochineal: {
    category: "Non-Vegetarian",
    definition: "A coloring derived from the dried bodies of female beetles."
  },
  "cocoa butter": {
    category: "Vegan",
    definition:
      "The fat obtained from cocoa beans and used most often as a candy coating."
  },
  coenzyme: {
    category: "Typically Vegetarian",
    definition:
      "A small molecule which activates an enzyme when combined with it."
  },
  color: {
    category: "Typically Vegetarian",
    definition: "A food additive used principally to make food look pleasing."
  },
  "corn gluten": {
    category: "Vegan",
    definition:
      "A protein derived from corn and sometimes used by people who are allergic to other grains."
  },
  "cream of tartar": {
    category: "Vegan",
    definition:
      "A thickening or leavening agent usually extracted from wine sediments."
  },
  "cultured dextrose": {
    category: "Typically Vegan",
    definition:
      "Created by bacterial cultures originally derived from dairy, cultured dextrose is a combination of substances such as propionic, acetic and lactic acids produced through dextrose fermentation which if done correctly should not contain any dextrose (i.e., glucose)."
  },
  "curing agent": {
    category: "Typically Vegetarian",
    definition: "A food additive which preserves meats."
  },
  "Defoaming agent": {
    category: "Typically Vegan",
    definition:
      "Used widely in many food industries, defoamers control undesirable foam production."
  },
  DevanSweet: {
    category: "Vegan",
    definition: "A granulated brown rice sweetener."
  },
  dextrose: {
    category: "Vegan",
    definition:
      "A simple sugar, dextrose is approximately 70-80% as sweet as sucrose (table sugar)"
  },
  "diatomaceous earth": {
    category: "Vegan",
    definition:
      "A substance composed of algae which is used as a filter in the production of certain waxes, including carnauba, candelilla, and beeswax."
  },
  diglyceride: {
    category: "Typically Vegan",
    definition:
      "A common food additive which is used in conjunction with monoglycerides, the latter of which are used to blend together ingredients (such as oil and water) which normally do not blend together."
  },
  "disodium inosinate": {
    category: "Typically Vegan",
    definition: "A common flavor enhancer."
  },
  distillation: {
    category: "Vegan",
    definition: "A procedure used to separate the components of a mixture."
  },
  "distilled vinegar": {
    category: "Vegan",
    definition:
      "A common flavoring and preservative made by the fermentation of distilled alcohol."
  },
  "dough conditioner": {
    category: "Typically Vegetarian",
    definition:
      "An additive used to make dough easier to handle and more palatable."
  },
  "drying agent": {
    category: "Typically Vegetarian",
    definition:
      "A food additive which absorbs moisture from other food ingredients."
  },
  EDTA: {
    category: "Vegan",
    definition:
      "A chemical primarily used in non-food applications. In processed food and beverages it removes (i.e., sequesters) through binding (i.e., chelating) trace metal ions preventing rancidity, discoloration, or crystal development."
  },
  emulsifier: {
    category: "Typically Vegetarian",
    definition:
      "A large class of food additives which helps unlike ingredients (e.g., water and oil), mix and stay mixed."
  },
  enzyme: {
    category: "Typically Vegetarian",
    definition: "A protein added to foods as a modifier."
  },
  "essential oil": {
    category: "Vegan",
    definition:
      "An additive derived from plants and used primarily as a flavoring."
  },
  "ethyl alcohol": {
    category: "Vegan",
    definition:
      "A basic ingredient in many foods which dissolves other ingredients or makes beverages alcoholic."
  },
  fat: {
    category: "May be Non-Vegetarian",
    definition:
      "One of the three classes of nutrients necessary for human health."
  },
  "fatty acid": {
    category: "May be Non-Vegetarian",
    definition: "A major component of fats."
  },
  fermentation: {
    category: "unspecified",
    definition:
      "A chemical breakdown of carbohydrates through the action of bacteria, molds, and yeasts."
  },
  "fermentation aid": {
    category: "Typically Vegetarian",
    definition: "An additive which promotes fermentation."
  },
  "firming agent": {
    category: "Typically Vegan",
    definition:
      "A firming agent is a type of additive which produces desirable crispness or texture in foods, such as cut fruits and vegetables."
  },
  "flavor enhancer": {
    category: "Typically Vegetarian",
    definition:
      "An additive which makes foods more flavorful, but which has little or no flavor of its own."
  },
  "foaming agent": {
    category: "Typically Vegetarian",
    definition:
      "An additive used to make foods foam or to maintain foamy peaks."
  },
  "folic acid": {
    category: "May be Non-Vegetarian",
    definition:
      "A member of the B-vitamin complex which aids in the formation of red blood cells and is essential in normal metabolism."
  },
  fructose: {
    category: "Typically Vegetarian",
    definition:
      "A sweetener usually derived from corn, sugar beets, or sugar cane."
  },
  "fumaric acid": {
    category: "Vegan",
    definition:
      "An additive which could have several functions in foods or beverages, such as being an artificial flavoring."
  },
  gelatin: {
    category: "Non-Vegetarian",
    definition:
      "An animal protein used especially for its thickening and gelling properties."
  },
  "gellan gum": {
    category: "Vegan",
    definition:
      "A naturally occurring polysaccharide (carbohydrate) used mainly as a stabilizer & suspension agent in beverages, gellan gum is a common gelatin alternative."
  },
  "glutamic acid": {
    category: "Typically Vegetarian",
    definition: "An amino acid used primarily as a flavor enhancer."
  },
  glyceride: {
    category: "Typically Vegan",
    definition:
      "A common food additive used principally to blend together, and keep together, ingredients which normally do not mix well, such as oil and water."
  },
  glycerol: {
    category: "Typically Vegan",
    definition:
      "Glycerol is most often used as a component to make glycerides. It helps to extend shelf-life by retaining moisture."
  },
  glycine: {
    category: "Typically Vegetarian",
    definition:
      "An amino acid which is needed by humans and produced by the body."
  },
  "guar gum": {
    category: "Vegan",
    definition:
      "A common and versatile vegetable gum often used to thicken products."
  },
  "high fructose corn syrup": {
    category: "Vegan",
    definition:
      "A mixture of simple sugars glucose and fructose, HFCS is produced by microbial enzymes that convert some glucose to fructose. The major types of HFCS contain roughly equal amounts of glucose and fructose."
  },
  honey: {
    category: "Vegetarian",
    definition: "A sweet, syrupy liquid produced by bees."
  },
  humectant: {
    category: "Typically Vegetarian",
    definition:
      "An additive which prevents food from losing water and becoming brittle."
  },
  hydrogenation: {
    category: "Vegan",
    definition:
      "A common chemical reaction used in the manufacture of many food items containing fats or oils, such as margarine and shortening. This reaction is used to make these food items solids at room temperature."
  },
  "hydrogen peroxide": {
    category: "Vegan",
    definition:
      "A common substance used as a disinfectant and to make foods white."
  },
  "hydroxypropyl methylcellulose": {
    category: "Vegan",
    definition:
      "Derived from wood or cotton and mineral-based chemicals such as calcium bicarbonate along with petrochemicals, there are different types of HPMC depending on the nature & quantity of the petrochemical parts used. HPMCs are becoming popular in foods as alternatives to gelatin or gluten because they are functionally similar to them. They are not digestible and so have no calories. HPMCs are also widely used in pharmaceuticals & supplements. They have many industrial applications including construction, paper & textiles."
  },
  "invert sugar": {
    category: "May be Non-Vegetarian",
    definition:
      "A sweetener with water-retaining properties derived from sugar cane or sugar beets."
  },
  "invert sugar syrup": {
    category: "May be Non-Vegetarian",
    definition:
      "A mixture of mostly simple sugars which is sweeter than ordinary table sugar."
  },
  isinglass: {
    category: "Non-Vegetarian",
    definition:
      "A protein derived from the bladder of a fish and used to make some wines (especially white wine and chardonnay) clear."
  },
  keratin: {
    category: "Non-Vegetarian",
    definition:
      "An extremely tough material made of protein which composes the hair, nails, and horny tissue of many animals. Keratin is the primary commercial source of the amino acid, tyrosine. (See tyrosine)."
  },
  "L-cysteine/L-cystine": {
    category: "unspecified",
    definition:
      "An amino acid needed by humans which can be produced by the human body. It must be consumed in the diet."
  },
  "lac-resin": {
    category: "Vegetarian",
    definition:
      "An insect secretion used as a produce coating in combination with a wax. This substance is collected from the trees where the beetles deposited the shellac."
  },
  lactase: {
    category: "Typically Vegetarian",
    definition: "An enzyme which digests the milk sugar, lactose."
  },
  "lactic acid": {
    category: "Typically Vegan",
    definition:
      "A common additive which has several functions such as flavoring agent or preservative."
  },
  lard: {
    category: "Non-Vegetarian",
    definition:
      "Always of animal origin, lard is the purified, internal fat from the stomach of the hog."
  },
  "leavening agent": {
    category: "Typically Vegan",
    definition:
      "A food additive which releases gas into foods, lightening the texture. In beer and wine, the leavener (yeast) is responsible for the chemical reaction which produces the alcohol."
  },
  lecithin: {
    category: "Vegan",
    definition:
      "A group of compounds of varying chemical composition depending on the source, lecithin mixes well with a wide variety of other food ingredients thereby serving multiple functions in foods and making it one of the most widely used food ingredients. Dietary lecithin is a primary source of the essential nutrient choline, important for cell membrane integrity and nerve signaling. Lecithin is also important in many industries including paint and plastics."
  },
  lime: {
    category: "Vegan",
    definition:
      "A calcium-containing compound which is the major commercial source of calcium in food additives."
  },
  lipase: {
    category: "Typically Non-Vegetarian",
    definition: "The general term for enzymes which break down fats."
  },
  "locust bean gum": {
    category: "Vegan",
    definition: "A vegetable gum derived from the seeds of the carob tree"
  },
  Lutein: {
    category: "Typically Vegan",
    definition:
      "A xanthophyll (oxycarotenoid) believed important for eye health, lutein cannot be synthesized by the human body but must be consumed in foods. Unlike another carotenoid beta-carotene, lutein does not exhibit pro-vitamin A activity."
  },
  "magnesium stearate": {
    category: "Typically Vegan",
    definition:
      "Magnesium stearate formed by the reaction of a magnesium-containing compound and either a stearate-containing compound or stearic acid is most often used as a release agent or lubricant in pharmaceuticals and supplements. There are many non-food uses of magnesium stearate including personal care products, plastics and rubber."
  },
  "maleic acid": {
    category: "Vegan",
    definition:
      "A preservative which is similar in form to malic acid. (See malic acid)."
  },
  "malic acid": {
    category: "Vegan",
    definition: "An additive used as a flavor or acidifier in foods and drinks."
  },
  malt: {
    category: "Vegan",
    definition:
      "A substance derived from barley and used widely in the brewing industry."
  },
  "malt extract": {
    category: "Vegan",
    definition:
      "A substance obtained from malt and used as a flavor and sweetener."
  },
  maltodextrins: {
    category: "Vegan",
    definition:
      "Maltodextrins consist of variably long linkages of glucose molecules and are less than 20% as sweet as sucrose (table sugar)."
  },
  maltol: {
    category: "Vegan",
    definition:
      "A sugar alcohol which has no flavor of its own but which enhances the flavor of other ingredients."
  },
  maltose: {
    category: "Vegan",
    definition: "A sugar used in diabetic foods and in brewing."
  },
  mannitol: {
    category: "Vegan",
    definition:
      "Derived from seaweed, corn, or sugar, mannitol is a sweet alcohol."
  },
  "maple sugar": {
    category: "Typically Vegan",
    definition: "The dry form of maple syrup."
  },
  "maple syrup": {
    category: "Typically Vegan",
    definition: "A tree-derived sweetener in liquid form."
  },
  "methyl paraben": {
    category: "Vegan",
    definition: "A common food preservative."
  },
  "mineral oil": {
    category: "Vegan",
    definition:
      "A very refined and purified petroleum product commonly used as a produce coating."
  },
  "modified starch": {
    category: "May be Non-Vegetarian",
    definition:
      "Starch (typically from corn) which has been chemically and physically altered. Animal-derived oleic acid is often used in the manufacture of adipic acid, the latter of which is a common chemical used to modify the starch."
  },
  molasses: {
    category: "Vegan",
    definition:
      "A thick brown syrup which is a by-product of the sugar cane and sugar beet industries. Molasses intended for human consumption has not been filtered through bone char."
  },
  monoglyceride: {
    category: "Typically Vegan",
    definition:
      "A common food additive used to blend together ingredients, such as oil and water, which normally do not blend together."
  },
  "monosodium glutamate": {
    category: "Vegan",
    definition: "A common flavor enhancer."
  },
  "myristic acid": {
    category: "Typically Non-Vegetarian",
    definition:
      "A component of fats used in the food and personal care products industries."
  },
  "natural coloring": {
    category: "Typically Vegan",
    definition:
      "An additive usually extracted from plant sources which imparts color to foods and beverages which naturally have those colors."
  },
  "natural flavor": {
    category: "May be Non-Vegetarian",
    definition:
      "An additive derived from plant or animal sources which imparts flavor."
  },
  niacin: {
    category: "Typically Vegan",
    definition:
      "A B vitamin which is important in the normal functioning of the nervous system."
  },
  "nonnutritive sweetener": {
    category: "Vegan",
    definition: "An artificial sweetener possessing practically no calories."
  },
  "nutritional yeast": {
    category: "Vegan",
    definition:
      "Inactivated yeast used as a source of protein and vitamins, especially B vitamins."
  },
  "nutritive sweetener": {
    category: "Typically Vegan",
    definition: "Sweeteners which yield more than two calories per gram."
  },
  "oleic acid": {
    category: "Typically Non-Vegetarian",
    definition:
      "A component of some fats which may be used as a flavoring or binder in foods."
  },
  oleoresin: {
    category: "Vegan",
    definition:
      "A concentrated spice or herb extract used as a flavor and/or color enhancer."
  },
  Olestra: {
    category: "May be Non-Vegetarian",
    definition: "A no-calorie fat substitute."
  },
  "oxidizing agent": {
    category: "unspecified",
    definition:
      "An additive which destroys or deactivates undesirable components or contaminants in foods."
  },
  "palmitic acid": {
    category: "Typically Non-Vegetarian",
    definition:
      "A component of fat which is used to make unlike ingredients, such as oil and water, blend together in foods."
  },
  pancreatin: {
    category: "Non-Vegetarian",
    definition: "A mixture of enzymes used as a digestive aid."
  },
  "pantothenic acid": {
    category: "Typically Vegan",
    definition:
      "A B vitamin which is important in the utilization of carbohydrate and fat."
  },
  papain: {
    category: "Vegan",
    definition:
      "an enzyme derived from papaya which breaks down proteins into amino acids"
  },
  paprika: {
    category: "Vegan",
    definition: "A red food coloring derived from the pods of dried pepper."
  },
  paraffin: {
    category: "Vegan",
    definition:
      "A petroleum derivative which is commonly used as a vegetable coating."
  },
  pepsin: {
    category: "Non-Vegetarian",
    definition: " enzyme used to break down proteins."
  },
  phenylalanine: {
    category: "Typically Vegan",
    definition:
      "A component of some proteins which may be in dietary supplements."
  },
  polyacrylomite: {
    category: "Vegan",
    definition:
      "A petroleum-derived substance used in the processing of sugar cane."
  },
  polydextrose: {
    category: "Vegan",
    definition: "A reduced-calorie substance used as a sugar or fat substitute."
  },
  polyethylene: {
    category: "Vegan",
    definition:
      "A synthetic compound which is frequently used as a citrus fruit coating."
  },
  polysorbate: {
    category: "May be Non-Vegetarian",
    definition:
      "A common class of food additive most frequently used to blend together ingredients, such as oil and water, which normally do not blend well."
  },
  "polysorbate 60": {
    category: "May be Non-Vegetarian",
    definition:
      "A common food additive used to blend together ingredients, such as oil and water, which normally do not blend well."
  },
  "polysorbate 80": {
    category: "May be Non-Vegetarian",
    definition:
      "A common additive used to blend ingredients, such as oil and water, which normally do not blend well."
  },
  "potassium sorbate": {
    category: "Vegan",
    definition: "A common yeast and mold inhibitor in many foods."
  },
  "pregelatinized starch": {
    category: "Vegan",
    definition:
      "Prepared from starch or flour, pregelatinized starch \neasily dissolves in cold liquids eliminating a heating step in \nmanufacturing and becoming viscous like gelatin. It is widely used in \nfoods and pharmaceuticals and also in several other industries including \nmining/drilling, construction and textiles."
  },
  preservative: {
    category: "Typically Vegan",
    definition: "The general name for additives used to reduce food spoilage."
  },
  "processing aid": {
    category: "May be Non-Vegetarian",
    definition:
      "Anything added to food ingredients or foods during processing, and completely (or mostly) removed before being sold. A processing aid is commonly used to aid filtration or remove unwanted color/flavor."
  },
  "propionic acid": {
    category: "Vegan",
    definition:
      "A very common food preservative which is typically found in bread products and cheese."
  },
  "propylene glycol": {
    category: "Vegan",
    definition:
      "A common food additive which is often used in the manufacture of many ingredients."
  },
  protease: {
    category: "Typically Vegetarian",
    definition: "A general name for all enzymes which break down proteins."
  },
  protein: {
    category: "May be Non-Vegetarian",
    definition: "A major class of nutrients composed of amino acids."
  },
  pyridoxine: {
    category: "Typically Vegan",
    definition:
      "A B vitamin which is necessary for the normal utilization of foods."
  },
  "reducing agent": {
    category: "Typically Vegan",
    definition:
      "A substance used to maintain the taste and color of foods which contain minerals."
  },
  "refined beet sugar": {
    category: "Vegan",
    definition: "A source of regined sugar."
  },
  rennet: {
    category: "May be Non-Vegetarian",
    definition:
      "Enzyme used for the coagulation of milk in the cheese making process. Historically, often was a mixture containing an enzyme (rennin) derived principally from the stomachs of young calves and used to make cheese."
  },
  rennin: {
    category: "May be Non-Vegetarian",
    definition:
      "An enzyme derived principally from the stomachs of young calves and used to make rennet and cheese. See rennet."
  },
  resin: {
    category: "Vegan",
    definition:
      "A class of substances which is commonly used as a protective, wax-like coating for fruits and vegetables, and as a chewing gum base."
  },
  riboflavin: {
    category: "Typically Vegan",
    definition:
      "A B vitamin which may be used as a food coloring or as a nutrient fortifier of foods."
  },
  "rice syrup": {
    category: "Vegan",
    definition: "A sweetener derived from brown rice."
  },
  rosin: {
    category: "Vegan",
    definition: "A tree substance which is used to soften chewing gum."
  },
  "royal jelly": {
    category: "Vegetarian",
    definition:
      "A substance produced by the glands of bees and used as a source of B vitamins, minerals, and amino acids."
  },
  saccharin: {
    category: "Vegan",
    definition:
      "An artificial sweetener which yields less than two calories per gram."
  },
  "sequestering agent": {
    category: "Typically Vegan",
    definition:
      "The name for a general class of preservative which improves food quality and prevents food from changing in an undesirable way over time (e.g., changing color or developing a bad flavor)."
  },
  "silicon dioxide": {
    category: "Vegan",
    definition:
      "Composed of only silicon and oxygen, silicon dioxide is one of the most common anti-caking agents. It is also widely used in the construction and hydraulic fracturing (fracking) industries."
  },
  Simplesse: {
    category: "Vegetarian",
    definition: "A fat substitute."
  },
  "sodium benzoate": {
    category: "Vegan",
    definition: "A very common preservative used mostly in acidic foods."
  },
  "sodium bicarbonate": {
    category: "Vegan",
    definition:
      "An additive used primarily to make baked goods rise or to adjust the acidity level in foods."
  },
  "sodium carbonate": {
    category: "Vegan",
    definition:
      "A food additive with many functions, especially as an acid regulator or flavoring agent."
  },
  "sodium caseinate": {
    category: "Vegetarian",
    definition:
      "A common food additive with many food uses including whitening, whipping, and binding."
  },
  "sodium hydroxide": {
    category: "Vegan",
    definition:
      "A common industrial chemical with a wide range of food uses, such as making foods less acidic."
  },
  "sodium nitrate": {
    category: "Vegan",
    definition: "A preservative used to cure meats."
  },
  "sodium stearoyl lactylate": {
    category: "Typically Vegan",
    definition:
      "A common food additive often used to condition dough or to blend together ingredients which do not normally blend, such as oil and water."
  },
  "sorbic acid": {
    category: "Vegan",
    definition:
      "A mold and yeast inhibitor which is used especially in cheeses and beverages."
  },
  sorbitan: {
    category: "Vegan",
    definition:
      "A substance derived most often from corn and used in the manufacture of many common food additives, such as polysorbate 80. (See polysorbate 80)."
  },
  sorbitol: {
    category: "Typically Vegan",
    definition: "A type of alcohol most often used as a sugar substitute."
  },
  stabilizer: {
    category: "Typically Vegan",
    definition:
      "The general name for a large class of additives which thickens foods or maintains a desired texture or consistency in foods."
  },
  "stearic acid": {
    category: "May be Non-Vegetarian",
    definition: "A common additive most often used as a binder in foods."
  },
  Sucanat: {
    category: "Vegan",
    definition:
      "Concentrated sugar cane juice available in granular, juice, and syrup forms."
  },
  "succinic acid": {
    category: "Vegan",
    definition:
      "An additive used to control the acid level in foods and beverages."
  },
  Sucralose: {
    category: "unspecified"
  },
  sucrose: {
    category: "May be Non-Vegetarian",
    definition: "The major component of refined sugar."
  },
  "surface-active agents": {
    category: "Typically Vegan",
    definition:
      "The general name for many classes of food additives. These additives have various functions such as making substances dissolve in other substances or making foods foam."
  },
  "surface-finishing agents": {
    category: "Typically Vegetarian",
    definition:
      "A general name for substances which keeps foods looking shiny and helps maintain their color."
  },
  tallow: {
    category: "Non-Vegetarian",
    definition:
      "An animal fat used to make baked goods light and fluffy or to reduce foam in yeast, beet sugar, or maple syrup production."
  },
  "tartaric acid": {
    category: "Vegan",
    definition:
      "A substance which adjusts acidity in many foods and beverages, or acts as a flavoring."
  },
  "texturized vegetable protein": {
    category: "Vegan",
    definition:
      "A processed soybean product in which the fat has been removed. It is commonly used as a meat analog."
  },
  texturizer: {
    category: "Typically Vegan",
    definition:
      "Food additives which contribute to or preserve the desirable appearance or texture of foods."
  },
  thiamin: {
    category: "Typically Vegan",
    definition:
      "A B vitamin which is required for normal functioning of the nervous system and for the utilization of carbohydrates."
  },
  trypsin: {
    category: "Non-Vegetarian",
    definition: "A common digestive enzyme."
  },
  "turbinado sugar": {
    category: "Vegan",
    definition:
      "Partially refined sugar which contains some molasses. It has not passed through a cow bone filter."
  },
  turmeric: {
    category: "Vegan",
    definition: "A yellow food coloring and flavoring derived from an herb."
  },
  tyrosine: {
    category: "unspecified",
    definition:
      "An amino acid needed by humans which can be produced by the body."
  },
  "unmodified starch": {
    category: "Vegan",
    definition: "Chemically untreated starch used as a thickener."
  },
  vanilla: {
    category: "Vegan",
    definition: "A common flavoring derived from the vanilla bean."
  },
  "vanilla extract": {
    category: "Vegan",
    definition: "A flavoring made from the vanilla bean."
  },
  vanillin: {
    category: "Vegan",
    definition:
      "A synthetic flavoring used as a substitute for vanilla extract."
  },
  vinegar: {
    category: "Vegan",
    definition:
      "An acid regulator and flavoring agent in which acetic acid is the active component. (See acetic acid)."
  },
  vitamin: {
    category: "Typically Vegan",
    definition:
      "Substances which are essential in small amounts for human health."
  },
  "vitamin A": {
    category: "May be Non-Vegetarian",
    definition:
      "A vitamin necessary for cell growth and the prevention of night blindness."
  },
  "vitamin B-12": {
    category: "Vegan",
    definition:
      "A B vitamin which is essential for the formation of red blood cells and the maintenance of a healthy nervous system."
  },
  "vitamin C": {
    category: "Vegan",
    definition:
      "A vitamin necessary for the maintenance of body tissues and normal bones."
  },
  "vitamin D2": {
    category: "Vegan",
    definition:
      "Ergocalciferol is a secosteroid which is similar to a steroid hormone although it is commonly referred to as a vitamin. Ergocalciferol is an inactive precursor to the active form of vitamin D2 believed to be used by the body in many ways including regulation of calcium absorption for bone health."
  },
  "vitamin D3": {
    category: "Vegetarian",
    definition:
      "Cholecalciferol is a secosteroid which is similar to a steroid hormone although it is commonly referred to as a vitamin.Cholecalciferol is an inactive precursor to the active form of vitamin D3 believed to be used by the body in many ways including regulation of calcium absorption for bone health. When 7-dehydrocholesterol in the skin is exposed to adequate sunlight, cholecalciferol is produced giving vitamin D its nickname: the sunshine vitamin."
  },
  "vitamin E": {
    category: "Vegan",
    definition: "A vitamin which is essential for normal muscle growth."
  },
  wax: {
    category: "Typically Vegetarian",
    definition:
      "The name for substances which are similar to fats and repulse water. They are most often used as fruit and vegetable protective coatings."
  },
  "wheat gluten": {
    category: "Vegan",
    definition: "A mixture of proteins from wheat flour."
  },
  whey: {
    category: "Typically Vegetarian",
    definition:
      "The watery material which remains after most of the protein and fat have been removed from milk during the cheese-making process. Whey does contain much of the enzyme used to make the cheese. The most common source of enzyme is microbial although it may be animal in some cases."
  },
  wine: {
    category: "May be Non-Vegetarian",
    definition:
      "An alcoholic beverage made from plants or fruit, especially grapes. Wine may be made clear through treatment with a small amount of animal protein such as gelatin, albumen, or casein. (See gelatin, albumen, and casein). It may also be made clear through a mineral filter known as bentonite. (See bentonite)."
  },
  "xanthan gum": {
    category: "Vegan",
    definition:
      "A widely used and versatile vegetable gum which is sometimes used as a thickener."
  },
  "yeast food": {
    category: "Typically Vegan",
    definition:
      "A general term for all the substances added to nourish yeast and speed up the process by which they produce alcoholic beverages or baked goods."
  },
  Zeaxanthin: {
    category: "Typically Vegan",
    definition:
      "An oxycarotenoid (xanthophyll) believed important for eye health, zeaxanthin is typically found along with lutein in food sources as it is in the eye. Unlike another carotenoid beta-carotene, zeaxanthin does not exhibit pro-vitamin A activity."
  },
  zein: {
    category: "Vegan",
    definition: "A corn protein which functions as a coating or glaze."
  }
};

module.exports = infoKeyToInfoDetails;
