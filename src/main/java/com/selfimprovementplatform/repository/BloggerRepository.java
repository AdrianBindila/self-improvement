package com.selfimprovementplatform.repository;

import com.selfimprovementplatform.model.Blogger;
import com.selfimprovementplatform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BloggerRepository extends JpaRepository<Blogger,Long> {
}
