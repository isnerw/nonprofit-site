import React from 'react';
import { MDBContainer } from 'mdbreact';

import './styles.css';

function FAQ() {
  return (
    <MDBContainer className='my-5'>
      <div>
        <h1
          className='my-3 pb-3 border-bottom border-dark text-center font-weight-bold'
          style={{ fontSize: '3.5rem' }}
        >
          FAQs
        </h1>
        <h3 className='h1-responsive mb-2'>What are phage?</h3>
        <p className='mb-4'>
          Phage are viruses which infect very specific host bacteria, not
          affecting other bacteria or human calls.
        </p>

        <h3 className='h1-responsive'>How do phage work?</h3>

        <p className='mb-4'>
          Therapeutic phage are the predators which seek out and lyse and kill
          the specific bacteria which are that phage’s host. They do this by
          attaching to the cell wall, injecting the phage genetic material into
          the cell, taking over the host cellular machinery to reproduce phage
          copies and then lyse, or break open the cell to release the progeny
          phage to infect other cells. In the presence of the host bacteria, the
          phage increases exponentially and when no hosts remain, the phage die
          out.
        </p>

        <h3 className='h1-responsive'>
          How are phage different from antibiotics?
        </h3>
        <p className='mb-4'>
          Phage attach to specific receptors on the surface of their host
          bacterial cell and infect only those bacteria. Phage reproduce
          exponentially in the presence of the host bacteria and die off when
          the hosts are killed. The cell is killed by a genetic manipulation of
          the bacterial cell, rather than by a chemical process, as with
          antibiotics. The very specific targeting of particular bacteria by
          phage leaves the rest of the bacteria in the microbiome undisturbed.
          The maintenance of a healthy microbiome helps to prevent infection,
          resistance to antimicrobial therapy, and helps to maintain the health
          of the organism.
        </p>

        <h3 className='h1-responsive'>
          Why is there a crisis of antibiotic resistance?
        </h3>
        <p className='mb-4'>
          The problem is that drug companies are not investing their research
          funds to produce new antibiotics, and bacteria are very effective in
          developing resistance to current antibiotics. For an increasing number
          of infections, this is leading to the inability to treat previously
          curable infections. As the problem is getting worse steadily, with no
          prospect for new investment, we are now contemplating the “end of the
          antibiotic era”.
        </p>

        <h3 className='h1-responsive'>
          Are phage used therapeutically anywhere today?
        </h3>
        <p className='mb-4'>
          Phage a commonly used to treat infectious disease currently in the
          Republic of Georgia, Poland and Russia. Phage therapy is are used
          experimentally in the US, France, Begium, Switzerland, Columbia,
          Thailand…
        </p>

        <h3 className='h1-responsive'>What are the regulatory boundaires?</h3>
        <p className='mb-4'>
          Phage therapy is not currently FDA approved for humans in the US.
          Phage can be used compassionately for patients who, for example, have
          failed recommended standard therapy and face an unfortunate treatment
          choice: amputation or trial of phage therapy.
        </p>
      </div>
    </MDBContainer>
  );
}

export default FAQ;
