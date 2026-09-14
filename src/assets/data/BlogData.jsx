import imageLashExtensions from "/src/assets/images/blog_LashExtensions.png";
import imageLashLift from "/src/assets/images/blog_LashLift.png";
import imageLashService from "/src/assets/images/blog_ExtensionsService.png";
import imageExtensionTypes from "/src/assets/images/blog_ExtensionTypes.png";
import imageExtensionsRemoval from "/src/assets/images/blog_ExtensionsRemoval.png";
import imageAftercare from "/src/assets/images/blog_LashServiceAftercare.png";
import imageLashTypes from "/src/assets/images/blog_LashTypes.png";
import imageInfills from "/src/assets/images/blog_Infills.png";
import imageRelax from "/src/assets/images/blog_relax.png";
import imageGlasses from "/src/assets/images/blog_glasses.png";

export const BlogData = {
  extensions: {
    title: "What are eyelash extensions?",
    shortContent:
      "A single synthetic lash is attached to each of your lashes...",
    longContent: (
      <>
        <p>
          Eyelash extensions enhance your natural lashes for effortless lashes
          with no mascara needed. Each fine extension is applied to your own
          lashes for a fuller, longer appearance that still feels light and
          natural. The extension for each lash can be one false lash or a little
          fan of three lashes which are finer and give a fluffier look. Each
          lightweight extension is secured to the base of one single natural
          eyelash with a special adhesive.
        </p>
        <br></br>
      </>
    ),
    image: imageExtensionTypes,
    alttext: "Tweezers holding a fine synthetic eyelash.",
    slug: "extensions",
  },
  lashLift: {
    title: "What is a lash lift?",
    shortContent: "Your lashes are gently wrapped onto a rod and set...",
    longContent: (
      <>
        <p>
          An Elleplex Profusion Lash Lift gently lifts and curls your natural
          lashes from the root by wrapping and setting them around a special rod
          or shield. The results last for up to 6 weeks and give your lashes a
          longer and fuller curled appearance. The treatment is paired with a
          lash tint to enhance colour and definition, leaving your eyes looking
          brighter and more awake.
        </p>
        <br></br>
        <p>
          Elleplex Profusion products are gentle and specially formulated to
          nourish, strengthen, and protect your lashes during the lift, ensuring
          they remain healthy while achieving stunning results. More gentle than
          traditional lift system, the grow out phase is soft and natural.
        </p>
      </>
    ),
    image: imageLashLift,
    alttext: "Lashes on one eye wrapped around a rod to give them a curl.",
    slug: "lashLift",
  },
  aftercare: {
    title: "Eyelash Extension Aftercare",
    shortContent: "Wash your lashes at least once every day......",
    longContent: (
      <>
        <h3>The first couple of days</h3>
        <ul>
          <li>
            <span className="bold">
              Try not to get super hot in the sun for 24 hours
            </span>
          </li>
          <li>
            <span className="bold">Avoid steam & sauna for 48 hours</span>
            (steam will also reduce the life of the lashes in general)
          </li>
        </ul>
        <h3>Daily care</h3>
        <ul>
          <li>
            <span className="bold">
              Wash your lashes at least once every day
            </span>
            (use only a brush like the one I will give you to clean lashes, not
            cotton pads or make-up wipes)
          </li>
          <li>
            <span className="bold">Brush them through gently</span> with the
            little lash brush from mid length to ends (not from the very base as
            this can dislodge them)
          </li>
          <li>
            <span className="bold">Try not to sleep on your face!</span>
          </li>
          <li>
            <span className="bold">Use oil free products</span> (use oil free
            eye creams, eyeliner, make-up remover)
          </li>
        </ul>

        <h3>Infills (lash top-ups)</h3>
        <ul>
          <li>
            <span className="bold">
              Infills are best scheduled every 2-3 weeks
            </span>
            to maintain your lashes
          </li>
        </ul>
        <h3>Things to know</h3>
        <ul>
          <li>
            <span className="bold">
              Removal of eyelashes must be done by a professional lash artist
            </span>
            - or you can let them grow out. Please don’t try to take them off
            yourself as you may damage your natural lashes.
          </li>
          <li>
            <span className="bold">
              Please don’t play with or pick at the lashes
            </span>
            - this can cause trauma to your natural lashes
          </li>

          <li>
            <span className="bold">You don’t need to wear mascara</span>- it
            will weaken the bonds (especially waterproof & oil based mascara)
          </li>

          <li>
            <span className="bold">Don’t use eyelash curlers</span>
          </li>

          <li>
            <span className="bold">
              We can lose roughly 0-5 lashes per day so don’t be alarmed if you
              see fallen lashes.
            </span>
          </li>
        </ul>
      </>
    ),
    image: imageAftercare,
    alttext: "Elelash brushes and cotton pads on a table.",
    slug: "aftercare",
  },
  infills: {
    title: "What are infills?",
    shortContent: "Top up your lashes to keep them looking full...",
    longContent: (
      <>
        <h3>Can you infill my lashes from another lash tech?</h3>
        <p>
          I don’t infill lashes that I haven’t applied myself, sorry. You can
          wait until you need a fresh set after 3 weeks or so or I can remove
          your lashes and apply a lovely fresh set for you.
        </p>
        <h3>How do infills work?</h3>
        <p>
          After a couple of weeks you will have shed a few lashes and the set
          begin to look less full. This is a good time to check and top up your
          lashes.
        </p>
        <br></br>
        <ul>
          <li>
            I will prepare your lashes as usual ( wash lashes secure lower
            lashes and apply under eye pads )
          </li>
          <li>
            Check through all of the lashes to make sure everything looks ok
          </li>
          <li>Remove any outgrown or uneven lash extensions</li>
          <li>Prime the natural eyelashes</li>
          <li>Then start to fill in the lashes as usual</li>
        </ul>
      </>
    ),
    image: imageInfills,
    alttext:
      "A closed eye with ash extensions and a hand with tweezers filling the lashes.",
    slug: "infills",
  },

  type: {
    title: "Eyelash extension styles",
    shortContent: "Classic, hybrid & light volume eyelash extensions...",
    longContent: (
      <>
        <h3>Classic</h3>
        <p>
          The classic lash is cylindrical and tapered from root to end. It gives
          a lovely classic finish and the lashes are soft. Each classic lash is
          bonded to one natural lash.
        </p>

        <p>
          I generally use a 0.15 diameter lash for classic application which
          looks lovely and lightweight to wear. Above 0.15 can be heavy for the
          natural lash and look less natural.
        </p>

        <h3>Hybrid</h3>
        <p>
          A blend of classic lashes and light fans with three very fine lashes.
          A more feathery look between classic and light volume. Each is applied
          to one natural lash.
        </p>

        <h3>Light volume</h3>
        <p>
          Light fans with three very fine lashes. A gentle but fuller light
          fluffy finish. One light 3D fan to one natural lash.
        </p>
      </>
    ),
    image: imageLashTypes,
    alttext: "A row of four different types of eyelash extensions.",
    slug: "type",
  },

  removal: {
    title: "Eyelash extensions removal",
    shortContent: "Professional removal or let them grow out...",
    longContent: (
      <>
        <h3>You will need to remove your contact lenses</h3>
        <ul>
          <li>Nourishing under eye patches are applied</li>
          <li>Adhesive remover is applied until the lashes loosen</li>
          <li>Lashes are gently removed</li>
          <li>Adhesive remover is wiped away</li>
          <li>Lashes are washed with foaming lash cleanser & dried</li>
        </ul>
        <br></br>
        <p>
          Remember that you have been wearing glamorous lash extensions so when
          they are removed your natural lashes will feel quite short. You might
          like to bring some mascara with you if you are going out after the
          removal.
        </p>
      </>
    ),
    image: imageExtensionsRemoval,
    alttext: "A lady on the beach holding shells over her eyes and smiling.",
    slug: "removal",
  },

  service: {
    title: "What happens during the service?",
    shortContent: "You relax in comfort whilst I work some magic!...",
    longContent: (
      <>
        <p className="bold">
          You will have a consultation and patch test with me at least 24 hours
          before your first service.
        </p>
        <h2>
          <span>Please arrive with no eye make-up!</span>
        </h2>

        <h3>
          You lay down and relax on a soft and comfy bed while I beautify your
          lashes!
        </h3>
        <p>
          This list is to give you some idea of what I will do with your lashes.
          The steps and order of the steps may vary.
        </p>
        <br></br>
        <h4 className="bold">Eyelash extensions</h4>

        <ul>
          <li>
            Wash the lashes with a foaming cleanser & dry with a little dryer
          </li>
          <li>
            Secure any little lower lashes with lash tape and under eye pads
          </li>
          <li>
            Prime the lashes to remove remaining oils, balance the PH and ensure
            a solid bond
          </li>
          <li>
            Draw lash map onto pads- the lengths and style I will be applying
          </li>
          <li>
            Seperating lashes to reveal one at aa time and apply lashe
            extensions
          </li>
          <li>
            Check through lashes to ensure they are all individually separated
          </li>
          <li>
            Apply bonder to cure the adhesive, reduce fumes and maximise
            retention then dry with a little dryer
          </li>
          <li>Remove the under eye pads</li>
          <li>Check lashes</li>
        </ul>
        <br></br>
        <br></br>

        <h4 className="bold">Eyelash lift</h4>

        <ul>
          <li>
            Wash the lashes with a foaming cleanser & dry with a little dryer
          </li>
          <li>
            Secure any little lower lashes with lash tape and under eye pads
          </li>
          <li>
            Measure your lashes on the curling rods/shields to find the right
            size
          </li>
          <li>Wrap your lashes up onto the rod/shield</li>
          <li>
            Apply the first lift lotion to relax the lashes and remove it when
            they are ready for the next step
          </li>
          <li>
            Sometimes I change the rods/shields here depending on the lashes
          </li>
          <li>
            Apply the second lift lotion and ReGen treatment to set the lashes
            and remove it when the lashes are set
          </li>
          <li>Remove the undereye pads</li>
          <li>Tint the lashes</li>
          <li>Wash the lashes</li>
        </ul>
      </>
    ),
    image: imageRelax,
    alttext: "A lady relaxing whilst having her eyelashes done.",
    slug: "service",
  },

  goodextensions: {
    title: "What makes a good eyelash extension application?",
    shortContent: "Several factors contribute to a great lash service...",
    longContent: (
      <>
        <ul>
          <li>
            Your lash technician should be properly trained & experienced and
            follow health & safety guidelines
          </li>
          <li>
            The products used should be sourced from suppliers who meet
            Australian standards
          </li>
          <li>One extension should be attached to only one eyelash</li>
          <li>
            For good retention the lash tech should monitor & control the
            temperature and humidity in the room following the chosen lash
            adhesive recommendations (they are all different)
          </li>
          <li>Washing and priming the lashes ensures the best retention</li>
          <li>
            Checking through every lash at the end of the application to ensure
            there are none sticking together is very important
          </li>
          <li>
            Finishing with bonder minimises fumes near the eye, reduces
            sensitivity, maximises retention and sets the adhesive. This isn’t
            compulsory but it really does help!
          </li>
        </ul>
        <br></br>
        <p>
          Following the aftercare advice will ensure you get a long lasting set
          of lashes, especially washing them every day with an oil free foaming
          lash cleanser.
        </p>
      </>
    ),
    image: imageLashExtensions,
    alttext: "A lady having her eyelashes done.",
    slug: "goodextensions",
  },
  contraindications: {
    title: "Who can't have lash services?",
    shortContent: "There are some contraindications for lash services...  ",
    longContent: (
      <>
        <div className="contra-wrapper-1">
          <h2>Lash lift/lamination</h2>
          <h3>Absolute Contraindications</h3>
          <ul>
            <li>
              <span className="bold">Allergy or sensitivity</span> to lash lift
              or tint products
            </li>
            <li>
              <span className="bold">Eyelid cysts</span> (meibomian or tarsal
              gland cysts).
            </li>
            <li>
              <span className="bold">Stye or any abscess</span> on the eyelid.
            </li>
            <li>
              <span className="bold">Chronic blepharitis</span> (inflammation of
              the eyelid margin).
            </li>
            <li>
              <span className="bold">Eye infections</span> such as
              conjunctivitis, impetigo, keratitis, or uveitis.
            </li>
            <li>
              <span className="bold">Recent eye surgery</span> (including
              cataract, blepharoplasty) without medical clearance.
            </li>
            <li>
              <span className="bold">Wounds</span> - open cuts, abrasions,
              burns, or swelling around the eye area.
            </li>
            <li>
              <span className="bold">Skin disorders around the eyes</span>
              (dermatitis, eczema, psoriasis, xanthelasma, syringoma).
            </li>
            <li>
              <span className="bold">Severe watery or hypersensitive eyes</span>
              /skin.
            </li>
            <li>
              <span className="bold">Currently undergoing chemotherapy</span>.
            </li>
          </ul>
          <h3>
            Relative Contraindications (Delay treatment or seek GP clearance)
          </h3>
          <ul>
            <li>
              <span className="bold">Post-chemotherapy:</span> Wait a minimum of
              6 months after completion of chemotherapy and obtain medical
              clearance before performing a lash lift. Patch testing is
              mandatory post-chemo due to altered skin sensitivity and fragile
              follicles.
            </li>

            <li>
              <span className="bold">Dry eye syndrome</span> (medical condition)
            </li>
            <li>
              <span className="bold">Glaucoma</span>
            </li>
            <li>
              <span className="bold">Recent cosmetic injectables</span>
              (Botox/fillers) around the eye area — wait 1–2 weeks.
            </li>
            <li>
              <span className="bold">Pregnancy or breastfeeding</span> — no
              formal restriction but hormonal changes may increase skin
              sensitivity — always patch test.
            </li>
            <li>
              <span className="bold">Allergic rhinitis or hay fever</span> — may
              cause watery eyes during treatment.
            </li>
            <li>
              <span className="bold">
                Facial chemical peels or resurfacing:
              </span>
              <ul>
                <li>Superficial peel: wait at least 2 weeks.</li>
                <li>Medium peel: wait at least 4–6 weeks.</li>
                <li>
                  Deep peel: wait until full healing and clinician clearance
                  (often several months).
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="contra-wrapper-2">
          <h2>Eyelash extensions</h2>
          <h3>Absolute Contraindications</h3>
          <ul>
            <li>
              <span className="bold">
                Allergy or sensitivity to eyelash extension adhesive
              </span>
              , gel pads, or tape (failed patch test).
            </li>
            <li>
              <span className="bold">Eye infections</span> such as
              conjunctivitis, styes, blepharitis, keratitis, or uveitis.
            </li>
            <li>
              <span className="bold">Recent eye surgery</span> without medical
              clearance - usually wait 8–12 weeks.
            </li>
            <li>
              <span className="bold">Open wounds</span>, cuts, abrasions, or
              burns on or around the eye area.
            </li>
            <li>
              <span className="bold">Skin conditions around the eyes</span>{" "}
              (eczema, psoriasis, dermatitis, or severe rosacea).
            </li>
            <li>
              <span className="bold">Severe watery or hypersensitive eyes</span>
            </li>
            <li>
              <span className="bold">Severe seasonal allergies</span> causing
              constant eye rubbing or tearing.
            </li>
            <li>
              <span className="bold">Currently undergoing chemotherapy.</span>
            </li>
            <li>
              <span className="bold">Eye trauma or inflammation</span> of the
              eyelids or surrounding tissue.
            </li>
          </ul>

          <h3>
            Relative Contraindications (Delay treatment or seek GP clearance)
          </h3>
          <ul>
            <li>
              <span className="bold">Post-chemotherapy:</span> Wait a minimum of
              6 months after completion of chemotherapy and obtain medical
              clearance before applying lash extensions. Lash follicles are
              often fragile and growth may be uneven during recovery.
            </li>

            <li>
              <span className="bold">Dry eye syndrome</span> (medical condition)
            </li>
            <li>
              <span className="bold">Glaucoma</span>
            </li>
            <li>
              <span className="bold">Recent cosmetic injectables</span> (Botox,
              fillers) around the eye area - wait 1–2 weeks.
            </li>
            <li>
              <span className="bold">Pregnancy or breastfeeding:</span> no
              formal restriction but hormonal changes may increase skin
              sensitivity — always patch test.
            </li>
            <li>
              <span className="bold">Allergic rhinitis or hay fever</span>
            </li>
            <li>
              <span className="bold">Contact lens wearers:</span> must remove
              lenses during application and avoid wearing them for several hours
              post-procedure.
            </li>
            <li>
              <span className="bold">
                Facial chemical peels or resurfacing:
              </span>
              <ul>
                <li>Superficial peel: wait at least 2 weeks.</li>
                <li>Medium peel: wait at least 4–6 weeks.</li>
                <li>
                  Deep peel: wait until full healing and clinician clearance
                  (may take several months).
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    ),
    image: imageGlasses,
    alttext: "A pair of spectacles.",
    slug: "contraindications",
  },
};
