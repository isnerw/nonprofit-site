import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBox } from 'mdbreact';
import phagePic from '../../../images/phagetherapy.jpg';

import './styles.css';

function Bio() {
  return (
    <MDBContainer className='my-5 align-content-center bio-cont'>
      <h2 className='h1-responsive font-weight-bold text-left text-center-sm pb-3 border-bottom border-dark'>
        What is phage therapy?
      </h2>
      <div className='mt-4'>
        <img
          className='mr-md-4 mb-3 mx-auto rounded d-block float-md-left'
          src={phagePic}
        />
        <p className='lh-base'>
          Phage therapy involves the use of bacteriophages—viruses that only
          attack bacteria and are very host specific—to kill pathogenic
          micro-organisms. The art was first developed at the Pasteur Institute
          in Paris in 1917, practiced to some extent in France until the 1980s,
          and is still fairly extensively used and further developed in such
          places as Russia and the Republic of Georgia.1 After the advent of
          chemical antibiot-ics in the 1940s, it was largely forgotten in the
          Western world. Today, however, the increased prevalence of bacteria
          that are resistant to most or all available antibiotics is
          precipitating a major health crisis, as is passionately stressed by
          the World Health Organization and by gov-ernments, scientists, and
          health practitioners worldwide.2 In particular, extensive research
          work has been published by the Hirszfeld Institute of Immunology and
          Experimental Therapy in Wroclaw, Poland’s center of phage therapy,
          complementing the ongoing routine use of phage in the Republic of
          Georgia.3 Numerous patients from around the world have been treated in
          recent years in Phage International’s Phage Therapy Center and in the
          Eliava Phage Therapy Center in Tbilisi, Georgia, long the epicenter of
          therapeutic phage production and application, as further discussed
          later in the following section.Today, the one major western European
          center carrying out phage therapy is at the LabMCT, which is part of
          the burn wound center of the Queen Astrid Military Hospital in
          Brussels, Belgium. The LabMCT provides phage active ingredients to
          pharmacists who produce preparations for patients in Belgium under the
          magistral framework (Pirnay et al., 2018).4 This framework, roughly
          analogous to the compounding framework in the United States or the
          Specials framework in the UK, allows the Belgian phage ecosystem to
          fill prescriptions with phage preparations that are tailor-made to
          each patient. In Belgium, as at the Hirszfeld Institute, phage
          cocktails are prepared from phages that have been determined to be
          active against a patient’s clinical isolate through the use of a
          companion diagnostic method. In the United States, the Food and Drug
          Administration (FDA) now also quite routinely approves compassionate
          use of phage therapy in individual very serious cases where there are
          no other options. One such case, involving a near-fatal Acinetobacter
          infection of a UC San Diego faculty member and a massive worldwide
          effort that found the phages that rescued him after 4 months in a
          coma, is described in some detail later in this chapter. The
          spectacular success there led the UC San Diego clinic to apply phage
          therapy in half a dozen cases where organ transplants were being
          blocked by intransigent infections. The UC San Diego has just made a
          million-dollar investment in developing a phage therapy center and
          relevant sources of potential therapeutic phages are springing up.
        </p>
      </div>
    </MDBContainer>
  );
}

export default Bio;
