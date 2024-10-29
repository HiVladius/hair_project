
interface Agent {
    photo: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    location: string;
}

interface AgentCardProps {
    agent: Agent;
    onShowLocation: (location: string) => void;
}



const AgentCard: React.FC<AgentCardProps> = ({ agent, onShowLocation }) => {

    return (
        <>
            <div className="border p-4 rounded shadow-md mb-4 text-center">
                <img
                    src={agent.photo}
                    alt="agentphoto"
                    className="w-32 h-32 object-cover mb-4 mx-auto"
                />
                <div className="mb-2">
                    <strong>Nombre</strong>
                    <p>
                        {agent.firstName} {agent.lastName}
                    </p>
                </div>
                <div className="mb-2">
                    <strong>Telefono</strong>
                    <p>{agent.phone}</p>
                </div>
                <div className="mb-2">
                    <strong>Email</strong>
                    <p>{agent.email}</p>
                </div>

                <button
                    onClick={() => onShowLocation(agent.location)}
                    className="text-blue-400 underline"
                >
                    Localizame
                </button>
            </div>
        </>
    );
};

export default AgentCard;
