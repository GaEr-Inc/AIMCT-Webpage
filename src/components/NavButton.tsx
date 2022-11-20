import { UnstyledButton, Text } from "@mantine/core";
import React from "react";
import { motion } from "framer-motion";
function NavButton({ children, ...props }: { children: string }) {
  return (
    <UnstyledButton sx={{ marginInline: "10%" }}>
      <motion.div
      whileHover={{ scale: 1.2, }}
      >
        <Text
          color="white"
          size={16}
          weight={400}
          sx={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {children}
        </Text>
    </motion.div>
      </UnstyledButton>
  );
}

export default NavButton;
