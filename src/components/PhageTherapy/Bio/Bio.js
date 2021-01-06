import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBox } from 'mdbreact';
import phagePic from '../../../images/phagetherapy.jpg';
import bacteriaPic from '../../../images/phagetherapy2.jpg';

import './styles.css';

function Bio() {
  return (
    <MDBContainer className='my-5 align-content-center bio-cont'>
      <h2 className='title h1-responsive font-weight-bold text-left-md pb-3 border-bottom border-dark'>
        What is phage therapy?
      </h2>
      <MDBRow>
        {/* <div className=''> */}

        <div className='lh-base mx-3 mt-2'>
          <img
            src={phagePic}
            className='rounded img-fluid z-depth-2 img1 mx-auto mt-0 mt-md-4 mb-3 ml-md-3 d-block float-md-right'
          />
          <p className='mt-3'>
            Phage therapy involves the use of bacteriophages—viruses that only
            attack bacteria and are very host specific—to kill pathogenic
            micro-organisms. The art was first developed at the Pasteur
            Institute in Paris in 1917, practiced to some extent in France until
            the 1980s, and is still fairly extensively used and further
            developed in such places as Russia and the Republic of Georgia.1
            After the advent of chemical antibiot-ics in the 1940s, it was
            largely forgotten in the Western world.
          </p>
          <p>
            Today, however, the increased prevalence of bacteria that are
            resistant to most or all available antibiotics is precipitating a
            major health crisis, as is passionately stressed by the World Health
            Organization and by gov-ernments, scientists, and health
            practitioners worldwide.2 In particular, extensive research work has
            been published by the Hirszfeld Institute of Immunology and
            Experimental Therapy in Wroclaw, Poland’s center of phage therapy,
            complementing the ongoing routine use of phage in the Republic of
            Georgia.3 Numerous patients from around the world have been treated
            in recent years in Phage International’s Phage Therapy Center and in
            the Eliava Phage Therapy Center in Tbilisi, Georgia, long the
            epicenter of therapeutic phage production and application, as
            further discussed later in the following section.Today, the one
            major western European center carrying out phage therapy is at the
            LabMCT, which is part of the burn wound center of the Queen Astrid
            Military Hospital in Brussels, Belgium. The LabMCT provides phage
            active ingredients to pharmacists who produce preparations for
            patients in Belgium under the magistral framework (Pirnay et al.,
            2018).
          </p>
          <p>
            This framework, roughly analogous to the compounding framework in
            the United States or the Specials framework in the UK, allows the
            Belgian phage ecosystem to fill prescriptions with phage
            preparations that are tailor-made to each patient. In Belgium, as at
            the Hirszfeld Institute, phage cocktails are prepared from phages
            that have been determined to be active against a patient’s clinical
            isolate through the use of a companion diagnostic method. In the
            United States, the Food and Drug Administration now also quite
            routinely approves compassionate use of phage therapy in individual
            very serious cases where there are no other options. One such case,
            involving a near-fatal Acinetobacter infection of a UC San Diego
            faculty member and a massive worldwide effort that found the phages
            that rescued him after 4 months in a coma, is described in some
            detail later in this chapter. The spectacular success there led the
            UC San Diego clinic to apply phage therapy in half a dozen cases
            where organ transplants were being blocked by intransigent
            infections. The UC San Diego has just made a million-dollar
            investment in developing a phage therapy center and relevant sources
            of potential therapeutic phages are springing up.
          </p>
        </div>
        {/* </div> */}
      </MDBRow>
      <h2 className='title h1-responsive font-weight-bold text-left text-center-sm pb-3 border-bottom border-dark'>
        How it works
      </h2>
      <div className='mt-4'>
        <img
          className='z-depth-2 mr-md-3 mb-3 mx-auto rounded d-block float-md-left'
          src={bacteriaPic}
        />
        <p className='lh-base'>
          An old poem says that “big fleas have little fleas upon their backs to
          bite ‘em,” and this line carries a grain of truth about the biological
          world. People commonly think of bacteria as parasites that cause all
          kinds of disease, and it may come as a surprise to learn that these
          tiny creatures can be infected by still tinier creatures. First of
          all, it should be clear that the world is full of a great variety of
          bacteria, and that most are not pathogens—causes of disease. For
          instance, our lower intestines are full of bacteria that are essential
          to our intestinal health, including beneficial varieties of the
          Escherichia coli we so often hear about. Our skin is the natural
          habitat of many species of bacteria that do us no harm and are
          essential to our well-being, including Staphylococcus epidermidis, a
          relative of the notorious other species of staph that can cause
          terrible diseases. All in all, our bodies have 10 times as many
          bacterial cells as human cells. <br></br>
          <br></br>All bacteria are so small that a good microscope is needed to
          see them well, on the order of a micrometer in length; a micrometer is
          a millionth of a meter (about a yard) or a thousandth of the little
          millimeter marks you see on a metric ruler. But these tiny organisms
          can be infected by still tinier viruses called bacteriophages, or
          simply phage. (The word rhymes with “page” but bacteriophage were
          discovered by a French-Canadian doctor, Felix d’Herelle, and
          physicians following his lead have generally rhymed the word with
          “garage.” You may still hear some people using that pronunciation.)
          There are many kinds of phage. Some look like tiny spheres, others
          like long rods. The rather classic type of phage, as shown in the
          photograph, have been likened to moon landers: they have a large
          hexagonal head attached to a narrow tail, and many types have some
          sort of thin fibers near the end of the tail. This visible covering,
          or coat, is made of several kinds of protein; this coat covers the
          phage’s genome (genetic material), a long piece of DNA carrying all of
          the phage’s genes.<br></br>
          <br></br> Every type of phage is specific for one or a very few types
          of bacterium, which means that certain proteins of that phage’s coat
          –usually on tail fibers– can attach to molecules on the surface of
          those types of bacterium, and no other. A phage attacks a bacterium by
          attaching to it so that its DNA genome can slip through its tail into
          the cell. The phage genome immediately takes over the cell, disrupting
          its normal functions and converting it into a little factory for
          manufacturing more phage. The phage DNA starts to replicate, making
          many copies, and the cellular protein factories start to make enormous
          amounts of phage proteins. The cell begins to fill up with new phage,
          and in a typical infection it takes only about half an hour for
          perhaps a few hundred phage particles to accumulate. Then the cell
          suddenly bursts open, releasing the new phage, which can then attack
          other susceptible bacteria and repeat the process. In the laboratory
          we can take a rich culture of bacteria, so rich that the growth medium
          is cloudy with bacteria, and infect it with phage; the phage can kill
          the bacteria so quickly and effectively that the medium becomes clear
          within hours. Essentially the same thing can happen to bacteria
          infecting some part of a human or animal body. Bacteriophage are very
          useful for curing bacterial infections because of their host
          specificity and ability to evolve with the host cell. The bacteria
          causing an infection may be a mixture of different types, and some of
          them might develop some resistance to any single phage, so phage are
          usually administered as a cocktail of several different species, in
          order to attack a range of bacteria and to greatly reduce the
          probability of resistance.
        </p>
      </div>
    </MDBContainer>
  );
}

export default Bio;
