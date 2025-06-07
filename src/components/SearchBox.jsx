import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";


const SearchBox = ({ onSearch, placeholder = "Search topics..." }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-text-secondary w-4 h-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 bg-card border-border text-foreground placeholder:text-theme-text-secondary"
      />
    </div>
  );
};

export default SearchBox;
