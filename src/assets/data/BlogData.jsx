import imageLashExtensions from '/src/assets/images/blog_LashExtensions.png'
import imageLashLift from '/src/assets/images/blog_LashLift.png'
import imageLashService from '/src/assets/images/blog_ExtensionsService.png'
import imageExtensionTypes from '/src/assets/images/blog_ExtensionTypes.png'
import imageExtensionsRemoval from '/src/assets/images/blog_ExtensionsRemoval.png'
import imageAftercare from '/src/assets/images/blog_LashServiceAftercare.png'
import imageLashTypes from '/src/assets/images/blog_LashTypes.png'
import imageInfills from '/src/assets/images/blog_Infills.png'
import imageRelax from '/src/assets/images/blog_relax.png'
import imageGlasses from '/src/assets/images/blog_glasses.png'


export const BlogData = {

    extensions: {
        title: "What are eyelash extensions?",
        shortContent: "A single synthetic lash is attached to each of your lashes...",
        longContent: ( 
        <>
            <p>
                Eyelash extensions enhance your natural lashes for a soft, effortless look with no mascara needed. Each fine
                extension is applied to your own lashes for a fuller, longer appearance that still feels light and natural.
            </p>

            <p>
                Our style focuses on subtle, elegant results which are perfect for all ages and anyone who prefers a polished, low-maintenance look.
                The treatment is relaxing and ideal for our beachside lifestyle, and also a beautiful choice for special occasions when you want
                to look your best with minimal effort.
            </p>
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
                <p>An Elleplex Profusion Lash Lift (Lash Lamination) gently lifts and curls your natural lashes from the root, giving them a longer, 
                    fuller appearance. The treatment is paired with a lash tint to enhance colour and definition, leaving your eyes looking brighter and more awake.
                </p>

                <p>Elleplex Profusion products are specially formulated to nourish, strengthen, and protect your lashes during the lift, ensuring 
                    they remain healthy while achieving stunning results.
                </p>

                <p>The results last for up to 6 weeks, giving soft, natural, and effortlessly elegant lashes that are perfect for everyday wear,
                    beachside living, or special occasions. The treatment is relaxing, making it a lovely moment to unwind while your lashes are transformed.
                </p>
        
            </>
        ),
        image: imageLashLift,
        alttext: "Lashes on one eye wrapped around a rod to give them a curl.",
        slug: "lashLift",
    },
     aftercare: {
        title: "Aftercare",
        shortContent: "Wash your lashes at least once every day......",
        longContent: (
            <>
                <h3>Daily care</h3>
                    <ul>
                        <li>Wash your lashes at least once every day (use only a brush like the one I will give you to clean lashes, not cotton pads or make-up wipes)</li>
                        <li>Brush them through gently with the little lash brush from mid length to ends (not from the very base as this can dislodge them)</li>
                        <li>Try not to sleep on your face!</li>
                        <li>Use oil free products</li>
                        </ul>
                    <h3>The first couple of days</h3>
                    <ul>
                        <li>Try not to get super hot in the sun for 24 hours</li>
                        <li>Avoid steam & sauna for 48 hours (steam will also reduce the life of the lashes in general)</li>
                    </ul>
                    <h3>Infills (lash top-ups)</h3>
                    <ul>
                        <li>Infills are best scheduled every 2-3 weeks to maintain your lashes</li>
                    </ul>
                    <h3>Things to know</h3>
                    <ul>
                        <li>Removal of eyelashes must be done by a professional lash artist. Please don’t try to take them off yourself</li>
                        <li>Use oil free products around the eyes (use oil free make-up remover)</li>
                        <li>You don’t need to wear mascara, it will weaken the lashes (especially waterproof & oil based mascara)</li>
                        <li>You can use oil free eyeliner products</li>
                        <li>Don’t use eyelash curlers</li>
                        <li>Please don’t play with or pick at the lashes- this can cause trauma to your natural lashes</li>
                        <li>We can lose roughly 0-5 lashes per day so don’t be alarmed if you see fallen lashes</li>
                    </ul>
                </>),
        image: imageAftercare,
        alttext: "Elelash brushes and cotton pads on a table.",
        slug: "aftercare",
    },
      infills: {
        title: "What are infills?",
        shortContent: "Top up your lashes after 2-3 weeks as they will naturally...",
        longContent: (
            <>
                <h3>Can you infill my lashes from another lash tech?</h3>
                <p>In general I don’t infill lashes that I haven’t applied myself, sorry. You can wait until you need a fresh set 
                    after 3 weeks or so or I can remove your lashes and apply a lovely fresh set for you.</p>
                    <h3>How do infills work?</h3>
                    <p>After 2-3 weeks of wearing eyelash extensions you will have shed a few lashes and the set will no longer look as full.  
                        This is a good time to check and top up your lashes.</p>
                        <ul>
                            <li>I will prepare your lashes as usual ( wash lashes, apply nourishing under eye pads )</li>
                            <li>Check through all of the lashes to make sure everything looks ok </li>
                            <li>Remove any outgrown or uneven lash extensions</li>
                            <li>Prime the natural eyelashes</li>
                            <li>Then start to fill in the lashes</li>
                        </ul>

            
            
            </>
        ),
        image: imageInfills,
        alttext: "A closed eye with ash extensions and a hand with tweezers filling the lashes.",
        slug: "infills",
    },

    type: {
        title: "Eyelash extension styles",
        shortContent: "Classic, hybrid & light volume eyelash extensions...",
        longContent: (
        <>
        <p>I offer classic, hybrid & light volume eyelash extensions</p>
            <h3>Classic</h3>
            <p>The classic lash is cylindrical and tapered from root to end. It gives a lovely classic finish and the lashes are soft. Each classic lash is bonded to one natural lash.</p>

            <p>I generally use a 0.15 diameter lash for classic application looks lovely. Anything heavier can look quite unnatural.</p>

            <h3>Hybrid</h3>
            <p>A blend of classic lashes and light handmade fans with three very fine lashes. A more feathery look between classic and light volume. Each is applied to one natural lash.</p>

            <h3>Light volume</h3>
            <p>Light handmade fans with three very fine lashes. A gentle but fuller light fluffy finish. One light 3D fan to one natural lash.</p>
        
        </>),
        image: imageLashTypes,
        alttext: "A row of four different types of eyelash extensions.",
        slug: "type",
    },
   
    removal: {
        title: "Eyelash extensions removal",
        shortContent: "Professional removal or let them grow out...",
        longContent: (
            <>
                <h3>Steps for eyelash extensions removal</h3>
                <ul>
                    <li>Nourishing under eye patches are applied</li>
                    <li>Adhesive remover is applied until the lashes loosen</li>
                    <li>Lashes are gently removed</li>
                    <li>Adhesive remover is wiped away</li>
                    <li>Lashes are washed with foaming lash cleanser & dried</li>
                </ul>
                <p>Remember that you have been wearing glamorous lash extensions so when they are removed your natural lashes will feel quite short. You might like to bring some mascara with you if you are going out after the removal.</p>
            </>),
        image: imageExtensionsRemoval,
        alttext: "A lady on the beach holding shells over her eyes and smiling.",
        slug: "removal",
    },
    
    service: {
        title: "What happens during the service?",
        shortContent: "You relax in comfort whilst I work some magic!...",
        longContent: (
            <>
            <h3><strong>Please arrive with no eye make-up!</strong></h3>
            <p>First you’ll need to have a consultation and patch test with me prior to the lash application.</p>

            <p>
                Once your comfortable on the lash couch, these are the steps I will go through during the appointment:
                Wash the lashes with a foaming cleanser & dry
            </p>

            <ul>
                <li>Apply nourishing under eye patches over lower lashes</li>
                <li>Secure any additional little lower lashes with lash tape</li>
                <li>Prime the lashes to remove remaining oils, balance the PH and ensure a solid bond & dry</li>
                <li>Draw lash map onto pads</li>
                <li>Apply lashes</li>
                <li>Check through lashes to ensure they are all separated</li>
                <li>Apply bonder to cure the adhesive, reduce fumes and maximise retention & dry</li>
                <li>Remove the under eye pads</li>
                <li>Check lashes</li>
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
                <li>Your lash technician should be properly trained & experienced and follow health & safety guidelines</li>
                <li>The products used should be sourced from suppliers who meet Australian standards </li>
                <li>One extension should be attached to only one eyelash</li>
                <li>For good retention the lash tech should monitor & control the temperature and humidity in the room following the chosen lash adhesive recommendations (they are all different)</li>
                <li>Washing and priming the lashes ensures the best retention</li>
                <li>Checking through every lash at the end of the application to ensure there are none sticking together is very important</li>
                <li>Finishing with bonder minimises fumes near the eye, reduces sensitivity, maximises retention and sets the adhesive. This isn’t compulsory but it really does help!</li>
            </ul>
            <p>Following the aftercare advice will ensure you get a long lasting set of lashes, especially washing them every day with an oil free foaming lash cleanser.</p>
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

                <h2>Lash lift/lamination</h2>
                <h2>Absolute Contraindications</h2>
                <ul>
                <li>Allergy or sensitivity to lash lift or tint products (failed patch test).</li>
                <li>Eyelid cysts (meibomian or tarsal gland cysts).</li>
                <li>Hordeolum (stye) or any abscess on the eyelid.</li>
                <li>Chronic blepharitis (inflammation of the eyelid margin).</li>
                <li>Eye infections such as conjunctivitis, impetigo, keratitis, or uveitis.</li>
                <li>Recent eye surgery (including LASIK, cataract, blepharoplasty) without medical clearance.</li>
                <li>Open cuts, abrasions, burns, or swelling around the eye area.</li>
                <li>Skin disorders around the eyes (dermatitis, eczema, psoriasis, xanthelasma, syringoma).</li>
                <li>Severe watery eyes or hypersensitive eyes/skin.</li>
                <li>Alopecia causing lash loss or trichotillomania (lash pulling).</li>
                <li>Facial paralysis or uncontrolled movements (e.g. Bell’s Palsy, Parkinson’s) that prevent safe application.</li>
                <li>Currently undergoing chemotherapy.</li>
                </ul>

                <h2>Relative Contraindications (Delay treatment or seek GP clearance)</h2>
                <ul>
                <li><strong>Post-chemotherapy:</strong> Wait a minimum of 6 months after completion of chemotherapy and obtain medical clearance before performing a lash lift. Patch testing is mandatory post-chemo due to altered skin sensitivity and fragile follicles.</li>
                <li><strong>Facial chemical peels or resurfacing:</strong>
                    <ul>
                    <li>Superficial peel: wait at least 2 weeks.</li>
                    <li>Medium peel: wait at least 4–6 weeks.</li>
                    <li>Deep peel: wait until full healing and clinician clearance (often several months).</li>
                    </ul>
                </li>
                <li>Dry eye syndrome or glaucoma (may require ophthalmologist clearance).</li>
                <li>Recent cosmetic injectables (Botox/fillers) around the eye area — wait 1–2 weeks.</li>
                <li>Pregnancy or breastfeeding — increased skin sensitivity; perform patch test.</li>
                <li>Allergic rhinitis or hay fever — may cause watery eyes during treatment.</li>
                </ul>

                <h2>Consultation and Practical Considerations</h2>
                <ul>
                <li>Contact lenses must be removed prior to the procedure.</li>
                <li>Patch test recommended (mandatory post-chemotherapy or known sensitivities).</li>
                <li>Ensure the client can keep eyes closed comfortably for 45–60 minutes.</li>
                <li>Avoid collagen eye pads if client has a history of reaction — omit if unsure.</li>
                <li>Record any medications, recent procedures, or relevant medical conditions.</li>
                </ul>

                <h2>Eyelash extensions</h2>
                <h2>Absolute Contraindications</h2>
                <ul>
                <li>Allergy or sensitivity to eyelash extension adhesive, gel pads, or tape (failed patch test).</li>
                <li>Active eye infections such as conjunctivitis, styes, blepharitis, keratitis, or uveitis.</li>
                <li>Recent eye surgery (LASIK, cataract, blepharoplasty) without medical clearance — usually wait 8–12 weeks.</li>
                <li>Open wounds, cuts, abrasions, or burns on or around the eye area.</li>
                <li>Skin conditions around the eyes (eczema, psoriasis, dermatitis, or severe rosacea).</li>
                <li>Severe watery or hypersensitive eyes that prevent proper adhesion.</li>
                <li>Severe seasonal allergies causing constant eye rubbing or tearing.</li>
                <li>Facial paralysis or uncontrolled movements (e.g. Bell’s Palsy, Parkinson’s) that prevent safe application.</li>
                <li>Currently undergoing chemotherapy.</li>
                <li>Alopecia or trichotillomania (compulsive lash pulling) causing lash loss.</li>
                <li>Eye trauma or inflammation of the eyelids or surrounding tissue.</li>
                </ul>

                <h2>Relative Contraindications (Delay treatment or seek GP clearance)</h2>
                <ul>
                <li><strong>Post-chemotherapy:</strong> Wait a minimum of 6 months after completion of chemotherapy and obtain medical clearance before applying lash extensions. Lash follicles are often fragile and growth may be uneven during recovery.</li>
                <li><strong>Facial chemical peels or resurfacing:</strong>
                    <ul>
                    <li>Superficial peel: wait at least 2 weeks.</li>
                    <li>Medium peel: wait at least 4–6 weeks.</li>
                    <li>Deep peel: wait until full healing and clinician clearance (may take several months).</li>
                    </ul>
                </li>
                <li><strong>Dry eye syndrome or glaucoma:</strong> may require ophthalmologist or GP approval.</li>
                <li><strong>Recent cosmetic injectables</strong> (Botox, fillers) around the eye area — wait 1–2 weeks.</li>
                <li><strong>Pregnancy or breastfeeding:</strong> no formal restriction but hormonal changes may increase skin sensitivity — always patch test.</li>
                <li><strong>Allergic rhinitis or hay fever:</strong> may cause watery eyes and affect bonding — proceed with caution.</li>
                <li><strong>Contact lens wearers:</strong> must remove lenses during application and avoid wearing them for several hours post-procedure if irritation occurs.</li>
                </ul>

                <h2>Consultation and Practical Considerations</h2>
                <ul>
                <li>Patch test should be performed at least 24–48 hours before the first application or if adhesive formula changes.</li>
                <li>Client must be able to keep eyes completely closed and still for 1–2 hours.</li>
                <li>Remove all eye makeup, creams, and oils prior to application.</li>
                <li>Do not perform treatment if client shows redness, irritation, or swelling on arrival.</li>
                <li>Avoid treatment during active cold, sinus, or respiratory infection that may cause eye watering.</li>
                <li>Inform the client about proper aftercare to avoid allergic reactions or premature lash loss.</li>
                </ul>

            
            </>
        ),
        image: imageGlasses,
        alttext: "A pair of spectacles.",
        slug: "contraindications",
    },
}