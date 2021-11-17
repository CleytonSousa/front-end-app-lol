import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import {
    Container,
    Content,
    EloSummoner,
    HeaderContent,
    IconSummoner,
    SummonerInfo,
    FooterContent,
    WinsLabel,
    LossesLabel,
    CircleDiv
} from './style'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import bronze from "../../assets/Emblem_Bronze.png";
import iron from "../../assets/Emblem_Iron.png";
import silver from "../../assets/Emblem_Silver.png";
import gold from "../../assets/Emblem_Gold.png";
import platinum from "../../assets/Emblem_Platinum.png";
import diamond from "../../assets/Emblem_Diamond.png";
import grandmaster from "../../assets/Emblem_Grandmaster.png";
import master from "../../assets/Emblem_Master.png";
import challenger from "../../assets/Emblem_Challenger.png";

function Summoner({ match }) {
    const [summoner, setSummoner] = useState(Object)
    const [load, setLoad] = useState(0)

    function validarElo(elo) {
        switch (elo) {
          case "BRONZE":
            return <EloSummoner src={bronze} alt="elo" />;
          case "IRON":
            return <EloSummoner src={iron} alt="elo" />;
          case "SILVER":
            return <EloSummoner src={silver} alt="elo" />;
          case "GOLD":
            return <EloSummoner src={gold} alt="elo" />;
          case "PLATINUM":
            return <EloSummoner src={platinum} alt="elo" />;
          case "DIAMOND":
            return <EloSummoner src={diamond} alt="elo" />;
          case "GRANDMASTER":
            return <EloSummoner src={grandmaster} alt="elo" />;
          case "MASTER":
            return <EloSummoner src={master} alt="elo" />;
          case "CHALLENGER":
            return <EloSummoner src={challenger} alt="elo" />;
          default: break;
        }
    }

    useEffect(() => {
        async function loadData() {
            setLoad(1);
          const res = await api
            .get(`/summoner/${match.params.id}`)
            .catch((e) => alert("Houve um erro ao buscar summoner"));
    
          if (res && res.data) {
            setSummoner(res.data);
          }
          setLoad(0);
          console.log(summoner)
        }
        loadData();
    
        //eslint-disable-next-line
      }, []);
    return (
        <Container>
            {load ? 
            <div>
                <Spinner animation='border' variant="light"/>
            </div>
            :
            <Content>
                <HeaderContent>                
                    <IconSummoner src={summoner.iconUrl} alt='icon' />
                    <SummonerInfo>
                        <h2>
                            <strong>{match.params.id}</strong> #BR1
                        </h2>
                        <h3>
                            Nível {summoner.summonerLevel} - {summoner.tier} {summoner.rank}
                        </h3>
                    </SummonerInfo>
                    {validarElo(summoner.tier)}
                </HeaderContent>
                <FooterContent>
            <div>
              <WinsLabel>
                <strong>WINS: </strong>
                <label>{summoner.wins}</label>
              </WinsLabel>
              <LossesLabel>
                <strong>LOSSES: </strong>
                <label>{summoner.losses}</label>
              </LossesLabel>
            </div>
            <CircleDiv>
              <label>
                <strong>{summoner.winRate}%</strong>
              </label>
              <label>WIN RATE</label>
            </CircleDiv>
          </FooterContent>
            </Content>
            
            }
        </Container>
    )
}

export default Summoner
