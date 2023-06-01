import { Text } from "react-native";
import { ConnectionStatusStyle } from "./ConnectionStatusStyle";

interface ConnectionStatusProps {
  status: boolean;
}

export const ConnectionStatus = ({ status }: ConnectionStatusProps) => {
  return (
    status ?( <Text style={ConnectionStatusStyle.connectedStatusText}>Connected</Text>):
    ( <Text style={ConnectionStatusStyle.DisconnectedStatusText}>Disconnected</Text>)
   
  );
};
