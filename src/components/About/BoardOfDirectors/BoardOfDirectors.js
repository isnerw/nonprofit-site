import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBox } from 'mdbreact';
import pic from '../../../images/cats.jpg';

import './styles.css';

const BoxPage = () => {
  return (
    <MDBContainer className='my-5'>
      <h2 className='h1-responsive font-weight-bold text-center'>
        Board Of Directors{' '}
      </h2>{' '}
      <MDBRow className='bod-card my-4 px-3 py-3 '>
        <MDBCol md='3'>
          <img src={pic} className='img-fluid py-3 bod-pic' alt='' />
          <h4 className='text-center'>Elizabeth Kutter, PhD</h4>
          <h5 className='text-center'>(Director)</h5>
        </MDBCol>
        <MDBCol className='py-3' md='9'>
          Elizabeth Kutter has worked with bacteriophages since 1963. After
          getting her BS in theoretical mathematics from the University of
          Washington in 1962, she got her PhD in Radiation Biology and
          Biophysics from the University of Rochester, NY in 1968. Her thesis
          explored &quot;The Transition from Host to Phage metabolism after the
          Infection of E. coli by Bacteriophage T4&quot;. She focused
          particularly on the role of T4&#39;s substitution of 5 HMdC for C in
          T4 DNA on the complete inhibition of host transcription and the
          gradual breakdown of host DNA. After 3 years in the lab of Rolf
          Benzinger at the University of Virginia, she came to teach at the
          Evergreen State College in 1972, bringing with her an NIH grant. Her
          Evergreen lab has continued to explore phage-host interactions ever
          since, and has put on biennial phage meetings since 1975; their 2017
          meeting drew 250 scientists young and old from 41 countries. From
          1975-79, she was on the NIH director&#39;s original Recombinant DNA
          Advisory Committee, selected as coming from a college where
          &quot;teaching the ethics and values of science are part of the
          teaching of science&quot;. After a sabbatical in 1978-79 with Bruce
          Alberts at UCSF, she led the international work from 1979-1994 that
          completed sequencing of the T4 genome. This included spending 4 months
          in the Soviet Union through an Academy of Sciences exchange in 1990,
          which also led to her discovery of their therapeutic applications of
          bacteriophages and to still-ongoing collaborations with the Eliava
          Institute in Tbilisi. In 1997, she started a Phagebiotics Foundation
          to help support research there and to stimulate phage therapy
          knowledge and research internationally. Though formally retired in
          2010, she maintains a student-centered basic phage research lab at
          Evergreen as well as a strong role in phage collaborations and
          meetings around the world, and has led the Phagebiotics work with
          diabetic ulcers and with exploring and supporting research on other
          medical applications.{' '}
        </MDBCol>
      </MDBRow>
      <MDBRow className='bod-card my-4 px-3 py-3 '>
        <MDBCol md='3'>
          <img src={pic} className='img-fluid py-3 bod-pic' alt='' />
          <h4 className='text-center'>Randolph Fish, DPM</h4>
          <h5 className='text-center'>(Board member)</h5>
        </MDBCol>
        <MDBCol className='py-3' md='9'>
          Randolph is a board-certified podiatrist (ABPM) with more than 30
          years of experience in clinical wound management. He graduated from
          The Evergreen State College in 1976 and received his DPM from Temple
          University School of Podiatric Medicine in Philadelphia.  Post
          graduate training was at James C. Giffre` Medical Center in North
          Philadelphia. He has both a certificate of added qualification in
          wound management from the American Board of Wound Management and from
          CMET (Certification in Medical Education and Testing), and is a fellow
          of the Academy of Physicians in Wound Healing and of the Academy of
          Certified Wound Specialists.  He is currently working in wound clinics
          at St. Joseph’s Medical Center in Tacoma, WA, and Grays Harbor
          Community Hospital in Aberdeen, WA. His interests include resistant
          infections and vascular disease.  He was introduced to phage while
          working in Dr. Kutters’ lab while at Evergreen as an undergraduate,
          recently became interested in the therapeutic potential of phage for
          diabetic ulcers, and joined the Phagebiotics Board in 2013. He has
          co-authored a paper on Bacteriophage Treatment of Intransient Diabetic
          Toe Ulcers in 2016 and a chapter on Compassionate Use of Bacteriophage
          Therapy for Foot Ulcer Treatment in a textbook on Methods in Molecular
          Biology in 2017. He currently acts as a reviewer for Advanced Drug
          Delivery Reviews.
        </MDBCol>
      </MDBRow>
      <MDBRow className='bod-card my-4 px-3 py-3 '>
        <MDBCol md='3'>
          <img src={pic} className='img-fluid py-3 bod-pic' alt='' />
          <h4 className='text-center'>Barbara Anderson, Microbiologist</h4>
          <h5 className='text-center'>(Board member)</h5>
        </MDBCol>
        <MDBCol className='py-3' md='9'>
          Barbara received her BS in Microbiology in 1970 from Montana State
          University and then worked in the MSU viral lab of Al Fiscus
          PhD.  Moving with her family to Idaho, she worked at
          the Weyerhaeuser Tree Nursery for Wayne Sinclair PhD on Douglas
          Fir mycorrhizae and taught a microbiology course for the one-year
          Environmental Technology option at Lewis Clark State College.  She
          went to school at Tacoma Community College and The Evergreen State
          College.  While working in the Evergreen Phage Lab, she learned
          Molecular Biology from visiting Russian and Georgian scientists and
          went on to manage the Phage Lab during a 1995-99 $950,000 NSF
          Collaborative Research at Undergraduate Institutions grant.  Since
          then, she has worked for Dr. LeBris Quinn doing muscle cell tissue
          culture, molecular biology and biochemistry, originally at the
          American Lake VA, now moved to the Seattle Veterans
          Administration. She presently works for Jose Garcia MD PhD,
          an endocrinologist recently moved from Baylor and the Houston VA. She
          maintains an active interest in phage, attends as much of the biennial
          Evergreen International Phage Meetings as possible, and helped
          establish the original Evergreen Phagebiotics Foundation in 1997.
        </MDBCol>
      </MDBRow>
      <MDBRow className='bod-card my-4 px-3 py-3 '>
        <MDBCol md='3'>
          <img src={pic} className='img-fluid py-3 bod-pic' alt='' />
          <h4 className='text-center'>Gordon Wheat, MD</h4>
          <h5 className='text-center'>(Board member)</h5>
        </MDBCol>
        <MDBCol className='py-3' md='9'>
          Dr. Wheat has more than 30 years of experience in clinical practice
          and teaching at a University of Washington affiliated residency
          training program (ABFM board certified). He graduated from Stanford
          University, received his MD from University of California, San Diego
          and did postgraduate residency training at the University of Utah. 
          Dr. Wheat’s current public health focus is antibiotic resistance and
          serves on the One Health Committee and the One Health Workgroup for
          the Washington State Department of Public Health, addressing the
          problem of antibiotic resistance from the combined perspective of
          human health, animal health and environmental health. He worked for
          the Department of Preventive Care for Group Health Cooperative for 12
          years and has served on the Public Health Committee for the Washington
          Academy of Family Physicians since 2005. He published his research on
          fitness testing for cardiovascular disease prevention and is a
          coauthor of “Bacteriophage treatment of intransigent diabetic toe
          ulcers: a case series”. Journal of Wound Care, 7/16.
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BoxPage;
