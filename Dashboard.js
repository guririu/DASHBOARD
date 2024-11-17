import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Arquivo para estilização

const Dashboard = () => {
  const [data, setData] = useState({
    totalProduzido: 0,
    mediaProduzida: 0,
    rentabilidade: 0,
  });

  // Simulação de dados
  useEffect(() => {
    // Dados fictícios para teste inicial
    const producaoMock = {
      totalProduzido: 1200, // Em kg
      mediaProduzida: 150, // Média diária
      rentabilidade: 0.35, // 35% de rentabilidade
    };

    setData(producaoMock);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard de Produção</h1>
      <div className="cards">
        <div className="card">
          <h2>Total Produzido</h2>
          <p>{data.totalProduzido} kg</p>
        </div>
        <div className="card">
          <h2>Média Produzida</h2>
          <p>{data.mediaProduzida} kg/dia</p>
        </div>
        <div className="card">
          <h2>Rentabilidade</h2>
          <p>{(data.rentabilidade * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
